import React, { useState } from 'react'
import HomeContainer from '../widgets/HomeContainer'
import { AppAssets } from '../../assets/AppAssets'
import HomeTopButtons from '../widgets/HomeTopButtons'
import HomeCard from '../widgets/HomeCard'
import { HomeCardActionType } from '../../settings/AppEnums'
import HomeCalendar from '../widgets/HomeCalendar'
import CancelExamDialog from '../widgets/CancelExamDialog'

export default function HomeScreenDoctor({navigation}) {
  const [cancelModalIsVisible, setCancelModalIsVisible] = useState(false)
  return (
    <HomeContainer name={'Dr. Claudio'} imagePath={AppAssets.placeholder}>
      <HomeCard
       imagePath={AppAssets.placeholder} 
       name={'Guilherme Sousa'} age={'22 anos'} 
       examType={'Urgente'} 
       schedule={'11:00'}
       actionType={HomeCardActionType.scheduled}
       actionTap={() => {
          setCancelModalIsVisible(true)
       }}
       />
       <CancelExamDialog visible={cancelModalIsVisible} onClose={() => setCancelModalIsVisible(false)}/>
    </HomeContainer>
  )
}