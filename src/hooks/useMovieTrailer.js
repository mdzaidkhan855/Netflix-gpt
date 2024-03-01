
import {API_OPTIONS} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import React, { useEffect } from 'react'


const useMovieTrailer = (movieId) => {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovieVideos();
    },[])

  const getMovieVideos = async ()=>{
        
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        
        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ?  filterData[0] : json.results[0];

        //setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }  
}

export default useMovieTrailer