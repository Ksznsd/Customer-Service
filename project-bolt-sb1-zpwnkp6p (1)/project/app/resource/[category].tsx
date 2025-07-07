import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Upload, Download, Eye, TriangleAlert as AlertTriangle, Search, Filter, FileText, Calendar, User, Star } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import { mockBrands } from '@/data/mockData';

// Mock data for documents with accurate machine models
const mockDocuments = [
  {
    id: 'doc1',
    title: '雷沃M3000拖拉机使用说明书',
    brand: '雷沃M3000',
    version: 'v2.1',
    date: '2023-12-01',
    size: '15.2 MB',
    downloads: 1250,
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 156,
    type: 'PDF'
  },
  {
    id: 'doc2',
    title: '雷沃P5000拖拉机操作手册',
    brand: '雷沃P5000',
    version: 'v1.8',
    date: '2023-11-15',
    size: '12.8 MB',
    downloads: 980,
    rating: 4.6,
    thumbnail: 'https://images.pexels.com/photos/1112156/pexels-photo-1112156.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 142,
    type: 'PDF'
  },
  {
    id: 'doc3',
    title: 'GK120收割机使用指南',
    brand: 'GK120',
    version: 'v3.0',
    date: '2023-10-20',
    size: '18.5 MB',
    downloads: 756,
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '谷王技术部',
    language: '中文',
    pages: 189,
    type: 'PDF'
  },
  {
    id: 'doc4',
    title: 'RG50收割机操作说明',
    brand: 'RG50',
    version: 'v2.3',
    date: '2023-09-28',
    size: '8.9 MB',
    downloads: 432,
    rating: 4.5,
    thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 98,
    type: 'PDF'
  },
  {
    id: 'doc5',
    title: '雷沃F4000拖拉机维修手册',
    brand: '雷沃F4000',
    version: 'v1.5',
    date: '2023-11-08',
    size: '22.3 MB',
    downloads: 1180,
    rating: 4.7,
    thumbnail: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 268,
    type: 'PDF'
  },
  {
    id: 'doc6',
    title: 'RG70收割机服务手册',
    brand: 'RG70',
    version: 'v2.0',
    date: '2023-10-15',
    size: '16.7 MB',
    downloads: 892,
    rating: 4.6,
    thumbnail: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 198,
    type: 'PDF'
  },
  {
    id: 'doc7',
    title: '雷沃P7000拖拉机工时手册',
    brand: '雷沃P7000',
    version: 'v1.2',
    date: '2023-09-20',
    size: '5.4 MB',
    downloads: 567,
    rating: 4.4,
    thumbnail: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃技术部',
    language: '中文',
    pages: 89,
    type: 'PDF'
  },
  {
    id: 'doc8',
    title: 'GM100收割机PDI检查手册',
    brand: 'GM100',
    version: 'v1.0',
    date: '2023-08-25',
    size: '7.8 MB',
    downloads: 345,
    rating: 4.3,
    thumbnail: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '谷王技术部',
    language: '中文',
    pages: 124,
    type: 'PDF'
  },
  {
    id: 'doc9',
    title: '雷沃M4000拖拉机培训资料',
    brand: '雷沃M4000',
    version: 'v1.3',
    date: '2023-07-30',
    size: '28.9 MB',
    downloads: 1456,
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃培训中心',
    language: '中文',
    pages: 345,
    type: 'PDF'
  },
  {
    id: 'doc10',
    title: 'RG90收割机操作视频教程',
    brand: 'RG90',
    version: 'v1.0',
    date: '2023-06-15',
    size: '156.7 MB',
    downloads: 2234,
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    author: '雷沃培训中心',
    language: '中文',
    pages: 0,
    type: 'MP4'
  }
];

const CATEGORY_INFO = {
  manual: {
    title: '使用说明书',
    description: '产品操作指南和使用方法',
    icon: FileText,
    color: '#3A7D44'
  },
  repair: {
    title: '维修手册',
    description: '故障诊断和维修指导',
    icon: FileText,
    color: '#FFC107'
  },
  service: {
    title: '服务手册',
    description: '保养维护和服务规范',
    icon: FileText,
    color: '#3182CE'
  },
  labor: {
    title: '工时手册',
    description: '标准工时和作业时间',
    icon: FileText,
    color: '#E53E3E'
  },
  pdi: {
    title: 'PDI手册',
    description: '交付前检查和调试',
    icon: FileText,
    color: '#38A169'
  },
  training: {
    title: '培训资料',
    description: '技术培训和学习材料',
    icon: FileText,
    color: '#9F7AEA'
  },
  video: {
    title: '视频资料',
    description: '操作演示和教学视频',
    icon: FileText,
    color: '#F56565'
  },
  other: {
    title: '其它',
    description: '其他相关技术资料',
    icon: FileText,
    color: '#718096'
  }
};

