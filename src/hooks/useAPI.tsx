import axios from 'axios';

export const useAPI = (url: string = "https://fakestoreapi.com/products") => {
  const get  = async (params:string = "") => {
    try{
      const response = await axios.get(url+"/"+params);
      return response.data;
    }
    catch (error){
        console.error(error);
        return [];
    }
  };

  return { get };
};