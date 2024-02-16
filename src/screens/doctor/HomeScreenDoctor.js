import React, { useState } from 'react'
import HomeContainer from '../widgets/HomeContainer'
import { AppAssets } from '../../assets/AppAssets'
import { Row, Spacing } from '../../components/Container'
import AppButton from '../../components/AppButton'
import HomeTopButtons from '../widgets/HomeTopButtons'
import HomeCard from '../widgets/HomeCard'
import { HomeCardActionType } from '../../settings/AppEnums'

export default function HomeScreenDoctor() {

    

  return (
    <HomeContainer name={'Dr. Claudio'} imagePath={AppAssets.placeholder}>

      


    </HomeContainer>
  )
}