
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { getAllData }  from './Redux/reducer/getAllData';
import { getPersons } from './services/getRequest';





function App() {
  const { allData} = getAllData.actions

  let dispatch = useDispatch()
  var look = useSelector(state => state)

  console.log(look,"look")

  useEffect(() => {

    getPersons().then(res =>{

  dispatch(allData(res.data))
 })


console.log(allData(),"allData")
  },[allData])

  return (
    <div className="App">
      <header className="App-header">
       Hello
      </header>
    </div>
  );
}

export default App;
