import express from "express";
import isAuthenticated from "../middleware/auth";
import fetchMedicalData from "../controller/userController";
const userRouter = express.Router();
userRouter.post("/fetch-medical-data", isAuthenticated, fetchMedicalData);
export default userRouter;
