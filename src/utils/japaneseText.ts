/**
 * Utility functions for handling Japanese text display
 */

/**
 * Returns appropriate CSS class for Japanese text handling
 * @param locale - The current locale
 * @param additionalClasses - Additional CSS classes to append
 * @returns CSS class string
 */
export const getJapaneseTextClass = (locale: string | undefined, additionalClasses: string = ''): string => {
  const baseClass = locale === 'ja' ? 'ja-text' : '';
  return additionalClasses ? `${baseClass} ${additionalClasses}`.trim() : baseClass;
}

/**
 * Returns inline styles for Japanese text (fallback for components that need inline styles)
 * @param locale - The current locale
 * @returns Style object
 */
export const getJapaneseTextStyle = (locale: string | undefined): React.CSSProperties => {
  if (locale !== 'ja') return {};

  return {
    lineBreak: 'strict',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    WebkitLineBreak: 'strict' as any, // Safari prefix
  };
}