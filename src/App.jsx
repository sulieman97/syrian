import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Truck, 
  CreditCard, 
  Headphones, 
  Menu, 
  X,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    forestGreen: '#2D4739',
    gold: '#E1B162',
    offWhite: '#F9F9F9',
  };

  const navLinks = ['Home', 'Shop', 'Categories', 'About', 'Contact'];

  const products = [
    { id: 1, name: 'Velvet Armchair', price: 299, oldPrice: 350, rating: 5, discount: '15%', img: 'https://images.unsplash.com/photo-1598191383441-73758821ad90?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Nordic Oak Table', price: 850, oldPrice: 999, rating: 4, discount: '10%', img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Sleek Floor Lamp', price: 120, oldPrice: 150, rating: 5, discount: '20%', img: 'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'Minimalist Sofa', price: 1200, oldPrice: 1450, rating: 5, discount: '12%', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#E1B162] selection:text-white" style={{ backgroundColor: colors.offWhite }}>
      {/* Top Announcement Bar */}
      <div className="bg-[#2D4739] text-white py-2 px-4 text-center text-xs font-medium tracking-wider">
        FREE SHIPPING ON ALL ORDERS OVER $150 • SHOP THE NEW SPRING COLLECTION
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2" style={{ color: colors.forestGreen }}>
            <div className="w-8 h-8 rounded-lg bg-[#E1B162] flex items-center justify-center text-white">V</div>
            VINTAGE
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-[#E1B162] transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Heart size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#E1B162] rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2">
              <ShoppingBag size={20} />
              <span className="text-sm font-semibold">0</span>
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-2xl font-semibold text-[#2D4739]" onClick={() => setIsMenuOpen(false)}>
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-gray-500">Trusted by 50k+ Customers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: colors.forestGreen }}>
              Explore Our <br />
              <span className="text-gray-400 font-light italic">Modern Furniture</span> <br />
              Collection
            </h1>

            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
              Elevate your living space with our curated selection of premium, Nordic-inspired pieces designed for comfort and timeless elegance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-full text-white flex items-center gap-3 transition-transform active:scale-95 shadow-lg shadow-[#2D4739]/20"
                style={{ backgroundColor: colors.forestGreen }}
              >
                Shop Now <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-gray-200 text-[#2D4739] font-medium hover:bg-gray-50 transition-colors">
                View Gallery
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                alt="Main Hero Furniture" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -right-8 top-20 z-20 bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-1 border border-gray-50"
            >
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Premium Sofa</span>
              <span className="text-2xl font-bold" style={{ color: colors.forestGreen }}>$2,450</span>
              <div className="flex gap-1 text-[#E1B162]">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#E1B162" />)}
              </div>
            </motion.div>

            <div className="absolute -left-12 bottom-12 z-20 bg-[#E1B162] text-white px-6 py-6 rounded-3xl shadow-xl flex flex-col gap-1">
              <span className="text-3xl font-bold">2,500+</span>
              <span className="text-sm font-medium opacity-90 uppercase tracking-tighter">Living Room Items</span>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E1B162]/5 rounded-full blur-3xl"></div>
          </motion.div>
        </section>

        {/* Feature Bar */}
        <section className="bg-white border-y border-gray-100 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Truck />, title: 'Free Shipping', desc: 'On all orders above $150' },
              { icon: <CreditCard />, title: 'Flexible Payment', desc: 'Up to 12 months installment' },
              { icon: <Headphones />, title: '24/7 Support', desc: 'Expert help for your interior' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2D4739] group-hover:bg-[#2D4739] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(feature.icon, { size: 28 })}
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: colors.forestGreen }}>{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-bold" style={{ color: colors.forestGreen }}>Shop by Categories</h2>
            <button className="flex items-center gap-2 text-[#E1B162] font-semibold hover:gap-3 transition-all">
              Explore All <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
            {/* Large Card */}
            <div className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Chairs" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-3xl font-bold mb-4">Designer Chairs</h3>
                <ul className="space-y-2 mb-6">
                  {['Lounge Chairs', 'Dining Chairs', 'Office Chairs'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B162]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-fit px-6 py-2 bg-white text-black rounded-full text-sm font-bold flex items-center gap-2">
                  Browse <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Side Stack */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="flex-1 relative group overflow-hidden rounded-[2.5rem] bg-[#2D4739]">
                <img 
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop" 
                  className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Sofa" 
                />
                <div className="relative h-full flex flex-col justify-center p-10 text-white w-1/2">
                  <span className="text-[#E1B162] font-bold text-sm tracking-widest uppercase mb-2">350+ Items</span>
                  <h3 className="text-4xl font-bold mb-4">Luxurious Sofas</h3>
                  <button className="text-white/80 hover:text-white flex items-center gap-2 font-medium">
                    Shop Collection <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 relative group overflow-hidden rounded-[2.5rem] bg-[#E1B162]/10 border border-[#E1B162]/20">
                 <img 
                  src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop" 
                  className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Lighting" 
                />
                <div className="relative h-full flex flex-col justify-center p-10 w-1/2">
                  <span className="text-[#2D4739] font-bold text-sm tracking-widest uppercase mb-2">120+ Items</span>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: colors.forestGreen }}>Modern Lighting</h3>
                  <button className="text-[#2D4739]/60 hover:text-[#2D4739] flex items-center gap-2 font-medium">
                    Discover More <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#E1B162] font-bold tracking-widest uppercase text-sm">Best Sellers</span>
              <h2 className="text-4xl font-bold mt-2" style={{ color: colors.forestGreen }}>Featured Products</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-[2rem] bg-[#F3F4F6] overflow-hidden mb-4">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                      {product.discount} OFF
                    </div>
                    <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag size={20} style={{ color: colors.forestGreen }} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < product.rating ? "#E1B162" : "none"} color="#E1B162" />
                      ))}
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: colors.forestGreen }}>{product.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xl">${product.price}</span>
                      <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-10 py-4 border-2 border-[#2D4739] text-[#2D4739] rounded-full font-bold hover:bg-[#2D4739] hover:text-white transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D4739] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E1B162] flex items-center justify-center text-white">V</div>
              VINTAGE
            </div>
            <p className="text-white/60 leading-relaxed">
              We create furniture that balances aesthetics and functionality, bringing a piece of Nordic nature to your home.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1B162] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home Decor', 'New Arrivals', 'Featured Items', 'Gift Cards'].map(link => (
                <li key={link}><a href="#" className="text-white/60 hover:text-[#E1B162] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Customer Service</h4>
            <ul className="space-y-4">
              {['Shipping Policy', 'Returns & Refunds', 'Track Order', 'FAQ'].map(link => (
                <li key={link}><a href="#" className="text-white/60 hover:text-[#E1B162] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Join Our Newsletter</h4>
            <p className="text-white/60 mb-6">Stay updated on new collections and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-[#E1B162] transition-colors"
              />
              <button className="absolute right-2 top-2 bg-[#E1B162] p-2.5 rounded-full hover:scale-105 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between text-white/40 text-sm gap-4">
          <p>© 2025 Vintage Modern Furniture. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;