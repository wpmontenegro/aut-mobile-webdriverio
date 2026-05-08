import { join } from 'path';
import config from '../driver/wdio.local.conf';
import androidCapabilities from '../platform/wdio.android.conf';

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
        ...androidCapabilities,
        'appium:deviceName': 'emulator-5554',
    },
];

exports.config = config;
