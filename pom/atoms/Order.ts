import { expect, Locator, Page } from '@playwright/test'

export class Order {
  page: Page
  orderPopup: Locator

  constructor(page: Page, dataTestId: string) {
    this.page = page
    this.orderPopup = page.getByTestId(dataTestId)
  }

  async checkVisible(visible = true): Promise<void> {
    await expect(this.orderPopup).toBeVisible({ visible: visible })
  }
}
