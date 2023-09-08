import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black ">
        <Link href={'/'}>Home</Link>
        <ul>
            <Link href={'/about'} >About</Link>
        </ul>
    </nav>
  )
}

export default Navbar