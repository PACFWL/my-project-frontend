import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import HomeIcon from '../../assets/images/game.svg';
import ExploreIcon from '../../assets/images/sound.svg';
import ProfileIcon from '../../assets/images/profile.svg';
import VoiceIcon from '../../assets/images/voice.svg';
import GameIcon from '../../assets/images/game.svg';
import MovieIcon from '../../assets/images/movie.svg';
import CGIcon from '../../assets/images/cg_illustrations.svg';
import MangaIcon from '../../assets/images/manga.svg';
import AIIcon from '../../assets/images/ai.svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
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
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: 0,
      },
      tabBarIconStyle: {
        flexDirection: 'column',
      },
    }}
  >
  
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <ExploreIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <ProfileIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voiceScreen"
        options={{
          tabBarLabel: 'Voice',
          tabBarIcon: ({ color }) => (
            <VoiceIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gameScreen"
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color }) => (
            <GameIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movieScreen"
        options={{
          tabBarLabel: 'Movie',
          tabBarIcon: ({ color }) => (
            <MovieIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cgIllustrationsScreen"
        options={{
          tabBarLabel: 'CG+Illustrations',
          tabBarIcon: ({ color }) => (
            <CGIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mangaScreen"
        options={{
          tabBarLabel: 'Manga',
          tabBarIcon: ({ color }) => (
            <MangaIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aiScreen"
        options={{
          tabBarLabel: 'AI',
          tabBarIcon: ({ color }) => (
            <AIIcon width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
