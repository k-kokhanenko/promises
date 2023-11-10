import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader 1', () => {
  GameSavingLoader.load().then((result) => {
    expect(result).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});
