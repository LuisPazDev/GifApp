import { useState } from 'react';
import { AddCategory, GiftGrid  } from './components';
import './App.css';


function GiftApp () {

  const [ categories, setCategories ] = useState(['']);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory ) ) return;
    setCategories([ ...categories, newCategory ])
  }

  return (
    <div className="container">
      <h1> Gift App </h1>
      <AddCategory onNewCategory= { onAddCategory } />
        { 
          categories.map ( ( category ) => (
            <GiftGrid 
              key={ category }
              category={ category }
            />
          )
        )}
    </div>
  );
};

export default GiftApp;
