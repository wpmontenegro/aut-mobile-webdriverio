import { TIMEOUT_10_SECONDS } from "../helpers/Constants";

export default class BaseScreen {

    private readonly TIMEOUT_DEFAULT = TIMEOUT_10_SECONDS;

    async tap(selector: string, timeout: number = this.TIMEOUT_DEFAULT): Promise<void> {
        await $(selector).waitForDisplayed({ timeout: timeout });
        await $(selector).click();
    }

    async setValue(selector: string, value: string, timeout: number = this.TIMEOUT_DEFAULT): Promise<void> {
        await $(selector).waitForDisplayed({ timeout: timeout });
        await $(selector).clearValue();
        await $(selector).setValue(value);
    }

    async getText(selector: string, timeout: number = this.TIMEOUT_DEFAULT): Promise<string> {
        await $(selector).waitForDisplayed({ timeout: timeout });
        return await $(selector).getText();
    }

    async waitForVisible(selector: string, timeout: number = this.TIMEOUT_DEFAULT, isShown: boolean = true): Promise<boolean> {
        return await $(selector).waitForDisplayed({ timeout: timeout, reverse: !isShown });
    }

    // Override Method
    async waitForIsShown(): Promise<boolean> {
        throw new Error('Method "waitForIsShown" must be implemented.');
    }
}
