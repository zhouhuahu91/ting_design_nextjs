import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useState } from "react";
import { IconButton, useMediaQuery, Collapse } from "@material-ui/core";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";

const NavBar = () => {
  const [burger, setBurger] = useState(false);
  const redBookLink =
    "https://www.xiaohongshu.com/user/profile/59f7a6ab4eacab2655a5158b?xhsshare=CopyLink&appuid=59f7a6ab4eacab2655a5158b&apptime=1593887577";

  const handleClick = () => {
    if (burger) setBurger(false);
  };

  const matches = useMediaQuery("(max-width:768px)");

  const NavBarMenu = () => (
    <>
      <Link href="/about">
        <a onClick={handleClick}>about</a>
      </Link>
      <Link href="/projects">
        <a onClick={handleClick}>projects</a>
      </Link>
      <Link href="/contact">
        <a onClick={handleClick}>contact</a>
      </Link>
      <Link href="/contact">
        <a onClick={handleClick}>en/ch</a>
      </Link>
    </>
  );

  return (
    <>
      <div className={styles.navbar}>
        {matches ? (
          <IconButton
            className={styles.burger}
            onClick={() => setBurger((prev) => !prev)}
          >
            <MenuRoundedIcon />
          </IconButton>
        ) : (
          <a className={styles.icon} target="_blank" href={redBookLink}>
            <Image
              src="/xiaohongshu.png"
              alt="logo of redbook"
              width={25}
              height={25}
            />
          </a>
        )}
        <Link href="/">
          <a>
            <h1 className={styles.title} onClick={handleClick}>
              · TING DESIGN ·
            </h1>
          </a>
        </Link>
      </div>
      {!matches && (
        <div className={styles.menu}>
          <NavBarMenu />
        </div>
      )}
      {matches && (
        <Collapse
          in={burger}
          component="div"
          className={styles.burger_menu_container}
        >
          <div className={styles.burger_menu}>
            <NavBarMenu />
          </div>
        </Collapse>
      )}
    </>
  );
};

export default NavBar;
