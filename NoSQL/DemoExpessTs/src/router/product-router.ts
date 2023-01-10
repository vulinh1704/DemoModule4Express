import {Router} from "express";
import homeController from "../controller/HomeController";

export const productRouter = Router();
productRouter.get('/create', homeController.showFormCreate);
productRouter.post('/create', homeController.create);
productRouter.get('/delete/:id', homeController.remove)
productRouter.get('/edit/:id', homeController.showFormEdit)
productRouter.post('/edit/:id', homeController.edit);