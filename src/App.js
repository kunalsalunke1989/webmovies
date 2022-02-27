/*Import React and required Hooks*/ 
import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';//Import carousel library
//Import custom components
import Title from "./components/Title";
import SelectedMoviePoster from "./components/SelectedMoviePoster";
import MovieMetadata from "./components/MovieMetadata";
import GenreDropdownContainer from "./components/GenreDropdownContainer";
import MoviePoster from "./components/MoviePoster";
//Import services
import { getMovies } from './services/movies';
//Import CSS
import './App.css';

//Define breakpoints to show number of movies for respective widths
const breakPoints = [
  { width: 1, itemsToShow: 2, itemsToScroll: 2 },
  { width: 481, itemsToShow: 3 },
  { width: 769, itemsToShow: 6 }
];

function App() {
  //Set Carousel data
  const [carouselData, setCarouselData] = useState([]);
  //Create a backup of Carousel data to filter movies from dropdown
  const [carousalDataCopy, setCarousalDataCopy] = useState([]);
  //Set Genre dropdown data
  const [genreData, setGenreData] = useState([]);
  //Set selected movie index to the first by default
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  //Set "loading" state to check if asynchronous data has been fetched
  const [loading, setLoading] = useState(true);
  //Initialize API endpoint to fetch data
  const url = 'https://run.mocky.io/v3/d03e0886-f5c8-4961-902d-51bfe8059a33';
  const carousel = useRef(null);

  useEffect(() => {
    //Fetch data from API asynchronously 
    async function fetchData() {
      let response = await getMovies(url);
      setCarouselData(response);
      setCarousalDataCopy(response);
      getGenre(response);
      setLoading(false);
    }

    fetchData();
  }, [])

  //Set Genre dropdown data
  const getGenre = (response) => {
    let genreSet = new Set();//Use Set data structure as we need unique Genre only
    response.forEach(item => {
      let genreArray = item.Genre.split(",");
      genreArray.forEach(genre => {
        genreSet.add(genre.trim());
      })
    })
    setGenreData(Array.from(genreSet));
  }

  const filterMovies = (genre) => {
    if (genre == "Genre")//If Genre is selected, show all data
      setCarouselData(carousalDataCopy);
    else {//Filter data according to value selected from Genre dropdown
      let newCarousalData = carousalDataCopy.filter(movie => {
        return movie.Genre.includes(genre);
      })
      setCarouselData(newCarousalData);
    }
    setSelectedMovieIndex(0);
  }

  //Return components along with required props using mobile first approach
  return (
    <div className="App">
      {!loading && <>
        <Title title={carouselData[selectedMovieIndex].Title} plot={carouselData[selectedMovieIndex].Plot}></Title>
        <SelectedMoviePoster img={carouselData[selectedMovieIndex].Poster}></SelectedMoviePoster>
        <MovieMetadata metadata={carouselData[selectedMovieIndex]}></MovieMetadata>
        <GenreDropdownContainer genreData={genreData} filterMovies={filterMovies}></GenreDropdownContainer>
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {carouselData.map((item, index) => (
              <MoviePoster key={item.Id} img={item.Poster} index={index} setSelectedMovieIndex={setSelectedMovieIndex}>{item.Title}</MoviePoster>
            ))}
          </Carousel>
        </div>
      </>}
    </div>
  );
}

export default App;





