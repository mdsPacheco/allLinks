import { useMutation } from 'react-query';
import { queryClient } from '../services/queryClinte';
import api from '../services/api';


interface Query {
  cacheKey: string;
  rota: string;
  bodyPost: any;
}


const useCreating = () => {


  const creating = useMutation( async( { cacheKey, rota, bodyPost }: Query) => {
    return await api.post(rota, bodyPost)
    },
    { 
      onSuccess: (data, variables) => {
        queryClient.setQueryData(variables.cacheKey, data)
      },
      onError: (error, variables) => {
        console.log(error);
      }
    }

  );


  return { creating };
};

export default useCreating;