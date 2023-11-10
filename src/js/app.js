import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((result) => {
    console.log(result);
  }, (error) => {
    console.log(`Error: ${error}`);
  });
