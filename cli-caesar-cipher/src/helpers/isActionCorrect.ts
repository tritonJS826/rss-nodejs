const isActionCorrect = (action: string): boolean => {
  return action === "decode" || action === "encode";
};

export default isActionCorrect;
