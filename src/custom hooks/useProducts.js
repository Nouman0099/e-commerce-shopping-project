import useSWR from "swr";
import { fetcher } from "../services/apiService";

function useProducts(url) {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, isLoading, error, mutate };
}

export default useProducts;
