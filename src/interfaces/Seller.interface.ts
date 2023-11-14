import { Brand, Vehicle } from ".";

export interface Seller {
  name: string;
  rut: string;
  vehicle: {
    id: string;
    brand: Brand;
    model: Vehicle["model"];
    price: number;
  };
}
