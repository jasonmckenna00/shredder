import {createSlice} from "@reduxjs/toolkit"
const initialState = {}
const mountainsSlice = createSlice({
    name:'mountains',
    initialState,
    reducers: {
        getAllMountains: (state, action) => {
            return {...state, ..._.mapKeys(action.payload, 'id')}
        }
    }
})