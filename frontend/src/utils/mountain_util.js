import axios from 'axios' 
export const fetchAllMountains = () =>{
  return axios.get('api/Mountains/') 
}

export const fetchMountain = (mountain_id) =>{
  return axios.get('api/Mountains/' + mountain_id) 
}