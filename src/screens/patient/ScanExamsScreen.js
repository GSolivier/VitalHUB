import { Camera, CameraType } from 'expo-camera'
import React, { useState } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/Container';
import styled from 'styled-components/native';
import { AppColors } from '../../settings/AppColors';
import SvgIcon, { Icon } from '../../assets/icons/Icons';
import { Flex } from '../../settings/AppEnums';

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
    justify-content: center;
    z-index: 2;
`

const ImageBox = styled.View`
    flex: 1;
    position: relative;
`

const RenderedImage = styled.Image`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
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
            <View style={styles.container}>
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
                    ref={ref => setCamera(ref)}
                    type={CameraType.back}>
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
                            <ButtonBox>
                                
                            </ButtonBox>
                            <RenderedImage source={{ uri: image }} />
                        </ImageBox>
                    </>

                )}

        </Container>
    );
}
