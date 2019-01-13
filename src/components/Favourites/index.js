import React from 'react'
import './Favourites.css'
import WasteItem from '../WasteItem'
import { FaRegGrimace } from 'react-icons/fa'

const Favourites = (props) => {
  const { favourites, removeFromFavourites } = props

  return (
  	<div className="favourites">
      <div className="favourites__content">
        <h1 className="favourites__heading">
				  Favourites
			  </h1>
        {
          favourites.length > 0 ?
            favourites.map(favourite => (
              <WasteItem 
                title={favourite.title}
                body={favourite.body}
                onClick={
                  () => removeFromFavourites(favourite)
                }
                isFavourite
              />
            ))
          :
            <div className="no-items">
              <FaRegGrimace
                className="no-items__icon"
              />
              <p className="no-items__text">
                No favourites yet, bro
              </p>
            </div>
        }
      </div>	
    </div>
  )
}

export default Favourites