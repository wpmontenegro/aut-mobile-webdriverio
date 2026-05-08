// ===========================
// General iOS Capabilities
// ===========================

const platformCapabilities = {
    platformName: 'iOS',
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:automationName': 'XCUITest',
    'appium:bundleId': 'com.saucelabs.mydemoapp.rn',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': false,
    'appium:newCommandTimeout': 240,
};

export default platformCapabilities;
