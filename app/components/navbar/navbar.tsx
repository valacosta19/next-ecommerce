import Link from "next/link"
import Image from "next/image"
import { CircleUserRound, ShoppingBasket } from "lucide-react"

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/catalogue'
  },
  {
    name: 'About',
    path: '/about'

  },
  {
    name: 'Contact',
    path: '/contact'
  }]

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <Link href={'/'}>
        <Image width={80} height={80} src={"/logo-eurycolor.png"} alt={"Logo Eurycolor"} />
      </Link>

      <ul className="flex gap-3">
        {pages.map((page, index) => {
          return <li><Link key={index} href={page.path}>{page.name}</Link></li>
        })}
      </ul>

      <div className="flex gap-3">
        <Link href={'/admin'}>
          <CircleUserRound />
        </Link>
        <Link href={'/cart'}>
          <ShoppingBasket />
        </Link>
      </div>
    </nav>
  )
}
