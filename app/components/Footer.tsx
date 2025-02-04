// Footer component: Displays the footer section of the website
export default function Footer() {
  return (
    // The footer container with a gradient background and padding
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white p-8 mt-8">
      <div className="container mx-auto text-center">
        
        {/* Copyright text */}
        <p className="text-lg">&copy; 2023 DevStore. All rights reserved.</p>

        {/* A short description or tagline for the website */}
        <p className="mt-2">Empowering developers with the best resources.</p>

        {/* Links to legal pages like Terms of Service, Privacy Policy, and Contact Us */}
        <div className="mt-4 flex justify-center space-x-4">
          {/* Terms of Service link */}
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Terms of Service
          </a>
          
          {/* Privacy Policy link */}
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Privacy Policy
          </a>

          {/* Contact Us link */}
          <a href="#" className="hover:text-yellow-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
