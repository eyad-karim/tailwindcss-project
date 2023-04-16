import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="px-5 bg-black flex flex-row justify-between items-center sticky top-0 left-0 right-0">
        <h1 className="text-2xl py-3 text-white">Logo</h1>
        <ul className="flex flex-row  items-center">
          <li className="mx-3 text-gray-400 hover:text-white transition-all flex items-center">
              <Link href="/">Home</Link>
          </li>
          <Link href="/#"><button className="btn">Hi</button></Link>
        </ul>
      </header>
      <div className="container mx-auto p-4">
        {children}
      </div>
    </>
  );
}

export default Layout;
