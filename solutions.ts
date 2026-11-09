//* Problem 1: Optional / Default parameter
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};
//* Problem 2: Union type + Type narrowing (typeof)
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  return input ? "Active" : "Inactive";
};
