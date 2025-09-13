import { Page, test } from "@playwright/test";

const testExtend = test.extend<{ dashboard: Page}>({
    dashboard: async ({ page }, use) => {
        // beforeEach
        console.log("Before Each");

        await use(page);

        // afterEach
        console.log("After Each");

    }
});

export { testExtend };