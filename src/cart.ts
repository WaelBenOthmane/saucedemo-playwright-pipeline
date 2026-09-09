export interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

const TAX_RATE = 0.2; // 20%

export function calculateSubtotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateTax(subtotal: number): number {
    return Math.round(subtotal * TAX_RATE * 100) / 100;
}

export function calculateTotal(items: CartItem[]): number {
    const subtotal = calculateSubtotal(items);
    const tax = calculateTax(subtotal);
    return Math.round((subtotal + tax) * 100) / 100;
}

export function applyDiscount(total: number, discountPercent: number): number {
    if (discountPercent < 0 || discountPercent > 100) {
        throw new Error('Discount must be between 0 and 100');
    }
    return Math.round(total * (1 - discountPercent / 100) * 100) / 100;
}