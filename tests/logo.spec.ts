import { test, expect } from '@playwright/test';

test.describe('Logo Loading', () => {
  test('should load the hammer logo image', async ({ page }) => {
    // Go to the homepage
    await page.goto('http://localhost:3000');
    
    // Check if the logo image is present and visible
    const logoImage = page.locator('img[alt="English Repair Logo"]');
    await expect(logoImage).toBeVisible({ timeout: 10000 });
    
    // Check if the image has loaded (not broken)
    const imageSrc = await logoImage.getAttribute('src');
    console.log('Logo image src:', imageSrc);
    
    // Check if image has natural dimensions (means it loaded)
    const imageLoaded = await logoImage.evaluate((img: HTMLImageElement) => {
      return img.naturalWidth > 0 && img.naturalHeight > 0;
    });
    
    expect(imageLoaded).toBeTruthy();
    
    // Also check the text is visible
    const logoText = page.locator('text=English Repair');
    await expect(logoText).toBeVisible();
  });
  
  test('should have working favicon', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check if favicon link exists
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', '/blue-hammer-clean.png');
  });
});