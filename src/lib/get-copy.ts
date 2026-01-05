type Dictionary = Record<string, unknown>;

export function getCopy(dictionary: Dictionary, key: string) {
  return key.split(".").reduce<unknown>((value, segment) => {
    if (typeof value === "object" && value !== null && segment in value) {
      return (value as Dictionary)[segment];
    }
    return "";
  }, dictionary) as string;
}
