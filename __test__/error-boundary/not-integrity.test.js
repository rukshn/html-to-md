const html2Md = require('../../src/index')

describe('not integrity test', () => {

  it('test-1', () => {
    let str='</ol>\n' +
      '<blockquote>\n' +
      '<ol>\n' +
      '<li>bq-nest-2</li>\n' +
      '</ol>\n' +
      '<blockquote>\n' +
      '<ol>\n' +
      '<li>bq-nest-3</li>\n' +
      '</ol>\n' +
      '</blockquote>\n' +
      '</blockquote>\n' +
      '</blockquote>\n' +
      '</li>\n' +
      '</ul>\n' +
      '</li>'

    expect(html2Md(str)).toBe('\n' +
      '\n' +
      '>1. bq-nest-2\n' +
      '>\n' +
      '>>1. bq-nest-3\n')
  })

})


