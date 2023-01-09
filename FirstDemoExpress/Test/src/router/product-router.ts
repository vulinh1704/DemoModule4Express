import {Router} from "express";
import homeController from "../controller/home-controller";

export const productRouter = Router();
productRouter.get('/' , homeController.showHome)
productRouter.get('/create' , homeController.showFormCreate)
productRouter.post('/create' , homeController.create)