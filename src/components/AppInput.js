import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { TextBig } from '../settings/AppFonts'


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

export const InputCode = styled.TextInput`
    position: 'absolute';
    height: 0;
    width: 0;
    opacity: 0;
`

export const InputOnlyCode = styled.TextInput`
    width: 20%;
    height: 62px;
    height: ${({ isTextArea = false }) => isTextArea == true ? '120px' : '60px'};
    border-radius: 5px;
    border-width: 2px;
    border-color: ${({ borderColor = AppColors.lightBlue }) => borderColor};
    padding: 16px;
    font-family: 'MontserratAlternates_700Bold';
    color: ${({ color = AppColors.lightBlueV1 }) => color};
`

export const InputCodeBox = styled.View`
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
`

export function CodeInput({ value }) {
    return (

        <InputCodeBox>
        </InputCodeBox>

    );
}
