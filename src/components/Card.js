import React from 'react'

const Card = () => {
    return (
        <section className="card">
          <div className="img-container">
            <img
              src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
              alt="${name}"
            />
          </div>
          <div className="info">
            <span className="number">#tes</span>
            <h3 className="name">nama</h3>
            <small className="type">Type: api</small>
          </div>
        </section>
    )
}

export default Card
