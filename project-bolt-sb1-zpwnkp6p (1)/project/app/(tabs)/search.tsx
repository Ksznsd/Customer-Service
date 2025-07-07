import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Search as SearchIcon, Filter, X } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Header from '@/components/Header';
import { mockIssues, mockBrands } from '@/data/mockData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.length > 1) {
      const results = mockIssues.filter(
        issue => 
          issue.title.toLowerCase().includes(text.toLowerCase()) || 
          issue.description.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const filters = [
    { id: 'all', name: '全部' },
    { id: 'issues', name: '问题' },
    { id: 'knowledge', name: '知识' },
    { id: 'users', name: '用户' },
  ];

  const renderFilterItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.filterItem,
        activeFilter === item.id && styles.activeFilterItem,
      ]}
      onPress={() => setActiveFilter(item.id)}
    >
      <Text
        style={[
          styles.filterText,
          activeFilter === item.id && styles.activeFilterText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBrandItem = ({ item }) => (
    <TouchableOpacity style={styles.brandItem}>
      <View style={styles.brandImageContainer}>
        <Image 
          source={{ uri: item.thumbnail }} 
          style={styles.brandThumbnail}
          defaultSource={{ uri: 'https://images.pexels.com/photos/1112156/pexels-photo-1112156.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1' }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.brandName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.resultDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.resultMeta}>
          <Text style={styles.resultCategory}>{
            item.category === 'engine' ? '发动机' :
            item.category === 'transmission' ? '变速箱' :
            item.category === 'powershift' ? '动力换档' :
            item.category === 'cvt' ? 'CVT变速箱' :
            item.category === 'hydraulic_lift' ? '提升器' :
            item.category === 'ecu_diagnostic' ? 'ECU诊断' :
            item.category === 'threshing_drum' ? '脱粒滚筒' :
            item.category === 'harvester' ? '收获机械' :
            item.category === 'seeder' ? '播种机' :
            item.category === 'implement' ? '农机具' : '其他'
          }</Text>
          <Text style={styles.resultDate}>{item.date}</Text>
        </View>
      </View>
      {item.image && <Image source={{ uri: item.image }} style={styles.resultImage} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="发现" variant="search" />
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <SearchIcon size={20} color={colors.textDim} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="搜索农机问题、故障解决方案..."
                placeholderTextColor={colors.textDim}
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={clearSearch}>
                <X size={20} color={colors.textDim} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Filters */}
        {showResults && (
          <View style={styles.filtersContainer}>
            <FlatList
              data={filters}
              renderItem={renderFilterItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filtersContent}
            />
          </View>
        )}

        {/* Search Results or Default Content */}
        {showResults ? (
          <View style={styles.resultsContainer}>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <View key={item.id}>
                  {renderSearchResult({ item })}
                </View>
              ))
            ) : (
              <View style={styles.emptyResults}>
                <Text style={styles.emptyResultsText}>
                  未找到与"{searchQuery}"相关的结果
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.defaultContent}>
            <Text style={styles.sectionTitle}>推荐品牌</Text>
            <FlatList
              data={mockBrands}
              renderItem={renderBrandItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.brandsList}
            />
            
            <Text style={styles.sectionTitle}>热门搜索</Text>
            <View style={styles.hotSearches}>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>柴油机启动困难</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>变速箱异响</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>液压升降失灵</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>电路故障</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>轮胎选择</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hotSearchItem}>
                <Text style={styles.hotSearchText}>怠速不稳</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.sectionTitle}>近期热门问题</Text>
            <View style={styles.popularContainer}>
              {mockIssues.slice(0, 3).map((item) => (
                <View key={item.id}>
                  {renderSearchResult({ item })}
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // 增加底部间距，确保内容不被底部导航遮挡
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  inputContainer: {
    flex: 1,
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
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
  filtersContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  filtersContent: {
    paddingRight: 16,
  },
  filterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeFilterItem: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  filterText: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  activeFilterText: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  resultsContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  resultContent: {
    flex: 1,
    marginRight: 8,
  },
  resultTitle: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 8,
    lineHeight: 18,
  },
  resultMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultCategory: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.primary,
  },
  resultDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  emptyResults: {
    padding: 32,
    alignItems: 'center',
  },
  emptyResultsText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    textAlign: 'center',
  },
  defaultContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 16,
    marginTop: 8,
  },
  brandsList: {
    paddingBottom: 24,
  },
  brandItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  brandImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.cardBackground,
    marginBottom: 8,
  },
  brandThumbnail: {
    width: '100%',
    height: '100%',
  },
  brandName: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 14,
  },
  hotSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  hotSearchItem: {
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  hotSearchText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
  popularContainer: {
    paddingBottom: 24,
  },
});