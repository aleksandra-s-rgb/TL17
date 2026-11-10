import { test } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { PASSWORD, USERNAME } from '../../config/env-data'
import { LoginPage } from '../../pom/pages/LoginPage'
import { OrderPage } from '../../pom/pages/OrderPage'

let loginPage: LoginPage
let orderCreationPage: OrderPage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await loginPage.open()
})
test('TL-17.3 signIn button disabled when incorrect data inserted', async ({}) => {
  await loginPage.usernameField.fill(faker.lorem.word(2))
  await loginPage.passwordField.fill(faker.lorem.word(7))
  await loginPage.signInButton.checkVisible(true)
  await loginPage.signInButton.checkEnabled(false)
})

test('TL-17.4 error message displayed when incorrect credentials used', async ({}) => {
  await loginPage.usernameField.fill(faker.lorem.word(2))
  await loginPage.passwordField.fill(faker.lorem.word(8))
  await loginPage.errorPopup.checkVisible(false)
})

test('TL-17.5 login with correct credentials and verify order creation page', async ({ page }) => {
  orderCreationPage = new OrderPage(page)
  await loginPage.signIn(USERNAME, PASSWORD)

  await orderCreationPage.statusButton.checkVisible()
  await orderCreationPage.usernameField.checkVisible()
  await orderCreationPage.phoneField.checkVisible()
  await orderCreationPage.commentField.checkVisible()
})

test('TL-17.6 login and create order', async ({ page }) => {
  const order = new OrderPage(page)
  await loginPage.signIn(USERNAME, PASSWORD)

  await order.createOrder(faker.lorem.word(2), Number(faker.string.numeric(6)), faker.lorem.word(2))

  // implement test
})
