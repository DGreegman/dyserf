import ButtonComp from '../Button/ButtonComp';
import {
  Flex,
  Stack,
  Heading,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { globalStyles } from '../../styles/customStyles';

const Subscribe = () => {
  // Hooks
  const [email, setEmail] = useState('');

  return (
    <Flex
      w={globalStyles.width}
      minHeight={{ base: '250px', xl: '316px' }}
      bgColor={'#F6F9FD'}
      align={'center'}
      justify={'center'}
    >
      <Stack
        w={{ base: globalStyles.width, md: '600px' }}
        align={'center'}
        justify={'center'}
        gap={{ base: 2, xl: 5 }}
        py={2}
        px={4}
        as={'form'}
      >
        <Heading
          minW={{ base: globalStyles.width, xl: '386px' }}
          fontFamily={globalStyles.fontFamily}
          fontSize={{ base: 16, xl: 24 }}
          fontWeight={500}
          lineHeight={{ base: '24px', xl: '36px' }}
          textAlign={'center'}
          color={'#110F0F'}
        >
          Subscribe for Weekly Newsletter
        </Heading>

        <Text
          color={globalStyles.textColor}
          fontSize={globalStyles.smallTextFontSize}
          w={{ base: globalStyles.width, xl: '596px' }}
          minHeight={'42px'}
          lineHeight={'21px'}
          letterSpacing={'0.01em'}
          textAlign={'center'}
        >
          You can always subscribe to our newsletter to get events, updates,
          informations and also chat with us by sending us a mail.
        </Text>

        <FormControl
          w={globalStyles.width}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <InputGroup width={{ base: globalStyles.width, lg: '318px' }}>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon mt={'4px'} color={'#4E5D78'} />}
            />
            <Input
              id={'email'}
              type={'email'}
              size={'lg'}
              color={'#110F0F'}
              height={'40px'}
              borderRadius={0}
              bgColor={globalStyles.whiteColor}
              fontSize={globalStyles.smallTextFontSize}
              placeholder={'account@gmail.com'}
              border={'1px solid #C9C9C9'}
              _focus={{
                border: 'none',
              }}
              _placeholder={{
                fontSize: 12,
                lineHeight: '18px',
                color: '#4E5D78',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <ButtonComp
            width={'108px'}
            height={'40px'}
            text={'Subscribe'}
            borderRadius={'0px'}
            type
          />
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Subscribe;
