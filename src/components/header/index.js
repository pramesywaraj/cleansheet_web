import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingBasket, FaExchangeAlt, FaBars, FaEllipsisV } from 'react-icons/fa';
import { useStore } from 'context/store';
import useSnackbar from 'hooks/useSnackbar';
import useLoading from 'hooks/useLoading';
import HeaderStyle from 'components/Header/header.module.scss';

import PrimaryButton from 'components/Buttons/PrimaryButton';
import FullSubmitButton from 'components/Buttons/FullSubmitButton';
import IconButton from 'components/Buttons/IconButton';

import ButtonLoading from 'components/Loading/ButtonLoading';

function HeaderLinksMenu({ isMenuOpen }) {
  return (
    <nav className={`${HeaderStyle['header-navigation']}`}>
      <ul className={`${HeaderStyle['navigation-links']} ${isMenuOpen ? HeaderStyle.open : ''}`}>
        <li>
          <NavLink exact={true} className={({ isActive }) => isActive ? HeaderStyle['active-route'] : ''} to="/" strict>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} className={({ isActive }) => isActive ? HeaderStyle['active-route'] : ''} to="/layanan" strict>
            Layanan
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} className={({ isActive }) => isActive ? HeaderStyle['active-route'] : ''} to="/produk" strict>
            Produk
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function HeaderUserMenu({ isLoggedIn, itemCountInsideCart, openDropDownMenuHandler }) {
  return (
    <div className={HeaderStyle['user-menu']}>
      {isLoggedIn ? (
        <ul className={HeaderStyle['user-navigation']}>
          <li>
            <NavLink className={HeaderStyle['header-icon-nav']} to="/keranjang">
              <FaShoppingBasket fontSize="1.5em" />
              {!!itemCountInsideCart && (
                <div className={HeaderStyle['header-cart-float-counter']}>
                  <p>{itemCountInsideCart}</p>
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink className={HeaderStyle['header-icon-nav']} to="/transaksi">
              <FaExchangeAlt fontSize="1.5em" />
            </NavLink>
          </li>
          <li>
            <IconButton
              label={<FaEllipsisV />}
              btnHandler={openDropDownMenuHandler}
              iconColor="#02aff3"
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
  );
}

export default function Header() {
  const { state, dispatch } = useStore();
  const { user, isLoggedIn, cart } = state;

  const [openSnackbar] = useSnackbar();
  const [loading, showLoading, hideLoading] = useLoading();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  function signOutHandler() {
    showLoading();
    setTimeout(async () => {
      await dispatch({ type: 'LOGOUT_SUCCESS' });
      hideLoading();
      openSnackbar('info', 'Anda berhasil keluar dari aplikasi.');
      navigate('/login');
    }, 2500);
  }

  function openCloseMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function openDropDownMenuHandler() {
    setUserMenuOpen(!isUserMenuOpen);
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
      <HeaderLinksMenu isMenuOpen={isMenuOpen} />
      <HeaderUserMenu
        isLoggedIn={isLoggedIn}
        itemCountInsideCart={(cart?.products || []).length}
        openDropDownMenuHandler={openDropDownMenuHandler}
      />

      <div className={`${HeaderStyle['dropdown-menu']} ${isUserMenuOpen ? HeaderStyle.open : ''}`}>
        <div>
          <p>Halo,</p>
          <p style={{ color: '#02aff3' }}>{user.name || ''}</p>
        </div>
        <div className={HeaderStyle['dropdown-logout']}>
          <FullSubmitButton
            clickAction={signOutHandler}
            label={loading ? <ButtonLoading color="#02aff3" /> : 'Keluar'}
          />
        </div>
      </div>
    </header>
  );
}
