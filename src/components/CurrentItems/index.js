import React from 'react'
import './CurrentItems.css'
import WasteItem from '../WasteItem'
import { checkEntrance } from '../../utils/helpers'
import { FaRegGrinBeamSweat } from 'react-icons/fa'
import Spinner from '../Spinner'

const CurrentItems = (props) => {
  const { 
    currentItems, 
    favourites, 
    addToFavourites, 
    removeFromFavourites,
    loading
  } = props

  if (loading) {
    return (
      <div className="no-items">
        <Spinner />
      </div>  
    )
  }

  if (currentItems.length === 0) {
    return (
      <div className="no-items">
        <FaRegGrinBeamSweat 
          className="no-items__icon"
        />
        <p className="no-items__text">
          There's nothing to show
        </p>
      </div>
    )
  }

  return (
  	<div className="current-items">
      {
        currentItems.map((currentItem, index) => {
          const isFavourite = checkEntrance(favourites, currentItem)
          const styling = index === currentItems.length - 1 ? { marginBottom: '20px' } : null

          return (
            <WasteItem 
              title={currentItem.title}
              body={currentItem.body}
              key={index}
              isFavourite={isFavourite}
              onClick={
                isFavourite ?
                  () => removeFromFavourites(currentItem) 
                : 
                  () => addToFavourites(currentItem)
              }
              style={styling}
            />
          )
        })
      }
    </div>
  )
}

export default CurrentItems