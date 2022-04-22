import { configureStore } from '@reduxjs/toolkit'
import getAllData from './reducer/getAllData'

export default configureStore({
  reducer: {
      home:getAllData
  }
})