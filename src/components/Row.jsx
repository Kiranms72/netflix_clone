import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({ title, fetchurl }) {
  console.log("title");
  console.log(title);
  console.log(fetchurl);
  const image_base_url = "https://image.tmdb.org/t/p/original";
  const [allMovies, setAllMovies] = useState()
  const fetchData = async () => {
    const response = await instance.get(fetchurl);
    console.log("API Result");
    console.log(response);
    setAllMovies(response.data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log("all movies", allMovies);

  return (
    <>
      <div className='row mt-3'>
        <h4 className='fw-bold pt-4 pb-2 fs-3'>{title}</h4>
        <div className='movie_row'>
          {
            allMovies?.map(item => (
              <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt="" height={'200px'} />

            )
            )
          }

        </div>
      </div>
    </>
  )
}

export default Row