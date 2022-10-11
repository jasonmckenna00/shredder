import * as MountainUtil from "../utils/mountain_util"
export const GET_ALL_MOUNTAINS = 'GET_ALL_MOUNTAINS'
export const GET_MOUNTAIN = 'GET_MOUNTAIN'
export const GET_FAVORITE_MOUNTAINS = 'GET_FAVORITE_MOUNTAINS'
export const ADD_FAVORITE_MOUNTAIN = 'ADD_FAVORITE_MOUNTAIN'
export const REMOVE_FAVORITE_MOUNTAIN = "REMOVE_FAVORITE_MOUNTAIN"
export const SEARCH_MOUNTAINS = 'SEARCH_MOUNTAINS'
export const CLEAR_SEARCH_MOUNTAINS = 'CLEAR_SEARCH_MOUNTAINS'
export const GET_WEATHER = 'GET_WEATHER'



export const getAllMountains = () => async dispatch => {
  try {
    const resp = await MountainUtil.fetchAllMountains()
    return dispatch({ type: GET_ALL_MOUNTAINS, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}

export const getMountain = (id) => async dispatch => {
  try {
    const resp = await MountainUtil.fetchMountain(id)
    return dispatch({ type: GET_MOUNTAIN, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}

export const getFavoriteMountains = (mountainIds) => async dispatch => {
  try {
    const resp = await MountainUtil.fetchMultipleMountains(mountainIds)
    return dispatch({ type: GET_FAVORITE_MOUNTAINS, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}

export const addFavoriteMountain = (mountainId) => async dispatch => {
  try {
    const resp = await MountainUtil.fetchMountain(mountainId)
    return dispatch({ type: ADD_FAVORITE_MOUNTAIN, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}

export const removeFavoriteMountain = (mountainId) =>  dispatch => {
  try {
    // debugger
    // const resp = await MountainUtil.removeFavoriteMountain(mountainId)
    return dispatch({ type: REMOVE_FAVORITE_MOUNTAIN, payload: mountainId})
  } catch (err) {
    return console.log(err)
  }
}

export const searchMountains = (searchTerm) => async dispatch => {
  try{
    
    const resp = await MountainUtil.fetchMountainsByString(searchTerm)
    return dispatch({type: SEARCH_MOUNTAINS, payload: resp.data})
  } catch (err) {
    return console.log(err)
  }
}

export const getWeather = (locationId) => async dispatch =>{
  try{
    const resp = await MountainUtil.fetchWeather(locationId)
    return dispatch({type: GET_WEATHER, payload: resp.data})
  } catch (err) {
    return console.log(err)
  }
}