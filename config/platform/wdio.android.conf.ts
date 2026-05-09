// ===========================
// General Android Capabilities
// ===========================

import { PACKAGE_NAME } from "../../tests/helpers/Constants";

const platformCapabilities = {
    platformName: 'Android',
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': PACKAGE_NAME,
    'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
    'appium:noReset': true,
    "appium:autoDismissAlerts": true,
    'appium:newCommandTimeout': 240,
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
};

export default platformCapabilities;
