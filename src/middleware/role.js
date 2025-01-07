
async function checkRole(role){
    return function (req, res, next){
        const user = req.user;
        if(user && user.role === role) 
            {
            return next():
        }
        return res.status(403).send('Permission denied');
    }
}