"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

// Dummy data to represent product details
const dummyProducts = [
  {
    id: 1,
    name: "React Mastery",
    type: "Tutorial",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Clean Code",
    type: "Book",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "VS Code Pro",
    type: "Tool",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Portfolio Template",
    type: "Template",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80",
  },
  {
    id: 5,
    name: "Algo Challenge",
    type: "Challenge",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 6,
    name: "Python for Data Science",
    type: "Tutorial",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
]

export default function ProductGrid() {
  // State to hold the list of products (dummy data in this case)
  const [products] = useState(dummyProducts)

  return (
    // Motion div for the grid layout with a fade-in animation
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
      animate={{ opacity: 1 }} // Animate opacity to 1 (fully visible)
      transition={{ duration: 0.5 }} // The transition takes 0.5 seconds
    >
      {/* Iterate over the products array and render a ProductCard for each product */}
      {products.map((product) => (
        // ProductCard component receives product data as props
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  )
}
