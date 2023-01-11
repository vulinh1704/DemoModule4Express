import {Router} from "express";
import homeController from "../controller/HomeController";
import {productRouter} from "./product-router";
import {userRouter} from "./user-router";

export const router = Router();
router.get('/home', homeController.showHome)
router.use('/products', productRouter);
router.use('/users', userRouter);
