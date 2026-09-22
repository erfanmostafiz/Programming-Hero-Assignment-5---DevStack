import logo from "../../assets/logo-text.png";

export default function Nav() {
    return (
        <header className="border border-[#F1F5F9] sticky top-0 z-100">
            <div className="container mx-auto flex h-20 items-center justify-between">
                {/* Logo */}
                <div>
                    <a href="">
                        <img src={logo} alt="Logo Image" />
                    </a>
                </div>

                {/* Middle Navigation */}
                <nav
                    className={`${open ? "flex" : "hidden"} gap-6 font-sans text-sm font-medium text-secondary-black max-[700px]:absolute max-[700px]:top-20 max-[700px]:left-0 max-[700px]:w-full max-[700px]:flex-col max-[700px]:bg-white max-[700px]:p-5`}
                >
                    <a className="text-[#DB2777] font-semibold" href="#Home">
                        Home
                    </a>

                    <a
                        className="text-secondary-black hover:text-[#DB2777]"
                        href="#Technologies"
                    >
                        Technologies
                    </a>

                    <a
                        className="text-secondary-black hover:text-[#DB2777]"
                        href="#projets"
                    >
                        Projects
                    </a>

                    <a
                        className="text-secondary-black hover:text-[#DB2777]"
                        href="#about"
                    >
                        About
                    </a>

                    <a
                        className="text-secondary-black hover:text-[#DB2777]"
                        href="#contact"
                    >
                        Contact
                    </a>
                </nav>

                {/* Auth */}
                <div>
                    <nav className="gap-6 font-sans text-sm flex items-center">
                        <a
                            className="text-secondary-black hover:text-[#DB2777] font-medium"
                            href="#Home"
                        >
                            Sign in
                        </a>

                        <a
                            className="brand-gradient rounded-full px-[20px] py-[10px] font-sans text-sm font-semibold text-white"
                            href="#signup"
                        >
                            Sign Up
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
