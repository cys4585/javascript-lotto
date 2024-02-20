export const LOTTO_LENGTH = 6;

class Lotto {
  _numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);

    this._numbers = numbers;
  }

  get numbers() {
    return [...this._numbers];
  }

  #validateNumbers(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error();
    }

    if (numbers.some((number) => typeof number !== "number")) {
      throw new Error();
    }

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error();
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error();
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error();
    }
  }
}

export default Lotto;
