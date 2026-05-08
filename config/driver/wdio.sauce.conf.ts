import { config } from './wdio.shared.conf';

// ========
// Services
// ========
config.services = (config.services ? config.services : []).concat([
    [
        'sauce',
        {
            // For Sauce Options see https://webdriver.io/docs/sauce-service#sauce-service-options
        },
    ],
]);

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// Increase for real device support
config.connectionRetryTimeout = 180000;

export default config;
