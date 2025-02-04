"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold gradient-text">
          DevStore
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/tutorials" className="hover:text-yellow-300 transition-colors">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-yellow-300 transition-colors">
                Books
              </Link>
            </li>
            <li>
              <Link href="/tools" className="hover:text-yellow-300 transition-colors">
                Tools
              </Link>
            </li>
            <li>
              <Link href="/templates" className="hover:text-yellow-300 transition-colors">
                Templates
              </Link>
            </li>
            <li>
              <Link href="/challenges" className="hover:text-yellow-300 transition-colors">
                Challenges
              </Link>
            </li>
          </ul>
        </nav>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="/cart"
            className="flex items-center bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full font-semibold"
          >
            <ShoppingCart className="mr-2" />
            Cart
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

