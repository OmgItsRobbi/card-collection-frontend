import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center px-8 py-6 bg-emerald-500 text-white shadow-md">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold mr-2">Card Colletion</h1>
      </Link>
      <div className="pr-40 space-x-8 flex items-center justify-center flex-grow">
        <Link href="/">
          <button className="text-white hover:text-gray-300 text-xl font-bold">
            Home
          </button>
        </Link>
        <Link href="/collection">
          <button className="text-white hover:text-gray-300 text-lg">
            Collection
          </button>
        </Link>
        <Link href="/decks">
          <button className="text-white hover:text-gray-300 text-lg">
            Decks
          </button>
        </Link>
        <Link href="">
          <button className="text-white hover:text-gray-300 text-lg">
            Account
          </button>
        </Link>
        <div className="absolute right-4">
          <Link href="/logout">
            <button className="text-white hover:text-gray-300 font-bold mr-3 text-lg">
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
