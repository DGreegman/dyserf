import ButtonComp from '../Button/ButtonComp';
import { FormControl, Input, Stack, Textarea } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

const AboutForm = () => {
  const border = '1px solid #E3E3E3';
  return (
    <Stack
      as='form'
      gap={2}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormControl>
        <Input
          size='lg'
          bgColor={globalStyles.whiteColor}
          border={border}
          isRequired
          placeholder='Name'
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          _focus={{
            border: { border },
            ring: 0,
          }}
        />
      </FormControl>

      <FormControl>
        <Input
          size={'lg'}
          bgColor={globalStyles.whiteColor}
          border={border}
          placeholder='Email'
          type='email'
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          isRequired
          _focus={{
            border: border,
            ring: 0,
          }}
        />
      </FormControl>

      <FormControl>
        <Textarea
          size='lg'
          bgColor={globalStyles.whiteColor}
          border={border}
          resize='none'
          minH='250px'
          isRequired
          placeholder='Message'
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          _focus={{
            border: border,
            ring: 0,
          }}
        />
      </FormControl>

      <ButtonComp
        width={globalStyles.width}
        bg={globalStyles.secondaryColor}
        text='Send Message'
        height='58px'
        type
      />
    </Stack>
  );
};

export default AboutForm;
