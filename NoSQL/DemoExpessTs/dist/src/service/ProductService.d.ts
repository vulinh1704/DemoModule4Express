declare class ProductService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    save: (product: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteProduct: (idDelete: any) => Promise<import("mongodb").DeleteResult>;
    update: (idEdit: any, newProduct: any) => Promise<import("mongodb").UpdateResult>;
    findById: (idEdit: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
declare const _default: ProductService;
export default _default;
