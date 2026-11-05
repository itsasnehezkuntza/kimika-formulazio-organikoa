# KIMIKA · FORMULAZIO ORGANIKOA

Web educativa de formulación y nomenclatura orgánica para 2.º de Bachillerato (PAU Euskadi), en euskera.

## Qué incluye

- **Ikasi:** recorrido gamificado, progreso y acompañamiento de Kora.
- **Kontsultatu:** Hasiera, Oinarriak, Konposatuen familiak, Izenetik formulara, Formulatik izenera y Laburpena.
- **Praktikatu:** ejercicios por niveles, historial local, corrección y explicación.
- **Kora:** cinco ilustraciones originales con estados de bienvenida, explicación, aviso, duda y celebración.
- **Responsive:** pensado para ordenador, tablet y móvil.
- Esta edición parte de la **versión KIMIKA 3.8**; los ejercicios didácticos no se presentan como enunciados PAU oficiales.

## Publicar en GitHub Pages

1. En GitHub, crea un **repositorio nuevo** llamado `kimika-formulazio-organikoa`. Para utilizar Pages con GitHub Free, el repositorio debe ser **público**.
2. En el repositorio, entra en **Add file > Upload files**. Sube `index.html`, `styles.css`, `kontsultatu.css`, `app.js`, `kontsultatu.js`, `kimika-data.js`, `.nojekyll`, `README.md` y la carpeta `assets/`, conservando sus nombres y rutas. Comprueba que `index.html` está en la raíz del repositorio. Haz el commit en la rama `main`.
3. En **Settings > Pages**, en **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama **main** y la carpeta **/(root)**, y pulsa **Save**.
5. Cuando termine la publicación, abre **Settings > Pages > Visit site**.

La URL tendrá normalmente la forma:

`https://TU_USUARIO.github.io/kimika-formulazio-organikoa/`

El nombre del repositorio y de la cuenta determina la dirección exacta. No se considera publicado hasta que GitHub Pages indique que el sitio está activo.

## Estructura

```
index.html           Punto de entrada de GitHub Pages
styles.css           Estilos globales, Ikasi y Praktikatu (Poppins con Google Fonts)
kontsultatu.css      Sistema editorial «Cuaderno Editorial de Química» para Kontsultatu y Txuletarioa
app.js               Navegación global, recorrido Ikasi y ejercicios Praktikatu
kontsultatu.js       Biblioteca didáctica Kontsultatu, diagramas químicos SVG y cajón de consulta rápida
kimika-data.js       Datos químicos y explicaciones en euskera separados de la lógica (fácil edición)
assets/
  kora-welcome.png
  kora-explain.png
  kora-important.png
  kora-think.png
  kora-success.png
.nojekyll             Desactiva la compilación Jekyll de GitHub Pages
README.md             Este archivo
```

## Modificar y desarrollar

Esta web es **estática**: no necesita servidor propio, base de datos, API ni un framework. En desarrollo, usa un servidor local desde la carpeta del proyecto:

```sh
python -m http.server 8000
```

Abre `http://localhost:8000/` en tu navegador.

Los cambios subidos a `main` se publicarán automáticamente tras configurar GitHub Pages una vez.

### Notas importantes

- **Poppins** se carga desde Google Fonts; sin Internet se utiliza la alternativa configurada.
- El progreso y los ejercicios realizados se guardan localmente en el navegador del alumno. **No hay cuentas, sincronización entre dispositivos ni recogida centralizada de datos.**
- Github Pages publica una web **accesible públicamente**: no subas perfiles de alumnos, correcciones, nombres, fotos privadas ni contenidos con información sensible.
- Kora está almacenada como cinco imágenes PNG separadas en `assets/`. Sus apariciones se gestionan desde `app.js`; no sustituyas las imágenes por iconos.
- Si un navegador bloquea la importación de módulos al abrir el HTML como archivo, utiliza el servidor local indicado arriba o GitHub Pages.
