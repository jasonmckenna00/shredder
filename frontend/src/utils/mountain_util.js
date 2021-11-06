import axios from 'axios' 
export const fetchAllMountains = () =>{
  return axios.get('api/Mountains/') 
}