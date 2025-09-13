import { Page, test } from "@playwright/test";

const testExtend = test.extend<{ dashboard2: Page}>({
    dashboard2: async ({ page }, use) => {
        // beforeEach
        console.log("Before Each dashboard 2");

        await use(page);

        // afterEach
        console.log("After Each dashboard 2");

    }
});

export { testExtend };