import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg text-white">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <Link href="/">
                        <p className="flex items-center py-5 px-2 text-white hover:text-blue-200">
                            <span className="font-bold">Leonard Melnik</span>
                        </p>
                    </Link>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/#projects"><p className="py-5 px-3 hover:underline">Projects</p></Link>
                        <Link href="/#articles"><p className="py-5 px-3 hover:underline">Articles</p></Link>
                        <Link href="/#videos"><p className="py-5 px-3 hover:underline">Videos</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
