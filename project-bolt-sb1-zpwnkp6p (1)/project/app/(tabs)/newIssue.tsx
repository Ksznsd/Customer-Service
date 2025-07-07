import React, { useState, useRef } from 'react';
import { 
  View, Text, StyleSheet, TextInput, TouchableOpacity, 
  ScrollView, Image, Platform, KeyboardAvoidingView 
} from 'react-native';
import { Camera, Image as ImageIcon, X, ChevronDown, MapPin, Globe, Clock, Store } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';
import { mockBrands } from '@/data/mockData';

// Categories for tractor issues
const CATEGORIES = [
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
  { id: 'other', name: '其他' }
];

// Regions
const REGIONS = [
  { id: 'north', name: '华北' },
  { id: 'east', name: '华东' },
  { id: 'south', name: '华南' },
  { id: 'central', name: '华中' },
  { id: 'southwest', name: '西南' },
  { id: 'northwest', name: '西北' },
  { id: 'northeast', name: '东北' },
];

// Countries
const COUNTRIES = [
  { id: 'cn', name: '中国' },
  { id: 'us', name: '美国' },
  { id: 'de', name: '德国' },
  { id: 'jp', name: '日本' },
  { id: 'kr', name: '韩国' },
  { id: 'other', name: '其他' },
];

// Working Hours Ranges
const WORKING_HOURS = [
  { id: '0-500', name: '0-500小时' },
  { id: '501-1000', name: '501-1000小时' },
  { id: '1001-2000', name: '1001-2000小时' },
  { id: '2001-5000', name: '2001-5000小时' },
  { id: '5000+', name: '5000小时以上' },
];