export default function ResourceDetailScreen() {
  const { category } = useLocalSearchParams();
  const categoryId = Array.isArray(category) ? category[0] : category;
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText, setReportText] = useState('');

  const categoryInfo = CATEGORY_INFO[categoryId] || CATEGORY_INFO.manual;
  const Icon = categoryInfo.icon;

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || doc.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const handleDownload = (doc) => {
    // Simulate download
    console.log('Downloading:', doc.title);
  };

  const handlePreview = (doc) => {
    // Simulate preview
    console.log('Previewing:', doc.title);
  };

  const handleUpload = () => {
    setShowUploadModal(true);
  };

  const handleReport = (doc) => {
    setShowReportModal(true);
  };

  const submitReport = () => {
    console.log('Report submitted:', reportText);
    setShowReportModal(false);
    setReportText('');
  };

  const renderDocument = ({ item }) => (
    <View style={styles.documentCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.documentThumbnail} />
      
      <View style={styles.documentContent}>
        <View style={styles.documentHeader}>
          <Text style={styles.documentTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            <Star size={14} color="#FFD700" fill="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        
        <View style={styles.documentMeta}>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.versionText}>版本 {item.version}</Text>
        </View>
        
        <View style={styles.documentInfo}>
          <View style={styles.infoItem}>
            <Calendar size={12} color={colors.textDim} />
            <Text style={styles.infoText}>{item.date}</Text>
          </View>
          <View style={styles.infoItem}>
            <FileText size={12} color={colors.textDim} />
            <Text style={styles.infoText}>{item.size}</Text>
          </View>
          <View style={styles.infoItem}>
            <Download size={12} color={colors.textDim} />
            <Text style={styles.infoText}>{item.downloads}</Text>
          </View>
        </View>
        
        <View style={styles.documentActions}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.previewButton]}
            onPress={() => handlePreview(item)}
          >
            <Eye size={16} color="white" />
            <Text style={styles.actionButtonText}>预览</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.downloadButton]}
            onPress={() => handleDownload(item)}
          >
            <Download size={16} color="white" />
            <Text style={styles.actionButtonText}>下载</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.reportButton]}
            onPress={() => handleReport(item)}
          >
            <AlertTriangle size={16} color={colors.textDim} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={[styles.headerIcon, { backgroundColor: `${categoryInfo.color}20` }]}>
            <Icon size={24} color={categoryInfo.color} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>{categoryInfo.title}</Text>
            <Text style={styles.headerSubtitle}>{categoryInfo.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Upload size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search and Filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={colors.textDim} />
          <TextInput
            style={styles.searchInput}
            placeholder="搜索文档..."
            placeholderTextColor={colors.textDim}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Brand Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.brandFilter}
        contentContainerStyle={styles.brandFilterContent}
      >
        <TouchableOpacity
          style={[styles.brandFilterItem, selectedBrand === 'all' && styles.brandFilterItemActive]}
          onPress={() => setSelectedBrand('all')}
        >
          <Text style={[styles.brandFilterText, selectedBrand === 'all' && styles.brandFilterTextActive]}>
            全部品牌
          </Text>
        </TouchableOpacity>
        {mockBrands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={[styles.brandFilterItem, selectedBrand === brand.name && styles.brandFilterItemActive]}
            onPress={() => setSelectedBrand(brand.name)}
          >
            <Text style={[styles.brandFilterText, selectedBrand === brand.name && styles.brandFilterTextActive]}>
              {brand.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Documents List */}
      <FlatList
        data={filteredDocuments}
        renderItem={renderDocument}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.documentsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Upload Modal */}
      <Modal
        visible={showUploadModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowUploadModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>上传文档</Text>
            <Text style={styles.modalText}>
              选择要上传的{categoryInfo.title}文件
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => setShowUploadModal(false)}
              >
                <Text style={styles.modalButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={() => setShowUploadModal(false)}
              >
                <Text style={[styles.modalButtonText, styles.modalButtonTextPrimary]}>选择文件</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Report Modal */}
      <Modal
        visible={showReportModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowReportModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>内容错误报告</Text>
            <Text style={styles.modalText}>
              请描述您发现的问题或错误
            </Text>
            <TextInput
              style={styles.reportInput}
              placeholder="请详细描述问题..."
              placeholderTextColor={colors.textDim}
              value={reportText}
              onChangeText={setReportText}
              multiline
              numberOfLines={4}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => setShowReportModal(false)}
              >
                <Text style={styles.modalButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={submitReport}
              >
                <Text style={[styles.modalButtonText, styles.modalButtonTextPrimary]}>提交</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  searchInput: {
    flex: 1,
    marginLeft: 8,
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
  brandFilter: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  brandFilterContent: {
    paddingRight: 16,
  },
  brandFilterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  brandFilterItemActive: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  brandFilterText: {
    fontFamily: 'Inter-Regular',
    color: colors.text,
    fontSize: 14,
  },
  brandFilterTextActive: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  documentsList: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  documentCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  documentThumbnail: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  documentContent: {
    flex: 1,
  },
  documentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  documentTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginLeft: 4,
  },
  documentMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
    marginRight: 12,
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  documentInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginLeft: 4,
  },
  documentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  previewButton: {
    backgroundColor: colors.info,
  },
  downloadButton: {
    backgroundColor: colors.primary,
  },
  reportButton: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionButtonText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    marginLeft: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 16,
  },
  reportInput: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 16,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  modalButtonPrimary: {
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
  },
  modalButtonTextPrimary: {
    color: 'white',
  },
});