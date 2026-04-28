# Evidencia: Resolución de Conflictos (Merge Conflict)

**Contexto del Conflicto:**
Durante el flujo de trabajo colaborativo, se generó un conflicto intencional en la vista de la aplicación (Issue #6). La rama `feature/estilos-header` (Dev 3 - Johan) colisionó con los cambios de emergencia de la rama `hotfix/arreglo-texto-login` (Dev 2 - Alfredo) que ya habían sido integrados previamente a `develop`.

**Archivos en Conflicto:**
- `header.html` (Componente de la vista).

**Proceso de Resolución:**
1. El desarrollador Johan ejecutó la actualización local de la rama base:
   `git fetch origin`
   `git merge origin/develop`
2. Al detectarse la colisión de código, se procedió a abrir el archivo afectado en el editor Visual Studio Code.
3. VS Code resaltó el bloque en conflicto (Current Change vs Incoming Change). Se procedió a limpiar las marcas de Git (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Se decidió conservar una combinación manual, manteniendo la clase del botón azul (`btn-blue`) y el texto corregido del hotfix.
5. Se guardó el archivo y se finalizó la resolución ejecutando:
   `git add .`
   `git commit -m "fix: resuelve colision de merge (Closes #6)"`
   `git push origin feature/estilos-header`

**Resultado:**
La colisión fue resuelta localmente, permitiendo que el Pull Request en GitHub se actualizara a color verde para ser auditado y fusionado por el Dev 4.