import test from 'node:test';
import assert from 'node:assert/strict';
import { preferredLanguage, localizedUrl } from '../src/lib/language.mjs';

test('Chinese regional variants use Chinese; other primary languages use English', () => {
  for (const first of ['zh', 'zh-CN', 'zh-TW', 'zh-Hant-HK', 'ZH-sg']) {
    assert.equal(preferredLanguage(null, [first, 'en']), 'zh');
  }
  for (const first of ['en-US', 'fr-FR', 'ja', 'de']) {
    assert.equal(preferredLanguage(null, [first, 'zh-CN']), 'en');
  }
  assert.equal(preferredLanguage(null, []), 'en');
});

test('a valid manual preference wins; corrupt storage falls back to the browser', () => {
  assert.equal(preferredLanguage('en', ['zh-CN']), 'en');
  assert.equal(preferredLanguage('zh', ['en-US']), 'zh');
  assert.equal(preferredLanguage('fr', ['zh-CN']), 'zh');
});

test('language switching preserves the section and query without changing origin', () => {
  assert.equal(localizedUrl('zh', 'https://lianting.wang/en/?ref=profile#projects').href, 'https://lianting.wang/zh/?ref=profile#projects');
  assert.equal(localizedUrl('en', 'http://localhost:4321/zh/#publications').href, 'http://localhost:4321/en/#publications');
  assert.throws(() => localizedUrl('fr', 'https://lianting.wang/'), TypeError);
});
