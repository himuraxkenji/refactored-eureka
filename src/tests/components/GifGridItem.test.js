import '@testing-library/jest-dom';
import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Prueba en <GrifGridItem />', () => {

  const title = 'Soy un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(
    <GifGridItem
      title={title}
      url={url}
    />
  );


  test('debe mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });


  test('debe tener un parrafo con el title', () => {

    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);

  });


  test('debe de tener la imagen igual al url y alt de los props', () => {

    const img = wrapper.find('img');
    const src = img.prop('src');
    const alt = img.prop('alt');

    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('debe de tener animate__fadeIn', () => {

    const div = wrapper.find('div');
    const animation = div.prop('className');
    const isAnimated = animation.includes('animate__fadeIn');

    expect(isAnimated).toBe(true);

  });

}); 
