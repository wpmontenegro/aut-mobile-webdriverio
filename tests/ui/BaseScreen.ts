import { ChainablePromiseElement } from 'webdriverio';

export default class BaseScreen {
    private selector: () => ChainablePromiseElement;

    constructor(selector: () => ChainablePromiseElement) {
        this.selector = selector;
    }

    async waitForIsShown(isShown = true): Promise<boolean | void> {
        return this.selector().waitForDisplayed({
            reverse: !isShown,
        });
    }
}
