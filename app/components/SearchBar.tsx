"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function SearchBar() {
  // State to hold the search input value
  const [searchTerm, setSearchTerm] = useState("")

  // Handle form submission to execute the search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevents page refresh on form submit
    // Placeholder search functionality
    console.log(`Searching for: ${searchTerm}`)
  }

  return (
    // Form for the search bar
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      {/* Relative container for input and search button */}
      <div className="relative">
        
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search for tutorials, books, tools..." // Placeholder text inside the input field
          value={searchTerm} // Bind input field value to searchTerm state
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm when user types
          className="w-full px-4 py-2 rounded-full border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" // Tailwind CSS styles for the input field
        />
        
        {/* Motion button for submitting the search form */}
        <motion.button
          type="submit" // Button type is submit to trigger form submission
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full" // Button positioned to the right of the input field
          whileHover={{ scale: 1.1 }} // Slightly scale the button on hover
          whileTap={{ scale: 0.9 }} // Shrink the button on tap/click
        >
          {/* Search icon */}
          <Search size={20} />
        </motion.button>
      </div>
    </form>
  )
}
