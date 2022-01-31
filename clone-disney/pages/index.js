import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';
import s from '../styles/header.module.scss';

import logo from '../public/images/disney-logo.png';
import HomeIcon from '../components/icons/HomeIcon';
import SearchIcon from "../components/icons/SearchIcon";
import PlusIcon from "../components/icons/PlusIcon";
import StarIcon from "../components/icons/StarIcon";
import MoviesIcon from "../components/icons/MoviesIcon";
import SeriesIcon from "../components/icons/SeriesIcon";

import { signIn } from "../node_modules/next-auth/react";

export default function Home() {
  // const headerItems = ['home', 'search', 'watchlist', 'originals', 'movies', 'series'];

  return (
    <div className={styles.container}>
      <Head>
        <title>Clone Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={s.header}>
        <Image src={logo} width={80} height={80} alt="disney logo" />
        <nav className={s.nav}>
          {/* {headerItems.map((headerItems) => {})} */}
          <Link href="/">
            <a className={s.nav__link}>
              <HomeIcon />
              <span>home</span>
            </a>
          </Link>
          <Link href="/">
            <a className={s.nav__link}>
              <SearchIcon />
              <span>search</span>
            </a>
          </Link>
          <Link href="/">
            <a className={s.nav__link}>
              <PlusIcon />
              <span>watchlist</span>
            </a>
          </Link>
          <Link href="/">
            <a className={s.nav__link}>
              <StarIcon />
              <span>originals</span>
            </a>
          </Link>
          <Link href="/">
            <a className={s.nav__link}>
              <MoviesIcon />
              <span>movies</span>
            </a>
          </Link>
          <Link href="/">
            <a className={s.nav__link}>
              <SeriesIcon />
              <span>series</span>
            </a>
          </Link>
        </nav>
        <button className={s.login__button} onClick={()=>{signIn()}}>login</button>
      </header>
    </div>
  );
}
