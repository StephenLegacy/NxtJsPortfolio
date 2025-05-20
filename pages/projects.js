import Image from 'next/image'

export default function Projects() {
  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-3xl font-bold">My Projects</h2>

      <div className="bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-md">
        {/* <Image src="/project1.jpg" alt="Project 1" width={300} height={200} className="rounded-md" /> */}
        <div>
          <h3 className="text-xl font-semibold">AWS WordPress Hosting</h3>
          <p className="text-gray-400">
            Provisioned an EC2-based WordPress blog using Ubuntu and AWS CLI, with automated infrastructure scripting.
          </p>
        </div>
      </div>
      {/* Add more projects as needed */}
    </section>
  )
}
