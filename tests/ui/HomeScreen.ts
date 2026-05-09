import BaseScreen from "./BaseScreen";
import By from "../helpers/By";
import Locate from "../helpers/Locate";

class HomeScreen extends BaseScreen {
    constructor() {
        super(() => this.headerTitle);
    }

    private get headerTitle() {
        return Locate.onAndroid(By.text('Products'))
            .orIOS(By.accessibilityId('Catalog-screen'));
    }
    private get menuButton() {
        return Locate.onAndroid(By.accessibilityId('View menu'))
            .orIOS(By.accessibilityId('More-tab-item'));
    }
    private get loginButton() {
        return Locate.onAndroid(By.accessibilityId('Login Menu Item'))
            .orIOS(By.accessibilityId('Login Button'));
    }
    private get logoutButton() {
        return Locate.onAndroid(By.accessibilityId('Logout Menu Item'))
            .orIOS(By.accessibilityId('LogOut-menu-item'));
    }
    private get confirmLogoutDialogButton() {
        return Locate.onAndroid(By.id('android:id/button1'))
            .orIOS(By.iOSPredicateString('name == "Log Out" AND type == "XCUIElementTypeButton"'));
    }

    async tapOnMenuButton() {
        await this.menuButton.click();
    }

    async tapOnLoginButton() {
        await this.loginButton.click();
    }

    async tapOnLogoutButton() {
        await this.logoutButton.click();
    }

    async tapOnConfirmLogoutDialogButton() {
        await this.confirmLogoutDialogButton.click();
    }

    async logout() {
        await this.tapOnMenuButton();
        await this.tapOnLogoutButton();
        await this.tapOnConfirmLogoutDialogButton();
    }
}

export default new HomeScreen();
