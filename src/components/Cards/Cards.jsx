import React from 'react'

const Cards = ({siteImg, name, skill}) => {
  return (
    <div className="card">
        <div className="card__picture">
            <img src={siteImg} alt={`aperçu du site ${name}`} className='card__picture--img' />
        </div>
        <div className="card__content">
              <div className="card__content--title"><h3>{name}</h3></div>
            <div className="card__content--skill">{skill}</div>
        </div>
    </div>
  )
}

export default Cards