import { BUNDLE_ID, PACKAGE_NAME } from "../helpers/Constants";

export default class Hook {
    static async beforeEach() {
        const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
        await browser.activateApp(bundleId);
    }

    static async afterEach() {
        const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
        await browser.terminateApp(bundleId);

    }
}