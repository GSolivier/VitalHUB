import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
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
    width: ${({widht = '0'}) => widht };
    height: ${({height = '0'}) => height};
`
