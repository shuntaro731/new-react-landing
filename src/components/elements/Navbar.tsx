import Container from "../shared/Container";
import logo from "../../assets/react.svg";
import NavItem from "../shared/NavItem";
import BtnLink from "../shared/BtnLink";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#service", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#contact", text: "Home" },
];

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold items-center">
                CreateReactApp
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between
            lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body
            border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0
              lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg
              w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>

            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6
              lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0"
            >
              <BtnLink href={"#cta"} text={"Get Started"} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
