import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { Link, TitleMedium } from '../settings/AppFonts'



export const LinkTouchableOpacity = styled.TouchableOpacity`
        align-self: ${({ alignSelf = 'auto' }) => alignSelf};
        justify-self: ${({ justifySelf = 'auto' }) => justifySelf};;
        padding-top: 3px ;
        align-items: center;
        justify-content: center;
`

export function LinkButton({ text, color, size, alignSelf, onTap, textDecoration, justifySelf }) {
    return (
        <LinkTouchableOpacity onPress={onTap} alignSelf={alignSelf} justifySelf={justifySelf}>
            <Link color={color} size={size} textDecoration={textDecoration} >
                {text}
            </Link>
        </LinkTouchableOpacity>

    );
}

export const Button = styled.TouchableOpacity`
    width: ${({ isCompact = false }) => isCompact ? 'max-content' : '100%'};
    height: ${({ isCompact = false }) => isCompact ? 'max-content' : '50px'};
    padding: ${({ isCompact = false }) => isCompact ? '12px' : '0px'};
    background-color: ${({ isOutlined = false }) => isOutlined ? AppColors.white : AppColors.darkBlue};
    border-color: ${AppColors.darkBlue};
    border-width: ${({ isCompact = false }) => isCompact ? '2px' : '1px'} ;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 27px;
    flex: ${({ flex = '0 1 auto' }) => flex};
`

export default function AppButton({
    textButton,
    isOutlined = false,
    isCompact = false,
    SvgIcon,
    onTap,
    flex,
}) {
    return (
        <Button
            isOutlined={isOutlined}
            onPress={onTap}
            isCompact={isCompact}
            flex={flex}
            activeOpacity={0.8}
        >
            {SvgIcon ? SvgIcon : null}
            <TitleMedium
                color={isOutlined ? AppColors.darkBlue : AppColors.white}
                size={isCompact ? 12 : 14}
            >{textButton}</TitleMedium>
        </Button>
    )
}