import HeroTexts from './HeroTexts';
import { Flex, FormControl, Input, Stack, Textarea } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import { CustomBtn } from '../Button';
import { CardHeader } from './Header';

const ContactForm = () => {
  return (
    <SectionContainer pt={globalStyles.sectionPt}>
      <HeroTexts desc=' Share your idea with us let’s collaborate.'>
        We are a step away
      </HeroTexts>

      <Stack
        as='form'
        gap={2}
        px={globalStyles.px}
        w={{ base: globalStyles.width, xl: '880px' }}
        pt='30px'
        pb='30px'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormControl>
          <Input
            size='lg'
            isRequired
            border={0}
            background='linear-gradient(180deg, rgba(23, 31, 52, 0.44) 0%, rgba(23, 31, 52, 0.44) 100%);'
            boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.03)'
            placeholder='Name'
            fontSize={globalStyles.textFontSize}
            className={globalStyles.className}
            _placeholder={{
              fontSize: globalStyles.textFontSize,
            }}
            _focus={{
              ring: 0,
              border: 0,
              boxShadow: 'none',
            }}
          />
        </FormControl>

        <FormControl>
          <Input
            size='lg'
            background='linear-gradient(180deg, rgba(23, 31, 52, 0.44) 0%, rgba(23, 31, 52, 0.44) 100%);'
            boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.03)'
            placeholder='Email'
            type='email'
            border={0}
            className={globalStyles.className}
            fontSize={globalStyles.textFontSize}
            _placeholder={{
              fontSize: globalStyles.textFontSize,
            }}
            isRequired
            _focus={{
              ring: 0,
              border: 0,
              boxShadow: 'none',
            }}
          />
        </FormControl>

        <FormControl>
          <Textarea
            size='lg'
            background='linear-gradient(180deg, rgba(23, 31, 52, 0.44) 0%, rgba(23, 31, 52, 0.44) 100%);'
            border={0}
            resize='none'
            minH='250px'
            isRequired
            className={globalStyles.className}
            placeholder='Message'
            fontSize={globalStyles.textFontSize}
            _placeholder={{
              fontSize: globalStyles.textFontSize,
            }}
            _focus={{
              ring: 0,
              border: 0,
              boxShadow: 'none',
            }}
          />
        </FormControl>

        <CustomBtn
          width={globalStyles.width}
          bg={globalStyles.buttonGradient}
          text='Send Message'
          height='55px'
          type='submit'
        />
      </Stack>

      <CardHeader>Or</CardHeader>

      <Flex align='center' gap={5} pt='20px'>
        <CardHeader>Send us a mail:</CardHeader>
        <CardHeader>
          <a
            href='mailto:officialdyserf@gmail.com'
            className={globalStyles.className}
            rel='noreferrer noopener'
          >
            officialdyserf@gmail.com
          </a>
        </CardHeader>
      </Flex>
    </SectionContainer>
  );
};

export default ContactForm;
