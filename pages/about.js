export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-5 text-lg leading-relaxed text-gray-300">
          <p className="transition-all hover:text-white hover:scale-[1.01]">
            I'm a passionate <span className="font-semibold text-indigo-300">Computer Scientist</span> and <span className="font-semibold text-amber-300">AWS Certified Cloud Practitioner</span> with strong interests in <span className="font-semibold text-emerald-300">cybersecurity</span>, <span className="font-semibold text-sky-300">networking</span>, and <span className="font-semibold text-purple-300">full-stack web development</span>. I love working with modern cloud solutions, solving complex problems, and building impactful digital products.
          </p>
          
          <p className="transition-all hover:text-white hover:scale-[1.01]">
            I'm currently exploring <span className="font-semibold text-pink-300">multi-cloud systems</span>, backend frameworks like <span className="font-semibold text-red-300">Django</span>, and deploying secured apps with <span className="font-semibold text-green-300">CI/CD pipelines</span>.
          </p>
        </div>
      </div>
    </section>
  )
}