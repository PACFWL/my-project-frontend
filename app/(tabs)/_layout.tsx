import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

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
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <ExploreIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <ProfileIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voiceScreen"
        options={{
          title: 'Voice',
          tabBarIcon: ({ color }) => (
            <VoiceIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gameScreen"
        options={{
          title: 'Game',
          tabBarIcon: ({ color }) => (
            <GameIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movieScreen"
        options={{
          title: 'Movie',
          tabBarIcon: ({ color }) => (
            <MovieIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cgIllustrationsScreen"
        options={{
          title: 'CG+Illustrations',
          tabBarIcon: ({ color }) => (
            <CGIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mangaScreen"
        options={{
          title: 'Manga',
          tabBarIcon: ({ color }) => (
            <MangaIcon width={28} height={28} fill={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="aiScreen"
        options={{
          title: 'AI',
          tabBarIcon: ({ color }) => (
            <AIIcon width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
