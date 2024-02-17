import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { Flex } from '../settings/AppEnums'

export const Container = styled.SafeAreaView`
    padding: ${({padding = 20}) => `${padding}px`};
    padding-top: ${({paddingTop = 20}) => `${paddingTop}px`};
    padding-right: ${({paddingRight = 20}) => `${paddingRight}px`};
    padding-bottom: ${({paddingBottom = 20}) => `${paddingBottom}px`};
    padding-left: ${({paddingLeft = 20}) => `${paddingLeft}px`};
    align-items: ${({ alignItems = Flex.alignItems.center }) => alignItems};
    justify-content: ${({ justifyContent = Flex.justifyContent.center }) => justifyContent};
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
