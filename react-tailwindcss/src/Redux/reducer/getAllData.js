import {
    createSlice
} from '@reduxjs/toolkit'


export const getAllData = createSlice({
    name: "Home",
    initialState: {
        value: []

    },
    reducers: {
        allData: (state, action) => {
   
            console.log(action,"action")

            state.value = [...state.value ,action.payload]
        }
    }
})



export const {
    allData,
} = getAllData.actions

// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(allData(amount))
//     }, 1000)
//   }
  




export default getAllData.reducer