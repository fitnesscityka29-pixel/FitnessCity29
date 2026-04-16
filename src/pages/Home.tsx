import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock, Phone, Dumbbell, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../assets/my-workout.jpg';
import Transformations from '../assets/before-after1.jpg';
import Transform2 from '../assets/before-after2.jpg';
import Transform3 from '../assets/before-after3.jpg';
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={Hero} 
            alt="Gym Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-4">
              Build Your <span className="text-yellow-500">Empire.</span><br />
              Train Like a <span className="text-red-600">Champion.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-8 max-w-3xl mx-auto">
              Fitness City – Where Strength Meets Style
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Join Now
            </Link>
              <a 
                href="tel:9964290488" 
                className="w-full sm:w-auto bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
            
            <div className="mt-12 inline-flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-200 text-sm md:text-base font-medium">Open: 5 AM - 11 AM | 5 PM - 9 PM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats / Features */}
      <section className="py-12 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Star, label: "Google Rating", value: "4.7/5", color: "text-yellow-500" },
              { icon: Users, label: "Active Members", value: "50+", color: "text-red-500" },
              { icon: Dumbbell, label: "Equipment", value: "Premium", color: "text-pink-500" },
              { icon: Activity, label: "Personal Training", value: "Available", color: "text-green-500" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className=" text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Experience premium equipment, expert trainers, and a community that pushes you to be your best.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <div className="inline-block bg-purple-500 text-zinc-950 px-8 py-6 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <p className="text-lg font-medium uppercase tracking-wider mb-2">Memberships Starting From</p>
            <p className="text-5xl font-heading font-bold mb-4">₹1500
              <span className="md:text-2xl font-heading font-bold text-2xl text-zinc-800">/1 month</span></p>
            <Link 
            to="/contact"
            className="mt-4 inline-block bg-zinc-950 text-yellow-500 py-2 px-6 rounded-full font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
>
             Book Now
</Link>
            </div>
          
            <div className="inline-block bg-red-500 text-zinc-950 px-8 py-6 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <p className="text-lg font-medium uppercase tracking-wider mb-2">Memberships Starting From</p>
            <p className="text-5xl font-heading font-bold mb-4">₹3500<span className="text-2xl text-zinc-800">/3 month</span></p>
            <Link 
            to="/contact"
            className="mt-4 inline-block bg-zinc-950 text-yellow-500 py-2 px-6 rounded-full font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
>
             Book Now
            </Link></div>
            <div className="inline-block bg-green-500 text-zinc-950 px-8 py-6 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <p className="text-lg font-medium uppercase tracking-wider mb-2">Memberships Starting From</p>
            <p className="text-5xl font-heading font-bold mb-4">₹5000</p>
              <p><span className="md:text-2xl font-heading font-bold text-2xl text-zinc-800">/6 month</span></p>
            <Link 
            to="/contact"
            className="mt-4 inline-block bg-zinc-950 text-yellow-500 py-2 px-6 rounded-full font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
>
             Book Now
            </Link></div>
            <div className="inline-block bg-yellow-500 text-zinc-950 px-5 py-4 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <p className="text-lg font-medium uppercase tracking-wider mb-2">Memberships Starting From</p>
            <p className="text-5xl font-heading font-bold mb-4">₹9000</p>
              <p><span className="md:text-2xl font-heading font-bold text-2xl text-zinc-800">/12 month</span></p>
            <Link 
            to="/contact"
            className="mt-4 inline-block bg-zinc-950 text-yellow-500 py-2 px-6 rounded-full font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
>
             Book Now
</Link></div>
            <div className="inline-block bg-pink-400 text-zinc-950 px-5 py-4 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <p className="text-lg font-medium uppercase tracking-wider mb-2">Memberships Starting From</p>
            <p className="text-5xl font-heading font-bold mb-4">₹12000</p>
              <p><span className="md:text-2xl font-heading font-bold text-2xl text-zinc-800">/12 month for couple</span></p>
            
            <Link 
            to="/contact"
            className="mt-4 inline-block bg-zinc-950 text-yellow-500 py-2 px-6 rounded-full font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
>
             Book Now
              </Link>
              </div>            
          </div>
        </div>
      </section>

      {/* Facilities Teaser */}
      <section className="py-10 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-4">
                Premium <span className="text-red-600">Facilities</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
                Equipped with the best machines for your transformation.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Strength Zone", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Cardio Area", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
              { title: "Women's Workout Zone", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" }
            ].map((facility, i) => (
              <div key={i} className="group relative h-80 rounded-2xl overflow-hidden">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-heading font-bold text-white">{facility.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-yellow-500 font-medium">
              View All Facilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials & Transformations */}
      <section className="py-10 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-zinc-900 dark:text-white mb-16">
            Real People. <span className="text-yellow-500">Real Results.</span>
          </h2>
          
          {/* Transformations Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-8">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: Transformations, name: "90 Day Transformation", desc: "Lost 25kg & Gained Muscle" },
                { img: Transform2, name: "60 Day Transformation", desc: "Built 5kg Pure Muscle" },
                { img: Transform3, name: "120 Day Transformation", desc: "Lost 30kg & Total Body Recomposition" },
              ].map((transformation, i) => (
                <div key={i} className="relative h-100 w-95 rounded-2xl overflow-hidden border-4 border-yellow-500">
                  <img 
                    src={transformation.img}
                    alt={transformation.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">{transformation.name}</h3>
                    <p className="text-yellow-400 font-medium text-sm">{transformation.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-8">Customer Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Rahul S.", text: "Best gym in Bagalkot! The trainers are very supportive and the equipment is top-notch. Highly recommend the personal training.", rating: 5 },
                { name: "Priya M.", text: "The dedicated women's zone makes me feel so comfortable. Great atmosphere and very clean facility.", rating: 5 },
                { name: "Amit K.", text: "Transformed my body in 3 months! The personalized diet and workout plans really work. Highly motivated by the trainers.", rating: 5 },
                { name: "Anjali P.", text: "Best investment for my health! The gym is well-maintained and the staff is super friendly and helpful.", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
                  <div className="flex text-yellow-500 mb-3">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 italic mb-4 text-sm">"{review.text}"</p>
                  <p className="font-bold text-zinc-900 dark:text-white text-sm">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Timings */}
      <section className="py-10 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-4">
                  Find <span className="text-red-600">Us</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">Visit us today and take the first step towards your fitness goals.</p>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Location</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Fitness City Gym, Bagalkot, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Timings</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Morning: 5:00 AM – 11:00 AM</p>
                    <p className="text-zinc-600 dark:text-zinc-400">Evening: 5:00 PM – 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Contact</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">+91 9964290488</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 lg:h-auto rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
              {/* Google Maps Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=Fitness+City+Gym,+Bagalkot,+Karnataka&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitness City Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-red-600">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Ready to Transform?
          </h2>
          <p className="text-xl text-red-100 mb-10">
            Join Fitness City today and start building the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-zinc-950 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Join Now
            </Link>
            <a 
              href="https://wa.me/919964290488" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-red-600 hover:bg-zinc-100 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Call / WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
