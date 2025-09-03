import { test, expect } from '@playwright/test'

test.describe('Language Switching', () => {
  test('should switch from Japanese to English', async ({ page }) => {
    // Navigate to Japanese homepage
    await page.goto('/ja')
    
    // Check we're on Japanese version
    await expect(page).toHaveURL(/\/ja/)
    
    // Verify Japanese content is visible
    const heroHeadline = page.locator('h1')
    await expect(heroHeadline).toContainText('技術の正確さを守り、伝わる英語に作り替える')
    
    // Find and click the language switch button
    const langButton = page.getByRole('button', { name: /English/i })
    await expect(langButton).toBeVisible()
    await langButton.click()
    
    // Wait for navigation and URL change
    await page.waitForURL('**/en/**')
    
    // Verify we're now on English version
    await expect(page).toHaveURL(/\/en/)
    
    // Verify English content is visible
    await expect(heroHeadline).toContainText('Preserve technical accuracy—rebuild it into English that lands')
    
    // Verify the button now shows Japanese option
    const japaneseButton = page.getByRole('button', { name: /日本語/ })
    await expect(japaneseButton).toBeVisible()
  })

  test('should switch from English back to Japanese', async ({ page }) => {
    // Start on English page
    await page.goto('/en')
    
    // Check we're on English version
    await expect(page).toHaveURL(/\/en/)
    
    // Verify English content
    const heroHeadline = page.locator('h1')
    await expect(heroHeadline).toContainText('Preserve technical accuracy')
    
    // Find and click the language switch button
    const langButton = page.getByRole('button', { name: /日本語/ })
    await expect(langButton).toBeVisible()
    await langButton.click()
    
    // Wait for navigation
    await page.waitForURL('**/ja/**')
    
    // Verify we're back on Japanese version
    await expect(heroHeadline).toContainText('技術の正確さを守り')
    
    // Verify the button shows English option again
    const englishButton = page.getByRole('button', { name: /English/i })
    await expect(englishButton).toBeVisible()
  })

  test('should maintain page context when switching languages', async ({ page }) => {
    // Navigate to services page in Japanese
    await page.goto('/ja/services')
    
    // Verify we're on services page
    const pageTitle = page.locator('h1')
    await expect(pageTitle).toContainText('サービス')
    
    // Switch to English
    const langButton = page.getByRole('button', { name: /English/i })
    await langButton.click()
    
    // Should stay on services page but in English
    await page.waitForURL('**/en/services')
    await expect(page).toHaveURL(/\/en\/services/)
    await expect(pageTitle).toContainText('Services')
  })

  test('language button should have visual feedback', async ({ page }) => {
    await page.goto('/ja')
    
    const langButton = page.getByRole('button', { name: /English/i })
    
    // Check button has icon
    const icon = langButton.locator('svg')
    await expect(icon).toBeVisible()
    
    // Check hover state
    await langButton.hover()
    
    // Button should be clickable
    await expect(langButton).toBeEnabled()
  })
})