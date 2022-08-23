import React, {useState} from 'react';

export function SearchBar(props) {
  const {search} = props
  const [searchValue, onSetSearchValue] = useState('');


  const onSubmit = e => {
    e.preventDefault();
    search(searchValue)
  }
  const handleClearBtn = () => {
    search('');
    onSetSearchValue('')
  }
  return (

    <div className='flex'>
      <div className='container'>
        <input
          className='search-field'
          onChange={e => onSetSearchValue(e.target.value.toUpperCase())}
          value={searchValue}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Wyszukaj"
        />
        <button
          onClick={handleClearBtn}
          className="btn search-btn clearBtn pointner"
        >
          <span>X</span>
        </button>


      </div>
      <button
        onClick={onSubmit}
        className="btn search-btn pointner"
      >
        <span>Szukaj</span>
      </button>
    </div>

  );
}

export default SearchBar
