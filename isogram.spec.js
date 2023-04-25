const { isIsogram } = require('./isogram');

describe('isIsogram', () => {
  it('returns true for isograms', () => {
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('subdermatoglyphic')).toBe(true);
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    expect(isIsogram('')).toBe(true);
  });

  it('returns false for non-isograms', () => {
    expect(isIsogram('banana')).toBe(false);
    expect(isIsogram('Mississippi')).toBe(false);
    expect(isIsogram('AaBbCc')).toBe(false);
  });

  it('treats uppercase and lowercase letters as equivalent', () => {
    expect(isIsogram('IsOgRaM')).toBe(true);
    expect(isIsogram('Alphabet')).toBe(false);
    expect(isIsogram('AbCDEFGHIJKlMnoPqrStuvWxyz')).toBe(true);
  });

  it('handles words with repeated characters at the beginning or end', () => {
    expect(isIsogram('apple')).toBe(false);
    expect(isIsogram('orange')).toBe(true);
    expect(isIsogram('mississippi')).toBe(false);
    expect(isIsogram('deed')).toBe(false);
  });

  it('returns true for spaces and hyphens', () => {
    expect(isIsogram('ba  c')).toBe(true);
    expect(isIsogram('------')).toBe(true);
  });
});
