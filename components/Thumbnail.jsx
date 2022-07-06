import Image from 'next/image';
import React, { forwardRef } from 'react';
import { ThumbUpIcon } from "@heroicons/react/outline";


const Thumbnail = forwardRef( ({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    console.log(result);

  return (
    <div ref={ref} className="p-3 cursor-pointer hover:text-white active:text-red-400 sm:hover:scale-105 transform duration-200 group transition hover:z-50" >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
              <p className="truncate text-lg">{result.overview}</p>
              
              <h2 className="mt-1 text-xl text-white font-bold transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.name}</h2>
              
            <p className="flex items-center text-xs lg:opacity-0 group-hover:opacity-100">
            {result.release_date || result.first_air_date}
            <ThumbUpIcon className="h-5 mx-2" />
            {result.vote_count}
            </p>
      </div>
    </div>
  );
})

export default Thumbnail