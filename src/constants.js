export const dateTimeFormat = "YYYY-MM-DD hh:mm a";
export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
export const normalizeName = (name) => {
  const parts = name.split(",");
  let formatted = "";
  for (const part of parts) {
    let perPartFormatted = "";
    const multipleName = part.split(" ");
    const addComma = part === parts[0] ? "," : "";
    if (multipleName.length) {
      for (const multipleNamePart of multipleName) {
        const addSpace =
          multipleName[multipleName.length - 1] === multipleNamePart ? "" : " ";
        perPartFormatted += `${capitalize(multipleNamePart)}${addSpace}`;
      }
    } else {
      perPartFormatted = capitalize(part);
    }
    formatted += `${perPartFormatted}${addComma} `;
  }
  return formatted;
};
