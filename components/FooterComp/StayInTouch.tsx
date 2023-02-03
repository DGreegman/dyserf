import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { CustomBtn } from '../Button';
import { DescriptionText, DifferentBg, SectionHeader } from '../Shared';
import { IoMdMail } from 'react-icons/io';

const StayInTouch = () => {
  return (
    <DifferentBg
      w='full'
      flexProps={{
        align: 'center',
        justify: 'center',
      }}
    >
      <Flex
        maxW='596px'
        direction='column'
        bg='transparent'
        gap={6}
        align='center'
      >
        <SectionHeader>Stay in touch</SectionHeader>

        <DescriptionText pb={3} textAlign='center'>
          You can always stay in touch to get events, updates, information and
          also chat with us by sending us a mail.
        </DescriptionText>

        <Flex
          maxW='426px'
          minH='40px'
          border='1px solid rgba(138, 148, 166, 0.2)'
          borderRadius={globalStyles.radius}
          align='center'
          pl='0.5'
        >
          <InputGroup>
            <InputLeftElement pointerEvents='none' pt={2}>
              <Icon as={IoMdMail} fontSize='1.2rem' />
            </InputLeftElement>

            <Input
              _placeholder={{
                color: globalStyles.textColor,
                fontSize: globalStyles.textFontSize,
              }}
              fontSize={globalStyles.textFontSize}
              _focus={{ border: 'none', ring: 0 }}
              className={globalStyles.className}
              border='none'
              type='email'
              placeholder='account@gmail.com'
              size='lg'
            />
          </InputGroup>

          <CustomBtn
            width='140px'
            height='48px'
            text='Subscribe'
            bg={globalStyles.buttonGradient}
          />
        </Flex>
      </Flex>
    </DifferentBg>
  );
};

export default StayInTouch;
