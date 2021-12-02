import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function Description() {
    const location = useLocation()
  const { movie } = location.state
    return (
        <div className='hello'>
            <Link to="/">Home</Link>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <iframe width="560" height="315" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Description
