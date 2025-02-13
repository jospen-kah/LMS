const User = require('../Models/UserModel');
// const Student = require('../Models/StudentSchema');

async function userPortal( req, res){
    try{
        const userId = req.params.id;
        const user = await User.findById(userId).populate("enrolledCourses");
        // console.log("UserId: ", userId)

        if(!user){
            res.status(404).json({message: "User not found"});
        }

        res.json({user, message: user.enrolledCourses});
    }
    catch(error){
        console.error("Error fetching the user portal", error);
        res.status(500).json({ message: "Server error"})
    }
}

module.exports = {userPortal};