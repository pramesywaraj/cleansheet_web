import React from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import NavStyle from 'components/Navigation/nav.module.scss';

import IconButton from 'components/Buttons/IconButton';

export default function PaginationButton({ next, prev, nextHandler, prevHandler }) {
  return (
    <div className={`${NavStyle['pagination-container']}`}>
      <IconButton
        btnHandler={prevHandler}
        label={<FaCaretLeft size="1.5em" />}
        iconColor={prev ? '#02AFF3' : '#adadad'}
        disabled={!prev}
      />
      <IconButton
        btnHandler={nextHandler}
        label={<FaCaretRight size="1.5em" />}
        iconColor={next ? '#02AFF3' : '#adadad'}
        disabled={!next}
      />
    </div>
  );
}
