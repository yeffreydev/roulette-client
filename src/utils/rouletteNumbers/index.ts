import { RouletteNumber } from "./types/types";
export const rouletteNumbers: RouletteNumber[] = [
  { id: 0, value: 0, color: "green" },
  { id: 1, value: 32, color: "red" },
  { id: 2, value: 15, color: "black" },
  { id: 3, value: 19, color: "red" },
  { id: 4, value: 4, color: "black" },
  { id: 5, value: 21, color: "red" },
  { id: 6, value: 2, color: "black" },
  { id: 7, value: 25, color: "red" },
  { id: 8, value: 17, color: "black" },
  { id: 9, value: 34, color: "red" },
  { id: 10, value: 6, color: "black" },
  { id: 11, value: 27, color: "red" },
  { id: 12, value: 13, color: "black" },
  { id: 13, value: 36, color: "red" },
  { id: 14, value: 11, color: "black" },
  { id: 15, value: 30, color: "red" },
  { id: 16, value: 8, color: "black" },
  { id: 17, value: 23, color: "red" },
  { id: 18, value: 10, color: "black" },
  { id: 19, value: 5, color: "red" },
  { id: 20, value: 24, color: "black" },
  { id: 21, value: 16, color: "red" },
  { id: 22, value: 33, color: "black" },
  { id: 23, value: 1, color: "red" },
  { id: 24, value: 20, color: "black" },
  { id: 25, value: 14, color: "red" },
  { id: 26, value: 31, color: "black" },
  { id: 27, value: 9, color: "red" },
  { id: 28, value: 22, color: "black" },
  { id: 29, value: 18, color: "red" },
  { id: 30, value: 29, color: "black" },
  { id: 31, value: 7, color: "red" },
  { id: 32, value: 28, color: "black" },
  { id: 33, value: 12, color: "red" },
  { id: 34, value: 35, color: "black" },
  { id: 35, value: 3, color: "red" },
  { id: 36, value: 26, color: "black" },
];

export const getNumberFromRoulette = (val: number) =>
  rouletteNumbers.find((item) => item.value === val);

export const orderRouletteNumbers = rouletteNumbers.sort(
  (a, b) => a.value - b.value
);
