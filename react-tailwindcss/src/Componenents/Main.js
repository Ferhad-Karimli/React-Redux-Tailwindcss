import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getPersons } from '../services/getRequest'

export default function Main(props) {
    // console.log(props,'props')

    // var data = props.person.home.value

    const [ state,SetState] = useState()
console.log(props,"props")

    // useEffect(() => {

    //   axios.get("https://jsonplaceholder.typicode.com/users")
    //   .then(el => console.log(el.data))
    // //   .then(el => SetState(el.data))
    //  },[])

    
    // console.log("Ferhad")
    // console.log(state,"state")
    
    //   },[])

    //   console.log(state,"state")





  return (
    <>

     

        {props?.person?.home?.value[0]?.map(el => (<>
        
        
    

        
      

        {/* { data.map(el => (<p key={el.id} className="bg-black text-white text-3xl font-bold underline text-center"     >{el.name}{el.phone} {el.email} {el.website}</p>))} */}

        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg> */}

 <div class="h-screen bg-gray-100">

<section class="md:h-full flex items-center text-gray-600">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-12">
                {/* <p class="text-base md:text-lg text-indigo-700 mb-1">{el?.name}</p>
                <p class="text-4xl md:text-6xl text-gray-700 font-semibold">{el?.phone}</p>
                <p class="text-4xl md:text-6xl text-gray-700 font-semibold">{el?.phone}</p>
                <p class="text-4xl md:text-6xl text-gray-700 font-semibold">{el?.website}</p> */}
        

            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-3 sm:w-1/2 lg:w-1/4">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://picsum.photos/id/188/720/400" alt="blog"/>
                        <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            
                            <h1 class="text-2xl font-semibold mb-3">{el?.name}</h1>
                            <p class="leading-relaxed mb-3">{el?.email}</p>
                            <p class="leading-relaxed mb-3">{el?.phone}</p>
                            <p class="leading-relaxed mb-3">{el?.website}</p>
                        



                            <div style={{backgroundColor:"red",justifyContent:"center !important"}} class="flex flex-row items-center">
  <div class="basis-1/3 ">01</div>
  <div class="basis-1/3 ">02</div>
  <div class="basis-1/3 ">03</div>
</div>
                        </div>
                    </div>
                </div>
            

            </div>
        </div>
    </section>
    </div>








     </>)) } 


    </>
  )
}
