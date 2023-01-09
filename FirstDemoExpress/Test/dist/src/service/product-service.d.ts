export declare class ProductService {
    constructor();
    findAll: () => Promise<{
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[]>;
    save: (product: any) => Promise<string>;
}
