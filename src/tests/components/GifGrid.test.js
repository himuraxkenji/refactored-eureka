import '@testing-library/jest-dom';
import React from 'react';
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {

  const category = 'One Punch';
  // let wrapper = shallow(<GifGrid category={category} />);

  // beforeEach(() => {
  //   jest.clearAllMocks();
  //   wrapper = shallow(<GifGrid category={category} />)
  // })


  test('debe de mostrarse correctament <GifGrid />', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();

  });


  test('debe de mostrar items cuando se cargan imagenes use useFetchGifs', () => {

    const gifs = [{
      id: 'url',
      url: 'https://false.jpg',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });


    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  })

});
