import { useEffect, useState } from "react";
import { DATA } from "../../settings/AppUtils";
import HomeContainer from "../widgets/HomeContainer";
import { AppAssets } from "../../assets/AppAssets";
import HomeCalendar from "../widgets/HomeCalendar";
import { Spacing } from "../../components/Container";
import { AppointmentFilterList, HomeCardActionType } from "../../settings/AppEnums";
import AppointmentList from "../doctor/widgets/AppointmentList";
import styled from "styled-components/native";
import { AppColors } from "../../settings/AppColors";
import SvgIcon, { Icon } from "../../assets/icons/Icons";
import ScheduleAppointmentDialog from "./widgets/dialogs/ScheduleAppointmentDialog";
import ButtonSelecter from "../widgets/ButtonSelecter";

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
  const [scheduleAppointmentModalIsVisible, setScheduleAppointmentModalIsVisible] = useState(false)
  const [seeAppointmentLocal, setSeeAppointmentLocal] = useState(false)

  useEffect(() => {
    filterList()
  }, [selectedTab])

  const handleTabSelected = (value) => {
    setSelectedTab(value);
  };

  const handleScheduleAppointment = () => {
    setScheduleAppointmentModalIsVisible(true);

  };

  const handleSeeAppointmentLocal = () => {
    setSeeAppointmentLocal(true);
  }

  function filterList() {
    var newList = DATA.filter((data) => data.appointmentStatus == selectedTab)
    setFilteredList(newList);
  }

  return (
    <HomeContainer name={'Guilherme Sousa'} imagePath={AppAssets.placeholder}>

      <HomeCalendar />

      <Spacing height={20} />

      <ButtonSelecter 
      selected={selectedTab} 
      handleTabSelected={handleTabSelected}
      buttonList={AppointmentFilterList}
      />
      
      <Spacing height={20} />

      <AppointmentList DATA={filteredList}/>

      <FixedButton onPress={() => setScheduleAppointmentModalIsVisible(true)}>
      <SvgIcon name={Icon.stethoscope} color={AppColors.white}/>
      </FixedButton>

      <ScheduleAppointmentDialog 
      visible={scheduleAppointmentModalIsVisible} 
      onClose={() => setScheduleAppointmentModalIsVisible(false)}
      navigation={navigation}
      />

    </HomeContainer>
  )
}