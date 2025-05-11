import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  /* ADIM 1: seçilen kategoriyi tutmak için category isimli bir state tanımlayalım ve
             başlangıç değeri 'electronics' olsun. */

  /* ADIM 2: seçilen kategoriyi değiştirecek bir change handler fonskiyonu yazalım ve 
             adı handleCatChange olsun. */

  const [category, setCategory] = useState("electronics");

  function handleCatChange(event) {
    setCategory(event.target.value)
  }

  return (
    <>
      <Header />
      <div className="content-section">
        {/* ADIM 3: category ve handleCatChange'i aynı isimlerle prop olarak ilgili 
                    component/componentlere yollayalım */}
        <SideBar category={category} handleCatChange={handleCatChange}/>
        <Products category={category}/>
      </div>
      <Footer />
    </>
  );
}
 
export default App;
