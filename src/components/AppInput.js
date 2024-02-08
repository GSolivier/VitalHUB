import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { TextBig } from '../settings/AppFonts'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { SafeAreaView, StyleSheet, Text } from 'react-native'


export const Input = styled.TextInput`
    width: 100%;
    height: ${({ isTextArea = false }) => isTextArea == true ? '120px' : '60px'};
    border-radius: 5px;
    border-width: 2px;
    border-color: ${({ borderColor = AppColors.lightBlue }) => borderColor};
    padding: 16px;
    font-family: 'MontserratAlternates_700Bold';
    color: ${({ color = AppColors.lightBlueV1 }) => color};
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
    onEdit = null,
    focus = null,
    focusOut = null
}) {
    return (
        <InputBox>
            {hasLabel ? (<TextBig>{lable}</TextBig>) : null}
            <Input
                placeholder={hint}
                placeholderTextColor={textColor}
                color={textColor}
                secureTextEntry={isObscure}
                multiline={isTextArea}
                numberOfLines={isTextArea == true ? 5 : 1}
                isTextArea={isTextArea}
                textAlignVertical={isTextArea == true ? 'top' : 'center'}
                value={textValue}
                onChange={onEdit}
                borderColor={borderColor}
                onFocus={focus}
                onBlur={focusOut}
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


const CodeInputBox = styled(CodeField)`
  width: 100%;
`;

export function AppCodeInput() {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeInputBox
            ref={ref}
            value={value}
            onChangeText={setValue}
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
