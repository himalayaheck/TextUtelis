import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div class="container mx-auto flex justify-between items-center px-4">

          <a href="#" class="text-white font-bold text-xl">{props.title}</a>


          <div class="flex">
            <input type="text" placeholder="Search..." class="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"/>
              <button class="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700">Search</button>
          </div>


          <ul class="flex items-center space-x-4">
            <li><a href="#" class="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">About</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Services</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

Navbar.prototype={titel:PropTypes.string}
Navbar.defaultprops={title:'set title here'}

    
