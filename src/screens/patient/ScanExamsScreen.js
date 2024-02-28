import { Camera, CameraType } from 'expo-camera'
import React, { useState } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null)
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            setImage(data.uri);
        }
      }
    

    return (
        <SafeAreaView style={styles.container}  >
            <Camera ref={ref => setCamera(ref)} style={styles.camera} type={CameraType.front}>
                <View style={styles.buttonContainer}>
                    <Button title="Take Picture" onPress={() => takePicture()} />
                    {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
                </View>
            </Camera>
        </SafeAreaView>
    );
}

/* @hide const styles = StyleSheet.create({ ... }); */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        width: '100%'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
