import { Page, expect } from "@playwright/test";

export async function addProductToCart(page: Page, productName: string) {

    const productWrapper = page.locator('.inventory_item', {
        hasText: productName
    })

    const addToCartButton = productWrapper.getByRole('button', {
        name: 'Add to cart'

    })

    await addToCartButton.click()
}

export async function verifyCartBadge(page: Page) {

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')

}