import { IDiscount } from "../@types/interfaces";
import { Cart } from "./cart";
import { Sale } from "./sale";

export class Credit extends Sale implements IDiscount {
  readonly discount: number;

  constructor(cart: Cart) {
    super(cart);

    this.discount = 0.05;
  }

  applyDiscount(): void {
    if (this.total >= 10000) {
      this.total = this.total - this.total * this.discount;
    }

    return;
  }

  finishedOrder(): string {
    return `Order finalized. Total ${(this.total / 100).toFixed(2)}`;
  }
}
