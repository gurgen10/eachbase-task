import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
/**
 * Show confirmation window.
 * @param {function} onClickYes - Handler on yes.
 * @param {string} message - display message.
 */
export const confirmWindow = (onClickYes, message) => {
  const options = {
    title: 'Are you sure?',
    message,
    buttons: [
      {
        label: 'Yes',
        onClick: () => onClickYes()
      },
      {
        label: 'No',
        onClick: () => { }
      }
    ],
    childrenElement: () => <div />,

    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => { },
    afterClose: () => { },
    onClickOutside: () => { },
    onKeypressEscape: () => { },
    overlayClassName: "overlay-custom-class-name"
  };
  confirmAlert(options)
}
