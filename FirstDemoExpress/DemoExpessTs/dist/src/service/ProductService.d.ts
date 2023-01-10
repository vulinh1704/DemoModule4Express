declare class ProductService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    save: (product: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update: (id: any, newProduct: any) => Promise<import("mongodb").UpdateResult>;
    remove: (id: any, newProduct: any) => Promise<import("mongodb").DeleteResult>;
}
declare const _default: ProductService;
export default _default;
