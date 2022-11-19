const numToStr = require('./script');

const testcases = [7, 42, 1999, 2001, 17999, 100001, 342251, 1300420];

test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[0])).toBe('seven');
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[1])).toBe('forty-two');
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[2])).toBe('nineteen hundred and ninety-nine');
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[3])).toBe('two thousand and one');
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[4])).toBe(
    'seventeen thousand nine hundred and ninety-nine'
  );
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[5])).toBe('one hundred thousand and one');
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[6])).toBe(
    'three hundred and forty-two thousand two hundred and fifty-one'
  );
});
test('Number converted to Numeral successfully.', () => {
  expect(numToStr(testcases[7])).toBe(
    'one million three hundred thousand four hundred and twenty'
  );
});
