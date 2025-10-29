
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Movies</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Bollywood</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Hollywood</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">South Indian</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Dual Audio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Series</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Hindi</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">English</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Netflix</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Amazon Prime</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Request Movie</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">FAQ</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">DMCA</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PRMovies Clone. All Rights Reserved.</p>
          <p className="text-sm mt-2">This is a clone for educational purposes only and is not affiliated with the original website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
