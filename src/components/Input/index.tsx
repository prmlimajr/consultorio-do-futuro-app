import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { PencilIcon } from 'react-native-heroicons/outline';
import { InputContainer, InputField, Label, Wrapper } from './styles';
import { TextInputProps, TouchableOpacity } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
  icon?: string;
  onClickIcon?: () => void;
}

export function Input({
  label,
  placeholder,
  icon,
  onClickIcon,
  ...rest
}: InputProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'eye-on':
        return <EyeIcon size={24} color="#424242" />;
      case 'eye-off':
        return <EyeSlashIcon size={24} color="#424242" />;
      case 'pencil':
        return <PencilIcon size={24} color="#424242" />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Label>{label}</Label>

      <InputContainer>
        <InputField
          placeholder={placeholder}
          placeholderTextColor="#C6C6C6"
          {...rest}
        />

        {icon && (
          <TouchableOpacity onPress={onClickIcon}>
            {renderIcon()}
          </TouchableOpacity>
        )}
      </InputContainer>
    </Wrapper>
  );
}
