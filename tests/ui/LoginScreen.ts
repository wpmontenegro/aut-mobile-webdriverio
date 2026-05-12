import BaseScreen from "./BaseScreen";
import By from "../helpers/By";
import { PACKAGE_NAME } from "../helpers/Constants";

class LoginScreen extends BaseScreen {

    private readonly selectors: Record<string, string> = {
        headerTitle: By.platform({
            android: By.text('Login'),
            ios: By.accessibilityId('Select a username from the list below')
        }),
        usernameInput: By.platform({
            android: By.id(`${PACKAGE_NAME}:id/nameET`),
            ios: By.iOSPredicateString('type == "XCUIElementTypeTextField"')
        }),
        passwordInput: By.platform({
            android: By.id(`${PACKAGE_NAME}:id/passwordET`),
            ios: By.iOSPredicateString('type == "XCUIElementTypeSecureTextField"')
        }),
        loginButton: By.platform({
            android: By.accessibilityId('Tap to login with given credentials'),
            ios: By.iOSPredicateString('name == "Login" AND type == "XCUIElementTypeButton"')
        }),
        messageErrorLbl: By.platform({
            android: By.id(`${PACKAGE_NAME}:id/passwordErrorTV`),
            ios: By.accessibilityId('error-label')
        }),
    }

    async enterUsername(username: string): Promise<void> {
        await this.setValue(this.selectors.usernameInput, username);
        await this.tapOutsideKeyboard();
    }

    async enterPassword(password: string): Promise<void> {
        await this.setValue(this.selectors.passwordInput, password);
        await this.tapOutsideKeyboard();
    }

    async tapOnLoginButton(): Promise<void> {
        await this.tap(this.selectors.loginButton);
    }

    async submitLoginForm(data: { username: string, password: string }): Promise<void> {
        await this.enterUsername(data.username);
        await this.enterPassword(data.password);
        await this.tapOnLoginButton();
    }

    async tapOutsideKeyboard(): Promise<void> {
        if (browser.isIOS) {
            await this.tap(this.selectors.headerTitle);
        }
    }

    async getMessageErrorText(): Promise<string> {
        return await this.getText(this.selectors.messageErrorLbl);
    }

    async waitForIsShown(): Promise<boolean> {
        return await this.waitForVisible(this.selectors.headerTitle);
    }
}

export default new LoginScreen();
