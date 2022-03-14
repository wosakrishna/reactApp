              import React,{useState,useEffect} from 'react'

              const Hand = () => {

                const[results,setResults]=useState([])
              useEffect(() => {
              fetch("https://randomuser.me/api/?results=5")
              .then(response => 
                 response.json()
              )
              .then(data => {
                console.log(data)
              setResults(data.results)
              });
              }, [])

                return (
                  <div>   <div >
                     {
                       results.map((result,index)=>{
                         return(
                         <div key={index}>
                           name:{result.name.first},<br />
                           Email:{result.email} <br />
                           ID_Name:{result.id.name} <br />
                           Age:{result.dob.age}
                           <br />
                           <br /><br />

                           

                         </div>
                       )})
                     }
                    </div>
                    

                  </div>
                )
              }

              export default Hand