import { BUNDLE_ID, PACKAGE_NAME } from "../helpers/Constants";
import { addAttachment } from "@wdio/allure-reporter";

export const openAppHook = async () => {
    const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
    await browser.activateApp(bundleId);
}

export const closeAppHook = async () => {
    const bundleId = browser.isAndroid ? PACKAGE_NAME : BUNDLE_ID;
    await browser.terminateApp(bundleId);
}

export const takeScreenshotHook = async (passed: boolean) => {
    const screenshotBase64 = await browser.takeScreenshot();
    await addAttachment("Screenshot", Buffer.from(screenshotBase64, "base64"), "image/png");
};