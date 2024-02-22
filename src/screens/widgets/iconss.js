<NavigationBox>
            <IconButton isSelected={selectedTab == BottomNavigationRoute.schedule} onPress={() => handleTabSelected(BottomNavigationRoute.schedule)}>
                <SvgIcon name={Icon.calendarCheck} color={selectedTab == BottomNavigationRoute.schedule ? AppColors.darkBlueV2 : AppColors.grayV2} />
                {selectedTab == BottomNavigationRoute.schedule ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.schedule)}</TextSmall>) : (<Spacing />)}
            </IconButton>

            <IconButton isSelected={selectedTab == BottomNavigationRoute.clinic} onPress={() => handleTabSelected(BottomNavigationRoute.clinic)}>

                <SvgIcon name={Icon.hospital} color={selectedTab == BottomNavigationRoute.clinic ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selectedTab == BottomNavigationRoute.clinic ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.clinic)}</TextSmall>) : (<Spacing />)}

            </IconButton>

            <IconButton isSelected={selectedTab == BottomNavigationRoute.profile} onPress={() => handleTabSelected(BottomNavigationRoute.profile)}>
            
                <SvgIcon name={Icon.circleUser} color={selectedTab == BottomNavigationRoute.profile ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selectedTab == BottomNavigationRoute.profile ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.profile)}</TextSmall>) : (<Spacing />)}

            </IconButton>
        </NavigationBox>