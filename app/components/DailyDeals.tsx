"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const dummyDeals = [
  {
    id: 1,
    name: "React Course Bundle",
    price: 79.99,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "JavaScript Algorithms",
    price: 49.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Full-Stack Development",
    price: 99.99,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
]

export default function DailyDeals() {
  const [currentDeal, setCurrentDeal] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % dummyDeals.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Daily Deals</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDeal}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 bg-white p-4 rounded-lg"
        >
          <Image
            src={dummyDeals[currentDeal].image || "/placeholder.svg"}
            alt={dummyDeals[currentDeal].name}
            width={150}
            height={150}
            className="rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">{dummyDeals[currentDeal].name}</h3>
            <p className="text-pink-600 font-bold text-2xl">
              ${(dummyDeals[currentDeal].price * (1 - dummyDeals[currentDeal].discount / 100)).toFixed(2)}
              <span className="text-gray-500 line-through ml-2 text-lg">
                ${dummyDeals[currentDeal].price.toFixed(2)}
              </span>
            </p>
            <p className="text-green-600 font-semibold text-lg">{dummyDeals[currentDeal].discount}% OFF</p>
            <motion.button
              className="mt-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Grab the Deal!
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

