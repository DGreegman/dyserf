import ButtonComp from '../Button/ButtonComp';
import { FormControl, Input, Stack, Textarea } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

const AboutForm = () => {
  return (
    <Stack as={'form'} gap={2}>
      <FormControl>
        <Input
          size={'lg'}
          bgColor={globalStyles.whiteColor}
          border={'1px solid #E3E3E3'}
          isRequired
          placeholder={'Name'}
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          _focus={{
            border: '1px solid #E3E3E3',
            ring: 0,
          }}
        />
      </FormControl>

      <FormControl>
        <Input
          size={'lg'}
          bgColor={globalStyles.whiteColor}
          border={'1px solid #E3E3E3'}
          placeholder={'Email'}
          type={'email'}
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          isRequired
          _focus={{
            border: '1px solid #E3E3E3',
            ring: 0,
          }}
        />
      </FormControl>

      <FormControl>
        <Textarea
          size={'lg'}
          bgColor={globalStyles.whiteColor}
          border={'1px solid #E3E3E3'}
          resize={'none'}
          minH={'250px'}
          isRequired
          placeholder={'Message'}
          fontSize={globalStyles.smallTextFontSize}
          _placeholder={{
            fontSize: globalStyles.smallTextFontSize,
          }}
          _focus={{
            border: '1px solid #E3E3E3',
            ring: 0,
          }}
        />
      </FormControl>

      <ButtonComp
        text={'Send Message'}
        width={globalStyles.width}
        height={'58px'}
        bg={globalStyles.secondaryColor}
        type
      />
    </Stack>
  );
};

export default AboutForm;
