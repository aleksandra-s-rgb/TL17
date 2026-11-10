import { expect, Locator, Page } from '@playwright/test'

export class Input {
  page: Page
  InputLoc: Locator

  constructor(page: Page, dataTestId: string) {
    this.page = page
    this.InputLoc = page.getByTestId(dataTestId)
  }


  async checkVisible(visible = true): Promise<void> {
    await expect(this.InputLoc).toBeVisible({ visible: visible })
  }
  async fill(text: string): Promise<void> {
    await this.InputLoc.fill(text);
  }
  async clear():Promise<void> {
    await this.InputLoc.clear()
  }

  async clearAndFill(text: string): Promise<void> {
    await this.clear();
    await this.fill(text);
  }

  async checkAttached(attached = true):Promise<void> {
    await expect(this.InputLoc).toBeAttached({attached})
  }
}
