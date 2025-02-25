// const Policy = require("./policy.model");
// const User = require("../userModule/user.model");
const {User,Policy} = require("../../models")
const { Op } = require("sequelize");

const createPolicy = async (data) => {
  try {
    console.log(data);

    const resp = await Policy.create(data);

    return {
      status: true,
      message: "Policy request successfull!!",
      data: resp.toJSON(),
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
      message: "Error while generating request!!",
      data: null,
    };
  }
};

const getAllPolicy = async (userId, userRole, page, limit) => {
  try {
    const offset = (page - 1) * limit;
    // console.log(userId,page,limit);

    // const policyList = await Policy.findAndCountAll({
    //     where:{
    //         createdBy:userId,
    //     },
    //     order:[
    //         ["createdAt","DESC"]
    //     ],
    //     offset:offset,
    //     limit:limit,

    // })
    // console.log(userId, userRole, page, limit);
    const user = await User.findByPk(userId);
    // console.log("UUUUUUUUUUUUUU",user);
    
    if(!user){
        return {
            status: false,
            message: "User not registered!!",
            data: [],
          }; 
    }
    let policies;
    if (userRole === "admin") {
      // Admin can see all policies
    //   console.log("insideOOOOOOOOOO");
      
      policies = await Policy.findAndCountAll({
        include: { model: User, as: "user" },
        order: [["createdAt", "DESC"]],
        offset: offset,
        limit: limit,
      });
    
      
    } else {
      // For others, filter based on the parent-child relationship
    
      let condition = {};

      if (userRole === "dealer") {
        // Dealers can see policies of sub-dealers and dealer-executives
        condition.createdBy = { [Op.in]: await getSubDealerIds(userId) }; // Get sub-dealer ids
      } else if (userRole === "subDealer") {
        // Sub-dealers can see policies of dealer executives
        condition.createdBy = { [Op.in]: await getDealerExecutiveIds(userId) }; // Get dealer executive ids
      } else if (userRole === "dealerExecutive") {
        // Dealer executives can only see their own policies
        condition.createdBy = userId;
      }

      policies = await Policy.findAndCountAll({
        where: condition,
        include: { model: User, as: "user" },
        order: [["createdAt", "DESC"]],
        offset: offset,
        limit: limit,
      });
    }
    // console.log("PPPPPPPPP====>>>",policies);
    // res.status(200).json({ policies });

    return {
      status: true,
      message: "Reports fatched successfully!!",
      data: policies,
    };
  } catch (error) {
    console.log(error);
  }
};

// getAllPolicy(1,1,5)
module.exports = { createPolicy, getAllPolicy };

async function getSubDealerIds(dealerId) {
  const subDealers = await User.findAll({
    where: { addedBy: dealerId, role: "subDealer" },
  });
  const subDel = await Promise.all(subDealers.map((subDealer) => subDealer.id));
  const executives = await User.findAll({
    where: { addedBy: {[Op.in] : subDel}, role: "dealerExecutive" },
  }) 

  const exeIds = await Promise.all(executives.map((executive)=> executive.id))
//   console.log([...subDealers,...exeIds,dealerId]);
  
  return [...subDealers,...exeIds,dealerId]
}

async function getDealerExecutiveIds(subDealerId) {
  const dealerExecutives = await User.findAll({
    where: { addedBy: subDealerId, role: "dealerExecutive" },
  });
  return dealerExecutives.map((dealerExecutive) => dealerExecutive.id);
}
