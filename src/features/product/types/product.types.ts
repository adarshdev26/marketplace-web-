export interface Category {
    id: string;
    name: string;
  }
  
  export interface Seller {
    id: string;
    name: string;
    email: string;
  }
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    category: Category;
    seller: Seller;
    createdAt: string;
  }
  
  export interface ProductsResponse {
    data: Product[];
  }
  
  export interface ProductResponse {
    product: Product;
  }