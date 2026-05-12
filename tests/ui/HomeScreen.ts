import BaseScreen from "./BaseScreen";
import By from "../helpers/By";

class HomeScreen extends BaseScreen {

    private readonly selectors: Record<string, string> = {
        headerTitle: By.platform({
            android: By.text('Products'),
            ios: By.accessibilityId('Catalog-screen')
        }),
        menuButton: By.platform({
            android: By.accessibilityId('View menu'),
            ios: By.accessibilityId('More-tab-item')
        }),
        loginButton: By.platform({
            android: By.accessibilityId('Login Menu Item'),
            ios: By.accessibilityId('Login Button')
        }),
        logoutButton: By.platform({
            android: By.accessibilityId('Logout Menu Item'),
            ios: By.accessibilityId('LogOut-menu-item')
        }),
        confirmLogoutDialogButton: By.platform({
            android: By.id('android:id/button1'),
            ios: By.iOSPredicateString('name == "Log Out" AND type == "XCUIElementTypeButton"')
        }),
    }

    async tapOnMenuButton(): Promise<void> {
        await this.tap(this.selectors.menuButton);
    }

    async tapOnLoginButton(): Promise<void> {
        await this.tap(this.selectors.loginButton);
    }

    async tapOnLogoutButton(): Promise<void> {
        await this.tap(this.selectors.logoutButton);
    }

    async tapOnConfirmLogoutDialogButton(): Promise<void> {
        await this.tap(this.selectors.confirmLogoutDialogButton);
    }

    async logout(): Promise<void> {
        await this.tapOnMenuButton();
        await this.tapOnLogoutButton();
        await this.tapOnConfirmLogoutDialogButton();
    }

    async waitForIsShown(): Promise<boolean> {
        return await this.waitForVisible(this.selectors.headerTitle);
    }
}

export default new HomeScreen();
