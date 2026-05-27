// =========================
// HeroSection.jsx
// Clean Professional Layout
// =========================

export default function HeroSection() {
  return (
    <section className="bg-[#F3EFE7] pt-32 pb-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          
          <p className="uppercase tracking-[4px] text-[#D89B1D] font-semibold mb-5">
            Astrology & Spiritual Guidance
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-[#111111] mb-8">
            Helping You Find
            <span className="block text-[#6B3418]">
              Peace & Clarity
            </span>
            Through Ancient Wisdom
          </h1>

          <p className="text-[#555] text-lg leading-8 mb-10 max-w-xl">
            Personalized astrology and vastu consultations designed to bring
            balance, positivity, career growth, relationship harmony, and
            spiritual well-being.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            
            <button className="bg-[#6B3418] hover:bg-[#D89B1D] hover:text-black text-white px-8 py-4 rounded-lg transition duration-300 shadow-md">
              Book Consultation
            </button>

            <button className="border border-[#6B3418] text-[#6B3418] hover:bg-[#6B3418] hover:text-white px-8 py-4 rounded-lg transition duration-300">
              Explore Services
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 mt-12">
            
            <div className="bg-white border border-[#e6ddd0] rounded-2xl px-8 py-5 shadow-sm min-w-[220px]">
              
              <h3 className="text-3xl font-bold text-[#D89B1D] mb-2">
                20+
              </h3>

              <p className="text-[#555] text-sm">
                Years Experience
              </p>
            </div>

            <div className="bg-white border border-[#e6ddd0] rounded-2xl px-8 py-5 shadow-sm min-w-[220px]">
              
              <h3 className="text-3xl font-bold text-[#D89B1D] mb-2">
                5K+
              </h3>

              <p className="text-[#555] text-sm">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          <img
            src="https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=1200&auto=format&fit=crop"
            alt="Astrology"
            className="w-full h-[550px] object-cover rounded-[30px] shadow-2xl"
          />

          {/* FLOAT CARD */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-6 max-w-sm border border-[#ece3d7]">
            
            <p className="text-[#D89B1D] uppercase tracking-[3px] text-sm font-semibold mb-2">
              Trusted Guidance
            </p>

            <h3 className="text-3xl font-serif text-[#111111] mb-3">
              Spiritual Solutions
            </h3>

            <p className="text-[#666] leading-7">
              Helping individuals overcome life challenges with positive energy
              and spiritual remedies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}