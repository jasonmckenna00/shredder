import axios from 'axios' 

export const FAVORITE = "FAVORITE"
export const INDEX = "INDEX"
export const SEARCH = "SEARCH"

export const fetchAllMountains = () =>{
  return axios.get('api/Mountains/') 
}

export const fetchMountain = (id) =>{
  return axios.get('api/Mountains/' + id) 
}

export const fetchMultipleMountains = (mountainIds) =>{
  let mountainIdsStr = mountainIds.join(',')
  return axios.get('api/Mountains/?id__in=' + mountainIdsStr)
}

export const fetchMountainsByString = (searchTerm) => {
  
  return axios.get(`api/Mountains/?search=${searchTerm}`) 
}