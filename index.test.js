describe('no undefined', () => {
  test('hello', () => {
    expect('hello').not.toBe(undefined);
  });
});
