import styled from "styled-components/native";
import { AppColors } from "./AppColors";
import { TextDecoration } from "./AppEnums";


export const TitleLarge = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: ${({size = '40px'}) => size};
    color: ${({color = AppColors.grayV1 }) => color};
    text-align: ${({textAlign = 'auto'}) => textAlign};
`

export const TitleBig = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: ${({size = '28px'}) => size};
    color: ${({color = AppColors.grayV1 }) => color};
    text-align: ${({textAlign = 'auto'}) => textAlign};
`
 
export const TitleMedium = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: ${({size = 24}) => `${size}px`};
    color: ${({color = AppColors.grayV1 }) => color};
    text-align: ${({textAlign = 'auto'}) => textAlign};
`
 
export const TextBig = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: ${({size = 18}) => `${size}px`};
    color: ${({color = AppColors.grayV1 }) => color};
    text-align: ${({textAlign = 'auto'}) => textAlign};
`
 
export const TextMedium = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: ${({size = '16px'}) => size};
    color: ${({color = AppColors.grayV1 }) => color};
    text-align: ${({textAlign = 'auto'}) => textAlign};
`

export const TextSmall = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: ${({size = '14px'}) => size};
    color: ${({color = AppColors.grayV1 }) => color};
`

export const Link = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    text-decoration: ${({textDecoration = TextDecoration.underline}) => textDecoration};
    color: ${({color = AppColors.darkBlue }) => color};
    font-size: ${({size = 14}) => `${size}px`};
`
 