import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { LogIn, User, Key } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { signIn } = useAuth();

  const handleLogin = () => {
    if (phone.trim() && password.trim()) {
      signIn(phone, password);
      router.replace('/(tabs)');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={[colors.cardBackground, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.logoContainer}
      >
        <View style={styles.logoWrapper}>
          <Image 
            source={{ uri: 'https://www.lovol.com.cn/images/logo.png' }} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>海外服务与配件部</Text>
        <Text style={styles.subtitle}>Service and Parts Business Division</Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <User size={20} color={colors.textDim} style={styles.inputIcon}/>
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
          <Key size={20} color={colors.textDim} style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder="密码"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={colors.textDim}
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>忘记密码？</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, (phone && password) ? styles.buttonActive : null]}
          onPress={handleLogin}
          disabled={!phone || !password}>
          <LogIn size={20} color="#fff"/>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>还没有账号？</Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.registerLink}>立即注册</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialText}>其他登录方式</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>微信</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>QQ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  logoWrapper: {
    width: '90%',
    height: 100,
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textDim,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  formContainer: {
    flex: 1,
    padding: 24,
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  buttonActive: {
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 8,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  registerText: {
    color: colors.textDim,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  registerLink: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 4,
  },
  socialLoginContainer: {
    alignItems: 'center',
  },
  socialText: {
    color: colors.textDim,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
  },
  socialButton: {
    width: 80,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  socialButtonText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});