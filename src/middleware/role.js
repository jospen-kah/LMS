// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")
// const key = process.env.KEY


// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization'];  // Assuming token is sent in the Authorization header
  
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, key, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     req.user = decoded;  // Attach decoded JWT (user info) to req.user
//     next();  // next middleware or route handler
//   });
// };

// module.exports = authenticate;
