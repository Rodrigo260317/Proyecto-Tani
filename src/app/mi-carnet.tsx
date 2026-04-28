import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MiCarnetScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        
        {/* Profile Photo */}
        <View style={styles.profileSection}>
          <View style={styles.avatarBorder}>
            <Image 
              source={require('@/assets/images/Tani user icon.png')} 
              style={styles.avatar} 
            />
          </View>
          <View style={styles.familyBadge}>
            <Text style={styles.familyBadgeText}>FAMILIA TANI</Text>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoSection}>
          <Text style={styles.nameText}>Mateo</Text>
          <View style={styles.historyBadge}>
            <Text style={styles.historyText}>Nro. Historia: 98932</Text>
          </View>
        </View>

        {/* QR Card */}
        <View style={styles.qrCardContainer}>
          <View style={styles.qrCard}>
            
            <View style={styles.qrGradientBorder}>
              <View style={styles.qrWhiteBox}>
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa85W4rdyYH74w9nYpblASOByOykMPm2iaHSmOZmKmuXBu4H57MnYY1IBNXMg7OuBsuad9j1jfj8xVulTEXPF_BeoCPGImy2Bnsuz7Da4C9xfubmIafGxOhaN7C7qU1abZAYQN84u1Rbr4zmTm8bmbzPawtPcxOYxydIHXc-zMz9i5FLdbbmDJmD-zaQxM4MttMDIyoPm8T6dT4sUxu7nM0mWwobKOQBrqsg95DVAnTuwHdvRQVgq_AgONfG_WwWaqh8GtaDx-Ay0' }} 
                  style={styles.qrImage} 
                />
              </View>
            </View>

            <View style={styles.instructionBox}>
              <Ionicons name="information-circle" size={20} color={Colors.light.primary} />
              <Text style={styles.instructionText}>
                Muestra este código en la recepción para registrar tu ingreso
              </Text>
            </View>

          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>TANI PERU {(new Date()).getFullYear()}</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#Fbf9f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  profileSection: {
    position: 'relative',
    marginBottom: 24,
    alignItems: 'center',
  },
  avatarBorder: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#FFF',
    overflow: 'hidden',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  familyBadge: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  familyBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  nameText: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 8,
  },
  historyBadge: {
    backgroundColor: 'rgba(73, 159, 134, 0.15)', // primary-container
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  historyText: {
    color: '#002018',
    fontSize: 14,
    fontWeight: '600',
  },
  qrCardContainer: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  qrCard: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 40,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
    elevation: 6,
  },
  qrGradientBorder: {
    backgroundColor: Colors.light.primary, // Simulating gradient with solid color for simplicity in plain RN
    padding: 12,
    borderRadius: 32,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  qrWhiteBox: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 24,
  },
  qrImage: {
    width: 200,
    height: 200,
  },
  instructionBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(73, 159, 134, 0.1)',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(73, 159, 134, 0.1)',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#002018',
    lineHeight: 20,
    marginLeft: 12,
  },
  footerSection: {
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.light.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
  }
});