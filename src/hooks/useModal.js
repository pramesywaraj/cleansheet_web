import { useState } from 'react';

export default function useModal() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return { showModal, openModalHandler, closeModalHandler };
}
