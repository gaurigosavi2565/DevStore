"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  type: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${product.name} to cart`)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-indigo-200"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
        <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-2 py-1 m-2 rounded-full text-sm font-semibold">
          {product.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-indigo-700">{product.name}</h3>
        <p className="text-pink-600 font-bold mt-2">${product.price.toFixed(2)}</p>
        <motion.button
          className="mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 rounded-full flex items-center justify-center w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addToCart}
        >
          <ShoppingCart className="mr-2" size={18} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

