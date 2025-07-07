import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { Settings, CircleHelp as HelpCircle, MessageSquare, Bookmark, Bell, ChevronRight, Award, Star, ThumbsUp, Heart } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const menuItems = [
    { id: 'issues', icon: MessageSquare, label: '我的问题', count: 8 },
    { id: 'answers', icon: MessageSquare, label: '我的回答', count: 15 },
    { id: 'favorites', icon: Bookmark, label: '我的收藏', count: 24 },
    { id: 'notifications', icon: Bell, label: '消息中心', count: 3, badge: true },
  ];

  const achievementItems = [
    { id: 'reputation', icon: Award, label: '声望值', value: '365', color: '#FFB800' },
    { id: 'accept', icon: ThumbsUp, label: '被采纳', value: '12', color: colors.success },
    { id: 'likes', icon: Heart, label: '获赞', value: '48', color: colors.danger },
    { id: 'level', icon: Star, label: '等级', value: '4', color: colors.primary },
  ];

  const helpItems = [
    { id: 'faq', icon: HelpCircle, label: '常见问题' },
    { id: 'feedback', icon: MessageSquare, label: '意见反馈' },
    { id: 'settings', icon: Settings, label: '设置' },
  ];

  const handleSignOut = () => {
    signOut();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Header title="我的" variant="profile" />
      
      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/7969659/pexels-photo-7969659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user?.name || '农机师傅'}</Text>
              <Text style={styles.userTitle}>拖拉机维修专家 · 4年经验</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>编辑</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>32</Text>
              <Text style={styles.statLabel}>问题</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>128</Text>
              <Text style={styles.statLabel}>回答</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.2k</Text>
              <Text style={styles.statLabel}>浏览</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>个人成就</Text>
          <View style={styles.achievementsContainer}>
            {achievementItems.map((item) => (
              <View key={item.id} style={styles.achievementItem}>
                <View style={[styles.achievementIcon, { backgroundColor: `${item.color}20` }]}>
                  <item.icon size={24} color={item.color} />
                </View>
                <Text style={styles.achievementValue}>{item.value}</Text>
                <Text style={styles.achievementLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>我的农机</Text>
          <View style={styles.machineryContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1112156/pexels-photo-1112156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
              style={styles.machineryImage}
            />
            <View style={styles.machineryInfo}>
              <Text style={styles.machineryName}>东方红 LX1000</Text>
              <Text style={styles.machineryDetails}>100马力 · 购买于2019年</Text>
            </View>
            <TouchableOpacity style={styles.machineryCta}>
              <ChevronRight size={20} color={colors.textDim} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addMachineryButton}>
            <Text style={styles.addMachineryText}>+ 添加农机</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>内容管理</Text>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemIcon}>
                <item.icon size={20} color={colors.text} />
              </View>
              <Text style={styles.menuItemLabel}>{item.label}</Text>
              <View style={styles.menuItemRight}>
                {item.count > 0 && (
                  <View style={[styles.badge, item.badge ? styles.activeBadge : {}]}>
                    <Text style={styles.badgeText}>{item.count}</Text>
                  </View>
                )}
                <ChevronRight size={20} color={colors.textDim} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>帮助与设置</Text>
          {helpItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemIcon}>
                <item.icon size={20} color={colors.text} />
              </View>
              <Text style={styles.menuItemLabel}>{item.label}</Text>
              <ChevronRight size={20} color={colors.textDim} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>退出登录</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>农机问题易解 v1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userInfo: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  userTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: colors.primaryLight,
  },
  editButtonText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
  userStats: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: colors.text,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
  },
  section: {
    backgroundColor: colors.cardBackground,
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 16,
  },
  achievementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementItem: {
    alignItems: 'center',
    width: '22%',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  achievementValue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: colors.text,
    marginBottom: 2,
  },
  achievementLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  machineryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 16,
  },
  machineryImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  machineryInfo: {
    marginLeft: 12,
    flex: 1,
  },
  machineryName: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  machineryDetails: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  machineryCta: {
    padding: 8,
  },
  addMachineryButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  addMachineryText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuItemIcon: {
    width: 32,
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemLabel: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    flex: 1,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: colors.cardBackground,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeBadge: {
    backgroundColor: colors.danger,
    borderWidth: 0,
  },
  badgeText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: colors.textDim,
  },
  signOutButton: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.danger,
  },
  signOutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.danger,
  },
  footer: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
});