import { localStoreScore, getLocalScores, storeScores } from './LocalStr-mock';

describe('Test modules belongin to gameHelper file', () => {
  const scores = getLocalScores();
  test('Receive [0, 0] when localStorage is empty', () => {
    expect(scores.length).toBe(2);
  });

  test('Store an array', () => {
    const scores = [1000, 2000];
    localStoreScore(scores);
    const result = getLocalScores();
    expect(result.length).toBe(scores.length);
  });

  test('Store an array, then store a bigger value and request it back', () => {
    const scores = [1000, 2000];
    localStoreScore(scores);
    scores[0] = 3000;
    storeScores(scores[0]);
    const result = getLocalScores();
    expect(result.length).toBe(scores.length);
  });
});