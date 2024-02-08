import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { TextBig } from '../settings/AppFonts'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'



export const Input = styled.TextInput`
    width: 100%;
    height: ${({ isTextArea = false }) => isTextArea == true ? '120px' : '60px'};
    border-radius: 5px;
    border-width: 2px;
    border-color: ${({ borderColor = AppColors.lightBlue, isValid = true }) => isValid ?  borderColor : AppColors.red};
    padding: 16px;
    font-family: 'MontserratAlternates_700Bold';
    color: ${({ color = AppColors.lightBlueV1,isValid = true }) => isValid ? color : AppColors.red};
    `

export const InputBox = styled.View`
        width: 100%;
        gap: 10px;
`

export default function AppInput({
    lable = '',
    hint,
    textColor = AppColors.lightBlueV1,
    borderColor,
    isObscure = false,
    isTextArea = false,
    hasLabel = false,
    textValue,
    onEdit,
    focus = null,
    focusOut = null,
    isValid = true,
    onChange = null
}) {
    const handleInputChange = (value) => {
       onEdit === null ? null : onEdit(value);
    };
    
    return (
        <InputBox>
            {hasLabel ? (<TextBig>{lable}</TextBig>) : null}
            <Input
                placeholder={hint}
                placeholderTextColor={ isValid ? textColor : AppColors.red}
                color={ isValid ? textColor : AppColors.red}
                secureTextEntry={isObscure}
                multiline={isTextArea}
                numberOfLines={isTextArea == true ? 5 : 1}
                isTextArea={isTextArea}
                textAlignVertical={isTextArea == true ? 'top' : 'center'}
                value={textValue}
                onChangeText={handleInputChange}
                onChange={onChange}
                borderColor={borderColor}
                onFocus={focus}
                onBlur={focusOut}
                isValid={isValid}
            />
        </InputBox>
    )
}

const CELL_COUNT = 4;

const Cell = styled.Text`
  width: 20%;
  height: 62px;
  font-size: 40px;
  border-width: 2px;
  border-color: ${(props) => props.isFocused ? AppColors.lightBlueV1 : AppColors.lightBlueV3};
  text-align: center;
  border-radius: 5px;
  color: ${(props) => AppColors.lightBlueV1};
  margin: 0 11px;
`;

export function AppCodeInput({onValueChange}) {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    // Função para enviar o valor para fora do componente
    const handleValueChange = (newValue) => {
        setValue(newValue); // Atualiza o estado imediatamente
        setTimeout(() => {
            onValueChange(newValue); // Chama a função de callback após a atualização do estado
        }, 0);
    };


    return (
        <CodeField
            ref={ref}
            value={value}
            onChangeText={handleValueChange}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <Cell
                    key={index}
                    isFocused={isFocused}
                    onLayout={getCellOnLayoutHandler(index)}
                >
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Cell>
            )}
        />

    );
}
