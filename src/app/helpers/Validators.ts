export class Validators {
  public static ValidateTextEmpty(input: string): boolean {
    if (input != undefined && input.length == 0) {
      return false;
    } else return true;
  }

  public static ValidateNumberGreaterThenZero(number: number): boolean {
    if (isNaN(number)) return false;

    if (number <= 0) return false;

    return true;
  }
}
