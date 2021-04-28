export const titleCase = (str: string): string => {
  let newStr: string = '';
  let strReplace: string = replaceSpecialChar(str, '_');

  for (let i = 0; i < strReplace.length; i++) {
    const getChar: string = strReplace.charAt(i);
    const toUpper: string = getChar.toUpperCase();

    if (i === 0 || isSpecialChar(strReplace.charAt(i - 1))) {
      newStr += toUpper;
    } else if (getChar === toUpper && !isSpecialChar(strReplace.charAt(i - 1)) && !isSpecialChar(getChar)) {
      newStr += '_' + toUpper;
    } else {
      newStr += getChar;
    }
  }

  return replaceSpecialChar(newStr, ' ');
};


export const replaceSpecialChar = (str: string, char: string): string => {
  return str.replace(/[^a-zA-Z ]/g, char);
}

export const isSpecialChar = (str: string): boolean => {
  return str.match(/^[^a-zA-Z0-9]+$/) ? true : false;
}
