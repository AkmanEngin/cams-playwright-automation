import { Page } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export class BasePage {
  page: Page;
  isoneUrl: string;
  camsUrl: string;


  constructor(page: any) {
    this.page = page;
    this.isoneUrl = process.env.ISONE_URL as string;
    this.camsUrl = process.env.CAMS_URL as string;

  }

  /**
   * A method to introduce a delay in the execution of the test script.
   *
   * @remarks
   * This method is useful for simulating user actions or waiting for asynchronous operations.
   *
   * @param seconds - The number of seconds to wait before resolving the promise.
   *
   * @returns A promise that resolves after the specified number of seconds.
   */
  async sleep(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
