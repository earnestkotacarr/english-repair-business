import { test, expect } from '@playwright/test'

test.describe('Language Switching Visual Tests', () => {
  test('complete language switching flow with screenshots', async ({ page }) => {
    // Start on Japanese homepage
    await page.goto('/ja')
    await page.waitForLoadState('domcontentloaded')
    
    // Take screenshot of Japanese homepage
    await page.screenshot({ path: 'test-results/ja-homepage.png', fullPage: false })
    
    // Verify Japanese elements
    const heroText = page.locator('h1').first()
    await expect(heroText).toContainText('技術の正確さ')
    
    const navHome = page.getByRole('link', { name: 'ホーム' })
    await expect(navHome).toBeVisible()
    
    const cta = page.getByRole('link').filter({ hasText: '無料1ページミニ監査' }).first()
    await expect(cta).toBeVisible()
    
    // Click language button
    const langButton = page.getByRole('button', { name: /English/i })
    await langButton.click()
    await page.waitForTimeout(1500)
    
    // Take screenshot of English homepage
    await page.screenshot({ path: 'test-results/en-homepage.png', fullPage: false })
    
    // Verify English elements
    await expect(page).toHaveURL(/\/en/)
    await expect(heroText).toContainText('Preserve technical accuracy')
    
    const navHomeEn = page.getByRole('link', { name: 'Home' })
    await expect(navHomeEn).toBeVisible()
    
    const ctaEn = page.getByRole('link').filter({ hasText: 'Request Free 1-Page' }).first()
    await expect(ctaEn).toBeVisible()
    
    // Go to services page
    await page.goto('/en/services')
    await page.screenshot({ path: 'test-results/en-services.png', fullPage: false })
    
    // Switch back to Japanese on services page
    const langButtonJa = page.getByRole('button', { name: /日本語/ })
    await langButtonJa.click()
    await page.waitForTimeout(1500)
    
    // Verify we're on Japanese services page
    await expect(page).toHaveURL(/\/ja\/services/)
    await page.screenshot({ path: 'test-results/ja-services.png', fullPage: false })
    
    const servicesTitle = page.locator('h1')
    await expect(servicesTitle).toContainText('サービス')
    
    console.log('✅ Language switching working correctly!')
    console.log('Screenshots saved to test-results/')
  })
})