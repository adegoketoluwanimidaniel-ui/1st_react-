import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Tolu's Website. All rights reserved.</p>
    </div>
  )
}

export default Footer;