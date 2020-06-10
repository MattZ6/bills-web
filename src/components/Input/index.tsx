import React, {
  useState,
  useCallback,
  InputHTMLAttributes,
  useRef,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { MdError } from 'react-icons/md';

import { Container, InputContainer, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  disabledKeys?: string[];
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  containerStyle = {},
  disabled,
  disabledKeys = [],
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!disabledKeys.length) {
        return;
      }

      if (disabledKeys.includes(event.key)) {
        event.preventDefault();
      }
    },
    [disabledKeys],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });

    setIsFilled(!!inputRef.current?.value);
  }, [registerField, fieldName]);

  return (
    <Container>
      <InputContainer
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
        isDisabled={!!disabled}
        hasIcon={!!Icon}
        style={{ ...containerStyle }}
      >
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          disabled={!!disabled}
          {...rest}
        />

        {Icon && <Icon size={24} />}
      </InputContainer>

      {error && !disabled && (
        <Error>
          <MdError size={16} />
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
};

export default Input;
