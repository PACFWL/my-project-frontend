import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './index';
import ExploreScreen from './exploreScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import VoiceScreen from './voiceScreen';
import GameScreen from './gameScreen';
import MovieScreen from './movieScreen';
import CGIIllustrationsScreen from './cgIllustrationsScreen';
import MangaScreen from './mangaScreen';
import AIScreen from './aiScreen';

import HomeIcon from '../../assets/images/game.svg';
import ExploreIcon from '../../assets/images/sound.svg';
import ProfileIcon from '../../assets/images/profile.svg';
import VoiceIcon from '../../assets/images/voice.svg';
import GameIcon from '../../assets/images/game.svg';
import MovieIcon from '../../assets/images/movie.svg';
import CGIcon from '../../assets/images/cg_illustrations.svg';
import MangaIcon from '../../assets/images/manga.svg';
import AIIcon from '../../assets/images/ai.svg';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  const tabBarActiveTintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            paddingBottom: 10,
            height: 70,
          },
          default: {
            paddingBottom: 0,
            height: 55,
          },
        }),
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => <ExploreIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Voice"
        component={VoiceScreen}
        options={{
          tabBarLabel: 'Voice',
          tabBarIcon: ({ color }) => <VoiceIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color }) => <GameIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarLabel: 'Movie',
          tabBarIcon: ({ color }) => <MovieIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="CGIllustrations"
        component={CGIIllustrationsScreen}
        options={{
          tabBarLabel: 'CG+Illustrations',
          tabBarIcon: ({ color }) => <CGIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="Manga"
        component={MangaScreen}
        options={{
          tabBarLabel: 'Manga',
          tabBarIcon: ({ color }) => <MangaIcon width={28} height={28} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name="AI"
        component={AIScreen}
        options={{
          tabBarLabel: 'AI',
          tabBarIcon: ({ color }) => <AIIcon width={28} height={28} fill={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    marginTop: 0,
  },
  tabBarIcon: {
    flexDirection: 'column',
  },
});
