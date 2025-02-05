"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

// Defining the structure for a Product object
interface Product {
  id: number
  name: string
  type: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  // Function to handle adding the product to the cart
  const addToCart = () => {
    // Placeholder function, logs product name when added to cart
    console.log(`Added ${product.name} to cart`)
  }

  return (
    // Motion div for animated product card with hover effects
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-indigo-200"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} // Scale and shadow effect on hover
      transition={{ duration: 0.2 }} // Smooth transition for hover effect
    >
      {/* Image Container with relative positioning for image and badge */}
      <div className="relative h-48">
        {/* Image for product, fallback to placeholder if image is not provided */}
        <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
        
        {/* Badge showing product type, positioned at the top-right corner */}
        <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-2 py-1 m-2 rounded-full text-sm font-semibold">
          {product.type}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4">
        {/* Product Name with Indigo color */}
        <h3 className="text-lg font-semibold text-indigo-700">{product.name}</h3>
        
        {/* Product Price in Pink color and bold */}
        <p className="text-pink-600 font-bold mt-2">${product.price.toFixed(2)}</p>
        
        {/* Add to Cart Button with animated hover and tap effects */}
        <motion.button
          className="mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 rounded-full flex items-center justify-center w-full"
          whileHover={{ scale: 1.05 }} // Hover effect to scale button
          whileTap={{ scale: 0.95 }} // Tap effect to shrink the button slightly
          onClick={addToCart} // Calls the addToCart function on click
        >
          {/* Shopping Cart Icon */}
          <ShoppingCart className="mr-2" size={18} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}
