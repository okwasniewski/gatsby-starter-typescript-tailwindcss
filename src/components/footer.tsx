import React from 'react'

const Footer = () => {
  return (
    <footer className="font-semibold w-full bg-indigo-200 p-3 text-center">
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </footer>
  )
}

export default Footer
