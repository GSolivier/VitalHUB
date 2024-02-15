import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'

export const Container = styled.SafeAreaView`
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${AppColors.white};
    flex: 1;
`

export const Spacing = styled.View`
    width: ${({ width = 0 }) => `${width}px`};
    height: ${({ height = 0 }) => `${height}px`};
`

export const Column = styled.View`
    width: ${({ width }) => width};
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-self: ${({ alignSelf }) => alignSelf};
`
export const Row = styled.View`
    width: ${({ width }) => width};
    flex-direction: row;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-self: ${({ alignSelf }) => alignSelf};
`
