import React from 'react'
import './WasteItem.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { htmlDecode } from '../../utils/helpers' 

const WasteItem = (props) => {
  const { title, body, isFavourite, style } = props

  return (
  	<div className="waste-item" style={style}>
      <div className="waste-item__title">
        {
          !isFavourite ?
            <FaRegStar 
              className="waste-item__star" 
              onClick={props.onClick}
            />
          :
            <FaStar 
              className="waste-item__star waste-item__favourite" 
              onClick={props.onClick}
            />
        }
        <p className="waste-item__title-text">
          {title} 
        </p>
      </div>  
      <div
        className="waste-item__body"
        dangerouslySetInnerHTML={{
          __html: htmlDecode(body)
        }}
      />
    </div>
  )
}

export default WasteItem