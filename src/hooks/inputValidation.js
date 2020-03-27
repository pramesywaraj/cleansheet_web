export default function validateLogin(values) {
  const errors = {};
  if ('email' in values) {
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Alamat email Anda tidak valid';
    }
  }

  if ('password' in values) {
    if (!values.password) {
      errors.password = 'Password belum terisi';
    } else if (values.password.length < 6) {
      errors.password = 'Password harus terdiri atas 6 karakter atau lebih';
    }
  }

  if ('name' in values) {
    if (!values.name) {
      errors.name = 'Nama belum terisi';
    }
  }

  if ('phone' in values) {
    if (!values.phone) {
      errors.phone = 'Nomor telepon belum terisi';
    } else if (!/^((?:\+62|62)|0)[2-9]{1}[0-9]+$/.test(values.phone)) {
      errors.phone = 'Nomor telepon Anda tidak sesuai format.';
    }
  }

  if ('city' in values) {
    if (!values.city) {
      errors.city = 'Kota belum terisi';
    }
  }

  return errors;
}
