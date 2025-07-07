import React from 'react';
import { Tabs } from 'expo-router';
import { Chrome as Home, Search, CirclePlus as PlusCircle, BookOpen, User } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

function TabBarIcon({ focused, icon: Icon, size = 24 }) {
  return (
    <Icon
      size={size}
      color={focused ? colors.primary : colors.textDim}
      strokeWidth={focused ? 2.5 : 2}
    />
  );
}

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textDim,
        tabBarStyle: {
          backgroundColor: colors.cardBackground,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Regular',
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Home} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '发现',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Search} />,
        }}
      />
      <Tabs.Screen
        name="newIssue"
        options={{
          title: '报告',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={PlusCircle} size={28} />,
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => router.push('/(tabs)/newIssue')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="knowledge"
        options={{
          title: '知识库',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={BookOpen} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={User} />,
        }}
      />
    </Tabs>
  );
}

function CustomTabBarButton({ onPress }) {
  const scale = useSharedValue(1);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withTiming(0.9, { duration: 100 }, () => {
      scale.value = withTiming(1, { duration: 100 });
    });
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.customButton}>
      <Animated.View style={[styles.btnCircle, animatedStyle]}>
        <PlusCircle
          size={28}
          color="#fff"
          strokeWidth={2.5}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});