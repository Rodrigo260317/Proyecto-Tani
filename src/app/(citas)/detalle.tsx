import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DetalleCitaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={Colors.light.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalles de Cita</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Hero Information Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroLabel}>PRÓXIMA CITA</Text>
          <Text style={styles.heroTitle}>Detalle de Cita</Text>
        </View>

        <View style={styles.gridContainer}>
          {/* Patient Card */}
          <View style={styles.patientCard}>
            <View style={styles.patientAvatarBox}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwg1xuGB4RhI2K9sGMbckNJ9FSyFUjMR-WGc6FgiUSnY9EPyxkGwlprdeG1SPqE6soauAXDeOkBB2hsI14NfFeXWSg71d8Ag67hoRtjyNbBfFJs_lLaRKUHC_mSvmRq36vz2k_PKlFraKvnLObl6v5xupTh3mr19tiR6c3IiOm0GoG50Eu3msjgq4bGyXR8_UEZrX68BB_qDrvkEk5FfVHTOpQHg38s02ZqRYgBdXIiNmLmZWPWd0VxfE-HjhcYi0gE0hrg8q8Dk' }}
                style={styles.patientAvatar}
              />
            </View>
            <View style={styles.patientInfo}>
              <Text style={styles.cardEyebrow}>PACIENTE</Text>
              <Text style={styles.patientName}>Mateo <Text style={styles.patientAge}>(8 meses)</Text></Text>
            </View>
          </View>

          {/* Specialty Card */}
          <View style={styles.specialtyCard}>
            <Text style={styles.specialtyEyebrow}>ESPECIALIDAD</Text>
            <Text style={styles.specialtyTitle}>Pediatría de Control</Text>
          </View>
        </View>

        {/* DateTime & Doctor Details */}
        <View style={styles.dateTimeContainer}>
          <View style={styles.infoBoxRow}>
            {/* Date Time */}
            <View style={styles.infoBox}>
              <View style={[styles.iconWrapper, { backgroundColor: '#ffdf93' }]}>
                <Ionicons name="calendar" size={24} color="#503d00" />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoSubtitle}>Viernes, 24 de Octubre</Text>
                <Text style={styles.infoTitle}>10:30 AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBoxRow}>
            {/* Specialist */}
            <View style={styles.infoBox}>
              <View style={[styles.iconWrapper, { backgroundColor: '#ffdbc9' }]}>
                <Ionicons name="medkit" size={24} color="#612900" />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoSubtitle}>Especialista</Text>
                <Text style={styles.infoTitle}>Dra. Elena Quiroga</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <View style={styles.locationHeader}>
            <View style={styles.locationHeaderLeft}>
              <Ionicons name="location" size={24} color={Colors.light.primary} />
              <Text style={styles.locationTitle}>Ubicación</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.linkText}>Abrir en Mapas</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.locationSubtitle}>Centro Tani - Sede Principal</Text>
          <Text style={styles.locationAddress}>Av. Salaverry 1234, Jesús María</Text>
          
          <View style={styles.mapContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnzuXVTnVXmvPhSp3GaolpV4WNsN-YLqEodQecZ9C8PZEqt0ZLnUfdqWd0qFg-jpaFiemsMYjryjEO6xYbkIAP9MxvkmKxaTlcLNK_FG2NRgT2UJqRP2SJ41bhSfPe3UH6NC8r-w5JJPCDQ2BTo1LIWVRaLy-jChNAjO8_20ECqhfEJc7HIulXQHlNERyLl0EWMmi1RnTSmlscAe66Z7DPmuFtnf5wL_luCfFdVPJK9szbAB1SHEDugwP1haSRKa-HPVtJ5-5xCVA' }}
              style={styles.mapImage}
            />
            <View style={styles.mapOverlay} />
          </View>
        </View>

        {/* Preparation Instructions */}
        <View style={styles.preparationContainer}>
          <Text style={styles.sectionHeading}>Preparación</Text>
          
          <View style={styles.prepItem}>
            <View style={styles.prepIconBox}>
              <Ionicons name="card-outline" size={20} color={Colors.light.textSecondary} />
            </View>
            <Text style={styles.prepText}>Traer carnet físico</Text>
          </View>

          <View style={styles.prepItem}>
            <View style={styles.prepIconBox}>
              <Ionicons name="time-outline" size={20} color={Colors.light.textSecondary} />
            </View>
            <Text style={styles.prepText}>Llegar 15 min antes</Text>
          </View>

          <View style={styles.prepItem}>
            <View style={styles.prepIconBox}>
              <Ionicons name="shirt-outline" size={20} color={Colors.light.textSecondary} />
            </View>
            <Text style={styles.prepText}>Vestimenta cómoda para el bebé</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Confirmar Asistencia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Reprogramar o Cancelar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    backgroundColor: '#Fbf9f8',
    ...Platform.select({
      ios: { zIndex: 10 },
      android: { elevation: 10 }
    })
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    borderRadius: 20,
    backgroundColor: '#eae8e7',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.primary,
    marginLeft: 12,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  heroSection: {
    marginBottom: 24,
  },
  heroLabel: {
    color: Colors.light.primary,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.light.text,
    lineHeight: 40,
  },
  gridContainer: {
    gap: 16,
    marginBottom: 32,
  },
  patientCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  patientAvatarBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#9df3d7',
    overflow: 'hidden',
  },
  patientAvatar: {
    width: '100%',
    height: '100%',
  },
  patientInfo: {
    flex: 1,
  },
  cardEyebrow: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.light.textSecondary,
    letterSpacing: 1,
    marginBottom: 4,
  },
  patientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  patientAge: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.textSecondary,
  },
  specialtyCard: {
    backgroundColor: Colors.light.primary,
    padding: 24,
    borderRadius: 24,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  specialtyEyebrow: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 4,
  },
  specialtyTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dateTimeContainer: {
    backgroundColor: '#f5f3f3',
    borderRadius: 28,
    padding: 4,
    gap: 4,
    marginBottom: 32,
  },
  infoBoxRow: {},
  infoBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconWrapper: {
    padding: 12,
    borderRadius: 16,
  },
  infoTextWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  infoSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.textSecondary,
    marginBottom: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.text,
  },
  locationContainer: {
    backgroundColor: '#FFF',
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    marginBottom: 40,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  locationHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  linkText: {
    color: Colors.light.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  locationSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.light.textSecondary,
    paddingHorizontal: 24,
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: Colors.light.text,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  mapContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
    backgroundColor: '#eae8e7',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 105, 83, 0.1)',
  },
  preparationContainer: {
    marginBottom: 40,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 16,
  },
  prepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
  },
  prepIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eae8e7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prepText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
  },
  actionsContainer: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 20,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: Colors.light.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  }
});