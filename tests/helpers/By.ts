export default class By {

    /**
     * Define platform-specific selectors in a single call.
     * Usage: By.platform({ android: By.id('...'), ios: By.accessibilityId('...') })
     */
    static platform(selectors: { android: string; ios: string }): string {
        return browser.isAndroid ? selectors.android : selectors.ios;
    }

    /**
     * Fluent syntax for platform-specific selectors.
     * Usage: By.onAndroid(By.id('...')).orIOS(By.accessibilityId('...'))
     */
    static onAndroid(androidLocator: string) {
        return {
            orIOS: (iosLocator: string) => browser.isAndroid ? androidLocator : iosLocator
        };
    }

    /**
     * Selectors using Appium methods
     */
    static text(text: string) {
        return browser.isAndroid ? `android=new UiSelector().text("${text}")` :
            `-ios predicate string:name == "${text}" AND type == "XCUIElementTypeStaticText"`;
    }

    static UIAutomator(uiAutomator: string) {
        return browser.isAndroid ? `android=${uiAutomator}` : '';
    }

    static iOSPredicateString(predicate: string) {
        return browser.isIOS ? `-ios predicate string:${predicate}` : '';
    }

    static iOSClassChain(classChain: string) {
        return browser.isIOS ? `-ios class chain:${classChain}` : '';
    }

    static id(id: string) {
        return `id=${id}`;
    }

    static accessibilityId(id: string) {
        return `~${id}`;
    }

    static xPath(xpath: string) {
        return xpath;
    }
}