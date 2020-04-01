import { useState } from 'react';
import { useStore } from '../context/store';

export default function useConfirmationDialog() {
  const { dispatch, state } = useStore();
  const [dialogProcess, setDialogProcess] = useState(true);

  function openDialog(title, caption, onConfirm) {
    dispatch({ type: 'DIALOG_OPEN', data: { title, caption, confirmAction: onConfirm } });
  }

  function onConfirmDialog() {
    setDialogProcess(true);
    state.dialogOnConfirm();
  }

  function closeDialog() {
    dispatch({ type: 'DIALOG_CLOSE' });
  }

  function processStatus(status) {
    setDialogProcess(status);
  }

  return { openDialog, onConfirmDialog, closeDialog, processStatus, dialogProcess };
}
