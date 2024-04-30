export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// extracts the Pokemon id from the url string associated to each Pokemon
export const extractPokemonIdFromUrl = (url: string) => {
  const match = url.match(/(\d+)\/?$/);

  return match ? String(match[1]) : null;
};
