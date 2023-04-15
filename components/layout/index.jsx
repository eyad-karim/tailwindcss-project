import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="px-5 bg-white dark:bg-black flex flex-row justify-between items-center sticky top-0 left-0 right-0">
        <h1 className="text-2xl py-3 text-white">post.com</h1>
        <ul className="flex flex-row  items-center">
          <li className="mx-3 text-gray-400 hover:text-white transition-all flex items-center">
              <Link href="/">Home</Link>
          </li>
          <li className="mx-3 text-gray-400 hover:text-white transition-all flex items-center">
              <Link href="/posts">Posts</Link>
          </li>
          <li className="mx-3 text-gray-400 hover:text-white transition-all flex items-center">
              <Link href="/contact">Contact</Link>
          </li>
          <Link href="/create"><button className="btn">Create</button></Link>
        </ul>
      </header>
      <div className="grid grid-cols-12 py-4">
        {children}
      </div>
    </>
  );
}

export default Layout;
