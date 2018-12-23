import fs from 'fs-extra';

/**
 * Write given object to file in given path
 * @param {String} path
 * @param {Object} obj
 */
export function writeJSONToFile(path: String, obj: Object) {
  return new Promise((resolve, reject) => {
    fs.writeJSON(path, obj, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

/**
 * Read JSON obj from given path
 * @param {String} path
 */
export function readJSONFromFile(path: String) {
  return new Promise((resolve, reject) =>
    fs.readJSON(path, (err, obj) => {
      if (err) reject(err);
      else resolve(obj);
    })
  );
}
