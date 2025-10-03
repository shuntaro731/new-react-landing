import Container from "../shared/Container";
import logo from "../../assets/my-logo.svg";
import NavItem from "../shared/NavItem";
import BtnLink from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import lottie, { type AnimationItem } from "lottie-web";
import { useRef, useEffect } from "react";
import animationData from "../../assets/theme-toggle-animation.json";

// eslint-disable-next-line react-refresh/only-export-components
export const navItems = [
  { href: "#", text: "Home" },
  { href: "#product", text: "Works" },
  { href: "#contact", text: "Contact" },
];

export const Navbar = () => {
  const { toggleTheme } = useThemeStore();
  const lottieContainer = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const forwardRef = useRef(true);

  useEffect(() => {
    if (lottieContainer.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });

      // SVGのストロークカラーを更新する関数
      const updateStrokeColor = () => {
        const svg = lottieContainer.current?.querySelector("svg");
        if (svg) {
          const paths = svg.querySelectorAll("path, line");
          const currentColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--heading-1");
          paths.forEach((path) => {
            path.setAttribute("stroke", `rgb(${currentColor})`);
          });
        }
      };

      // アニメーション読み込み後にストロークカラーを更新
      animationRef.current.addEventListener("DOMLoaded", updateStrokeColor);
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, []);

  const handleToggle = () => {
    if (animationRef.current) {
      if (forwardRef.current) {
        animationRef.current.setDirection(1);
      } else {
        animationRef.current.setDirection(-1);
      }
      animationRef.current.play();
      forwardRef.current = !forwardRef.current;
    }
    toggleTheme();

    // テーマ変更後にストロークカラーを更新
    setTimeout(() => {
      const svg = lottieContainer.current?.querySelector("svg");
      if (svg) {
        const paths = svg.querySelectorAll("path, line");
        const currentColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--heading-1");
        paths.forEach((path) => {
          path.setAttribute("stroke", `rgb(${currentColor})`);
        });
      }
    }, 50);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative lg:flex">
            <a href="/" className="relative flex items-center gap-2 text-heading-1">
              <img src={logo} alt="logo" className="w-32 h-auto" />
            </a>
          </div>

          <div
            className="hidden lg:flex flex-col lg:flex-row w-full lg:justify-between
            lg:items-center lg:static bg-body lg:bg-transparent"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0
              lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg
              w-full lg:justify-center lg:items-center text-heading-1"
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

          <div className="min-w-max flex items-center">
            <button
              onClick={handleToggle}
              className="outline-hidden flex items-center justify-center text-heading-1 rounded-full
               h-10 lg:w-12 lg:h-12 cursor-pointer overflow-hidden"
            >
              <div ref={lottieContainer} className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
