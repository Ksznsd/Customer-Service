import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Filter, BookmarkPlus, MessageSquare, Check, Calendar } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Header from '@/components/Header';
import { mockIssues } from '@/data/mockData';

const CATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'engine', name: '发动机' },
  { id: 'transmission', name: '变速箱' },
  { id: 'powershift', name: '动力换档' },
  { id: 'cvt', name: 'CVT变速箱' },
  { id: 'hydraulic_lift', name: '提升器' },
  { id: 'ecu_diagnostic', name: 'ECU诊断' },
  { id: 'threshing_drum', name: '脱粒滚筒' },
  { id: 'harvester', name: '收获机械' },
  { id: 'seeder', name: '播种机' },
  { id: 'implement', name: '农机具' },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('latest');

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.id && styles.categoryItemActive,
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.id && styles.categoryTextActive,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const filteredIssues = selectedCategory === 'all'
    ? mockIssues
    : mockIssues.filter(issue => issue.category === selectedCategory);

  const sortedIssues = activeTab === 'latest'
    ? [...filteredIssues].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [...filteredIssues].sort((a, b) => b.views - a.views);

  const getCategoryName = (categoryId) => {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    return category ? category.name : '未分类';
  };

  return (
    <View style={styles.container}>
      <Header title="海外服务与配件部" variant="home" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>农机维修专家</Text>
            <Text style={styles.bannerText}>分享您的农机维修经验，解决他人的难题</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>立即报告</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'latest' && styles.activeTab]}
            onPress={() => setActiveTab('latest')}
          >
            <Text style={[styles.tabText, activeTab === 'latest' && styles.activeTabText]}>
              最新发布
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'popular' && styles.activeTab]}
            onPress={() => setActiveTab('popular')}
          >
            <Text style={[styles.tabText, activeTab === 'popular' && styles.activeTabText]}>
              热门问题
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={18} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Issues List */}
        <View style={styles.issuesContainer}>
          {sortedIssues.map((issue) => (
            <Link href={`/issue/${issue.id}`} key={issue.id} asChild>
              <TouchableOpacity style={styles.issueCard}>
                <View style={styles.issueHeader}>
                  <Image source={{ uri: issue.user.avatar }} style={styles.userAvatar} />
                  <Text style={styles.userName}>{issue.user.name}</Text>
                  <View style={styles.dateContainer}>
                    <Calendar size={12} color={colors.textDim} />
                    <Text style={styles.dateText}>{issue.date}</Text>
                  </View>
                </View>
                
                <Text style={styles.issueTitle}>{issue.title}</Text>
                <Text style={styles.issueDescription} numberOfLines={2}>
                  {issue.description}
                </Text>
                
                {issue.image && (
                  <Image source={{ uri: issue.image }} style={styles.issueImage} />
                )}
                
                <View style={styles.issueMeta}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>
                      {getCategoryName(issue.category)}
                    </Text>
                  </View>
                  
                  <View style={styles.issueStats}>
                    <View style={styles.statItem}>
                      <MessageSquare size={14} color={colors.textDim} />
                      <Text style={styles.statText}>{issue.comments}</Text>
                    </View>
                    
                    {issue.solved && (
                      <View style={styles.solvedBadge}>
                        <Check size={12} color="white" />
                        <Text style={styles.solvedText}>已解决</Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
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
  banner: {
    height: 200,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    overflow: 'hidden',
  },
  bannerImage: {
    borderRadius: 16,
  },
  bannerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 24,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginBottom: 24,
    opacity: 0.9,
  },
  bannerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  categoriesContainer: {
    marginTop: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryItemActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  categoryText: {
    fontFamily: 'Inter-Regular',
    color: colors.text,
    fontSize: 14,
  },
  categoryTextActive: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    paddingBottom: 6,
  },
  tabText: {
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    fontSize: 15,
  },
  activeTabText: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  filterButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  issuesContainer: {
    padding: 16,
    paddingTop: 8,
  },
  issueCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  issueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  userName: {
    marginLeft: 8,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: colors.text,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  dateText: {
    color: colors.textDim,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginLeft: 4,
  },
  issueTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  issueDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 12,
    lineHeight: 20,
  },
  issueImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  issueMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryBadgeText: {
    color: colors.primary,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  issueStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  statText: {
    color: colors.textDim,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  solvedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  solvedText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
});