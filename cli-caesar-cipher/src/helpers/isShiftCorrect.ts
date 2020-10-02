const isShiftCorrect = (shift: string): boolean => {
  const shiftNumber = +shift;

  const isNumber = Number.isInteger(shiftNumber);
  const isBiggerThanMinus27 = shiftNumber > -27;
  const isLessThanMinus27 = shiftNumber < 27;

  return isNumber && isLessThanMinus27 && isBiggerThanMinus27;
};

export default isShiftCorrect;
