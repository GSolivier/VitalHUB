import styled from "styled-components/native";
import { AppColors } from "./AppColors";

export const TitleLarge = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: ${({size = '23px'}) => size};
    color: ${({color = AppColors.grayV1 }) => color}
`