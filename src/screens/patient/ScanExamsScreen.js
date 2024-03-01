import { Camera, CameraType } from 'expo-camera'
import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/Container';
import styled from 'styled-components/native';
import { AppColors } from '../../settings/AppColors';
import SvgIcon, { Icon } from '../../assets/icons/Icons';
import { Flex } from '../../settings/AppEnums';
import { useWindowDimensions } from "react-native";

const AppCamera = styled(Camera)`
    flex: 1;
    width: 100%;

`

const CameraBox = styled.View`
flex: 1;
width: 100%;
justify-content: flex-end;
`

const ButtonBox = styled.View`
    flex: 0.15;
    width: 100%;
    background-color: rgba(255,255,255,0.85);
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    z-index: 2;
`

const ImageBox = styled.View`
    flex: 1;
    position: relative;
`

const RenderedImage = styled.ImageBackground`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`


export default function ScanExamsScreen() {
    const [type, setType] = useState(CameraType.back);
    const [image, setImage] = useState(null);
    const [camera, setCamera] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions();



    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null)
            setImage(data.uri);
        }
    }


    return (
        <Container paddingTop={0} paddingRight={0} paddingLeft={0} paddingBottom={0} alignItems={Flex.flexStart}>

            {image == null ? (
                <AppCamera
                    ratio='16:9'
                    ref={ref => setCamera(ref)}
                    type={CameraType.back}
                >
                    <CameraBox>

                        <ButtonBox>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => takePicture()}>
                                <SvgIcon name={Icon.dotCircle} color={AppColors.primary} size={80} />
                            </TouchableOpacity>
                        </ButtonBox>

                    </CameraBox>

                </AppCamera>
            ) :
                (
                    <>
                        <ImageBox>
                            <RenderedImage source={{ uri: image }} resizeMode="cover" >

                                <ButtonBox>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => setImage(null)}>
                                        <SvgIcon name={Icon.wrong} color={AppColors.primary} size={80} />
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.5}>
                                        <SvgIcon name={Icon.check} color={AppColors.primary} size={80} />
                                    </TouchableOpacity>
                                </ButtonBox>

                            </RenderedImage>
                        </ImageBox>
                    </>

                )}

        </Container>
    );
}
