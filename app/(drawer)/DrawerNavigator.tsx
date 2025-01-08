import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator } from '../(tabs)/BottomTabNavigator'; 
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { View, StyleSheet } from 'react-native';
import { LoginScreen, SettingsScreen, AboutAppScreen, ProfileScreen } from './DrawerScreens';

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="menu"
        size={30}
        color="white"
        onPress={() => navigation.openDrawer()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: 0,
    paddingTop: 30,
  },
});

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }) => ({
        header: () => <CustomDrawerHeader navigation={navigation} />,
        drawerIcon: ({ focused, color, size }) => {
          let iconComponent;

          switch (route.name) {
            case 'Inicio':
              iconComponent = <MaterialIcons name="home" size={size} color={color} />;
              break;
            case 'Login':
              iconComponent = (
                <MaterialCommunityIcons
                  name={focused ? 'account' : 'account-outline'}
                  size={size}
                  color={color}
                />
              );
              break;
            case 'Perfil':
              iconComponent = (
                <MaterialCommunityIcons
                  name={focused ? 'account' : 'account-outline'}
                  size={size}
                  color={color}
                />
              );
              break;
            case 'Configuração do App':
              iconComponent = <FontAwesome name="cog" size={size} color={color} />;
              break;
            case 'Sobre o App':
              iconComponent = <Ionicons name="information-circle" size={size} color={color} />;
              break;
            default:
              iconComponent = null;
          }

          return iconComponent;
        },
      })}
    >
      <Drawer.Screen name="Inicio" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={LoginScreen} />      
      <Drawer.Screen name="Configuração do App" component={SettingsScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Sobre o App" component={AboutAppScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
