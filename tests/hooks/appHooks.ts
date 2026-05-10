import { BUNDLE_ID, PACKAGE_NAME } from "../helpers/Constants";

export const openAppHook = async () => {
    const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
    await browser.activateApp(bundleId);
}

export const closeAppHook = async () => {
    const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
    await browser.terminateApp(bundleId);
}

export const takeScreenshotHook = async (passed: boolean) => {
    if (!passed) {
        await browser.takeScreenshot();
    }
};