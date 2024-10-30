export class BrowserUtility {

    public static async sleep(seconds: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

  


}