import { Box } from '@chakra-ui/react';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { ResponseModel } from '../../models';
import { globalStyles } from '../../styles';

export const ResponseComp = ({
  successMessage,
  errorMessage,
  status,
}: ResponseModel) => {
  const message = successMessage || errorMessage;

  return (
    <Box width={globalStyles.width} h='12'>
      {message && status && (
        <Alert status={status} variant='solid'>
          <AlertIcon />
          {message}
        </Alert>
      )}
    </Box>
  );
};
