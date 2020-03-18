import { runTestFor } from './helper';

test('should be able to handle arrays', () => {
  const result = runTestFor('const1.ts');
  expect(result).toBe(`declare module "test" {
  export const TEST_ARRAY: Array<{
    value: string;
    label: string;
  }>;
}`);
});

test('should be able to handle regular expressions', () => {
  const result = runTestFor('const2.ts');
  expect(result).toBe(`declare module "test" {
  export const IS_TELEPHONE: RegExp;
}`);
});

test('should be able to handle computed properties', () => {
  const result = runTestFor('const3.ts');
  expect(result).toBe(`declare module "test" {
  export const foo: {
    [x: string]: number;
  };
}`);
});
