import Category from './Category.jsx';

export default function CategoryList(props) {
 /* ADIM 2: categorileri prop olarak alabilirsin */
 const {categories} = props;
 return (
   <>
     {categories.map((item, index) => (
       <Category category={item} key={index} />
     ))}
   </>
 );
}

























/*


import Category from './Category.jsx';
export default function CategoryList(props) {
  const { categories, category, handleCatChange } = props;
  return (
    <>
      {categories.map((item, index) => (
        <Category
          category={item}
          key={index}
          activeCategory={category}
          handleCatChange={handleCatChange}
        />
      ))}
    </>
  );
}

*/