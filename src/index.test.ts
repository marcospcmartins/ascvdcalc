import {
  testfunc,
  testfunc2
} from '@src/index'


test("Hello to tests", () => {
  expect(testfunc()).toBe('hello tests')
})

test("Test testfunc2 with arg", () => {
  expect(testfunc2('some arg')).toBe('hello tests againsome arg')
})
