
interface IProduct {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    createdBy: string;
}

export interface IProductDoc extends IProduct {}

