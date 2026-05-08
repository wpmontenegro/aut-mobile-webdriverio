import LoginScreen from '../ui/LoginScreen'
import HomeScreen from '../ui/HomeScreen'

describe('Login Functionality', () => {

    beforeEach(async () => {
        await HomeScreen.waitForIsShown();
        await HomeScreen.tapOnMenuButton();
        await HomeScreen.tapOnLoginButton();
    })

    it('should be able log in with valid credentials', async () => {
        await LoginScreen.submitLoginForm({ username: 'bob@example.com', password: '10203040' });
        expect(await HomeScreen.waitForIsShown()).toBe(true);
        await HomeScreen.logout();
    })
});
