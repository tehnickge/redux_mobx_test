import { Link, Outlet } from "react-router-dom";
import "./TestComponent.scss";

export interface LinkProps {
  href: string;
  title: string;
}

export type LinksProps = {
  links: LinkProps[];
};

const TestComponent: React.FC<LinksProps> = ({ links }) => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          {links.map(({ href, title }) => {
            return (
              <li className="nav__li">
                <Link to={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default TestComponent;
