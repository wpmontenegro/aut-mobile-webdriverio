import LoginScreen from '../ui/LoginScreen'
import HomeScreen from '../ui/HomeScreen'
import { PACKAGE_NAME } from '../helpers/Constants';
describe('Login Functionality', () => {

    async function GoToLoginForm() {
        await HomeScreen.waitForIsShown();
        await HomeScreen.tapOnMenuButton();
        await HomeScreen.tapOnLoginButton();
    }

    beforeEach(async () => {
        await browser.activateApp(PACKAGE_NAME);
        await GoToLoginForm();
    })

    afterEach(async () => {
        await browser.terminateApp(PACKAGE_NAME);
    })

    it('should be able log in with valid credentials', async () => {
        await LoginScreen.submitLoginForm({ username: 'bob@example.com', password: '10203040' });
        expect(await HomeScreen.waitForIsShown()).toBe(true);
        await HomeScreen.logout();
    })

    it('should display error message with blocked user', async () => {
        await LoginScreen.submitLoginForm({ username: 'alice@example.com', password: '10203040' });
        expect(await LoginScreen.getMessageErrorText()).toBe('Sorry this user has been locked out.');
    })
});