export default function NewIssueScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedHours, setSelectedHours] = useState(null);
  const [dealerName, setDealerName] = useState('');
  const [images, setImages] = useState([]);
  const [showBrandPicker, setShowBrandPicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showRegionPicker, setShowRegionPicker] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showHoursPicker, setShowHoursPicker] = useState(false);
  
  const scrollRef = useRef(null);
  const router = useRouter();

  const addImage = () => {
    const placeholderImages = [
      'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/159293/oil-machine-gear-gears-159293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];
    
    if (images.length < 3) {
      const randomImage = placeholderImages[images.length];
      setImages([...images, randomImage]);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = () => {
    console.log({
      title,
      description,
      brand: selectedBrand,
      category: selectedCategory,
      region: selectedRegion,
      country: selectedCountry,
      workingHours: selectedHours,
      dealerName,
      images
    });
    
    router.push('/');
  };

  const closeAllPickers = () => {
    setShowBrandPicker(false);
    setShowCategoryPicker(false);
    setShowRegionPicker(false);
    setShowCountryPicker(false);
    setShowHoursPicker(false);
  };

  const isFormValid = title && description && selectedBrand && selectedCategory && 
                     selectedRegion && selectedCountry && selectedHours && dealerName;

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <Header title="报告新问题" variant="newIssue" />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.sectionTitle}>填写问题信息</Text>
        <Text style={styles.label}>问题标题</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="简要描述您遇到的问题（10-50字）"
          placeholderTextColor={colors.textDim}
          value={title}
          onChangeText={setTitle}
          maxLength={50}
        />
        
        <View style={styles.selectionRow}>
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>品牌型号</Text>
            <TouchableOpacity 
              style={styles.picker}
              onPress={() => {
                closeAllPickers();
                setShowBrandPicker(!showBrandPicker);
              }}
            >
              <Text style={selectedBrand ? styles.pickerText : styles.pickerPlaceholder}>
                {selectedBrand ? selectedBrand.name : '选择品牌'}
              </Text>
              <ChevronDown size={16} color={colors.textDim} />
            </TouchableOpacity>
            {showBrandPicker && (
              <View style={styles.dropdownMenu}>
                {mockBrands.map((brand) => (
                  <TouchableOpacity 
                    key={brand.id}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedBrand(brand);
                      setShowBrandPicker(false);
                    }}
                  >
                    <Image source={{ uri: brand.logo }} style={styles.dropdownImage} />
                    <Text style={styles.dropdownText}>{brand.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>故障类型</Text>
            <TouchableOpacity 
              style={styles.picker}
              onPress={() => {
                closeAllPickers();
                setShowCategoryPicker(!showCategoryPicker);
              }}
            >
              <Text style={selectedCategory ? styles.pickerText : styles.pickerPlaceholder}>
                {selectedCategory ? selectedCategory.name : '选择类型'}
              </Text>
              <ChevronDown size={16} color={colors.textDim} />
            </TouchableOpacity>
            {showCategoryPicker && (
              <View style={styles.dropdownMenu}>
                {CATEGORIES.map((category) => (
                  <TouchableOpacity 
                    key={category.id}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedCategory(category);
                      setShowCategoryPicker(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.selectionRow}>
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>
              <MapPin size={16} color={colors.text} style={styles.labelIcon} />
              区域
            </Text>
            <TouchableOpacity 
              style={styles.picker}
              onPress={() => {
                closeAllPickers();
                setShowRegionPicker(!showRegionPicker);
              }}
            >
              <Text style={selectedRegion ? styles.pickerText : styles.pickerPlaceholder}>
                {selectedRegion ? selectedRegion.name : '选择区域'}
              </Text>
              <ChevronDown size={16} color={colors.textDim} />
            </TouchableOpacity>
            {showRegionPicker && (
              <View style={styles.dropdownMenu}>
                {REGIONS.map((region) => (
                  <TouchableOpacity 
                    key={region.id}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedRegion(region);
                      setShowRegionPicker(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{region.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>
              <Globe size={16} color={colors.text} style={styles.labelIcon} />
              国家
            </Text>
            <TouchableOpacity 
              style={styles.picker}
              onPress={() => {
                closeAllPickers();
                setShowCountryPicker(!showCountryPicker);
              }}
            >
              <Text style={selectedCountry ? styles.pickerText : styles.pickerPlaceholder}>
                {selectedCountry ? selectedCountry.name : '选择国家'}
              </Text>
              <ChevronDown size={16} color={colors.textDim} />
            </TouchableOpacity>
            {showCountryPicker && (
              <View style={styles.dropdownMenu}>
                {COUNTRIES.map((country) => (
                  <TouchableOpacity 
                    key={country.id}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedCountry(country);
                      setShowCountryPicker(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{country.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.fullWidthPicker}>
          <Text style={styles.label}>
            <Clock size={16} color={colors.text} style={styles.labelIcon} />
            工作小时
          </Text>
          <TouchableOpacity 
            style={styles.picker}
            onPress={() => {
              closeAllPickers();
              setShowHoursPicker(!showHoursPicker);
            }}
          >
            <Text style={selectedHours ? styles.pickerText : styles.pickerPlaceholder}>
              {selectedHours ? selectedHours.name : '选择工作小时'}
            </Text>
            <ChevronDown size={16} color={colors.textDim} />
          </TouchableOpacity>
          {showHoursPicker && (
            <View style={styles.dropdownMenu}>
              {WORKING_HOURS.map((hours) => (
                <TouchableOpacity 
                  key={hours.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedHours(hours);
                    setShowHoursPicker(false);
                  }}
                >
                  <Text style={styles.dropdownText}>{hours.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.fullWidthPicker}>
          <Text style={styles.label}>
            <Store size={16} color={colors.text} style={styles.labelIcon} />
            经销商名称
          </Text>
          <TextInput
            style={styles.dealerInput}
            placeholder="请输入经销商名称"
            placeholderTextColor={colors.textDim}
            value={dealerName}
            onChangeText={setDealerName}
          />
        </View>
        
        <Text style={styles.label}>问题描述</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="详细描述问题的症状、发生场景、已尝试的方法等（50-500字）"
          placeholderTextColor={colors.textDim}
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
          maxLength={500}
        />
        
        <Text style={styles.label}>添加图片（选填，最多3张）</Text>
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity 
                style={styles.removeImageButton}
                onPress={() => removeImage(index)}
              >
                <X size={16} color="white" />
              </TouchableOpacity>
            </View>
          ))}
          
          {images.length < 3 && (
            <TouchableOpacity style={styles.addImageButton} onPress={addImage}>
              <Camera size={24} color={colors.textDim} />
              <Text style={styles.addImageText}>添加图片</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity 
          style={[styles.submitButton, isFormValid ? styles.submitButtonActive : {}]}
          disabled={!isFormValid}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>报告问题</Text>
        </TouchableOpacity>
        
        <Text style={styles.tipText}>
          提示：详细的问题描述和清晰的图片会获得更快的回答和更准确的解决方案。
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelIcon: {
    marginRight: 4,
  },
  titleInput: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dealerInput: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pickerContainer: {
    width: '48%',
    position: 'relative',
  },
  fullWidthPicker: {
    width: '100%',
    position: 'relative',
    marginBottom: 16,
  },
  picker: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pickerText: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  pickerPlaceholder: {
    color: colors.textDim,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    zIndex: 10,
    maxHeight: 200,
    overflow: 'scroll',
  },
  dropdownItem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dropdownImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  dropdownText: {
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  descriptionInput: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginBottom: 16,
    height: 120,
    borderWidth: 1,
    borderColor: colors.border,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageButton: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
  },
  addImageText: {
    color: colors.textDim,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    opacity: 0.6,
  },
  submitButtonActive: {
    opacity: 1,
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  tipText: {
    color: colors.textDim,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});