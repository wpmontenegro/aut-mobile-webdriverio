export default class Hooks {
    /**
     * Se ejecuta después de cada prueba (it block en Mocha o Cucumber scenario).
     * Ideal para reiniciar la app o limpiar estado.
     */
    static async afterTest() {
        await browser.closeApp();
    }

    // Se puede añadir otros hooks generales aquí, por ejemplo:
    // static async beforeSuite(suite: any) { ... }
}
