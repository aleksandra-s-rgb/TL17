import { expect, Locator, Page } from '@playwright/test'

export class Error {
  page: Page
  errorPopup: Locator
  nameFieldError: Locator
  phoneFieldError: Locator

  constructor(page: Page, dataTestId: string) {
    this.page = page
    this.errorPopup = page.getByTestId(dataTestId)
    this.nameFieldError = page.getByTestId(dataTestId)
    this.phoneFieldError = page.getByTestId(dataTestId)
  }

  async checkVisible(): Promise<void> {
    await expect(this.errorPopup).toBeVisible()
  }

  async checkNotVisibleNameFieldError(): Promise<void> {
    await expect(this.nameFieldError).toBeHidden()
  }

  async checkVisibleNameFieldError(): Promise<void> {
    await expect(this.nameFieldError).toBeVisible()
  }

  async checkNotVisiblePhoneFieldError(): Promise<void> {
    await expect(this.phoneFieldError).toBeHidden()
  }

  async checkVisiblePhoneFieldError(): Promise<void> {
    await expect(this.phoneFieldError).toBeVisible()
  }


}
