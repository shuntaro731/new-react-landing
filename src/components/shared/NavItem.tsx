interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = targetId ? document.getElementById(targetId) : null;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="duration-400 font-medium ease-linear hover:opacity-70 transition-opacity cursor-pointer"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
