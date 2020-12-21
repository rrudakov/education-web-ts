import { GYMNASTICS_SUBTYPES } from '../constants';

export const splitIntoChunks: <T>(arr: T[], chunkSize: number) => T[][] = (
  arr,
  chunkSize
) => {
  let i = 0;
  let arrLength = arr.length;
  let result = [];

  for (i = 0; i < arrLength; i += chunkSize) {
    let chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
};

export const getGymnasticURLBySubtypeId = (subtypeId: number): string => {
  const foundItem = GYMNASTICS_SUBTYPES.find((g) => g.subtypeId === subtypeId);
  if (foundItem !== undefined) {
    return foundItem.url;
  } else {
    return '/';
  }
};
