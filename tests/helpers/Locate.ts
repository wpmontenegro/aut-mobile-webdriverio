export default class By {

    static on(locator: string) {
        return $(locator);
    }

    /**
     * Sintaxis fluida: By.onAndroid('...').orIOS('...')
     */
    static onAndroid(androidLocator: string) {
        return {
            orIOS: (iosLocator: string) => browser.isAndroid ? $(androidLocator) : $(iosLocator)
        };
    }
}