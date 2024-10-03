import Link from "next/link";

 export default function Header() {
  return (
    <header className="flex justify-between h-20" >
      {/* Logo */}
      <div>
        <h2 className="text-3xl  text-blue-600 font-extrabold font-serif">  FU Private Ltd  </h2>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-x-11 " >
          <li >
            <Link href="/" className="text-blue-500 hover:bg-slate-400 hover:text-white" >Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:bg-slate-400  hover:text-white">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500 hover:bg-slate-400  hover:text-white">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}