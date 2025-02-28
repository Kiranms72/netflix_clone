import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'

function Banner({ fetchurl }) {
  // console.log(fetchurl);
  const image_base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState()
  const fetchData = async () => {
    const { data } = await instance.get(fetchurl)
    // console.log("API Result");
    // console.log(data);
    setMovies(data.results[0])
    const res = data.results[Math.floor(data.results.length * Math.random())]
    setMovies(res)

  }
  // Use effect()
  useEffect(() => {
    // setInterval(() => {
    //   fetchData()
    // },2000)
    fetchData()
  }, [])
  return (
    <>
      <div style={{ backgroundImage: `url(${image_base_url}${movies?.backdrop_path})`, height: "600px", backgroundSize:"100%"}}>
      <div className='banner_content'>
        <h2 style={{color:"white", fontSize:"60px",fontWeight:"bold"}}>{movies?.name}</h2>
        <button className='btn btn-danger'>PLAY <i class="fa-solid fa-play ms-2"></i></button>
        <button className='btn btn-outline-light ms-3'>MORE INFO<i class="fa-solid fa-caret-down ms-2"></i></button>
        <h6 className='text-white mt-4'>{movies?.overview?.slice(0.200)}...</h6>
      </div>
      </div>
    </>
  )
}

export default Banner