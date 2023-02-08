import react from 'react';
import {CreateDrawerNavigator} from 'react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerNavigator>
            <Drawer.Screen name='Início' component={TabNavigator} />
            <Drawer.Screen name='Perfil' component={Profile} />  
        </DrawerNavigator>
    );
};

export default DrawerNavigator;