# Requisitos Funcionales y No Funcionales

## 📋 Requisitos Funcionales (RF)
Lo que el sistema debe hacer y las funciones que el usuario final podrá utilizar.

RF01 - Gestión de Beneficiarios: El sistema debe permitir al personal de campo registrar, modificar y dar de baja los perfiles de las madres y los infantes atendidos por la ONG.

RF02 - Historial Clínico de Campo: El sistema debe permitir el registro y visualización cronológica de los controles de salud, peso, talla, nutrición y esquema de vacunación de cada infante.

RF03 - Soporte de Sincronización: El sistema debe permitir la captura de datos de forma local (modo offline) durante las visitas a zonas sin cobertura, y sincronizarlos automáticamente con la base de datos principal al detectar conexión a internet.

RF04 - Gestión de Controles: El sistema debe incluir una función para programar y visualizar las fechas de los próximos controles médicos o visitas domiciliarias de los beneficiarios.

RF05 - Autenticación y Roles: El sistema debe contar con un módulo de inicio de sesión que diferencie los permisos entre el Personal de Campo (solo registro/lectura) y los Administradores (acceso total a la gestión).

RF06 - Búsqueda Rápida: El sistema debe integrar un motor de búsqueda y filtros (por DNI, nombre o fecha de control) para localizar rápidamente el expediente de una familia durante una campaña.

## ⚙️ Requisitos No Funcionales (RNF)
Cómo el sistema debe comportarse, sus restricciones tecnológicas y atributos de calidad.

RNF01 - Portabilidad Tecnológica: La aplicación móvil debe estar desarrollada bajo el framework React Native utilizando el entorno de Expo, garantizando su funcionamiento nativo y compatibilidad cruzada en sistemas operativos Android e iOS.

RNF02 - Arquitectura en la Nube: El backend del sistema debe implementarse utilizando una arquitectura serverless (sin servidor) para garantizar el escalamiento automático según la demanda de la ONG y optimizar los costos operativos.

RNF03 - Diseño UI/UX y Usabilidad: La interfaz de usuario debe estar orientada a la eficiencia en campo, aplicando principios de accesibilidad, iconografía intuitiva, alto contraste y elementos de diseño limpios (como tarjetas con bordes redondeados) para facilitar la lectura bajo luz solar.

RNF04 - Seguridad y Privacidad de Datos: Toda comunicación entre la aplicación móvil y la base de datos debe estar cifrada (mediante protocolos HTTPS/SSL) para garantizar la total confidencialidad de la información médica materno-infantil.

RNF05 - Rendimiento y Tiempos de Respuesta: El sistema debe ser capaz de cargar el historial clínico de un beneficiario en un tiempo máximo de 3 segundos bajo condiciones de red 4G estables, evitando bloqueos en la interfaz.

RNF06 - Mantenibilidad y Gobierno de Código: El control de versiones del proyecto debe gestionarse estrictamente a través de GitHub utilizando la estrategia Gitflow, manteniendo políticas de protección y revisión de código obligatoria (Code Review) en las ramas main y develop.