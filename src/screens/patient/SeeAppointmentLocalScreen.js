import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Spacing } from '../../components/Container'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components'
import { TextSemiBold, TitleSemiBold } from '../../settings/AppFonts'
import { Flex } from '../../settings/AppEnums'
import AppInput from '../../components/AppInput'
import t from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import AppButton from '../../components/AppButton'
import { pop } from '../../settings/routes/RouteActions'
import * as Location from 'expo-location';
import { Appearance, Text, TouchableOpacity } from 'react-native'
import { AppColors } from '../../settings/AppColors'
import MapViewDirections from 'react-native-maps-directions'
import { mapskey } from '../../settings/AppUtils'
import SvgIcon, { Icon } from '../../assets/icons/Icons'

const Map = styled(MapView)`
  width: 100%;
  flex: 1;
`

const InputContainer = styled.View`
    flex: 0.5;
`

const ZoomOut = styled.TouchableOpacity`
  position: absolute;
  top: -30%;
  right: 5%;
  z-index: 9999;
  background-color: ${AppColors.white};
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
`

export default function SeeAppointmentLocalScreen({ navigation }) {

  const mapRef = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null)
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.698023,
    longitude: -46.598395
  })
  const [theme, setTheme] = useState(null)


  async function getCurrentLocalization() {
    const { granted } = await Location.requestForegroundPermissionsAsync()
    const theme = Appearance.getColorScheme()

    setTheme(theme)

    if (granted) {
      const captureLocation = await Location.getCurrentPositionAsync()

      setInitialPosition(captureLocation)
    }
  }

  useEffect(() => {
    getCurrentLocalization()

    Location.watchPositionAsync({
      accuracy: Location.LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,

    }, async (response) => {
      await setInitialPosition(response)
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    })
  }, [1000])

  useEffect(() => {
    reloadView();
  }, [initialPosition])

  async function reloadView() {
    if (mapRef.current && initialPosition) {
      await mapRef.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      )
    }
  }

  if (initialPosition == null) {
    return <Text>Não foi possivel pegar a localização</Text>
  }

  return (
    <>
      <Map
        initialRegion={{
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme === 'dark' ? darkMap : lightMap}
        ref={mapRef}
      >
        <Marker
          coordinate={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,

          }}
          title='Você está aqui'
          pinColor={AppColors.red}
        />
        <MapViewDirections
          origin={initialPosition.coords}
          destination={{
            latitude: -23.698023,
            longitude: -46.598395,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
          strokeWidth={5}
          strokeColor={AppColors.secondary}
          apikey={mapskey}
        />
        <Marker
          coordinate={{
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude,
          }}
          title='Seu destino'
          pinColor={AppColors.primary}
        />



      </Map>
      <Container justifyContent={Flex.flexStart}>
        <ZoomOut onPress={ () => reloadView()} activeOpacity={.8}>

          <SvgIcon name={Icon.zoomOut} size={30} color={AppColors.primary} />
        </ZoomOut>
        <Spacing height={10} />
        <TitleSemiBold size={20}>Clinica Natureh</TitleSemiBold>
        <Spacing height={8} />
        <TextSemiBold size={14}>São Paulo - SP</TextSemiBold>
        <Spacing height={20} />
        <AppInput isEditable={false} label={t(AppLocalizations.adress)} hint={'Rua Vicenso Silva, 987'} />
        <Spacing height={24} />
        <Row justifyContent={Flex.spaceBetween} width={'100%'}>
          <InputContainer>
            <AppInput isEditable={false} label={t(AppLocalizations.number)} hint={'578'} />
          </InputContainer>
          <Spacing width={32} />
          <InputContainer>
            <AppInput isEditable={false} label={t(AppLocalizations.neighborhood)} hint={'Moema-SP'} />
          </InputContainer>
        </Row>
        <Spacing height={50} />
        <AppButton textButton={t(AppLocalizations.back).toUpperCase()} onTap={() => pop(navigation)} />
      </Container>
    </>
  )
}

const lightMap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": AppColors.gray
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": AppColors.gray
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": AppColors.gray
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

const darkMap = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
