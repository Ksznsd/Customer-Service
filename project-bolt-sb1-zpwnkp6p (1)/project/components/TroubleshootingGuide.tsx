import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { ChevronDown, ChevronRight, TriangleAlert as AlertTriangle, Clock, Wrench, DollarSign, Shield } from 'lucide-react-native';
import { colors } from '@/constants/Colors';

interface DiagnosticStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
  timeRequired: string;
  difficulty: string;
}

interface CommonCause {
  cause: string;
  probability: string;
  solution: string;
  cost: string;
  preventive: string;
}

interface TroubleshootingGuideProps {
  guide: {
    id: string;
    title: string;
    category: string;
    symptoms: string[];
    diagnosticSteps: DiagnosticStep[];
    commonCauses: CommonCause[];
    safetyWarnings: string[];
  };
  visible: boolean;
  onClose: () => void;
}

export default function TroubleshootingGuide({ guide, visible, onClose }: TroubleshootingGuideProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [expandedCause, setExpandedCause] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'steps' | 'causes' | 'safety'>('steps');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '简单': return colors.success;
      case '中等': return colors.warning;
      case '困难': return colors.danger;
      default: return colors.textDim;
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case '低': return colors.success;
      case '中': return colors.warning;
      case '高': return colors.danger;
      default: return colors.textDim;
    }
  };

  const renderDiagnosticSteps = () => (
    <View style={styles.tabContent}>
      {guide.diagnosticSteps.map((step, index) => (
        <View key={step.step} style={styles.stepCard}>
          <TouchableOpacity
            style={styles.stepHeader}
            onPress={() => setExpandedStep(expandedStep === index ? null : index)}
          >
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{step.step}</Text>
            </View>
            <View style={styles.stepTitleContainer}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <View style={styles.stepMeta}>
                <View style={styles.metaItem}>
                  <Clock size={12} color={colors.textDim} />
                  <Text style={styles.metaText}>{step.timeRequired}</Text>
                </View>
                <View style={[styles.difficultyBadge, { backgroundColor: `${getDifficultyColor(step.difficulty)}20` }]}>
                  <Text style={[styles.difficultyText, { color: getDifficultyColor(step.difficulty) }]}>
                    {step.difficulty}
                  </Text>
                </View>
              </View>
            </View>
            {expandedStep === index ? (
              <ChevronDown size={20} color={colors.textDim} />
            ) : (
              <ChevronRight size={20} color={colors.textDim} />
            )}
          </TouchableOpacity>
          
          {expandedStep === index && (
            <View style={styles.stepContent}>
              <Text style={styles.stepDescription}>{step.description}</Text>
              <View style={styles.toolsContainer}>
                <Text style={styles.toolsTitle}>所需工具：</Text>
                {step.tools.map((tool, toolIndex) => (
                  <View key={toolIndex} style={styles.toolItem}>
                    <Wrench size={12} color={colors.primary} />
                    <Text style={styles.toolText}>{tool}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderCommonCauses = () => (
    <View style={styles.tabContent}>
      {guide.commonCauses.map((cause, index) => (
        <View key={index} style={styles.causeCard}>
          <TouchableOpacity
            style={styles.causeHeader}
            onPress={() => setExpandedCause(expandedCause === index ? null : index)}
          >
            <View style={styles.causeInfo}>
              <Text style={styles.causeTitle}>{cause.cause}</Text>
              <View style={styles.causeMeta}>
                <Text style={styles.probabilityText}>概率: {cause.probability}</Text>
                <View style={[styles.costBadge, { backgroundColor: `${getCostColor(cause.cost)}20` }]}>
                  <DollarSign size={12} color={getCostColor(cause.cost)} />
                  <Text style={[styles.costText, { color: getCostColor(cause.cost) }]}>
                    {cause.cost}成本
                  </Text>
                </View>
              </View>
            </View>
            {expandedCause === index ? (
              <ChevronDown size={20} color={colors.textDim} />
            ) : (
              <ChevronRight size={20} color={colors.textDim} />
            )}
          </TouchableOpacity>
          
          {expandedCause === index && (
            <View style={styles.causeContent}>
              <View style={styles.solutionContainer}>
                <Text style={styles.solutionTitle}>解决方案：</Text>
                <Text style={styles.solutionText}>{cause.solution}</Text>
              </View>
              <View style={styles.preventiveContainer}>
                <Text style={styles.preventiveTitle}>预防措施：</Text>
                <Text style={styles.preventiveText}>{cause.preventive}</Text>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderSafetyWarnings = () => (
    <View style={styles.tabContent}>
      <View style={styles.safetyHeader}>
        <AlertTriangle size={24} color={colors.danger} />
        <Text style={styles.safetyHeaderText}>安全注意事项</Text>
      </View>
      {guide.safetyWarnings.map((warning, index) => (
        <View key={index} style={styles.warningItem}>
          <Shield size={16} color={colors.danger} />
          <Text style={styles.warningText}>{warning}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{guide.title}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>关闭</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.symptomsContainer}>
          <Text style={styles.symptomsTitle}>故障症状：</Text>
          <View style={styles.symptomsList}>
            {guide.symptoms.map((symptom, index) => (
              <View key={index} style={styles.symptomItem}>
                <Text style={styles.symptomText}>• {symptom}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'steps' && styles.activeTab]}
            onPress={() => setActiveTab('steps')}
          >
            <Text style={[styles.tabText, activeTab === 'steps' && styles.activeTabText]}>
              诊断步骤
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'causes' && styles.activeTab]}
            onPress={() => setActiveTab('causes')}
          >
            <Text style={[styles.tabText, activeTab === 'causes' && styles.activeTabText]}>
              常见原因
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'safety' && styles.activeTab]}
            onPress={() => setActiveTab('safety')}
          >
            <Text style={[styles.tabText, activeTab === 'safety' && styles.activeTabText]}>
              安全提醒
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {activeTab === 'steps' && renderDiagnosticSteps()}
          {activeTab === 'causes' && renderCommonCauses()}
          {activeTab === 'safety' && renderSafetyWarnings()}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    flex: 1,
  },
  closeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  closeButtonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  symptomsContainer: {
    padding: 16,
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  symptomsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  symptomsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  symptomItem: {
    marginRight: 16,
    marginBottom: 4,
  },
  symptomText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  activeTabText: {
    color: colors.primary,
    fontFamily: 'Inter-SemiBold',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
  },
  stepCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  stepMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  metaText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginLeft: 4,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  stepContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  stepDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    marginBottom: 12,
    lineHeight: 20,
  },
  toolsContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
  },
  toolsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 8,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  toolText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginLeft: 8,
  },
  causeCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  causeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  causeInfo: {
    flex: 1,
  },
  causeTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  causeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  probabilityText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginRight: 12,
  },
  costBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  costText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 4,
  },
  causeContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  solutionContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  solutionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 4,
  },
  solutionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    lineHeight: 20,
  },
  preventiveContainer: {
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    padding: 12,
  },
  preventiveTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
    marginBottom: 4,
  },
  preventiveText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.primary,
    lineHeight: 20,
  },
  safetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.danger,
  },
  safetyHeaderText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.danger,
    marginLeft: 12,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.danger,
  },
  warningText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
});