import prod1 from "./assets/prod1.png"
import prod2 from "./assets/prod2.png"
import prod3 from "./assets/prod3.png"

export interface Products{
    id: number,
    name: string,
    price: number,
    stocks: number,
    img: any,
    rating: number,
}

export const products: Products[] = [
    {
        id: 1,
        name: "Smart Phone X",
        price: 14000,
        stocks: 32,
        img: prod1,
        rating: 5,
    },
    {
        id: 2,
        name: "VR Glasses",
        price: 48000,
        stocks: 18,
        img: prod2,
        rating: 5,
    },
    {
        id: 3,
        name: "Mint Green Keyboard",
        price: 2000,
        stocks: 12,
        img: prod3,
        rating: 4,
    },

]
