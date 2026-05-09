import BaseScreen from "./BaseScreen";
import By from "../helpers/By";
import Locate from "../helpers/Locate";
import { PACKAGE_NAME } from "../helpers/Constants";

class LoginScreen extends BaseScreen {
    constructor() {
        super(() => this.headerTitle);
    }

    private get headerTitle() {
        return Locate.onAndroid(By.text('Login'))
            .orIOS(By.accessibilityId('Select a username from the list below'));
    }
    private get usernameInput() {
        return Locate.onAndroid(By.id(`${PACKAGE_NAME}:id/nameET`))
            .orIOS(By.iOSPredicateString('type == "XCUIElementTypeTextField"'));
    }
    private get passwordInput() {
        return Locate.onAndroid(By.id(`${PACKAGE_NAME}:id/passwordET`))
            .orIOS(By.iOSPredicateString('type == "XCUIElementTypeSecureTextField"'));
    }
    private get loginButton() {
        return Locate.onAndroid(By.accessibilityId('Tap to login with given credentials'))
            .orIOS(By.iOSPredicateString('name == "Login" AND type == "XCUIElementTypeButton"'));
    }

    async enterUsername(username: string) {
        await this.usernameInput.setValue(username);
        await this.tapOutsideKeyboard();
    }

    async enterPassword(password: string) {
        await this.passwordInput.setValue(password);
        await this.tapOutsideKeyboard();
    }

    async tapOnLoginButton() {
        await this.loginButton.click();
    }

    async submitLoginForm(data: { username: string, password: string }) {
        await this.enterUsername(data.username);
        await this.enterPassword(data.password);
        await this.tapOnLoginButton();
    }

    async tapOutsideKeyboard() {
        if (browser.isIOS) {
            await this.headerTitle.click();
        }
    }
}

export default new LoginScreen();
