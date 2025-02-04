"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement search functionality
    console.log(`Searching for: ${searchTerm}`)
  }

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for tutorials, books, tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <motion.button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Search size={20} />
        </motion.button>
      </div>
    </form>
  )
}

