import React from 'react';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem
                key={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem
              key={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem
              key={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
