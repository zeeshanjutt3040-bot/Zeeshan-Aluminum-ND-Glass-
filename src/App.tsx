import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Aluminum Windows",
    description: "High-quality sliding and casement windows with premium finish and durability.",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Glass Doors",
    description: "Modern tempered glass doors for offices and homes. Elegant and secure.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Office Partitions",
    description: "Sleek aluminum and glass partitions to create professional workspaces.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Shop Fronts",
    description: "Attractive glass shop fronts designed to showcase your business perfectly.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
  }
];

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "450+" },
  { label: "Expert Workers", value: "20+" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
            <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Zeeshan <span className="text-blue-600">Aluminum</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
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
              {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-display font-semibold text-slate-900 border-b border-slate-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold">
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Glass Building" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-blue-500/30">
              Premium Aluminum & Glass Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Transforming Spaces with <span className="text-blue-500">Precision</span> & Style
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              From modern aluminum windows to elegant glass partitions, we provide expert craftsmanship for residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group shadow-xl shadow-blue-600/30">
                Our Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Expert Services</h2>
            <p className="text-lg text-slate-600">
              We specialize in a wide range of aluminum and glass works, ensuring every project meets the highest standards of quality and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a href="#contact" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Work in progress" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-0 hidden md:block"></div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Why Choose Zeeshan Aluminum?</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Hammer className="w-6 h-6 text-white" />,
                    title: "Expert Craftsmanship",
                    desc: "Our team of skilled professionals brings years of experience to every installation."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-white" />,
                    title: "Premium Quality",
                    desc: "We use only the finest aluminum and tempered glass materials for lasting durability."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-white" />,
                    title: "Timely Delivery",
                    desc: "We value your time and ensure all projects are completed within the agreed schedule."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and estimate. We're here to help you build your dream space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+1234567890" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a 
              href="https://wa.me/1234567890" 
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-green-600 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Have questions about our services or need a custom quote? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Our Location</h5>
                    <p className="text-slate-600">123 Aluminum Street, Glass District, City Name</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Phone Number</h5>
                    <p className="text-slate-600">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Email Address</h5>
                    <p className="text-slate-600">info@zeeshanaluminum.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (234) 567-890" 
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Needed</label>
                  <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white">
                    <option>Aluminum Windows</option>
                    <option>Glass Doors</option>
                    <option>Office Partitions</option>
                    <option>Shop Fronts</option>
                    <option>Other / Repair</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
                <span className="text-2xl font-display font-bold tracking-tight">
                  Zeeshan <span className="text-blue-500">Aluminum</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Providing top-tier aluminum and glass solutions since 2008. We pride ourselves on quality, reliability, and customer satisfaction.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Aluminum Windows</li>
                <li>Glass Doors</li>
                <li>Office Partitions</li>
                <li>Shop Fronts</li>
                <li>Glass Repair</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Zeeshan Aluminum & Glass Work. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

