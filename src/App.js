import React from 'react';
import Carousel from 'react-elastic-carousel';//Import carousel library
//Import custom components
import Title from "./components/Title";
import SelectedMoviePoster from "./components/SelectedMoviePoster";
import MovieMetadata from "./components/MovieMetadata";
import GenreDropdownContainer from "./components/GenreDropdownContainer";
import MoviePoster from "./components/MoviePoster";
//Import CSS
import './App.css';

//Define breakpoints to show number of movies for respective widths
const breakPoints = [
  { width: 1, itemsToShow: 2, itemsToScroll: 2 },
  { width: 481, itemsToShow: 3 },
  { width: 769, itemsToShow: 6 }
];

const carouselData = {
  items: [
    {id: 1, title: 'item #1'},
    {id: 2, title: 'item #2'},
    {id: 3, title: 'item #3'},
    {id: 4, title: 'item #4'},
    {id: 5, title: 'item #5'},
    {id: 6, title: 'item #6'},
    {id: 7, title: 'item #7'},
    {id: 8, title: 'item #8'},
    {id: 9, title: 'item #9'},
    {id: 10, title: 'item #10'}
  ]
}

function App() {
  //Return components along with required props
  return (
    <div className="App">
      <>
        <Title></Title>
        <SelectedMoviePoster></SelectedMoviePoster>
        <MovieMetadata></MovieMetadata>
        <GenreDropdownContainer></GenreDropdownContainer>
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {carouselData.items.map((item, index) => (
              <MoviePoster key={item.id} index={index}>{item.title}</MoviePoster>
            ))}
          </Carousel>
        </div>
      </>
    </div>
  );
}

export default App;
