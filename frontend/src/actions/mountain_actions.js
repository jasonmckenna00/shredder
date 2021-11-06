import * as MountainUtil from "../utils/mountain_util"
export const GET_ALL_MOUNTAINS = 'GET_ALL_MOUNTAINS'
export const GET_MOUNTAIN = 'GET_MOUNTAIN'

export const getAllMountains = () => dispatch => {
  return MountainUtil.fetchAllMountains()
  .then( resp => dispatch({type: GET_ALL_MOUNTAINS, payload: resp.data}))
  .catch(err => console.log(err))
}