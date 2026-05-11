import LoginScreen from '../ui/LoginScreen'
import HomeScreen from '../ui/HomeScreen'
import { VALID_USER_DATA, LOCKED_USER_DATA } from '../data/users.data'

describe('Login Functionality', () => {

    async function GoToLoginForm() {
        await HomeScreen.tapOnMenuButton();
        await HomeScreen.tapOnLoginButton();
    }

    beforeEach(async () => {
        await GoToLoginForm();
    })

    VALID_USER_DATA.forEach(({ username, password, tag }) => {
        it(`should be able log in with valid credentials for user: ${username} ${tag}`, async () => {
            await LoginScreen.submitLoginForm({ username, password });
            expect(await HomeScreen.waitForIsShown()).toBe(true);
            await HomeScreen.logout();
        })
    })

    LOCKED_USER_DATA.forEach(({ username, password, error, tag }) => {
        it(`should display error message for locked user: ${username} ${tag}`, async () => {
            await LoginScreen.submitLoginForm({ username, password });
            expect(await LoginScreen.getMessageErrorText()).toBe(error);
        })
    })
});
