import {
  validateSex,
} from './validation'

describe('Given patient sex validate field', () => {

  const testCases = [
    [null, {sex: ['Sex arg must be specified, male or female']}],
    ['something', {sex: ['Sex must either be male or female, given something']}],
    ['female', null],
    ['male', null]
  ]

  //@ts-ignore
  test.each(testCases)('given sex: %s, return %o ', (value, expected) => {
    expect(validateSex(value)).toStrictEqual(expected)
  })

})
