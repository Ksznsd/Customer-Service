import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, MessageSquare, BookmarkPlus, Share2, ThumbsUp, Check, ChevronUp, ChevronDown, Send } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import { mockIssues } from '@/data/mockData';

export default function IssueDetailScreen() {
  const { id } = useLocalSearchParams();
  const issueId = Array.isArray(id) ? id[0] : id;
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showAllReplies, setShowAllReplies] = useState(false);

  // Find the issue by ID from mock data
  const issue = mockIssues.find(item => item.id === issueId) || mockIssues[0];
  
  // Mock replies data
  const replies = [
    {
      id: 'reply1',
      user: {
        name: '李师傅',
        avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isExpert: true,
      },
      content: '根据您描述的情况，这很可能是燃油滤清器堵塞导致的问题。柴油中的杂质会逐渐积累在滤清器中，影响油路畅通，从而导致发动机供油不足，出现启动困难或者功率下降的情况。建议您先检查燃油滤清器，如果发现有明显堵塞，应及时更换。同时，也要检查一下油箱中是否有水分或杂质。',
      date: '2023-12-05',
      isAccepted: true,
      likes: 15,
      images: ['https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    },
    {
      id: 'reply2',
      user: {
        name: '王机修',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isExpert: false,
      },
      content: '除了燃油滤清器问题外，也可能是喷油嘴堵塞。柴油发动机长时间运行后，喷油嘴喷孔可能会因积碳而堵塞，导致雾化效果变差，影响燃烧效率。检查方法是拆下喷油嘴，观察喷射情况是否均匀。',
      date: '2023-12-06',
      isAccepted: false,
      likes: 8,
      images: [],
    },
    {
      id: 'reply3',
      user: {
        name: '张工程师',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isExpert: true,
      },
      content: '建议也检查一下气门间隙，气门间隙过大或过小都会影响发动机性能，特别是冷启动时更为明显。您可以按照维修手册上的标准调整气门间隙，这对提高发动机性能很有帮助。',
      date: '2023-12-07',
      isAccepted: false,
      likes: 5,
      images: [],
    },
  ];

  const visibleReplies = showAllReplies ? replies : replies.slice(0, 2);

  if (!issue) {
    return (
      <View style={styles.container}>
        <Text>Issue not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>问题详情</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <BookmarkPlus size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Share2 size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.issueContainer}>
          <View style={styles.issueHeader}>
            <Image source={{ uri: issue.user.avatar }} style={styles.userAvatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{issue.user.name}</Text>
              <Text style={styles.issueDate}>{issue.date}</Text>
            </View>
            {issue.solved && (
              <View style={styles.solvedBadge}>
                <Check size={12} color="white" />
                <Text style={styles.solvedText}>已解决</Text>
              </View>
            )}
          </View>

          <Text style={styles.issueTitle}>{issue.title}</Text>
          
          <Text 
            style={styles.issueDescription}
            numberOfLines={showFullDescription ? undefined : 5}
          >
            {issue.description}
          </Text>
          
          {issue.description.length > 200 && (
            <TouchableOpacity 
              style={styles.expandButton}
              onPress={() => setShowFullDescription(!showFullDescription)}
            >
              <Text style={styles.expandButtonText}>
                {showFullDescription ? '收起' : '展开全文'}
              </Text>
              {showFullDescription ? (
                <ChevronUp size={16} color={colors.primary} />
              ) : (
                <ChevronDown size={16} color={colors.primary} />
              )}
            </TouchableOpacity>
          )}

          {issue.image && (
            <Image source={{ uri: issue.image }} style={styles.issueImage} />
          )}

          <View style={styles.issueFooter}>
            <View style={styles.issueStats}>
              <View style={styles.statItem}>
                <MessageSquare size={16} color={colors.textDim} />
                <Text style={styles.statText}>{issue.comments} 回答</Text>
              </View>
              <View style={styles.statItem}>
                <ThumbsUp size={16} color={colors.textDim} />
                <Text style={styles.statText}>{issue.likes} 点赞</Text>
              </View>
            </View>
            <View style={styles.issueTags}>
              <View style={styles.tagItem}>
                <Text style={styles.tagText}>{
                  issue.category === 'engine' ? '发动机' :
                  issue.category === 'transmission' ? '变速箱' :
                  issue.category === 'hydraulic' ? '液压系统' :
                  issue.category === 'electric' ? '电气系统' :
                  issue.category === 'wheel' ? '车轮底盘' : '其他'
                }</Text>
              </View>
              <View style={styles.tagItem}>
                <Text style={styles.tagText}>{issue.brand || '东方红'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.repliesSection}>
          <Text style={styles.sectionTitle}>回答 ({replies.length})</Text>
          
          {visibleReplies.map((reply, index) => (
            <View key={reply.id} style={styles.replyCard}>
              <View style={styles.replyHeader}>
                <Image source={{ uri: reply.user.avatar }} style={styles.replyUserAvatar} />
                <View style={styles.replyUserInfo}>
                  <View style={styles.replyUserNameRow}>
                    <Text style={styles.replyUserName}>{reply.user.name}</Text>
                    {reply.user.isExpert && (
                      <View style={styles.expertBadge}>
                        <Text style={styles.expertBadgeText}>专家</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.replyDate}>{reply.date}</Text>
                </View>
                {reply.isAccepted && (
                  <View style={styles.acceptedBadge}>
                    <Check size={14} color="white" />
                    <Text style={styles.acceptedText}>最佳回答</Text>
                  </View>
                )}
              </View>
              
              <Text style={styles.replyContent}>{reply.content}</Text>
              
              {reply.images.length > 0 && (
                <Image source={{ uri: reply.images[0] }} style={styles.replyImage} />
              )}
              
              <View style={styles.replyFooter}>
                <TouchableOpacity style={styles.replyAction}>
                  <ThumbsUp size={16} color={colors.textDim} />
                  <Text style={styles.replyActionText}>{reply.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.replyAction}>
                  <MessageSquare size={16} color={colors.textDim} />
                  <Text style={styles.replyActionText}>回复</Text>
                </TouchableOpacity>
              </View>
              
              {index < visibleReplies.length - 1 && <View style={styles.replyDivider} />}
            </View>
          ))}
          
          {replies.length > 2 && (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={() => setShowAllReplies(!showAllReplies)}
            >
              <Text style={styles.showMoreText}>
                {showAllReplies ? '收起回答' : `查看更多 ${replies.length - 2} 条回答`}
              </Text>
              {showAllReplies ? (
                <ChevronUp size={16} color={colors.primary} />
              ) : (
                <ChevronDown size={16} color={colors.primary} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <View style={styles.replyInputContainer}>
        <TextInput
          style={styles.replyInput}
          placeholder="写下您的回答..."
          placeholderTextColor={colors.textDim}
          value={replyText}
          onChangeText={setReplyText}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, replyText ? styles.sendButtonActive : {}]}
          disabled={!replyText}
        >
          <Send size={20} color={replyText ? 'white' : colors.textDim} />
        </TouchableOpacity>
      </View>
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
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  issueContainer: {
    backgroundColor: colors.cardBackground,
    padding: 16,
  },
  issueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 2,
  },
  issueDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  solvedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  solvedText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  issueTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 12,
    lineHeight: 24,
  },
  issueDescription: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    lineHeight: 22,
  },
  expandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  expandButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
    marginRight: 4,
  },
  issueImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 16,
  },
  issueFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  issueStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginLeft: 6,
  },
  issueTags: {
    flexDirection: 'row',
  },
  tagItem: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.primary,
  },
  divider: {
    height: 8,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  repliesSection: {
    backgroundColor: colors.cardBackground,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
    marginBottom: 16,
  },
  replyCard: {
    marginBottom: 16,
  },
  replyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  replyUserAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  replyUserInfo: {
    marginLeft: 12,
    flex: 1,
  },
  replyUserNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyUserName: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
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
  replyDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
  },
  acceptedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  acceptedText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
  replyContent: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  replyImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  replyFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  replyActionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginLeft: 6,
  },
  replyDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 16,
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  showMoreText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
    marginRight: 4,
  },
  replyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.cardBackground,
  },
  replyInput: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 80,
    color: colors.text,
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sendButtonActive: {
    backgroundColor: colors.primary,
  },
});