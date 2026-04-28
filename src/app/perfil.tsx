import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, ScrollView, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PROFILE_IMG = require('@/assets/images/Tani user icon.png');

export default function PerfilScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [biometric, setBiometric] = React.useState(true);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.header}>
        <View style={s.headerL}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#006953" />
          </TouchableOpacity>
          <Text style={s.headerTitle}>Profile</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#006953" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <View style={s.avatarRow}>
          <View style={s.avatarWrap}>
            <Image source={PROFILE_IMG} style={s.avatar} />
            <TouchableOpacity style={s.camBtn}>
              <Ionicons name="camera" size={14} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 8 }}>
            <Text style={s.userName}>Mariana (Apellido)</Text>
            <Text style={s.userId}>ID: TN-88294</Text>
          </View>
        </View>

        {/* Info Personal */}
        <View style={s.card}>
          <View style={s.cardHead}><Ionicons name="person-circle" size={22} color="#006953" /><Text style={s.cardTitle}>Información Personal</Text></View>
          {[['NOMBRE COMPLETO','Mariana Sofia Garcia'],['EMAIL','mariana.g@tani.app'],['TELÉFONO','+54 9 11 2345-6789']].map(([l,v])=>(
            <View key={l} style={{ gap: 3 }}>
              <Text style={s.infoLabel}>{l}</Text>
              <Text style={s.infoValue}>{v}</Text>
            </View>
          ))}
        </View>

        {/* Preferencias */}
        <View style={s.card}>
          <View style={s.cardHead}><Ionicons name="options" size={22} color="#006953" /><Text style={s.cardTitle}>Preferencias</Text></View>
          <View style={s.row}><View style={s.rowL}><Ionicons name="notifications-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Notificaciones</Text></View><Switch value={notifications} onValueChange={setNotifications} trackColor={{ false:'#eae8e7', true:'#006953' }} thumbColor="#FFF" /></View>
          <View style={s.row}><View style={s.rowL}><Ionicons name="moon-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Modo Oscuro</Text></View><Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false:'#eae8e7', true:'#006953' }} thumbColor="#FFF" /></View>
        </View>

        {/* Seguridad */}
        <View style={s.card}>
          <View style={s.cardHead}><Ionicons name="shield-checkmark" size={22} color="#006953" /><Text style={s.cardTitle}>Seguridad</Text></View>
          <TouchableOpacity style={s.row}><View style={s.rowL}><Ionicons name="lock-open-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Cambiar Contraseña</Text></View><Ionicons name="chevron-forward" size={18} color="#bec9c3" /></TouchableOpacity>
          <View style={s.row}><View style={s.rowL}><Ionicons name="finger-print-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Ingreso Biométrico</Text></View><Switch value={biometric} onValueChange={setBiometric} trackColor={{ false:'#eae8e7', true:'#006953' }} thumbColor="#FFF" /></View>
        </View>

        {/* Legal */}
        <View style={[s.card,{backgroundColor:'#f5f3f3'}]}>
          <View style={s.cardHead}><Ionicons name="information-circle" size={22} color="#006953" /><Text style={s.cardTitle}>Ayuda y Legal</Text></View>
          <TouchableOpacity style={s.row} onPress={() => router.push('/terminos')}><View style={s.rowL}><Ionicons name="document-text-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Términos y Condiciones</Text></View></TouchableOpacity>
          <TouchableOpacity style={s.row} onPress={() => router.push('/politica')}><View style={s.rowL}><Ionicons name="shield-outline" size={19} color="#3e4945" /><Text style={s.rowLabel}>Política de Privacidad</Text></View></TouchableOpacity>
        </View>

        <TouchableOpacity style={s.logoutBtn} onPress={() => router.replace('/(auth)/login')}>
          <Ionicons name="log-out-outline" size={22} color="#ba1a1a" />
          <Text style={s.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex:1, backgroundColor:'#fbf9f8' },
  header: { flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:24, paddingVertical:14, backgroundColor:'#fbf9f8' },
  headerL: { flexDirection:'row', alignItems:'center', gap:16 },
  headerTitle: { fontSize:18, fontWeight:'700', color:'#006953' },
  content: { paddingHorizontal:24, paddingTop:12 },
  avatarRow: { flexDirection:'row', alignItems:'flex-end', gap:20, marginBottom:28 },
  avatarWrap: { width:120, height:120, borderRadius:60, overflow:'hidden', borderWidth:4, borderColor:'#FFF', shadowColor:'#000', shadowOffset:{width:0,height:6}, shadowOpacity:0.12, shadowRadius:12, elevation:6 },
  avatar: { width:'100%', height:'100%' },
  camBtn: { position:'absolute', bottom:4, right:4, width:32, height:32, borderRadius:16, backgroundColor:'#006953', justifyContent:'center', alignItems:'center' },
  userName: { fontSize:28, fontWeight:'800', color:'#1b1c1c', letterSpacing:-0.5 },
  userId: { fontSize:14, fontWeight:'500', color:'#6e7a74', marginTop:4 },
  card: { backgroundColor:'#FFF', borderRadius:14, padding:24, marginBottom:16, borderWidth:1, borderColor:'rgba(190,201,195,0.1)', gap:16 },
  cardHead: { flexDirection:'row', alignItems:'center', gap:8 },
  cardTitle: { fontSize:17, fontWeight:'700', color:'#1b1c1c' },
  infoLabel: { fontSize:10, fontWeight:'700', color:'#6e7a74', textTransform:'uppercase', letterSpacing:1.5 },
  infoValue: { fontSize:15, fontWeight:'500', color:'#1b1c1c' },
  row: { flexDirection:'row', alignItems:'center', justifyContent:'space-between' },
  rowL: { flexDirection:'row', alignItems:'center', gap:12 },
  rowLabel: { fontSize:15, fontWeight:'500', color:'#1b1c1c' },
  logoutBtn: { flexDirection:'row', alignItems:'center', justifyContent:'center', gap:12, paddingVertical:16, paddingHorizontal:48, borderRadius:14, borderWidth:2, borderColor:'rgba(186,26,26,0.1)', alignSelf:'center' },
  logoutText: { fontSize:16, fontWeight:'700', color:'#ba1a1a' },
});