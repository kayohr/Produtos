import jwt, { SignOptions } from 'jsonwebtoken';
// const { loginService } = require('../services');
// require('dotenv/config');
const portToken = process.env.JWT_SECRET || 'secret';

interface JWTPayload {
//   id: number;
  username: string;
  vocation: string;
  level: number;
  password: string; 

}

export default function createToken(payload: JWTPayload) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, portToken, config);
  return token;
}

// const creatToken = (payload) =>
//   jwt.sign({ payload }, portToken, {
//     algorithm: 'HS256',
//     expiresIn: '1h',
//   });

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   // console.log(token);
//   try {
//     if (!token) {
//       return res.status(401).json({ message: 'Token not found' });
//     }
//     const payload = jwt.verify(token, portToken);
//     console.log(payload);
//     req.User = payload;

//     return next();
//   } catch (err) {
//     // err.statusCode = 401;
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// };

// module.exports = {
//   createToken,
//   verifyToken,
// };