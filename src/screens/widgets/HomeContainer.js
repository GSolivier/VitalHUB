import React from 'react'
import { Container } from '../../components/Container'
import HomeHeader from './HomeHeader'
import HomeBottomNavigation from './HomeBottomNavigation'

export default function HomeContainer({ children, name, imagePath, onTap }) {
    return (
        <>
            <HomeHeader name={name} imagePath={imagePath} onTapNotification={onTap} />
            <Container>
                {children}
            </Container>
            <HomeBottomNavigation onChangedValue={(value) => console.log(value)}/>
        </>
    )
}