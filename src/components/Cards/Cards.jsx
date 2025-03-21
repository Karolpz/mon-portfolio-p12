import React from 'react'

const Cards = ({ siteImg, name, skill, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card__picture">
          <img src={siteImg} alt={`aperçu du site ${name}`} className='card__picture--img' />
        </div>
        <div className="card__content">
          <div className="card__content--title"><h3>{name}</h3></div>
          <div className="card__content--skill">{skill}</div>
        </div>
      </a>
    </div>
  )
}

export default Cards