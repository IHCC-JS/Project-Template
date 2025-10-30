import {test, expect} from "@playwright/test";
import {TaskManager} from "../src/classes/TaskManager.js";

//TODO none of the tests work bc of localStorage :(
test.describe("Todo App", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("/");
    });

    test("loads seeded tasks from json", async ({page}) => {
        const tasks = await page.locator("#task-list li");
        await expect(tasks).toHaveCount(4);

        const first = page.locator("#task-list li").first();
        await expect(first).toContainText("Learn TypeScript");
    });

    test("adds a new task", async ({page}) => {
        await page.fill("#title", "Walk the dog");
        await page.fill("#description", "Take Max to the park");
        await page.selectOption("#priority", "high");
        await page.click('button:has-text("Add Task")');

        const last = page.locator("#task-list li").last();
        await expect(last).toContainText("Walk the dog");
        await expect(last).toContainText("(high)");
    });

    test("toggles task completion", async ({page}) => {
        const firstToggle = page.locator("#task-list li button[data-action='toggle']").first();
        await firstToggle.click();

        const firstTask = page.locator("#task-list li").first();
        await expect(firstTask.locator("h3")).toHaveClass(/line-through/);
    });

    test("deletes a task", async ({page}) => {
        const initialCount = await page.locator("#task-list li").count();
        const deleteButton = page.locator("#task-list li button[data-action='delete']").first();
        await deleteButton.click();

        const newCount = await page.locator("#task-list li").count();
        expect(newCount).toBe(initialCount - 1);
    });

    test("persists tasks in localStorage", async ({page}) => {
        await page.fill("#title", "Study for test");
        await page.click('button:has-text("Add Task")');
        await expect(page.locator("#task-list li")).toContainText("Study for test");

        await page.reload();

        // data should still exist after reload (from localStorage)
        await expect(page.locator("#task-list li")).toContainText("Study for test");
    });

    test.afterEach(async ({page}) => {
        const ts = new TaskManager();
        ts.clearTasks();
    })
});
