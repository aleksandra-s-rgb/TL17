import { Locator, Page } from '@playwright/test'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Order } from '../atoms/Order'
import { Error } from '../atoms/Error'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Button
  readonly usernameField: Input
  readonly phoneField: Input
  readonly commentField: Input
  readonly orderButton: Button
  readonly orderPopup: Order
  readonly nameFieldError: Error
  readonly phoneFieldError: Error
  readonly logOutButton: Button
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = new Button(page, 'openStatusPopup-button')
    this.usernameField = new Input(page, 'username-input')
    this.phoneField = new Input(page, 'phone-input')
    this.commentField = new Input(page, 'comment-input')
    this.orderButton = new Button(page, 'createOrder-button')
    this.orderPopup = new Order(page, 'orderSuccessfullyCreated-popup')
    this.nameFieldError = new Error(page, 'username-input-error')
    this.phoneFieldError = new Error(page, 'phone-input-error')
    this.logOutButton = new Button(page, 'logout-button')
  }

  async createOrder(username: string, phone: number, comment: string): Promise<void> {
    await this.usernameField.fill(username)
    await this.phoneField.fill(String(phone))
    await this.commentField.fill(comment)
    await this.orderButton.checkVisible()
    await this.orderButton.checkEnabled()
    await this.orderButton.click()
    await this.orderPopup.checkVisible()
  }
}
