import useData from "./useData";

export interface Genera {
  id: number;
  name: string;
  image_background: string;
}

const useGeneras = () => useData<Genera>("/genres");

export default useGeneras;
