import React from 'react';

import ModalBase from 'components/Modals/ModalBase';
import ModalStyle from 'components/Modals/modal.module.scss';
import Loading from 'components/Loading/Loading';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import Cart from 'assets/cart.svg';
import Image from 'components/Image/Image';

export default function AddProductToCartModal({ loading, show, close, toCartAction, isError }) {
  return (
    <ModalBase show={show}>
      <div className={`${ModalStyle['modal-content-cart']}`}>
        {loading ? (
          <div className={`${ModalStyle['modal-cart-caption']}`}>
            <Loading />
          </div>
        ) : (
          <>
            <Image src={Cart} alt="success" style={`${ModalStyle['modal-cart-image']}`} />
            <div className={`${ModalStyle['modal-cart-caption']}`}>
              <h2>Produk berhasil ditambahkan.</h2>
              <p>
                Silahkan tekan tombol Menuju Pembayaran di bawah ini untuk melanjutkan ke bagian
                pembayaran.
              </p>
            </div>
            <div className={`${ModalStyle['modal-cart-button']}`}>
              <PrimaryButton clickAction={close} label="Mencari Kembali" />
              <PrimaryButton clickAction={toCartAction} label="Menuju Pembayaran" type="primary" />
            </div>
          </>
        )}
      </div>
    </ModalBase>
  );
}
