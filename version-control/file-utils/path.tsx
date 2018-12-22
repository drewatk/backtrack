import fs from 'fs-extra';

/**
 * Reolves if the path doesn't exist, rejects if it does
 * @param {String} path
 */
export function pathExist(path: String) {
  return fs.existsSync(path);
}
