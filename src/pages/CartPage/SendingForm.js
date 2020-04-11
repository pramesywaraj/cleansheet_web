import React from 'react';

import CartCard from '../../components/Cards/CartCard';
import TextInput from '../../components/Input/TextInput';
import TextArea from '../../components/Input/TextArea';
import FullSubmitButton from '../../components/Buttons/FullSubmitButton';

export default function SendingForm({
  handleSubmit,
  deliveryPayload,
  changeFormValue,
  errors,
  isLoading,
}) {
  return (
    <CartCard label="Data Pengiriman">
      <form onSubmit={handleSubmit}>
        <TextInput
          name="name"
          label="Nama Penerima"
          type="text"
          placeholder="Nama penerima pesanan Anda."
          value={deliveryPayload.name}
          error={errors.name}
          onChange={changeFormValue}
        />
        <TextInput
          name="email"
          label="Email"
          type="text"
          placeholder="Masukkan email Anda"
          value={deliveryPayload.email}
          error={errors.email}
          onChange={changeFormValue}
        />
        <TextInput
          name="phone_number"
          label="Kontak Penerima"
          type="tel"
          placeholder="Kontak yang dapat dihubungi (WA)"
          value={deliveryPayload.phone_number}
          error={errors.phone_number}
          onChange={changeFormValue}
        />
        <TextInput
          name="city"
          label="Kota"
          type="text"
          placeholder="Kota tujuan pengiriman barang"
          value={deliveryPayload.city}
          error={errors.city}
          onChange={changeFormValue}
        />
        <TextInput
          name="postal_code"
          label="Kode Pos"
          type="text"
          placeholder="Kode pos"
          value={deliveryPayload.postal_code}
          error={errors.postal_code}
          onChange={changeFormValue}
        />
        <TextArea
          name="address"
          label="Alamat"
          placeholder="Alamat Lengkap"
          value={deliveryPayload.address}
          error={errors.address}
          onChange={changeFormValue}
        />
        <TextInput
          name="notes"
          label="Catatan"
          type="text"
          placeholder="Catatan tambahan untuk kami :)"
          value={deliveryPayload.notes}
          error={errors.notes}
          onChange={changeFormValue}
        />

        <FullSubmitButton type="primary" isLoading={isLoading} label="Pesan" />
      </form>
    </CartCard>
  );
}
