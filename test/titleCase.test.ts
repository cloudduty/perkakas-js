import { titleCase, isSpecialChar, replaceSpecialChar} from '../src/titleCase';

describe('title case', () => {
  it('if the string is a camel-case', () => {
    expect(titleCase('myPlaylist')).toBe('My Playlist')
  })
  it('if the string is a snake-case', () => {
    expect(titleCase('my_playlist')).toBe('My Playlist')
  })
  it('if the string is a dash-case', () => {
    expect(titleCase('my-playlist')).toBe('My Playlist')
  })
})

describe('is special character', () => {
  it('validate string is a special character ?', () => {
    expect(isSpecialChar('-_,.+=)(*&^%$#@!`')).toBe(true)
  })
  it('validate string (hello) is a special character', () => {
    expect(isSpecialChar('hello')).toBe(false)
  })
})

describe('replace special character with "string"', () => {
  it('replace special character in string', () => {
    expect(replaceSpecialChar('my-playlist', '_')).toBe('my_playlist')
  })
})