import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { TextBig } from '../settings/AppFonts'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'

export const Input = styled.TextInput`
    width: 100%;
    height: ${({ isTextArea = false }) => isTextArea ? '120px' : '60px'};
    border-radius: 5px;
    border-width: 2px;
    border-color: ${({ borderColor = AppColors.primary, isValid = true, isEditable = true }) => isValid ? borderColor : AppColors.red};
    padding: 16px;
    font-family: 'MontserratAlternates_700Bold';
    color: ${({ color = AppColors.primaryV1, isValid = true }) => isValid ? color : AppColors.red};
    background-color: ${({isEditable = true}) => isEditable ? AppColors.transparent : AppColors.whiteDarker };
    `

export const InputBox = styled.View`
        width: 100%;
        gap: 10px;
`

export default function AppInput({
    lable = '',
    hint,
    textColor = AppColors.primaryV1,
    borderColor,
    isObscure = false,
    isTextArea = false,
    isEditable = true,
    hasLabel = false,
    textValue,
    onEdit,
    focus = null,
    focusOut = null,
    isValid = true,
    onChange = null,
}) {
    const handleInputChange = (value) => {
        onEdit === null ? null : onEdit(value);
    };

    return (
        <InputBox>
            {hasLabel ? (<TextBig size={16}>{lable}</TextBig>) : null}
            <Input
                placeholder={hint}
                placeholderTextColor={isEditable ? textColor : AppColors.grayV2}
                color={isValid ? textColor : AppColors.red}
                secureTextEntry={isObscure}
                multiline={isTextArea}
                numberOfLines={isTextArea ? 5 : 1}
                isTextArea={isTextArea}
                textAlignVertical={isTextArea ? 'top' : 'center'}
                value={textValue}
                onChangeText={handleInputChange}
                onChange={onChange}
                borderColor={isEditable ? borderColor : AppColors.transparent}
                onFocus={focus}
                onBlur={focusOut}
                isValid={isValid}
                editable={isEditable}
                isEditable={isEditable}
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
  border-color: ${({ isFocused }) => isFocused ? AppColors.primaryV1 : AppColors.primaryV3};
  text-align: center;
  border-radius: 5px;
  color: ${AppColors.primaryV1};
  margin: 0 11px;
`;

export function AppCodeInput({ onValueChange }) {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const handleValueChange = (newValue) => {
        setValue(newValue);
        setTimeout(() => {
            onValueChange(newValue);
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
            renderCell={({ index, symbol, isFocused }) => {
                return (<Cell
                    key={index}
                    isFocused={isFocused}
                    onLayout={getCellOnLayoutHandler(index)}
                >
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Cell>);
            }}
        />

    );
}
