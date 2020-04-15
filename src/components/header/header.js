import React, { useEffect, useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { FaShoppingBasket, FaExchangeAlt, FaBars } from 'react-icons/fa';
import { useStore } from '../../context/store';
import useSnackbar from '../../hooks/useSnackbar';
import useLoading from '../../hooks/useLoading';
import HeaderStyle from './header.module.scss';
import PrimaryButton from '../Buttons/PrimaryButton';
import ButtonLoading from '../Loading/ButtonLoading';

export default function Header() {
  const { state, dispatch } = useStore();
  const { user, isLoggedIn } = state;

  const [openSnackbar] = useSnackbar();
  const [loading, showLoading, hideLoading] = useLoading();
  const history = useHistory();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function loggingOut() {
    showLoading();
    setTimeout(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
      hideLoading();
      openSnackbar('info', 'Anda berhasil keluar dari aplikasi.');
      history.push('/login');
    }, 2500);
  }

  function openCloseMenu() {
    console.log(isMenuOpen);
    setMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <header className={HeaderStyle['header-container']}>
      <div className={HeaderStyle['hamburger-menu']}>
        <FaBars onClick={openCloseMenu} fontSize="1.5em" />
      </div>
      <nav className={`${HeaderStyle['header-navigation']}`}>
        <ul
          className={`${HeaderStyle['navigation-links']} ${isMenuOpen ? HeaderStyle.open : ''}`}
        >
          <li>
            <NavLink exact activeClassName={HeaderStyle['active-route']} to="/">
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={HeaderStyle['active-route']} to="layanan">
              Layanan
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={HeaderStyle['active-route']} to="produk">
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

      <div />

      <div className={HeaderStyle['user-menu']}>
        {isLoggedIn ? (
          <ul className={HeaderStyle['user-navigation']}>
            <li>
              <NavLink className={HeaderStyle['header-icon-nav']} to="/keranjang">
                <FaShoppingBasket fontSize="1.5em" />
              </NavLink>
            </li>
            <li>
              <NavLink className={HeaderStyle['header-icon-nav']} to="/transaksi">
                <FaExchangeAlt fontSize="1.5em" />
              </NavLink>
            </li>
            <li>
              <NavLink className={HeaderStyle['header-user-name']} exact to="/">
                {`Hai, ${user.name}`}
              </NavLink>
            </li>
            <li>
              <PrimaryButton
                type="primary"
                label={loading ? <ButtonLoading /> : 'Keluar'}
                clickAction={loggingOut}
              />
            </li>
          </ul>
        ) : (
          <ul className={HeaderStyle['user-navigation']}>
            <li>
              <NavLink exact to="/login">
                Masuk
              </NavLink>
            </li>
            <li>
              <Link to="/register">
                <PrimaryButton type="primary" label="Daftar" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
