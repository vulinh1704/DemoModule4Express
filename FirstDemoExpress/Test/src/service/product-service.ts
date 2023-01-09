let listProduct = [
    {
        name: 'Bánh mì',
        price: 300,
        quantity: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfR3mjXTW23p7u178vl_RQ3LqbrGzotq_YQ&usqp=CAU'
    }
]
export class ProductService {

    constructor() {

    };

    findAll = async () => {
        return listProduct;
    }

    save = async (product) => {
        listProduct.push(product);
        return 'Success';
    }
}
