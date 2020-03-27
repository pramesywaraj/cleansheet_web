export default function validateLogin(values) {
  const errors = {};
  const todayDate = new Date().toISOString().substr(0, 10);
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

  if ('pickup_date' in values) {
    if (!values.pickup_date) {
      errors.pickup_date = 'Tanggal penjemputan/pelaksanaan belum terisi.';
    } else if (values.date < todayDate) {
      errors.pickup_date = `Tanggal harus ${todayDate} atau setelahnya.`;
    }
  }

  if ('pickup_time' in values) {
    if (!values.pickup_time) {
      errors.pickup_time = 'Waktu penjemputan/pelaksanaan belum terisi.';
    }
  }

  if ('pickup_address' in values) {
    if (!values.pickup_address) {
      errors.pickup_address = 'Alamat penjemputan/pelaksanaan belum terisi.';
    }
  }

  if ('city' in values) {
    if (!values.city) {
      errors.city = 'Kota belum terisi';
    }
  }

  return errors;
}
