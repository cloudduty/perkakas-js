export const isEmpty = (val: any): boolean => {
  if (typeof val === 'function' || typeof val === 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
    return false;

  if (!val || !val.length || val === 0) return true;

  if (typeof val === 'object') {
    // empty object
    let r = true;

    // eslint-disable-next-line no-unused-vars
    for (const _f in val) r = false;
    return r;
  }
  return false;
};
