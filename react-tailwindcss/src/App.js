import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './Componenents/Main';
import { getAllData }  from './Redux/reducer/getAllData';
import { getPersons } from './services/getRequest';





function App() {
  
  const { allData} = getAllData.actions


  let dispatch = useDispatch()

  useEffect(() => {

    getPersons().then(res =>{

  dispatch(allData(res.data))
 })
//  console.log(getPersons(),"getpersons")
 console.log("ishledi")


  },[])

  // console.log("Bashladi")

  var personData = useSelector(state => state)

  console.log(personData,"personData")

  // const mapedData = personData?.home?.value

  return (
    <div className="App">
      <header className="App-header">
    
     {/* {  personData?.home?.value(el => <p> {el.name}</p>) } */}
  {/* {   console.log(mapedData?.map(el => el.name),"personData")} */}
  {/* {console.log(mapedData?.map(el => el),"mapedData")} */}

  {/* {Object.values(mapedData).map(el => el)} */}
  {/* {personData?.home?.value.map(el => (<p key={el.id}>{el.name}</p>))} */}





  <Main  person = {personData }/> 

  
      </header>
    </div>
  );
}

export default App;