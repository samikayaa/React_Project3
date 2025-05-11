import { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import axios from 'axios';


export default function SideBar(props) {
 /* ADIM 1: Bir state tanımlayabilirsin */
 /* ADIM 2: kategorileri buradan alıp CategoryList'e yollayabilirsin: 
            https://fakestoreapi.com/products/categories */
           
 const [categories, setCategories] = useState([]);

 useEffect( () => {
  axios
  .get("https://fakestoreapi.com/products/categories")
  .then( (response) => setCategories(response.data))
  .catch( (error) => console.log(error))
 }, [])

 //ADIM 4: App component'inden gelen propları burada destruct edelim. 
 //        aynı isimlerle kullanalım

 const {category, handleCatChange} = props;

 return (
   <>
     <div className="side-container">
       <h2>Categories</h2>
       <CategoryList categories={categories}/>
     </div>
   </>
 );
}























/*

import react, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';

export default function SideBar(props) {
//ADIM 4: App component'inden gelen propları burada destruct edelim. aynı isimlerle kullanalım

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList
          categories={categories}
          
          //category={category}
          //handleCatChange={handleCatChange}
          
        />
      </div>
    </>
  );
}

*/