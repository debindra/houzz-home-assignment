// hooks/useData.js
import { useQuery } from "@tanstack/react-query";
// import getAllBeers from '../../utils/fetchData';

const getAllBeers = async()=>{
    const baseUrl = "https://api.punkapi.com/v2";
    const res = await fetch(`${baseUrl}/beers?page=${page}&per_page=10`);
    return await res.json();
  }

  const useData = useQuery({
    queryFn: getAllBeers,
    queryKey: ["all-beers"],
  });

// const useData = () => {
//   return useQuery('rows', fetchRows);
// };

export default useData;
