import ProductGrid from "./components/ProductGrid"
import SearchBar from "./components/SearchBar"
import DailyDeals from "./components/DailyDeals"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600">Welcome to DevStore</h1>
      <SearchBar />
      <DailyDeals />
      <ProductGrid />
    </div>
  )
}

