import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import { CustomBtn } from '../Button';
import { DescriptionText, SectionHeader } from '../Shared';
import { IoMdMail } from 'react-icons/io';

const StayInTouch = () => {
  return (
    <SectionContainer
      background='linear-gradient(180deg, rgba(23, 31, 52, 0.44) 0%, rgba(23, 31, 52, 0.44) 100%)'
      boxShadow={globalStyles.boxShadow}
      borderRadius={20}
      minH='365px'
      border='1px solid'
      borderColor='gray.700'
      className='addBorder'
    >
      <Flex
        maxW='596px'
        minH='204px'
        direction='column'
        bg='transparent'
        gap={6}
        align='center'
      >
        <SectionHeader>Stay in touch</SectionHeader>

        <DescriptionText>
          You can always stay in touch to get events, updates, information and
          also chat with us by sending us a mail.
        </DescriptionText>

        <Flex
          maxW='426px'
          minH='40px'
          border='1px solid rgba(138, 148, 166, 0.2)'
          borderRadius={5}
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
    </SectionContainer>
  );
};

export default StayInTouch;
