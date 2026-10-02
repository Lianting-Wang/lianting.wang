export const LANGUAGE_KEY = 'lianting-language';

/** Only the first browser preference is used; all Chinese variants use zh. */
export function preferredLanguage(saved, languages = []) {
  if (saved === 'en' || saved === 'zh') return saved;
  const first = typeof languages[0] === 'string' ? languages[0].toLowerCase() : '';
  return first === 'zh' || first.startsWith('zh-') ? 'zh' : 'en';
}

export function localizedUrl(locale, current) {
  if (locale !== 'en' && locale !== 'zh') throw new TypeError('Unsupported locale');
  const url = new URL(current);
  url.pathname = `/${locale}/`;
  return url;
}
