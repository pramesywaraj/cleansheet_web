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

  if ('city' in values) {
    if (!values.city) {
      errors.city = 'Kota belum terisi';
    }
  }

  return errors;
}
