import { test, expect } from '@playwright/test'

test.describe('Language Switching (Simplified)', () => {
  test('should switch from Japanese to English', async ({ page }) => {
    // Navigate to Japanese homepage
    await page.goto('/ja')
    
    // Verify Japanese content is visible
    const heroHeadline = page.locator('h1').first()
    await expect(heroHeadline).toContainText('技術')
    
    // Find and click the language switch button
    const langButton = page.getByRole('button', { name: /English/i })
    await langButton.click()
    
    // Simply wait a bit for navigation
    await page.waitForTimeout(2000)
    
    // Verify we're now on English version
    await expect(page).toHaveURL(/\/en/)
    
    // Verify English content is visible
    await expect(heroHeadline).toContainText('Preserve')
  })

  test('should switch from English to Japanese', async ({ page }) => {
    // Start on English page
    await page.goto('/en')
    
    // Verify English content
    const heroHeadline = page.locator('h1').first()
    await expect(heroHeadline).toContainText('Preserve')
    
    // Find and click the language switch button
    const langButton = page.getByRole('button', { name: /日本語/ })
    await langButton.click()
    
    // Simply wait a bit for navigation
    await page.waitForTimeout(2000)
    
    // Verify we're back on Japanese version
    await expect(page).toHaveURL(/\/ja/)
    await expect(heroHeadline).toContainText('技術')
  })

  test('visual check of language button', async ({ page }) => {
    await page.goto('/ja')
    
    // Take screenshot before clicking
    const langButton = page.getByRole('button', { name: /English/i })
    await expect(langButton).toBeVisible()
    
    // Check button has icon
    const icon = langButton.locator('svg')
    await expect(icon).toBeVisible()
    
    // Click and verify it changes
    await langButton.click()
    await page.waitForTimeout(2000)
    
    // Now button should show Japanese
    const japaneseButton = page.getByRole('button', { name: /日本語/ })
    await expect(japaneseButton).toBeVisible()
  })
})