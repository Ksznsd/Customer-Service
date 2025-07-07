import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell, Search } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Svg, { Path, Circle, Line, Polygon } from 'react-native-svg';

interface HeaderProps {
  title: string;
  variant?: 'home' | 'search' | 'newIssue' | 'knowledge' | 'profile';
}

const HeaderBackground = ({ variant }: { variant: string }) => {
  const renderPattern = () => {
    switch (variant) {
      case 'home':
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            {/* 简洁的波浪线条 */}
            <Path
              d="M0,60 Q100,20 200,60 T400,60"
              stroke={colors.primary}
              strokeWidth="1.5"
              fill="none"
              opacity={0.3}
            />
            <Path
              d="M0,80 Q150,40 300,80 T400,80"
              stroke={colors.primary}
              strokeWidth="1"
              fill="none"
              opacity={0.2}
            />
            {/* 装饰圆点 */}
            <Circle cx="80" cy="45" r="2" fill={colors.primary} opacity={0.4} />
            <Circle cx="320" cy="65" r="1.5" fill={colors.primary} opacity={0.3} />
          </Svg>
        );
      
      case 'search':
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            {/* 搜索相关的几何图案 */}
            <Circle cx="60" cy="50" r="15" stroke={colors.primary} strokeWidth="1.5" fill="none" opacity={0.3} />
            <Line x1="72" y1="62" x2="85" y2="75" stroke={colors.primary} strokeWidth="2" opacity={0.3} />
            
            {/* 连接线条 */}
            <Path
              d="M120,60 L380,60"
              stroke={colors.primary}
              strokeWidth="1"
              fill="none"
              opacity={0.2}
              strokeDasharray="5,5"
            />
            
            {/* 装饰元素 */}
            <Circle cx="150" cy="40" r="1" fill={colors.primary} opacity={0.4} />
            <Circle cx="250" cy="80" r="1.5" fill={colors.primary} opacity={0.3} />
            <Circle cx="350" cy="45" r="1" fill={colors.primary} opacity={0.4} />
          </Svg>
        );
      
      case 'newIssue':
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            {/* 加号和创建相关图案 */}
            <Line x1="50" y1="60" x2="90" y2="60" stroke={colors.primary} strokeWidth="2" opacity={0.3} />
            <Line x1="70" y1="40" x2="70" y2="80" stroke={colors.primary} strokeWidth="2" opacity={0.3} />
            
            {/* 流动线条 */}
            <Path
              d="M120,60 Q200,30 280,60 Q320,75 380,60"
              stroke={colors.primary}
              strokeWidth="1.5"
              fill="none"
              opacity={0.25}
            />
            
            {/* 装饰点 */}
            <Circle cx="200" cy="35" r="1.5" fill={colors.primary} opacity={0.4} />
            <Circle cx="320" cy="75" r="1" fill={colors.primary} opacity={0.3} />
          </Svg>
        );
      
      case 'knowledge':
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            {/* 书本和知识相关图案 */}
            <Path
              d="M40,40 L40,80 L80,75 L80,35 Z"
              stroke={colors.primary}
              strokeWidth="1.5"
              fill="none"
              opacity={0.3}
            />
            <Line x1="60" y1="35" x2="60" y2="75" stroke={colors.primary} strokeWidth="1" opacity={0.3} />
            
            {/* 知识传播线条 */}
            <Path
              d="M100,60 Q150,40 200,60 Q250,80 300,60 Q350,40 380,60"
              stroke={colors.primary}
              strokeWidth="1"
              fill="none"
              opacity={0.25}
            />
            
            {/* 装饰元素 */}
            <Circle cx="150" cy="45" r="1" fill={colors.primary} opacity={0.4} />
            <Circle cx="250" cy="75" r="1.5" fill={colors.primary} opacity={0.3} />
            <Circle cx="350" cy="45" r="1" fill={colors.primary} opacity={0.4} />
          </Svg>
        );
      
      case 'profile':
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            {/* 用户和个人相关图案 */}
            <Circle cx="60" cy="45" r="12" stroke={colors.primary} strokeWidth="1.5" fill="none" opacity={0.3} />
            <Path
              d="M35,75 Q60,65 85,75"
              stroke={colors.primary}
              strokeWidth="1.5"
              fill="none"
              opacity={0.3}
            />
            
            {/* 连接网络线条 */}
            <Line x1="100" y1="60" x2="150" y2="45" stroke={colors.primary} strokeWidth="1" opacity={0.2} />
            <Line x1="150" y1="45" x2="200" y2="60" stroke={colors.primary} strokeWidth="1" opacity={0.2} />
            <Line x1="200" y1="60" x2="250" y2="75" stroke={colors.primary} strokeWidth="1" opacity={0.2} />
            <Line x1="250" y1="75" x2="300" y2="60" stroke={colors.primary} strokeWidth="1" opacity={0.2} />
            
            {/* 节点 */}
            <Circle cx="150" cy="45" r="2" fill={colors.primary} opacity={0.4} />
            <Circle cx="200" cy="60" r="2" fill={colors.primary} opacity={0.4} />
            <Circle cx="250" cy="75" r="2" fill={colors.primary} opacity={0.4} />
            <Circle cx="300" cy="60" r="2" fill={colors.primary} opacity={0.4} />
          </Svg>
        );
      
      default:
        return (
          <Svg width="100%" height="100%" viewBox="0 0 400 120" style={StyleSheet.absoluteFillObject}>
            <Path
              d="M0,60 L400,60"
              stroke={colors.primary}
              strokeWidth="1"
              fill="none"
              opacity={0.2}
            />
          </Svg>
        );
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      {renderPattern()}
    </View>
  );
};

export default function Header({ title, variant = 'home' }: HeaderProps) {
  return (
    <View style={styles.header}>
      <HeaderBackground variant={variant} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={22} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={22} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});