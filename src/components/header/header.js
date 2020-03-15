import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { useStore } from '../../context/store';
import useSnackbar from '../../hooks/useSnackbar';

import HeaderStyle from './header.module.scss';
import PrimaryButton from '../Buttons/PrimaryButton';

export default function Header() {
  const [openSnackbar] = useSnackbar();
  const { state, dispatch } = useStore();
  const { user, isLoggedIn } = state;

  const history = useHistory();

  const loggingOut = () => {
    setTimeout(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
      openSnackbar('info', 'Anda berhasil keluar dari aplikasi.');
      history.push('/login');
    }, 1000);
  };

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
        {isLoggedIn ? (
          <>
            <NavLink className={HeaderStyle['header-cart-nav']} to="/keranjang">
              <FaShoppingBasket fontSize="1.5em" />
            </NavLink>
            <NavLink exact to="/">{`Hai, ${user.name}`}</NavLink>
            <PrimaryButton type="primary" label="Keluar" clickAction={loggingOut} />
          </>
        ) : (
          <>
            <NavLink exact to="/login">
              Masuk
            </NavLink>
            <Link to="/register">
              <PrimaryButton type="primary" label="Daftar" />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
