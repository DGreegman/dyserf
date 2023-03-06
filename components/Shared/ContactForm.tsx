import { HeroTexts } from './HeroTexts';
import { Flex, FormControl, Input, Stack, Textarea } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { globalStyles, inputGradient } from '../../styles';
import { CustomBtn } from '../Button';
import { CardHeader } from './Header';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useReponseStore } from '../../store';
import { ResponseComp } from './ResponseComp';
import { send_message } from '../../lib';

export const ContactForm = () => {
  const initialFormState = {
    user_name: '',
    user_email: '',
    message: '',
  };

  const form = useRef<HTMLFormElement | null>(null);
  const [contact, setContact] = useState(initialFormState);

  const { user_name, user_email, message } = contact;
  const {
    successMessage,
    errorMessage,
    status,
    onLoading,
    onError,
    isLoading,
  } = useReponseStore();

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLoading(true);

    if (user_email && user_name && message) {
      onError(undefined, undefined);
      send_message(form.current!, () => {
        setContact(initialFormState);
      });
    } else {
      onError('Please fill all the required fields', 'warning');
      onLoading(undefined);
    }
  };

  return (
    <SectionContainer pt={globalStyles.sectionPt}>
      <HeroTexts desc=' Share your idea with us let’s collaborate.'>
        We are a step away
      </HeroTexts>

      <form ref={form} onSubmit={sendEmail}>
        <Stack
          gap={2}
          px={globalStyles.px}
          w={{ base: globalStyles.width, lg: '880px' }}
          pb='30px'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <ResponseComp
            status={status}
            successMessage={successMessage}
            errorMessage={errorMessage}
          />

          <FormControl>
            <Input
              size='lg'
              border={0}
              background={inputGradient}
              boxShadow={globalStyles.boxShadow}
              placeholder='Name'
              fontSize={globalStyles.textFontSize}
              className={globalStyles.className}
              value={user_name}
              onChange={changeHandler}
              isRequired
              name='user_name'
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
              background={inputGradient}
              boxShadow={globalStyles.boxShadow}
              placeholder='Email'
              type='email'
              name='user_email'
              border={0}
              className={globalStyles.className}
              onChange={changeHandler}
              fontSize={globalStyles.textFontSize}
              isRequired
              value={user_email}
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
              display='none'
              type='text'
              name='to_name'
              readOnly
              value='DYSERF'
            />
          </FormControl>

          <FormControl>
            <Textarea
              size='lg'
              background={inputGradient}
              border={0}
              resize='none'
              minH='250px'
              className={globalStyles.className}
              placeholder='Message'
              isRequired
              name='message'
              onChange={changeHandler}
              fontSize={globalStyles.textFontSize}
              value={message}
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
            isLoading={isLoading}
            loadingText='Sending...'
          />
        </Stack>
      </form>

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

