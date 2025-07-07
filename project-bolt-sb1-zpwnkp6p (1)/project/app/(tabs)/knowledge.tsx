import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { Search, Filter, BookOpen, ChevronRight, FileText, Wrench, Settings, Clock, SquareCheck as CheckSquare, GraduationCap, Video, MoveHorizontal as MoreHorizontal, PenTool as Tool } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Header from '@/components/Header';
import TroubleshootingGuide from '@/components/TroubleshootingGuide';
import { mockKnowledgeArticles, detailedTroubleshootingGuides } from '@/data/mockData';
import { useRouter } from 'expo-router';

const CATEGORIES = [
  { id: 'all', name: '全部', icon: BookOpen },
  { id: 'engine', name: '发动机', icon: BookOpen },
  { id: 'transmission', name: '变速箱', icon: BookOpen },
  { id: 'powershift', name: '动力换档', icon: BookOpen },
  { id: 'cvt', name: 'CVT变速箱', icon: BookOpen },
  { id: 'hydraulic_lift', name: '提升器', icon: BookOpen },
  { id: 'ecu_diagnostic', name: 'ECU诊断', icon: BookOpen },
  { id: 'threshing_drum', name: '脱粒滚筒', icon: BookOpen },
  { id: 'harvester', name: '收获机械', icon: BookOpen },
  { id: 'seeder', name: '播种机', icon: BookOpen },
  { id: 'implement', name: '农机具', icon: BookOpen },
];

const RESOURCE_CATEGORIES = [
  { 
    id: 'manual', 
    name: '使用说明书', 
    icon: FileText, 
    color: '#3A7D44',
    description: '产品操作指南和使用方法'
  },
  { 
    id: 'repair', 
    name: '维修手册', 
    icon: Wrench, 
    color: '#FFC107',
    description: '故障诊断和维修指导'
  },
  { 
    id: 'service', 
    name: '服务手册', 
    icon: Settings, 
    color: '#3182CE',
    description: '保养维护和服务规范'
  },
  { 
    id: 'labor', 
    name: '工时手册', 
    icon: Clock, 
    color: '#E53E3E',
    description: '标准工时和作业时间'
  },
  { 
    id: 'pdi', 
    name: 'PDI手册', 
    icon: CheckSquare, 
    color: '#38A169',
    description: '交付前检查和调试'
  },
  { 
    id: 'training', 
    name: '培训资料', 
    icon: GraduationCap, 
    color: '#9F7AEA',
    description: '技术培训和学习材料'
  },
  { 
    id: 'video', 
    name: '视频资料', 
    icon: Video, 
    color: '#F56565',
    description: '操作演示和教学视频'
  },
  { 
    id: 'troubleshooting', 
    name: '故障排查', 
    icon: Tool, 
    color: '#FF6B35',
    description: '详细的故障诊断和排除指南'
  },
];

