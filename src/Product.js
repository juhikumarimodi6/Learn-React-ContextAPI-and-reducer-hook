import React from 'react'

const Product = (curElem) => {
    const {id, name, image, price, category} = curElem;
  return (
    // <Link to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt="" />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data-price">

                    </p>
                </div>
            </div>
        </div>
    // </Link>
  )
}

export default Product
