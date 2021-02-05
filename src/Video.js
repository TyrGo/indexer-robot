import React from "react";
import reader from "./reader.mp4"
import reader4 from "./reader4.mp4"

let movies = [reader, reader4];
let movie = movies[Math.floor(Math.random() * movies.length)];

function Video() {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={movie} type="video/mp4" />
    </video>
  )
}

export default Video;
