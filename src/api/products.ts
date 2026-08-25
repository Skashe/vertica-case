import type { Product } from '../types/product';

const API_URL = 'https://fakestoreapi.com/products';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

export async function getProductById(id: number): Promise<Product> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }

    return response.json();
}