import {Product} from "../model/product";


class ProductService {
    constructor() {
    }

    getAll = async () => {
        return Product.find();
    }

    save = async (product) => {
        return await Product.create(product)
    }

    deleteProduct = async (idDelete) => {
        let product = Product.findOne({_id: idDelete});
        return Product.deleteOne(product);
    }

    update = async (idEdit, newProduct) => {
        let product = Product.findOne({_id: idEdit});
        if (!product) {
            return null;
        }
        newProduct._id = idEdit;
        return Product.updateOne({_id: idEdit}, newProduct);
    }

    findById = async (idEdit) => {
        return Product.findOne({_id: idEdit});
    }

}

export default new ProductService();