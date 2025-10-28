import { test, expect } from "@playwright/test"

test.describe("Demo Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("should display the form with all fields", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Welcome")
    await expect(page.locator("#name")).toBeVisible()
    await expect(page.locator("#email")).toBeVisible()
    await expect(page.locator("#submitBtn")).toBeVisible()
  })

  test("should fill form and submit successfully", async ({ page }) => {
    await page.fill("#name", "John Doe")
    await page.fill("#email", "john@example.com")
    await page.click("#submitBtn")

    const message = page.locator("#message")
    await expect(message).toContainText("Thank you, John Doe!")
    await expect(message).toContainText("john@example.com")
    await expect(message).toHaveClass(/bg-green-100/)
  })

  test("should clear form after submission", async ({ page }) => {
    await page.fill("#name", "Jane Smith")
    await page.fill("#email", "jane@example.com")
    await page.click("#submitBtn")

    await expect(page.locator("#name")).toHaveValue("")
    await expect(page.locator("#email")).toHaveValue("")
  })

  test("should require name field", async ({ page }) => {
    await page.fill("#email", "test@example.com")

    const isValid = await page.evaluate(() => {
      return document.getElementById("demoForm").checkValidity()
    })

    expect(isValid).toBe(false)
  })

  test("should require email field", async ({ page }) => {
    await page.fill("#name", "Test User")

    const isValid = await page.evaluate(() => {
      return document.getElementById("demoForm").checkValidity()
    })

    expect(isValid).toBe(false)
  })

  test("should track button clicks", async ({ page }) => {
    await page.click("#submitBtn")
    await page.click("#submitBtn")

    const clickCount = await page.getAttribute("#submitBtn", "data-clicks")
    expect(clickCount).toBe("2")
  })

  test("should validate email format", async ({ page }) => {
    await page.fill("#name", "Test User")
    await page.fill("#email", "invalid-email")

    const isValid = await page.evaluate(() => {
      return document.getElementById("demoForm").checkValidity()
    })

    expect(isValid).toBe(false)
  })
})
