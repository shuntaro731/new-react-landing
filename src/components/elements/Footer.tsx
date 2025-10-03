import Container from "../shared/Container";
import logo from "../../assets/my-logo.svg";
import darkLogo from "../../assets/dark-my-logo.svg";
import { navItems } from "./Navbar";
import NavItem from "../shared/NavItem";
import { useThemeStore } from "../../store/ThemeStore";

export const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer className="relative pt-14 bg-box-bg mt-40">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0 text-heading-1">
            <img
              src={theme === 'dark' ? darkLogo : logo}
              className="w-32 h-auto"
              alt="Logo"
            />
          </div>
          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
