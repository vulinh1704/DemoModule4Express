import {Request, Response} from "express";
import productService from "../service/ProductService";

class HomeController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    showHome = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        res.render('home', {products: products})
    }

    showFormCreate = async (req: Request, res: Response) => {
        res.render('products/create');
    }

    create = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productService.save(product);
                res.redirect(301, '/home');
            }
        }
    }

    remove = async (req: Request, res: Response) => {
        let idDelete = req.params.id;
        await productService.deleteProduct(idDelete);
        res.redirect(301, '/home');
    }

    showFormEdit = async (req: Request, res: Response) => {
        let idEdit = req.params.id;
        let product = await productService.findById(idEdit);
        res.render('products/edit', {product: product});
    }
    edit = async (req: Request, res: Response) => {
        let idEdit = req.params.id;
        await productService.update(idEdit, req.body);
        res.redirect(301, '/home')
    }
}

export default new HomeController();