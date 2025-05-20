import Image from 'next/image'

export default function Projects() {
  return (
    <section className="mt-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Project Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
          {/* Uncomment if you have an image */}
          {/* <Image
            src="/project1.jpg"
            alt="AWS WordPress Hosting"
            width={500}
            height={300}
            className="rounded-lg mb-4"
          /> */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            AWS WordPress Hosting
          </h3>
          <p className="text-gray-600">
            Provisioned an EC2-based WordPress blog using Ubuntu and AWS CLI,
            with automated infrastructure scripting.
          </p>
        </div>

        {/* Add more cards here */}
        {/* Example:
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold">Another Project</h3>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        */}
      </div>
    </section>
  )
}

