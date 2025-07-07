import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { User, Phone, Key, ArrowLeft } from 'lucide-react-native';
import { colors } from '@/constants/Colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { signUp } = useAuth();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      // Should show an error, but for demo we'll just return
      return;
    }

    if (name && phone && password) {
      signUp(name, phone, password);
      router.replace('/(tabs)');
    }
  };

  const isFormValid = name && phone && password && confirmPassword && password === confirmPassword;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>创建账号</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>欢迎加入农机问题易解!</Text>
        <Text style={styles.formSubtitle}>请填写以下信息完成注册</Text>

        <View style={styles.inputContainer}>
          <User size={20} color={colors.textDim} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="用户名"
            value={name}
            onChangeText={setName}
            placeholderTextColor={colors.textDim}
          />
        </View>

        <View style={styles.inputContainer}>
          <Phone size={20} color={colors.textDim} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="手机号码"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor={colors.textDim}
          />
        </View>

        <View style={styles.inputContainer}>
          <Key size={20} color={colors.textDim} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="设置密码"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={colors.textDim}
          />
        </View>

        <View style={styles.inputContainer}>
          <Key size={20} color={colors.textDim} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="确认密码"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor={colors.textDim}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, isFormValid ? styles.buttonActive : null]}
          onPress={handleRegister}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>注册</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>已有账号？</Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>立即登录</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          注册即表示您同意我们的
          <Text style={styles.termsLink}> 服务条款 </Text>
          和
          <Text style={styles.termsLink}> 隐私政策</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: colors.text,
  },
  formContainer: {
    flex: 1,
    padding: 24,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: colors.text,
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.textDim,
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 24,
    opacity: 0.6,
  },
  buttonActive: {
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  loginText: {
    color: colors.textDim,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  loginLink: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 4,
  },
  termsText: {
    color: colors.textDim,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  termsLink: {
    color: colors.primary,
  },
});