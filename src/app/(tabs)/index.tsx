import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, ScrollView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PROFILE_IMG = require('@/assets/images/Tani user icon.png');
const BABY_IMG = { uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeXKdPQBD_4sHdzkt4gUaibJ7YaZskqyzSHUuvwZCMs6Wiq0ZLPxtC9kv4PbL6_301YGw99FLlH60wA86Wg4QJSa_6WT-RGCfU66b_WFYLzAMcP-56qQ9gZKz1sVG_suHaBUdlrpvfS-5uxqkB79OP2UQmccGBqzDD6uetWUTLn8ZP2eRFYSx0LbQfWyZ_aqcF_X98Kn8HQc8sHvARCklf5cnVlj21TytjG5amcM_oAIPW3ieMqnxEVNQMfIVOYY37ZYbSPJ4flgU' };

export default function HomeScreen() {
  const router = useRouter();
<Text style={{color: 'red'}}>SISTEMA EN MANTENIMIENTO</Text>.
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => router.push('/perfil')}>
          <View style={styles.avatarContainer}>
            <Image source={PROFILE_IMG} style={styles.avatar} />
          </View>
          <Text style={styles.headerName}>(Apellido)</Text>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="ribbon-outline" size={24} color="rgba(27,28,28,0.7)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/notificaciones')}>
            <Ionicons name="notifications-outline" size={24} color="rgba(27,28,28,0.7)" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Próxima Cita */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentLeft}>
            <View style={styles.calIconBox}>
              <Ionicons name="calendar-outline" size={24} color="#FFF" />
            </View>
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentTag}>PRÓXIMA CITA</Text>
              <Text style={styles.appointmentTitle}>Pediatría — Mateo</Text>
              <View style={styles.appointmentTimeRow}>
                <Ionicons name="time-outline" size={13} color="rgba(255,255,255,0.9)" />
                <Text style={styles.appointmentTime}>Viernes, 24 Oct • 10:30 AM</Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.5)" />
        </View>

        {/* Reservar Cita */}
        <TouchableOpacity
          style={styles.reservarBtn}
          onPress={() => router.navigate('/(tabs)/citas')}
          activeOpacity={0.85}
        >
          <Ionicons name="add-circle-outline" size={22} color="#FFF" />
          <Text style={styles.reservarText}>Reservar Cita Médica</Text>
        </TouchableOpacity>

        {/* Mis Bebés */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mis Bebés</Text>
            <Text style={styles.sectionSub}>Gestión de perfiles familiares</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.babyScroll}
          >
            {/* Bebé activo */}
            <View style={styles.babyCard}>
              <View style={styles.babyAvatarWrapper}>
                <Image source={BABY_IMG} style={styles.babyAvatar} />
                <View style={styles.favBadge}>
                  <Ionicons name="heart" size={10} color="#FFF" />
                </View>
              </View>
              <View>
                <Text style={styles.babyName}>Mateo</Text>
                <Text style={styles.babyDetails}>8 meses • 7.2 kg</Text>
                <View style={styles.alDia}>
                  <Ionicons name="checkmark-circle" size={13} color="#499F86" />
                  <Text style={styles.alDiaText}>Al día</Text>
                </View>
              </View>
            </View>

            {/* Bebé inactivo */}
            <View style={[styles.babyCard, styles.babyCardInactive]}>
              <View style={[styles.babyAvatarWrapper, styles.babyAvatarInactive]}>
                <Ionicons name="happy-outline" size={28} color="#6e7a74" style={{ opacity: 0.5 }} />
              </View>
              <View>
                <Text style={[styles.babyName, { color: '#6e7a74' }]}>Lucía</Text>
                <Text style={styles.babyDetails}>2 años • 12 kg</Text>
                <Text style={styles.verPerfil}>Ver perfil</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Mi Carnet QR */}
        <TouchableOpacity style={styles.qrCard} onPress={() => router.push('/mi-carnet')} activeOpacity={0.9}>
          <View style={styles.qrIconBox}>
            <Ionicons name="qr-code-2" size={36} color="#499F86" />
          </View>
          <View style={styles.qrText}>
            <Text style={styles.qrTitle}>Mi Carnet QR</Text>
            <Text style={styles.qrSub}>Escanea para identificación rápida en clínica</Text>
          </View>
          <View style={styles.chevronCircle}>
            <Ionicons name="chevron-forward" size={18} color="#6e7a74" />
          </View>
        </TouchableOpacity>

        {/* Consejos del día */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consejos del día</Text>
          <View style={styles.tipCard}>
            <View style={styles.tipIconBox}>
              <Ionicons name="bulb-outline" size={28} color="#765b00" />
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>Alimentación complementaria</Text>
              <Text style={styles.tipText}>
                Descubre los mejores alimentos para iniciar la dieta de{' '}
                <Text style={{ fontWeight: '600' }}>Mateo</Text> a sus 8 meses. Prioriza vegetales suaves.
              </Text>
              <TouchableOpacity
                style={styles.tipLink}
                onPress={() => router.push('/(aprende)/guia')}
              >
                <Text style={styles.tipLinkText}>Leer guía completa</Text>
                <Ionicons name="arrow-forward" size={13} color="#499F86" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fbf9f8',
  },
  // Header — glassmorphic, pegado arriba
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(190,201,195,0.1)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(73,159,134,0.1)',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  headerName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#499F86',
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 4,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ba1a1a',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },
  // Appointment card — gradient teal
  appointmentCard: {
    backgroundColor: '#499F86',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#499F86',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  appointmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  calIconBox: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTag: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  appointmentTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  appointmentTime: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
  },
  // Reservar button
  reservarBtn: {
    backgroundColor: '#9b4500',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
    shadowColor: 'rgba(155,69,0,0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  reservarText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    gap: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1b1c1c',
    letterSpacing: -0.3,
  },
  sectionSub: {
    fontSize: 12,
    color: '#3e4945',
  },
  babyScroll: {
    gap: 16,
    paddingRight: 4,
    paddingBottom: 4,
  },
  babyCard: {
    width: 260,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(190,201,195,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },
  babyCardInactive: {
    backgroundColor: 'rgba(245,243,243,0.5)',
    opacity: 0.75,
  },
  babyAvatarWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  babyAvatarInactive: {
    backgroundColor: '#f0eded',
    justifyContent: 'center',
    alignItems: 'center',
  },
  babyAvatar: {
    width: '100%',
    height: '100%',
  },
  favBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#d3a500',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  babyName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1b1c1c',
    marginBottom: 2,
  },
  babyDetails: {
    fontSize: 13,
    color: '#3e4945',
    fontWeight: '500',
    marginBottom: 6,
  },
  alDia: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#f0fdf9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  alDiaText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#499F86',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  verPerfil: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(62,73,69,0.7)',
  },
  // QR card
  qrCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(73,159,134,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
  },
  qrIconBox: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(73,159,134,0.1)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    flex: 1,
  },
  qrTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1b1c1c',
    marginBottom: 4,
  },
  qrSub: {
    fontSize: 13,
    color: '#3e4945',
    lineHeight: 18,
  },
  chevronCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0eded',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Tip card
  tipCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(190,201,195,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  tipIconBox: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(211,165,0,0.1)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  tipContent: {
    flex: 1,
    gap: 6,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1b1c1c',
    lineHeight: 20,
  },
  tipText: {
    fontSize: 13,
    color: '#3e4945',
    lineHeight: 20,
  },
  tipLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  tipLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#499F86',
  },
});