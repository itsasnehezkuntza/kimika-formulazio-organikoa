# KIMIKA · 2. BATXILERGOA / 2.º BACHILLERATO

Web educativa interactiva de Química para 2.º de Bachillerato (preparación PAU Euskadi y general), en euskera y castellano.

## Qué incluye

- **Propietate Periodikoak / Propiedades Periódicas:**
  - Laboratorio interactivo con visualización atómica SVG en la misma escala (corteza de Bohr, núcleos con Z, distribución de electrones).
  - 4 propiedades fundamentales: Radio atómico, 1.ª energía de ionización, Afinidad electrónica y Electronegatividad de Pauling.
  - Simulaciones animadas de ionización ($+EI_1$), afinidad electrónica ($+AE$) y enlace covalente/polar con desplazamiento de nube y densidades de carga parcial ($\delta^+ / \delta^-$).
  - Motor de justificación química rigurosa para PAU basado en capas ($n$), apantallamiento ($S$) y carga nuclear efectiva ($Z_{\text{ef}} = Z - S$).
  - Detección y explicación detallada de excepciones clave de examen (Be vs B, N vs O, Cl vs F, Mg vs Al, P vs S, enlaces con $\Delta EN \ge 1,7$).
  - Tabla periódica interactiva (periodos 1 a 4) con familias coloreadas para seleccionar y comparar cualquier pareja de elementos.
  - Modo bilingüe instantáneo (EU / ES) integrado en la barra superior.
- **Kimika Organikoa:**
  - Biblioteca didáctica completa de formulación y nomenclatura orgánica para 2.º de Bachillerato.
  - Secciones: Hasiera, Oinarriak (loturak, formulak, kateak, adarrak), Konposatuen atlasa, Lehentasunak, Izenetik formulara, Formulatik izenera y Laburpena.
- **Praktikatu:**
  - Ejercicios didácticos por niveles con corrección inmediata, pistas y explicaciones.
- **Diseño Editorial «Cuaderno de Química»:**
  - Estilo limpio sobre papel cálido milimetrado (`#FAF8F4`), tipografía de alta legibilidad (`Poppins`, `Plus Jakarta Sans`, `Newsreader`), accesible y con control de movimiento reducido.

## Estructura

```
index.html           Punto de entrada de GitHub Pages
styles.css           Estilos globales y sistema editorial de base
kontsultatu.css      Sistema editorial «Cuaderno de Química» para Kontsultatu y Txuletarioa
periodikoak.css      Estilos del laboratorio interactivo de propiedades periódicas
app.js               Navegación global, enrutamiento por pestañas y selector bilingüe
kontsultatu.js       Biblioteca didáctica de química orgánica, diagramas SVG y cajón
periodikoak.js       Motor de datos, gráficos SVG y razonamiento químico (EU/ES)
kimika-data.js       Datos químicos y moléculas de química orgánica
assets/              Ilustraciones pedagógicas
.nojekyll             Desactiva la compilación Jekyll de GitHub Pages
publicar.sh           Script de sincronización y publicación para Linux / macOS
zerbitzaria.sh        Script para lanzar el servidor local de desarrollo en Linux / macOS
publicar.bat / .ps1   Scripts de sincronización y publicación para Windows
README.md             Este archivo
```

## Modificar y desarrollar

Esta web es **estática**: no necesita servidor propio, base de datos, API ni un framework. En desarrollo, usa un servidor local desde la carpeta del proyecto:

**En Linux / macOS:**
```bash
./zerbitzaria.sh
```

**O directamente con Python:**
```sh
python3 -m http.server 8000
```

Abre `http://localhost:8000/` en tu navegador.

### Publicación y sincronización

Para subir cambios al repositorio privado de desarrollo y publicarlos automáticamente en la web de los alumnos (GitHub Pages):

- **En Linux / macOS:**
  ```bash
  ./publicar.sh "Mensaje del commit opcional"
  ```
- **En Windows:**
  Doble clic en `publicar.bat` o desde PowerShell `./publicar.ps1 "Mensaje"`.

### Notas importantes

- **Poppins** se carga desde Google Fonts; sin Internet se utiliza la alternativa configurada.
- El progreso y los ejercicios realizados se guardan localmente en el navegador del alumno. **No hay cuentas, sincronización entre dispositivos ni recogida centralizada de datos.**
- Github Pages publica una web **accesible públicamente**: no subas perfiles de alumnos, correcciones, nombres, fotos privadas ni contenidos con información sensible.
- Kora está almacenada como cinco imágenes PNG separadas en `assets/`. Sus apariciones se gestionan desde `app.js`; no sustituyas las imágenes por iconos.
- Si un navegador bloquea la importación de módulos al abrir el HTML como archivo, utiliza el servidor local indicado arriba o GitHub Pages.
