import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();

  return data.results;
};

export const usePokemon = (limit?: number) => {
  const url = limit
    ? `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    : "https://pokeapi.co/api/v2/pokemon";

  const { data, error } = useSWR(url, fetcher);

  return {
    data: data || [],
    isLoading: !error && !data,
    error,
  };
};