export default function KnowledgeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const router = useRouter();

  const renderCategoryItem = ({ item }) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          selectedCategory === item.id && styles.categoryItemActive,
        ]}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Icon
          size={20}
          color={selectedCategory === item.id ? colors.primary : colors.textDim}
        />
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
  };

  const handleResourcePress = (item) => {
    if (item.id === 'troubleshooting') {
      // 显示故障排查指南选择
      return;
    }
    router.push(`/resource/${item.id}`);
  };

  const renderResourceItem = ({ item }) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity 
        style={styles.resourceCard}
        onPress={() => handleResourcePress(item)}
      >
        <View style={[styles.resourceIcon, { backgroundColor: `${item.color}20` }]}>
          <Icon size={24} color={item.color} />
        </View>
        <View style={styles.resourceContent}>
          <Text style={styles.resourceTitle}>{item.name}</Text>
          <Text style={styles.resourceDescription}>{item.description}</Text>
        </View>
        <ChevronRight size={16} color={colors.textDim} />
      </TouchableOpacity>
    );
  };

  const filteredArticles = selectedCategory === 'all'
    ? mockKnowledgeArticles
    : mockKnowledgeArticles.filter(article => article.category === selectedCategory);

  const handleTroubleshootingGuidePress = (guide) => {
    setSelectedGuide(guide);
    setShowGuideModal(true);
  };

  return (
    <View style={styles.container}>
      <Header title="知识库" variant="knowledge" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color={colors.textDim} />
            <Text style={styles.searchPlaceholder}>搜索维修知识、技巧...</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

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

        {/* Resource Categories Section */}
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>技术资料分类</Text>
          <Text style={styles.sectionSubtitle}>查找各类技术文档和培训材料</Text>
          
          <View style={styles.resourceGrid}>
            {RESOURCE_CATEGORIES.map((item) => {
              const Icon = item.icon;
              return (
                <TouchableOpacity 
                  key={item.id}
                  style={styles.resourceGridCard}
                  onPress={() => handleResourcePress(item)}
                >
                  <View style={[styles.resourceGridIcon, { backgroundColor: `${item.color}20` }]}>
                    <Icon size={20} color={item.color} />
                  </View>
                  <Text style={styles.resourceGridTitle}>{item.name}</Text>
                  <Text style={styles.resourceGridDescription}>{item.description}</Text>
                  <ChevronRight size={14} color={colors.textDim} style={styles.resourceGridArrow} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Troubleshooting Guides Section */}
        <View style={styles.troubleshootingSection}>
          <Text style={styles.sectionTitle}>专业故障排查指南</Text>
          <Text style={styles.sectionSubtitle}>详细的诊断步骤和解决方案</Text>
          
          {detailedTroubleshootingGuides.map((guide) => (
            <TouchableOpacity 
              key={guide.id}
              style={styles.troubleshootingCard}
              onPress={() => handleTroubleshootingGuidePress(guide)}
            >
              <View style={styles.troubleshootingHeader}>
                <Tool size={24} color={colors.primary} />
                <View style={styles.troubleshootingInfo}>
                  <Text style={styles.troubleshootingTitle}>{guide.title}</Text>
                  <Text style={styles.troubleshootingCategory}>
                    {guide.category === 'engine' ? '发动机系统' :
                     guide.category === 'hydraulic_lift' ? '液压系统' :
                     guide.category === 'cvt' ? 'CVT变速箱' : '其他系统'}
                  </Text>
                </View>
                <ChevronRight size={20} color={colors.textDim} />
              </View>
              <View style={styles.troubleshootingMeta}>
                <Text style={styles.troubleshootingSteps}>
                  {guide.diagnosticSteps.length} 个诊断步骤
                </Text>
                <Text style={styles.troubleshootingCauses}>
                  {guide.commonCauses.length} 个常见原因
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Article */}
        <TouchableOpacity style={styles.featuredContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <View style={styles.featuredTag}>
              <Text style={styles.featuredTagText}>精选</Text>
            </View>
            <Text style={styles.featuredTitle}>农业机械常见故障诊断方法大全</Text>
            <Text style={styles.featuredSubtitle}>
              由资深农机专家编写的综合指南，涵盖所有主要系统故障排查
            </Text>
          </View>
        </TouchableOpacity>

        {/* Knowledge Articles */}
        <View style={styles.articlesSection}>
          <Text style={styles.sectionTitle}>最新知识</Text>
          
          {filteredArticles.map((article) => (
            <TouchableOpacity key={article.id} style={styles.articleCard}>
              <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleDescription} numberOfLines={2}>
                  {article.summary}
                </Text>
                <View style={styles.articleMeta}>
                  <Image source={{ uri: article.author.avatar }} style={styles.authorAvatar} />
                  <Text style={styles.authorName}>{article.author.name}</Text>
                  <View style={styles.articleStats}>
                    <Text style={styles.articleDate}>{article.date}</Text>
                    <Text style={styles.articleViews}>{article.views} 阅读</Text>
                  </View>
                </View>
              </View>
              {article.image && (
                <Image source={{ uri: article.image }} style={styles.articleImage} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Best Answers Section */}
        <View style={styles.answersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>最佳解答</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>查看全部</Text>
              <ChevronRight size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>
          
          {mockKnowledgeArticles.slice(0, 3).map((article) => (
            <TouchableOpacity key={`answer-${article.id}`} style={styles.answerCard}>
              <View style={styles.answerHeader}>
                <Text style={styles.answerQuestion}>问：{article.title}</Text>
              </View>
              <Text style={styles.answerContent} numberOfLines={3}>
                答：{article.summary}
              </Text>
              <View style={styles.answerFooter}>
                <Image source={{ uri: article.author.avatar }} style={styles.answererAvatar} />
                <Text style={styles.answererName}>{article.author.name}</Text>
                <View style={styles.expertBadge}>
                  <Text style={styles.expertBadgeText}>专家</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Troubleshooting Guide Modal */}
      {selectedGuide && (
        <TroubleshootingGuide
          guide={selectedGuide}
          visible={showGuideModal}
          onClose={() => {
            setShowGuideModal(false);
            setSelectedGuide(null);
          }}
        />
      )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 46,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: colors.textDim,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
  filterButton: {
    marginLeft: 12,
    width: 46,
    height: 46,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: colors.textDim,
    fontSize: 14,
    marginLeft: 8,
  },
  categoryTextActive: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  resourcesSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 20,
  },
  resourceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resourceGridCard: {
    width: '48%',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 120,
  },
  resourceGridIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  resourceGridTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  resourceGridDescription: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    lineHeight: 14,
    flex: 1,
  },
  resourceGridArrow: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  troubleshootingSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  troubleshootingCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  troubleshootingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  troubleshootingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  troubleshootingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 2,
  },
  troubleshootingCategory: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.primary,
  },
  troubleshootingMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  troubleshootingSteps: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  troubleshootingCauses: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  featuredContainer: {
    margin: 16,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  featuredTag: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featuredTagText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
  },
  featuredTitle: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    marginBottom: 8,
  },
  featuredSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  articlesSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  articleCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  articleContent: {
    flex: 1,
    marginRight: 12,
  },
  articleTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 12,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  authorName: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    marginRight: 12,
  },
  articleStats: {
    flexDirection: 'row',
  },
  articleDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginRight: 8,
  },
  articleViews: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  answersSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.primary,
  },
  answerCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  answerHeader: {
    marginBottom: 8,
  },
  answerQuestion: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
  },
  answerContent: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    lineHeight: 20,
    marginBottom: 12,
  },
  answerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answererAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  answererName: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    marginRight: 8,
  },
  expertBadge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  expertBadgeText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: 'white',
  },
});