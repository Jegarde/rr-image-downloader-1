import {
  buildCdnImageUrl,
  DEFAULT_CDN_BASE,
} from '../cdnUrl';

describe('buildCdnImageUrl', () => {
  it('uses default cdn.rec.net/img base', () => {
    expect(buildCdnImageUrl(DEFAULT_CDN_BASE, 'photo.jpg')).toBe(
      'https://cdn.rec.net/img/photo.jpg'
    );
  });

  it('supports legacy img.rec.net base (with or without trailing slash)', () => {
    expect(buildCdnImageUrl('https://img.rec.net/', 'foo.png')).toBe(
      'https://img.rec.net/foo.png'
    );
    expect(buildCdnImageUrl('https://img.rec.net', 'foo.png')).toBe(
      'https://img.rec.net/foo.png'
    );
  });

  it('strips {image_name} placeholder for backward compatibility', () => {
    expect(buildCdnImageUrl('https://cdn.rec.net/img/{image_name}', 'a.jpg')).toBe(
      'https://cdn.rec.net/img/a.jpg'
    );
  });

  it('returns empty string when image name is empty', () => {
    expect(buildCdnImageUrl(DEFAULT_CDN_BASE, '')).toBe('');
    expect(buildCdnImageUrl(DEFAULT_CDN_BASE, '   ')).toBe('');
  });
});
