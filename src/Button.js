import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ id }) => {
  return (
    <Link to={`/${id}`} >
      <button className="button"> View Details </button>
    </Link>
  )
}

export default Button;