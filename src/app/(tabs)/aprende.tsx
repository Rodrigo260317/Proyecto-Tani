import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PRIMARY = '#006953';
const TEXT = '#1b1c1c';
const TEXT_SECONDARY = '#3e4945';

export default function AprendeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('@/assets/images/Tani user icon.png')} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.headerName}>(Apellido)</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color={PRIMARY} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Hitos del Desarrollo */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hitos del Desarrollo</Text>
            <TouchableOpacity onPress={() => router.push('/(aprende)/guia')}>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bentoGrid}>
            {/* Main Highlight */}
            <View style={[styles.bentoCard, styles.mainHighlight]}>
              <View style={styles.highlightIcon}>
                <Ionicons name="happy" size={24} color={PRIMARY} />
              </View>
              <Text style={styles.highlightTitle}>Mes 6: El Gran Cambio</Text>
              
              <View style={styles.checkItem}>
                <Ionicons name="checkmark-circle" size={18} color={Colors.light.primary} />
                <Text style={styles.checkText}>Se mantiene sentado solo</Text>
              </View>
              <View style={styles.checkItem}>
                <Ionicons name="checkmark-circle" size={18} color={Colors.light.primary} />
                <Text style={styles.checkText}>Inicia alimentación sólida</Text>
              </View>
              <View style={styles.checkItem}>
                <Ionicons name="radio-button-off" size={18} color={TEXT_SECONDARY} />
                <Text style={[styles.checkText, { color: TEXT_SECONDARY }]}>Reconoce su propio nombre</Text>
              </View>

              <TouchableOpacity style={styles.completeButton}>
                <Text style={styles.completeButtonText}>Completar Checkbox</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bentoRightCol}>
              {/* Sec 1 */}
              <View style={[styles.bentoSmallCard, { backgroundColor: '#fff8e1', borderColor: 'rgba(211,165,0,0.1)' }]}>
                <Ionicons name="bulb" size={28} color="#765b00" />
                <Text style={[styles.bentoSmallTag, { color: '#765b00' }]}>COGNITIVO</Text>
                <Text style={styles.bentoSmallText}>Exploración táctil activa</Text>
              </View>
              {/* Sec 2 */}
              <View style={[styles.bentoSmallCard, { backgroundColor: '#fff3e0', borderColor: 'rgba(155,69,0,0.1)', marginTop: 12 }]}>
                <Ionicons name="people" size={28} color="#9b4500" />
                <Text style={[styles.bentoSmallTag, { color: '#9b4500' }]}>SOCIAL</Text>
                <Text style={styles.bentoSmallText}>Primeros balbuceos</Text>
              </View>
            </View>
          </View>

          {/* Next Month Banner */}
          <TouchableOpacity style={styles.nextMonthBanner}>
            <View style={styles.nextMonthTextCol}>
              <Text style={styles.nextMonthTitle}>Siguiente: Mes 7</Text>
              <Text style={styles.nextMonthSubtitle}>Aparecen los primeros dientes</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Guías Rápidas Nutrición */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Guías Rápidas Nutrición</Text>
            <TouchableOpacity onPress={() => router.push('/(aprende)/guia')}>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {/* Guide 1 */}
            <TouchableOpacity style={styles.guideCard} onPress={() => router.push('/(aprende)/guia')}>
              <ImageBackground 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4J2btLI94crP8TrUktNuXNS7Gi_ktU99dW9O6vKCQNM89-470s-bpF9lYV282DZwK9HObHxkfEo2_a5upxr8YAsDDZj6-v2Icu9p_jXYbrA0FwfMwNF2u6LrgcywdZIiqvpz0PC_83_t1-aqyNob-Dd1JVEYQ2dhjO9Pxzbw85yGH0oBiSqTbN_2xP-jmexUNWaGQkZe1lkECL0Px3LSSkPNjH1Qj9wAlw_nl4FIhnop5dwNmr4CyVxzheer8IhBMEbW1XwJYJFE' }} 
                style={styles.guideImage}
              >
                <View style={styles.guideBadge}>
                  <Text style={[styles.guideBadgeText, { color: '#9b4500' }]}>RECETA MINSA</Text>
                </View>
              </ImageBackground>
              <View style={styles.guideContent}>
                <Text style={styles.guideTitle}>Papilla de Hierro y Camote</Text>
                <Text style={styles.guideDesc}>Ideal para prevenir la anemia infantil.</Text>
                <View style={styles.guideFooter}>
                  <Ionicons name="time-outline" size={14} color={PRIMARY} />
                  <Text style={styles.guideFooterText}>15 min preparación</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Guide 2 */}
            <TouchableOpacity style={styles.guideCard} onPress={() => router.push('/(aprende)/guia')}>
              <ImageBackground 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzOSbzmn_xadKosD5dYU5zDT-ykmPIk_S638r5tkE_v_34rXeESoNwxVTa2CM2l4ofSLnyF5RWmn6t3pYotLy3BSaq960ljSfc22ij1PomCIyxfcmFRkrpYO2hgLKqo4cPBNKMHlJZCYdlE3-zV8-vZjn2ScocIuVC6MlCqCe_7aWiyhazJrE5-9bUutEjU3tHYVb_U8qoNpQ3rIpJkeJQthXThyqNcU0teibkejj4vg_aLIrwCgEd8gVBwyqQMU1EgJcBb4GAJGw' }} 
                style={styles.guideImage}
              >
                <View style={styles.guideBadge}>
                  <Text style={[styles.guideBadgeText, { color: PRIMARY }]}>LACTANCIA</Text>
                </View>
              </ImageBackground>
              <View style={styles.guideContent}>
                <Text style={styles.guideTitle}>Técnicas de Agarre Correcto</Text>
                <Text style={styles.guideDesc}>Evita grietas y mejora la alimentación.</Text>
                <View style={styles.guideFooter}>
                  <Ionicons name="book-outline" size={14} color={PRIMARY} />
                  <Text style={styles.guideFooterText}>Guía de 5 pasos</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
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
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  headerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.light.primary,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.primary,
  },
  bentoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  mainHighlight: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginRight: 12,
  },
  highlightIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#e6f3ef',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 12,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkText: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 8,
    color: Colors.light.text,
  },
  completeButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  completeButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bentoRightCol: {
    width: '35%',
    justifyContent: 'space-between',
  },
  bentoSmallCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  bentoSmallTag: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginTop: 8,
    marginBottom: 4,
  },
  bentoSmallText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 16,
  },
  nextMonthBanner: {
    backgroundColor: '#f5f3f3',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  nextMonthTextCol: {
    flex: 1,
  },
  nextMonthTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  nextMonthSubtitle: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: 2,
  },
  horizontalScroll: {
    paddingBottom: 8,
  },
  guideCard: {
    width: 260,
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  guideImage: {
    height: 120,
    width: '100%',
  },
  guideBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  guideBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  guideContent: {
    padding: 16,
  },
  guideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 4,
    lineHeight: 20,
  },
  guideDesc: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginBottom: 12,
  },
  guideFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0eded',
  },
  guideFooterText: {
    fontSize: 11,
    color: Colors.light.textSecondary,
    fontWeight: '500',
    marginLeft: 6,
  },
});