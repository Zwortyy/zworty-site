import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Home, Info, Package, Paintbrush, Store, Star, BookOpen, Users, Phone, Languages } from 'lucide-react';

const navItems = [
  { name: 'Hakkımızda', path: '/hakkimizda', icon: <Info size={18} /> },
  { name: 'Ürünler', path: '/urunler', icon: <Package size={18} /> },
  { name: 'Referanslar', path: '/referanslar', icon: <Star size={18} /> },
  { name: 'İletişim', path: '/iletisim', icon: <Phone size={18} /> },
];

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">KRT-RoadCafe</h1>
              <p className="text-xs text-gray-500">Pergola ve Cam Sistemleri</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center space-x-1 group"
                >
                  <span className="group-hover:text-red-500 transition-colors duration-300">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-1">
              <Languages size={18} />
              <span>EN</span>
            </Button>
            <button className="md:hidden text-gray-600 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const PlaceholderPage = ({ title }) => (
  <div className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-gray-700 mb-4">{title}</h1>
      <p className="text-lg text-gray-500">Bu sayfanın içeriği yakında eklenecektir.</p>
      <img  alt={`${title} için konsept görsel`} className="mt-8 rounded-lg shadow-xl max-w-lg mx-auto" src="https://images.unsplash.com/photo-1685946973834-81f1c465ec0c" />
    </motion.div>
  </div>
);

const HomePage = () => (
  <div className="flex-grow">
    <div className="relative h-[calc(100vh-5rem)] bg-gray-800 text-white overflow-hidden">
      <img  
        alt="Modern pergola sistemiyle döşenmiş lüks bir veranda" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
       src="https://images.unsplash.com/photo-1693669510175-940458bcad30" />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Estetik ve Fonksiyon:
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Şıklığı ve işlevselliği bir araya getiren ürünlerimizle yaşam alanlarınızı dönüştürün. Estetik detaylar ve kullanışlı tasarımlar sizi bekliyor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            Daha Fazla Bilgi
          </Button>
        </motion.div>
      </div>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {navItems.map(item => (
              <Route key={item.name} path={item.path} element={<PlaceholderPage title={item.name} />} />
            ))}
          </Routes>
        </main>
        <Toaster />
        <footer className="bg-gray-800 text-white py-8 text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} KRT-RoadCafe Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
