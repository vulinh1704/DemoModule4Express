import {Request, Response} from "express";
import {ProductService} from "../service/product-service";

class HomeController {
    private productService;

    constructor() {
        this.productService = new ProductService();
    }

    showHome = async (req: Request, res: Response) => {
        let products = await this.productService.findAll()
        res.render('home', {products: products});
    }

    showFormCreate = async (req: Request, res: Response) => {
        res.render('products/create-product')
    }

    create = async (req: Request, res: Response) => {
        if(req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                this.productService.save(product);
                res.redirect('/home');
            }
        }
    }
}

export default new HomeController();