import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Switch, Image } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AgendarCitaScreen() {
  const router = useRouter();
  const [repeat, setRepeat] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
          </TouchableOpacity>
          <View style={styles.profileBadge}>
            <Image 
              source={require('@/assets/images/Tani user icon.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>(Apellido)</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Agendar Cita Externa</Text>
          <Text style={styles.pageSubtitle}>Registra una nueva consulta médica o terapia fuera de nuestra red principal.</Text>
        </View>

        {/* Input Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Especialidad o Sesión</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="medical-outline" size={20} color={Colors.light.textSecondary} style={styles.inputIcon} />
              <TextInput 
                style={styles.input}
                placeholder="Ej. Terapia Física, Pediatría"
                placeholderTextColor={Colors.light.textSecondary}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Establecimiento</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="business-outline" size={20} color={Colors.light.textSecondary} style={styles.inputIcon} />
              <TextInput 
                style={styles.input}
                placeholder="Nombre de la clínica o consultorio"
                placeholderTextColor={Colors.light.textSecondary}
              />
            </View>
          </View>
        </View>

        {/* Date and Time */}
        <View style={styles.rowCards}>
          <View style={styles.halfCard}>
            <View style={styles.cardHeaderRow}>
              <Ionicons name="calendar-outline" size={20} color={Colors.light.primary} />
              <Text style={styles.cardLabel}>Fecha</Text>
            </View>
            <TextInput 
              style={styles.dateInput}
              placeholder="DD/MM/AAAA" // Simple fallback for native date picker in mock
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>

          <View style={styles.halfCard}>
            <View style={styles.cardHeaderRow}>
              <Ionicons name="time-outline" size={20} color={Colors.light.primary} />
              <Text style={styles.cardLabel}>Hora</Text>
            </View>
            <TextInput 
              style={styles.dateInput}
              placeholder="HH:MM" // Simple fallback
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>
        </View>

        {/* Recurrence */}
        <View style={styles.recurrenceCard}>
          <View style={styles.recurrenceHeader}>
            <View style={styles.recurrenceLeft}>
              <View style={styles.iconCircle}>
                <Ionicons name="sync-outline" size={20} color="#763300" />
              </View>
              <View>
                <Text style={styles.recurrenceTitle}>Repetir cita</Text>
                <Text style={styles.recurrenceSubtitle}>Configura recordatorios periódicos</Text>
              </View>
            </View>
            <Switch 
              value={repeat} 
              onValueChange={setRepeat} 
              trackColor={{ false: '#e4e2e1', true: Colors.light.primary }}
              thumbColor="#FFF"
            />
          </View>

          {repeat && (
            <View style={styles.recurrenceSelector}>
              <Text style={styles.mockSelectText}>Semanalmente</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.light.textSecondary} />
            </View>
          )}
        </View>

        {/* Notes */}
        <View style={styles.notesCard}>
          <Text style={styles.inputLabel}>Notas adicionales</Text>
          <TextInput 
            style={styles.textArea}
            placeholder="Instrucciones especiales, documentos a llevar..."
            placeholderTextColor={Colors.light.textSecondary}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={() => router.back()}>
          <Ionicons name="checkmark-circle" size={24} color="#FFF" />
          <Text style={styles.fabText}>Guardar Cita</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(251, 249, 248, 0.9)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#f5f3f3',
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.primary,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  titleSection: {
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    lineHeight: 22,
  },
  cardContainer: {
    backgroundColor: '#f5f3f3',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    gap: 20,
  },
  inputGroup: {},
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eae8e7',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.light.text,
  },
  rowCards: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  halfCard: {
    flex: 1,
    backgroundColor: '#f5f3f3',
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  dateInput: {
    backgroundColor: '#eae8e7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.light.text,
  },
  recurrenceCard: {
    backgroundColor: '#f5f3f3',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  recurrenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recurrenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffdbc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recurrenceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  recurrenceSubtitle: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: 2,
  },
  recurrenceSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#eae8e7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  mockSelectText: {
    fontSize: 15,
    color: Colors.light.text,
  },
  notesCard: {
    backgroundColor: '#f5f3f3',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  textArea: {
    backgroundColor: '#eae8e7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.light.text,
    minHeight: 100,
    marginTop: 8,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 32,
    backgroundColor: 'rgba(251, 249, 248, 0.9)',
    alignItems: 'center',
  },
  fab: {
    flexDirection: 'row',
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  fabText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});