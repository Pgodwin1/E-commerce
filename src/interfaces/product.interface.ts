
interface IProduct {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdBy: string;
}

export interface IProductDoc extends IProduct {}

export type NewCreatedproduct = Omit<IProduct, 'createdBy'>