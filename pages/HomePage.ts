import { BasePage } from "./BasePage";
import {Locator } from "@playwright/test";

export class HomePage extends BasePage {
    public readonly searchField: Locator 
    = this.page.locator("#searchfield");

    public readonly searchButton: Locator
    = this.page.locator("#submitbutton");  
    
    public readonly searchResults: Locator
    = this.page.locator("//table[contains(@id,'documentsTable')]//tbody//td[1]");


    async enterSearchTerm(searchTerm: string){
        await this.searchField.fill(searchTerm);

    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async verifySearchResult(i: number): Promise<string | null > {
        return await this.searchResults.nth(i).textContent();
    }

}
