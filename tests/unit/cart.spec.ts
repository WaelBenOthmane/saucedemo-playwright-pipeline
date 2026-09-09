import { describe, it, expect } from 'vitest';
import {
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    applyDiscount,
    CartItem,
} from '../../src/cart';

describe('Cart calculations', () => {
    const items: CartItem[] = [
        { name: 'Backpack', price: 29.99, quantity: 1 },
        { name: 'T-shirt', price: 15.5, quantity: 2 },
    ];

    it('calculates the subtotal correctly', () => {
        expect(calculateSubtotal(items)).toBeCloseTo(60.99, 2);
    });

    it('calculates the tax correctly (20%)', () => {
        const subtotal = calculateSubtotal(items);
        expect(calculateTax(subtotal)).toBeCloseTo(12.2, 2);
    });

    it('calculates the total including tax', () => {
        expect(calculateTotal(items)).toBeCloseTo(73.19, 2);
    });

    it('returns 0 for an empty cart', () => {
        expect(calculateSubtotal([])).toBe(0);
        expect(calculateTotal([])).toBe(0);
    });

    it('applies a discount correctly', () => {
        expect(applyDiscount(100, 10)).toBe(90);
    });

    it('throws an error for an invalid discount', () => {
        expect(() => applyDiscount(100, 150)).toThrowError();
        expect(() => applyDiscount(100, -5)).toThrowError();
    });
});