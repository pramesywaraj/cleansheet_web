import { useStore } from '../context/store';

export default function useConfirmationDialog() {
  const { dispatch, state } = useStore();

  function openDialog(title, caption, onConfirm) {
    // composing the on confirm function with processing state
    function onConfirmDialog() {
      dispatch({ type: 'DIALOG_PROCESS_ON' });
      onConfirm();
    }
    dispatch({ type: 'DIALOG_OPEN', data: { title, caption, confirmAction: onConfirmDialog } });
  }

  function processDone() {
    dispatch({ type: 'DIALOG_PROCESS_DONE' });
  }

  return { openDialog, processDone };
}
