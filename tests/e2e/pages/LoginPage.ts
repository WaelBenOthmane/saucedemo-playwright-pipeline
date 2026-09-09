import { expect, Page } from "@playwright/test"

export async function login(page: Page, username: string, password: string) {

    await page.locator('[data-test="username"]').fill(username)
    await page.locator('[data-test="password"]').fill(password)
    await page.locator('[data-test="login-button"]').click()

}

export async function verifySuccessLogin(page: Page) {

    await expect(page.locator('[data-test="title"]')).toHaveText('Products')

}

