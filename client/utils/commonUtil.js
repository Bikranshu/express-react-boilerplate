/**
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export const isNull = (value) => {
  return value === null;
};

/**
 * Checks if `value` is the `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
export const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

/**
 * Checks if `obj` is an empty object.
 *
 * @param {*} obj The obj to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const toUpper = (v, prev) => {
  if (v === prev) {
    return v;
  }
  return v && v.charAt(0).toUpperCase() + v.slice(1);
};

export const stringExplode = (str, delimiter) => {
  return str.split(delimiter);
};

export const convertStingToPascalCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const arrayCompare = (arr1, arr2) => {
  if (!arr1 || !arr2) return;
  let result;
  arr1.forEach((e1, i) =>
    arr2.forEach((e2) => {
      if (e1.length > 1 && e2.length) {
        result = arrayCompare(e1, e2);
      } else if (e1 !== e2) {
        result = false;
      } else {
        result = true;
      }
    })
  );
  return result;
};

export const stringCompare = (str1, str2) => {
  const string1 = !isEmpty(str1) ? str1.toString() : '';
  const string2 = !isEmpty(str2) ? str2.toString() : '';
  return string1 === string2;
};

export const objectCompare = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isBase64 = (str, mimeRequired = true) => {
  if (str instanceof Boolean || typeof str === 'boolean' || str === '') {
    return false;
  }
  let regex = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?';
  let mimeRegex = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)';
  if (mimeRequired === true) {
    regex = mimeRegex + regex;
  }
  return new RegExp('^' + regex + '$', 'gi').test(str);
};
