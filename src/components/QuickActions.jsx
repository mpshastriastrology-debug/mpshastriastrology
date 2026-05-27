// =========================
// QuickActions.jsx
// Chat / Call / Pooja / Video Call Section
// =========================

import {
  MessageCircle,
  Phone,
  Flower2,
  Video,
} from "lucide-react";

export default function QuickActions() {

  // FUNCTIONS
  const handleChat = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handlePooja = () => {
    window.location.href = "/book-pooja";
  };

  const handleVideoCall = () => {
    window.open("https://meet.google.com/", "_blank");
  };

  return (
    <section className="bg-[#F3EFE7] py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* CHAT */}
        <button
          onClick={handleChat}
          className="bg-white border border-[#efc9a7] rounded-3xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          
          <div className="w-20 h-20 rounded-full bg-[#d9c6f3] flex items-center justify-center mb-6">
            <MessageCircle className="text-[#5B2C83]" size={34} />
          </div>

          <h3 className="text-3xl font-medium text-[#111111]">
            Chat with Astrologer
          </h3>
        </button>

        {/* CALL */}
        <button
          onClick={handleCall}
          className="bg-white border border-[#efc9a7] rounded-3xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          
          <div className="w-20 h-20 rounded-full bg-[#d9c6f3] flex items-center justify-center mb-6">
            <Phone className="text-[#5B2C83]" size={34} />
          </div>

          <h3 className="text-3xl font-medium text-[#111111]">
            Talk to Astrologer
          </h3>
        </button>

        {/* BOOK POOJA */}
        <button
          onClick={handlePooja}
          className="bg-white border border-[#efc9a7] rounded-3xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          
          <div className="w-20 h-20 rounded-full bg-[#d9c6f3] flex items-center justify-center mb-6">
            <Flower2 className="text-[#5B2C83]" size={34} />
          </div>

          <h3 className="text-3xl font-medium text-[#111111]">
            Book Pooja
          </h3>
        </button>

        {/* VIDEO CALL */}
        <button
          onClick={handleVideoCall}
          className="bg-white border border-[#efc9a7] rounded-3xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          
          <div className="w-20 h-20 rounded-full bg-[#d9c6f3] flex items-center justify-center mb-6">
            <Video className="text-[#5B2C83]" size={34} />
          </div>

          <h3 className="text-3xl font-medium text-[#111111]">
            Video Call with Astrologer
          </h3>
        </button>
      </div>
    </section>
  );
}