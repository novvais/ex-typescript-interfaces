export interface IProduct {
    id: number
    description: string
    category: string
    value: number
    quantity: number
}

export interface IDiscount {
    discount: number

    applyDiscount(): void
}