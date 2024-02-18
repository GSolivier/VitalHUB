import React, { useState } from 'react'
import HomeContainer from '../widgets/HomeContainer'
import { AppAssets } from '../../assets/AppAssets'
import HomeTopButtons from '../widgets/HomeTopButtons'
import HomeCalendar from '../widgets/HomeCalendar'
import CancelExamDialog from '../widgets/CancelExamDialog'
import { Spacing } from '../../components/Container'
import AppointmentList from '../widgets/AppointmentList'
import { DATA } from '../../settings/AppUtils'

export default function HomeScreenDoctor({navigation}) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [cancelModalIsVisible, setCancelModalIsVisible] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleTabSelected = (value) => {
    setSelectedTab(value);
  };

  const handleCancelAppointment = (appointment) => {
    setSelectedAppointment(appointment); // Definindo o agendamento selecionado
    setCancelModalIsVisible(true);
  };
  return (
    <HomeContainer name={'Dr. Claudio'} imagePath={AppAssets.placeholder}>
    <HomeCalendar/>
    <Spacing height={20}/>
    <HomeTopButtons selected={selectedTab} handleTabSelected={handleTabSelected}/>
    <Spacing height={20}/>
    <AppointmentList DATA={DATA} tapAction={handleCancelAppointment}/>
       <CancelExamDialog visible={cancelModalIsVisible} onClose={() => setCancelModalIsVisible(false)} appointment={selectedAppointment}/>
    </HomeContainer>
  )
}