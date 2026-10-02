export const LANGUAGE_KEY: string;
export function preferredLanguage(saved: string | null | undefined, languages?: readonly string[]): 'en' | 'zh';
export function localizedUrl(locale: 'en' | 'zh', current: string | URL): URL;
