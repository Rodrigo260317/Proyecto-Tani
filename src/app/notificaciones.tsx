import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NotificacionesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
        </TouchableOpacity>
        
        <View style={styles.headerProfile}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('@/assets/images/Tani user icon.png')} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.headerName}>(Apellido)</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Notificaciones</Text>
          <TouchableOpacity>
            <Text style={styles.markReadText}>Marcar todas como leídas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          
          {/* Unread 1 */}
          <View style={styles.notificationCard}>
            <View style={styles.unreadIndicator} />
            <View style={[styles.iconBox, { backgroundColor: 'rgba(73, 159, 134, 0.1)' }]}>
              <Ionicons name="calendar" size={24} color={Colors.light.primary} />
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>Cita Pediátrica Mañana</Text>
                <Text style={styles.notificationTime}>Hace 10 min</Text>
              </View>
              <Text style={styles.notificationText}>
                Recuerda tu cita con la Dra. Méndez para la revisión de los 6 meses de Mateo a las 10:00 AM.
              </Text>
            </View>
          </View>

          {/* Unread 2 */}
          <View style={styles.notificationCard}>
            <View style={styles.unreadIndicator} />
            <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 127, 39, 0.1)' }]}>
              <Ionicons name="medical" size={24} color="#ff7f27" />
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>Vacunación Próxima</Text>
                <Text style={styles.notificationTime}>Hace 2 hours</Text>
              </View>
              <Text style={styles.notificationText}>
                Es hora de agendar la vacuna contra el rotavirus. El centro de salud local tiene disponibilidad esta semana.
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>AYER</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Read 1 */}
          <View style={[styles.notificationCard, styles.notificationRead]}>
            <View style={[styles.iconBox, { backgroundColor: '#eae8e7' }]}>
              <Ionicons name="heart" size={24} color={Colors.light.textSecondary} />
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitleRead}>Tip de Nutrición</Text>
                <Text style={styles.notificationTime}>Ayer</Text>
              </View>
              <Text style={styles.notificationText}>
                Conoce nuevas recetas ricas en hierro ideales para el inicio de la alimentación complementaria.
              </Text>
            </View>
          </View>

          {/* Read 2 */}
          <View style={[styles.notificationCard, styles.notificationRead]}>
            <View style={[styles.iconBox, { backgroundColor: '#eae8e7' }]}>
              <Ionicons name="megaphone" size={24} color={Colors.light.textSecondary} />
            </View>
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitleRead}>Nueva Charla Comunitaria</Text>
                <Text style={styles.notificationTime}>Ayer</Text>
              </View>
              <Text style={styles.notificationText}>
                Únete a nuestra sesión virtual sobre desarrollo temprano infantil este sábado. Registro gratuito.
              </Text>
            </View>
          </View>

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
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'rgba(251, 249, 248, 0.9)',
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#eae8e7',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.light.text,
    letterSpacing: -0.5,
  },
  markReadText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.primary,
    marginBottom: 6,
  },
  listContainer: {
    gap: 16,
  },
  notificationCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  notificationRead: {
    backgroundColor: '#fbf9f8',
    opacity: 0.75,
    shadowOpacity: 0,
    elevation: 0,
  },
  unreadIndicator: {
    position: 'absolute',
    left: 12,
    top: 28,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.primary,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
    paddingTop: 4,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
    flex: 1,
  },
  notificationTitleRead: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
    flex: 1,
  },
  notificationTime: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.light.textSecondary,
    marginLeft: 8,
  },
  notificationText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#eae8e7',
  },
  dividerText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.light.textSecondary,
    marginHorizontal: 16,
    letterSpacing: 1,
  },
});