export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white p-8 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 DevStore. All rights reserved.</p>
          <p className="mt-2">Empowering developers with the best resources.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  