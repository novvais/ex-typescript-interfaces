import { Cart } from "./cart";

export abstract class Sale {
    cart: Cart
    total: number

    constructor(cart: Cart) {
        this.cart = cart
        this.total = this.totalPrice()
    }

    abstract finishedOrder(): string

    private totalPrice(): number {
        let total = 0 

        for (let product of this.cart.printItems()) {
            total += product.value * product.quantity
        }

        return total
    }
}