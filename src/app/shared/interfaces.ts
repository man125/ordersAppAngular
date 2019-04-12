export interface IPerson {
    id: number;
    name: string;
    age: number;
}

export interface IOrders {
    orders_id: number;
    order_number: number;
    person_id: number;
    description: string;
}