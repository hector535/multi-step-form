export const minErrorObj = (minValue: number) => ({
  message: `Must be ${minValue} or more characters`,
});

export const maxErrorObj = (minValue: number) => ({
  message: `Must be ${minValue} or fewer characters`,
});
