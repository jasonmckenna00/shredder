import axios from 'axios' 
export const fetchAllMountains = () =>{
  return axios.get('api/Mountains/') 
}

export const fetchMountain = (id) =>{
  return axios.get('api/Mountains/' + id) 
}