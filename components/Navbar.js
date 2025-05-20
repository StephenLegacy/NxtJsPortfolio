'use client' // Needed if using Next.js App Router
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Stephen Oloo</h1>
      <div className="space-x-6 text-gray-600 font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-cyan-600 transition-colors duration-300 border-b-2 ${
              pathname === href
                ? 'border-cyan-600 text-cyan-600'
                : 'border-transparent'
            } pb-1`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
