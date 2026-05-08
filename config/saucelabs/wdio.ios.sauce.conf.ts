import { join } from 'path';
import config from '../driver/wdio.sauce.conf';
import iosCapabilities from '../platform/wdio.ios.conf';

const buildName = `WebdriverIO Native Demo app, iOS Real Device: ${new Date().getTime()}`;

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
        ...iosCapabilities,
        'appium:deviceName': 'iPhone 13 Pro',
        // The path to the app
        'appium:app': 'storage:filename=' + process.env.SAUCE_IPA_NAME,
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
