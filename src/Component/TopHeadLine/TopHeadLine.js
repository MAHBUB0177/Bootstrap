import React, { useEffect, useState } from 'react';
import axios from 'axios';
import News from '../News/News';
import Material from '../Material UI/Material';
import './Top.css'
const TopHeadLine = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [person, setPerson] = useState('')

   useEffect(() => {
      setTimeout(function () {
         getData()
      }, 3000)

   }, [])

   async function getData() {

      const { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=b5ed12761ac94962a82162f98792835b')
      setData(data.articles)
      setLoading(false)
   }
   if (loading) {
      return <h2 >loading......</h2>
   }



   const handelPerson = (person) => {
      setPerson(person)


   }
   return (
      <div className="one">


         <div className="two">
            {
               data.map(data => <News data={data} handelPerson={handelPerson} />)
            }


         </div>
         <div className="three">
            {

               <Material data={person} />
            }
            {/* <Material /> */}
         </div>

      </div>
   );
};

export default TopHeadLine;