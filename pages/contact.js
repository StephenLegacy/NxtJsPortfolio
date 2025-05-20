export default function Contact() {
  return (
    <section className="max-w-md mx-auto py-20 px-4">
      {/* Gradient Title */}
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent 
                    bg-gradient-to-r from-purple-600 to-pink-500">
        Contact Me
      </h2>

      {/* Modern Form Card */}
      <form className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10
                      shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        {/* Input Group */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-purple-500
                      text-white placeholder-white/40 transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Input Group */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white/80 mb-2">Your Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-purple-500
                      text-white placeholder-white/40 transition-all"
            placeholder="john@example.com"
          />
        </div>

        {/* Textarea Group */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-white/80 mb-2">Your Message</label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-purple-500
                      text-white placeholder-white/40 transition-all"
            placeholder="Let's work together..."
          />
        </div>

        {/* Gradient Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500
                    text-white font-bold rounded-lg shadow-lg
                    hover:shadow-purple-500/30 hover:scale-[1.02]
                    transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}