import { Page } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

// Import OTHER PAGE CLASSES HERE...


export let homePage: HomePage;

// Export OTHER PAGE CLASS REFERENCES HERE...



export const initElements = (page: Page): void => {
  homePage = new HomePage(page);

  // ADD OTHER PAGE CLASS INSTANCES HERE...


};
