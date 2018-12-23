import fs from 'fs-extra';

/**
 * Creates a File for the given path
 * @param {String} path
 */
export function createFile(path: String) {
  return new Promise((resolve, reject) =>
    fs.createFile(path, err => {
      if (err) reject(err);
      else resolve();
    })
  );
}

/**
 * Deletes the File at the given path
 * @param {String} path
 */
export function deleteFile(path: String) {
  return new Promise((resolve, reject) =>
    fs.unlink(path, err => {
      if (err) reject(err);
      else resolve();
    })
  );
}
