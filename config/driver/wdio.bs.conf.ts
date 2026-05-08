import { config } from './wdio.shared.conf';

// =============================
// Browserstack specific config
// =============================

// User configuration
config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';

// Use browserstack service
config.services = (config.services || []).concat([
    ['browserstack', {
        testObservability: true,
        testObservabilityOptions: {
            projectName: "RNDemo Test Automation",
            buildName: "Smoke Test"
        },
        app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',
    }]
]);

export default config;

