import { useState } from "react";
import { GiftGrid } from "./GiftGrid";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onChange = ({ target }) => {
    setInputValue( target.value );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 2 ) return; 
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type='text'
        placeholder='Add Category'
        value={ inputValue }
        onChange={ onChange }
    />
    </form>
  )
};