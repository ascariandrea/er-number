type I = 'I';
type V = 'V';
type X = 'X';
type L = 'L';
type C = 'C';
type D = 'D';
type M = 'M';

type RomanNumerals = I | V | X | L | C | D | M;

// structure that represents the symbols needed by each single value in given number by its position
const valueSplitRomans: RomanNumerals[][] = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];


function toRoman(number: number, romanSymbols: RomanNumerals[]): RomanNumerals[] {

  // function that accumulates the roman symbols needed to represent the given number on first call
  function toRomanConversion(value: number, acc: RomanNumerals[] = []): RomanNumerals[] {
    if (value === 0) {
      return acc;
    }

    // handle variations
    if (value === 10) {
      return toRomanConversion(value - 10, acc.concat(romanSymbols[2]));
    }

    if (value === 9) {
      return toRomanConversion(value + 1, acc.concat(romanSymbols[0]));
    }

    if (value >= 5) {
      return toRomanConversion(value - 5, acc.concat(romanSymbols[1]));
    }

    if (value === 4) {
      return toRomanConversion(value + 1, acc.concat(romanSymbols[0]));
    }

    // recursively decrease value and concat roman symbol that identifies a single unit in the current span
    return toRomanConversion(value - 1, acc.concat(romanSymbols[0]));
  }

  return toRomanConversion(number);
}

function valuesToRomanNumerals(values: number[], romans: Array<RomanNumerals[]>): string[] {
  return values.map((v, k) => toRoman(v, romans[k]).join('')).reverse();
}

// split given numbers in its ones, tens, hundreds, thousands
function splitNumberInValues(number: number, acc: number[] = []): number[] {
  if (number === 0) {
    return acc;
  }
  const value = Math.floor(number % 10);
  return splitNumberInValues((number - value) / 10, acc.concat(value));
}

type Input = string | number;

export default function romanNumeralGenerator(input: Input): string {
  // convert input to number
  const number = +input;

  // throw an error if conversion fails
  if (isNaN(number)) {
    throw new Error(`Can't convert ${input} to number.`);
  }

  // throw an error if number exceeds the given bounds
  if (number < 1 || number > 3999) {
    throw new Error(`Expected a number between 1 and 3999, received ${number}`);
  }

  const valueSplitNumbers = splitNumberInValues(number);
  const romanNumerals = valuesToRomanNumerals(valueSplitNumbers, valueSplitRomans);

  return romanNumerals.join('');
}
