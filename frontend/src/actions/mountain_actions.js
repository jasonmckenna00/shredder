import * as MountainUtil from "../utils/mountain_util"
export const GET_ALL_MOUNTAINS = 'GET_ALL_MOUNTAINS'
export const GET_MOUNTAIN = 'GET_MOUNTAIN'

export const getAllMountains = () => async dispatch => {
  try {
    const resp = await MountainUtil.fetchAllMountains()
    return dispatch({ type: GET_ALL_MOUNTAINS, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}

export const getMountain = (mountain_id) => async dispatch => {
  try {
    const resp = await MountainUtil.fetchMountain(mountain_id)
    return dispatch({ type: GET_MOUNTAIN, payload: resp.data })
  } catch (err) {
    return console.log(err)
  }
}