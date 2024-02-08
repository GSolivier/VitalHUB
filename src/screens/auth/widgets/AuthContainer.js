import styled from "styled-components/native";
import { Container } from "../../../components/Container";
import CloseSvg from '../../../assets/icons/iconjs/close';
import ArrowSvg from '../../../assets/icons/iconjs/arrow';

export const Leading = styled.TouchableOpacity`
    background-color: rgba(73, 179, 186, 0.15);
    border-radius: 999px;
    padding: 8px;
    position: absolute;
    top: 120px;
    left: 30px;
`

export default function AuthContainer({isClosable = false,hasLeading = false, children, onTap}){
    return(
        <Container>
            {hasLeading ? <Leading onPress={onTap}>{isClosable ? <CloseSvg></CloseSvg> : <ArrowSvg></ArrowSvg> }</Leading> : null}
            {children}
        </Container>
    );
}