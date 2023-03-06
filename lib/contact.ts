import emailjs from '@emailjs/browser';
import { useReponseStore } from '../store';

export const send_message = (
  formData: HTMLFormElement,
  onResponse: () => void
) => {
  const { onLoading, reset, onError, onSuccess } = useReponseStore.getState();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  emailjs.sendForm(serviceId!, templateId!, formData!, publicKey!).then(
    (_) => {
      onSuccess(`Thank you for contacting DYSERF`);
      onLoading(false);
      onResponse();

      setTimeout(() => {
        reset();
      }, 3000);
    },
    (_) => {
      onError(`Sending failed, Try again later`, 'error');
      onLoading(false);
      onResponse();

      setTimeout(() => {
        reset();
      }, 3000);
    }
  );
};
