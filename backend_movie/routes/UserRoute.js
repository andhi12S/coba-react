import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const userRoute = express.Router();

userRoute.get('/users', verifyToken, getUsers);
userRoute.post('/users', Register);
userRoute.post('/login', Login);
userRoute.get('/renew-token', refreshToken);
userRoute.delete('/logout',Logout);

export default userRoute;
