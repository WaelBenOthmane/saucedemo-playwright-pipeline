import { expect, test } from '@playwright/test'
import { login, verifySuccessLogin } from './pages/LoginPage'

test.describe('Login feature',
    { tag: ['@regression', '@smoke'] }, () => {


        test('Login succefully to saucedemo account', async ({ page }) => {

            await page.goto('https://www.saucedemo.com/')

            await login(page, "standard_user", "secret_sauce")

            await verifySuccessLogin(page)


        })

    })