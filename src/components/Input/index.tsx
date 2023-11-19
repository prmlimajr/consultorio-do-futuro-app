import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/solid';
import { PencilIcon } from 'react-native-heroicons/outline';
import {
  ErrorContainer,
  InputContainer,
  InputField,
  Label,
  Message,
  Wrapper,
} from './styles';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
  icon?: string;
  hasError?: boolean;
  onClickIcon?: () => void;
}

export function Input({
  label,
  placeholder,
  icon,
  hasError,
  onClickIcon,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

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

      <InputContainer isFocused={isFocused} hasError={hasError}>
        <InputField
          placeholder={placeholder}
          placeholderTextColor="#C6C6C6"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {icon && (
          <TouchableOpacity onPress={onClickIcon}>
            {renderIcon()}
          </TouchableOpacity>
        )}
      </InputContainer>

      {hasError && (
        <ErrorContainer>
          <ExclamationCircleIcon size={16} color="#C83532" />

          <Message>Erro</Message>
        </ErrorContainer>
      )}
    </Wrapper>
  );
}
