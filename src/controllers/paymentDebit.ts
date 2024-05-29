import { IDiscount } from "../@types/interfaces";
import { Cart } from "./cart";
import { Sale } from "./sale";

export class Devit extends Sale implements IDiscount {
  readonly discount: number;

  constructor(cart: Cart) {
    super(cart);

    this.discount = 0.07;
  }

  applyDiscount(): void {
    this.total = this.total - this.total * this.discount;

    return;
  }

  finishedOrder(): string {
    return `Order finalized. Total ${(this.total / 100).toFixed(2)}`;
  }
}
