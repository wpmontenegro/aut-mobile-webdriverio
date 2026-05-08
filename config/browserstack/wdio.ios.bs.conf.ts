import { join } from 'path';
import config from '../driver/wdio.bs.conf';

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
config.capabilities = [{
    'bstack:options': {
        deviceName: 'iPhone 12',
        platformName: 'ios',
    }
}];

exports.config = config;
