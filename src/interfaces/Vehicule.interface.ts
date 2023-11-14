export type Brand = "Ford" | "Tesla" | "Fiat" | "Audi" | "BMW";

export type BrandModelMapping = {
  Ford: ["C-Max", "Fiesta"];
  Tesla: ["Model S", "Model X"];
  Fiat: ["Freemont", "Panda"];
  Audi: ["A4", "A6"];
  BMW: ["X5", "X6"];
};

export interface Vehicle {
  id: string;
  brand: Brand;
  model: BrandModelMapping[Brand];
  price: number;
}
