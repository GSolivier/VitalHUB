import { useEffect, useState } from "react";
import { DATA } from "../../settings/AppUtils";
import HomeContainer from "../widgets/HomeContainer";
import { AppAssets } from "../../assets/AppAssets";
import HomeCalendar from "../widgets/HomeCalendar";
import { Spacing } from "../../components/Container";
import AppointmentFilter from "../widgets/AppointmentFilter";
import { HomeCardActionType } from "../../settings/AppEnums";
import AppointmentList from "../doctor/widgets/AppointmentList";
import styled from "styled-components/native";
import { AppColors } from "../../settings/AppColors";
import SvgIcon, { Icon } from "../../assets/icons/Icons";

export const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.lightBlue};
  border-radius: 7px;
  elevation: 5px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`

export default function HomeScreenPatient({ navigation }) {
  const [selectedTab, setSelectedTab] = useState(HomeCardActionType.scheduled);
  const [filteredList, setFilteredList] = useState([]);
  const [cancelModalIsVisible, setCancelModalIsVisible] = useState(false)
  const [seeMedicalRecordModalIsVisible, setSeeMedicalRecordIsVisible] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    filterList()
  }, [selectedTab])


  const handleTabSelected = (value) => {
    setSelectedTab(value);
  };

  const handleCancelAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setCancelModalIsVisible(true);
  };

  const handleSeeMedicalRecord = (appointment) => {
    setSelectedAppointment(appointment);
    setSeeMedicalRecordIsVisible(true);
  }

  function filterList() {
    var newList = DATA.filter((data) => data.appointmentStatus == selectedTab)

    setFilteredList(newList);
  }

  return (
    <HomeContainer name={'Guilherme Sousa'} imagePath={AppAssets.placeholder}>

      <HomeCalendar />

      <Spacing height={20} />

      <AppointmentFilter selected={selectedTab} handleTabSelected={handleTabSelected} />
      
      <Spacing height={20} />

      <AppointmentList DATA={filteredList}/>

      <FixedButton>
      <SvgIcon name={Icon.stethoscope} color={AppColors.white}/>
      </FixedButton>

    </HomeContainer>
  )
}