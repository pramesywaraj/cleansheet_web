import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import HeaderStyle from './header.module.scss';
import PrimaryButton from '../Buttons/PrimaryButton';

export default function Header() {
  return (
    <header className={HeaderStyle.header}>
      <nav className={HeaderStyle.navigation}>
        <ul>
          <li>
            <NavLink exact activeClassName={HeaderStyle['header-active-route']} to="/">
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={HeaderStyle['header-active-route']} to="layanan">
              Layanan
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={HeaderStyle['header-active-route']} to="produk">
              Produk
            </NavLink>
          </li>
          {/* <li>
            <NavLink activeClassName={HeaderStyle['header-active-route']} to="tentang">
              Tentang Kami
            </NavLink>
          </li> */}
        </ul>
      </nav>

      <div className={HeaderStyle.floatRight}>
        <NavLink exact to="/login">
          Masuk
        </NavLink>
        <Link to="/register">
          <PrimaryButton type="primary" label="Daftar" />
        </Link>
      </div>
    </header>
  );
}
