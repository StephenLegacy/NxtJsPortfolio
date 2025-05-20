export default function Contact() {
    return (
      <section className="mt-12 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="flex flex-col space-y-4 mt-6">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-700 focus:outline-none" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-700 focus:outline-none" />
          <textarea placeholder="Your Message" rows="5" className="p-3 rounded bg-gray-700 focus:outline-none" />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </section>
    )
  }
  