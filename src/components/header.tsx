import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="bg-purple-700">
    <div className="mx-auto p-6 container">
      <h1 className="font-semibold">
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
