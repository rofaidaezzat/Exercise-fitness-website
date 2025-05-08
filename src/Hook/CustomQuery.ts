import { useQuery } from "@tanstack/react-query";

import { axiosInstanceExercise } from "../config/axios.config";
interface IAthenticatedQuery{
    queryKey:string[],
    url:string,

}
const useCustomQuery=({queryKey,url}:IAthenticatedQuery)=>{
return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const { data } = await axiosInstanceExercise.get(url);
return data
},
})
}
export default useCustomQuery