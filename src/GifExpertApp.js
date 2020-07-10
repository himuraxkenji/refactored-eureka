import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['One Punch']);


  // const handleAdd = () => {
  //   // setCategorias([...categorias, 'HunterXHunter']);
  //   setCategorias(cats => [...cats, 'HunterXHunter']);
  // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategorias} />
      <hr />

      <ol>
        {
          categorias.map(categoria => (
            <GifGrid
              key={categoria}
              category={categoria}
            />
          ))
        }
      </ol>
    </>

  );
};

