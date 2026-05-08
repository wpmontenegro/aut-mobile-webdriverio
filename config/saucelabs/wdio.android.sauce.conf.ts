import { join } from 'path';
import config from '../driver/wdio.sauce.conf';
import androidCapabilities from '../platform/wdio.android.conf';

const buildName = `WebdriverIO Native Demo app, Android Real Device: ${new Date().getTime()}`;

// ============
// Specs
// ============
config.specs = [
    join(process.cwd(), './tests/specs/**/*.spec.ts'),
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    {
        ...androidCapabilities,
        'appium:deviceName': 'Google Pixel 5',
        // The path to the app
        'appium:app': 'storage:filename=' + process.env.SAUCE_APK_NAME,
        // Sauce Labs specific options
        'sauce:options': {
            // Group builds by build name
            build: buildName,
            appiumVersion: 'latest'
        },
    }
];

config.maxInstances = 25;


exports.config = config;
