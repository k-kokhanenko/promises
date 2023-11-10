import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise(((resolve, reject) => {
      const data = read();
      data.then(
        (result) => {
          json(result).then(
            (jsonResult) => {
              resolve(jsonResult);
            },
            (error) => {
              reject(error);
            },
          );
        },
        (error) => {
          reject(error);
        },
      );
    }));
  }
}
