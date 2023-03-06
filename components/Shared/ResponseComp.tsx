import { Alert, AlertIcon } from '@chakra-ui/react';
import { ResponseModel } from '../../models';

export const ResponseComp = ({
  successMessage,
  errorMessage,
  status,
}: ResponseModel) => {
  const message = successMessage || errorMessage;

  return (
    <>
      {message && status && (
        <Alert status={status} variant='solid'>
          <AlertIcon />
          {message}
        </Alert>
      )}
    </>
  );
};
