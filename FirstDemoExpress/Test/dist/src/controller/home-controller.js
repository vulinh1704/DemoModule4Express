"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("../service/product-service");
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await this.productService.findAll();
            res.render('home', { products: products });
        };
        this.showFormCreate = async (req, res) => {
            res.render('products/create-product');
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    this.productService.save(product);
                    res.redirect('/home');
                }
            }
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.default = new HomeController();
//# sourceMappingURL=home-controller.js.map