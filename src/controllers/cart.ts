import { IProduct } from "../@types/interfaces";

export class Cart {
    private product: IProduct[]

    constructor() {
        this.product = []
    }

    addProducts(product: IProduct) {
        this.product.push(product)
    }

    deleteProduct(idProduct: number) {
        const indexProduct = this.product.findIndex(product => product.id === idProduct)

        if(indexProduct === -1) {
            return "Product not found"
        }

        this.product.splice(indexProduct, 1)

        return "Product deleted successuly"
    }

    updateQuantity(idProduct: number, newQuantity: number) {
        const product = this.product.find(product => product.id === idProduct)

        if(!product) {
            return "Product not found"
        }

        product.quantity === newQuantity 
        
    }

    printItems(): IProduct[] {
        return this.product
    }
}