import React, { useEffect, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFjNTdhNTAwNThjMmU1OTk4OWNiODAxNGVjZjEyMCIsInN1YiI6IjY2MzY0ODM5OTlkNWMzMDEyMzU4MmQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9HEd7Gp0XO3U23QQCblZarji7hqdTANjI3LoElEI7OM'
    }
  };

  useEffect(() => {
    // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
