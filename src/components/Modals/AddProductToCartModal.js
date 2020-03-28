import React from 'react';

import ModalBase from './ModalBase';
import ModalStyle from './modal.module.scss';
import Loading from '../Loading/Loading';
import PrimaryButton from '../Buttons/PrimaryButton';

import Cart from '../../assets/cart.svg';
import Image from '../Image/Image';

export default function AddProductToCartModal({ loading, show, close }) {
  return (
    <ModalBase show={show} close={close}>
      <div className={`${ModalStyle['modal-content-cart']}`}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Image src={Cart} alt="success" style={`${ModalStyle['modal-cart-image']}`} />
            <div className={`${ModalStyle['modal-cart-caption']}`}>
              <h2>Produk berhasil ditambahkan.</h2>
              <p>
                Produk berhasil ditambahkan. Silahkan tekan tombol di bawah ini untuk melanjutkan ke
                bagian pembayaran.
              </p>
            </div>
            <div className={`${ModalStyle['modal-cart-button']}`}>
              <PrimaryButton clickAction={close} label="Mencari Kembali" />
              <PrimaryButton
                clickAction={() => console.log('ahay')}
                label="Menuju Pembayaran"
                type="primary"
              />
            </div>
          </>
        )}
      </div>
    </ModalBase>
  );
}
