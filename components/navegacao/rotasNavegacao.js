import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './home';
import Velha from '../velha';
const Drawer = createDrawerNavigator();

export default function Rotas() {
    return(<Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
</NavigationContainer>
)   
}

