import { test } from '@playwright/test'
import { login, verifySuccessLogin } from './pages/LoginPage'
import { addProductToCart, verifyCartBadge } from './pages/InventoryPage'

test.describe('Add product to cart', {
    tag: '@regression'
}, () => {

    test('Add product to cart by name', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')

        await login(page, "standard_user", "secret_sauce")

        await verifySuccessLogin(page)

        await addProductToCart(page, 'Sauce Labs Bike Light')

        await verifyCartBadge(page)
    })


})