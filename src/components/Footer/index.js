import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
  	<footer className="footer">
			<p className="footer__info">
        Made with ♥ by
        {' '}
        <a href="https://ironsoul.me" target="_blank" rel="noopener noreferrer">ironsoul</a>
        {' '}
        for Shopify
			</p>	
    </footer>
  )
}

export default Footer