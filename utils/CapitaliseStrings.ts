export function capitaliseStrings(string: string): string {
  const splitString = string.split(" ");

  const capitalisedStrings = splitString.map((str) => {
    if (str.length === 0) {
      return str;
    }
    return str[0].toUpperCase() + str.slice(1);
  });

  const capitalisedString = capitalisedStrings.join(" ");

  return capitalisedString;
}
