import React, { useState } from 'react'
import { Container } from '../../components/Container'
import HomeHeader from './HomeHeader'
import HomeBottomNavigation from './HomeBottomNavigation'
import { BottomNavigationRoute, Flex } from '../../settings/AppEnums';

export default function HomeContainer({ children, name, imagePath, onTap }) {
    const [selectedTab, setSelectedTab] = useState(BottomNavigationRoute.schedule);
    return (
        <>
            <HomeHeader name={name} imagePath={imagePath} onTapNotification={onTap} />
            <Container justifyContent={Flex.justifyContent.flexStart} paddingBottom={0}>
                {children}
            </Container>
            <HomeBottomNavigation selectedTab={selectedTab} handleTabSelected={setSelectedTab} />
        </>
    )
}