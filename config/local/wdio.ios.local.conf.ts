import { join } from 'path';
import config from '../driver/wdio.local.conf';
import iosCapabilities from '../platform/wdio.ios.conf';

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
config.capabilities = [
    {
        // The defaults you need to have in your config
        ...iosCapabilities,
        'appium:deviceName': 'iPhone 14 Pro Max',
        'appium:platformVersion': '17.0',
        'appium:app': join(
            process.cwd(),
            "./apps/SauceLabs-Demo-App.Simulator.zip"
        ),
    },
];

exports.config = config;
