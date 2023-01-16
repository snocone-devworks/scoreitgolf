export type StringHelpers = {
  isNullOrEmpty(value: string | null | undefined): boolean;
  matches(value1: string | null | undefined, value2: string | null | undefined): boolean;
}

export const stringHelpers: StringHelpers = {
  isNullOrEmpty: function (value: string | null | undefined) {
    if (!value) return true;
    return value.trim().length === 0;
  },
  matches: function (value1: string | null | undefined, value2: string | null | undefined) {
    let fixed1: string = value1 ? value1.trim().toLocaleLowerCase() : '';
    let fixed2: string = value2 ? value2.trim().toLocaleLowerCase() : '';

    return fixed1 === fixed2;
  }
}