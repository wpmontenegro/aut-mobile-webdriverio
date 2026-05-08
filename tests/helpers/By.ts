export default class By {

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