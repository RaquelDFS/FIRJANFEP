import { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const [width768, setWidth768] = useState();

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setWidth768(true);
    } else {
      setWidth768(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          MuitoClima
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        {width768 ? null : (
          <div>
            <button onClick={toggleOpen}>
              {!menuOpen ? <BiMenuAltRight /> : <AiOutlineClose />}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

