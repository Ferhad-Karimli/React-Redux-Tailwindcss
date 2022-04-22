import {
    createSlice
} from '@reduxjs/toolkit'


export const getAllData = createSlice({
    name: "Home",
    initialState: {
        value: ""
    },
    reducers: {
        allData: (state, action) => {

            state.value = action.payload
        }
    }
})



export const {
    allData,
} = getAllData.actions





export default getAllData.reducer