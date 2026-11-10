import { expect, Locator, Page } from '@playwright/test'

export class Error {
  page: Page
  errorPopup: Locator

  constructor(page: Page, dataTestId: string) {
    this.page = page
    this.errorPopup = page.getByTestId(dataTestId)
  }

  async checkVisible(visible = true): Promise<void> {
    await expect(this.errorPopup).toBeVisible({ visible: visible })
  }
}
