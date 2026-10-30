# 🌈 Curso de Inglés Visual (A1 → C2)

Aplicación web de una sola página (HTML + CSS + JavaScript *vanilla*, sin frameworks) para aprender inglés desde **Básico (A1)** hasta **Experto (C2)**, diseñada especialmente para **aprendices visuales**. La interfaz está en español y el contenido de aprendizaje en inglés.

## 📚 Niveles / módulos

| # | Módulo | MCER | Temas principales |
|---|--------|------|-------------------|
| 1 | 🌱 Básico | A1 | Saludos, alfabeto y números, verbo *to be*, artículos *a/an/the*, vocabulario (familia, colores, comida), preguntas *Wh-* |
| 2 | 🌿 Elemental | A2 | Presente simple vs continuo, pasado simple (regular/irregular), comparativos y superlativos, *can/must/should*, contables/incontables, situaciones cotidianas |
| 3 | 🌳 Intermedio | B1 | Present perfect, past continuous, formas de futuro, condicionales 0 y 1, oraciones de relativo, phrasal verbs y opiniones |
| 4 | 🚀 Intermedio alto | B2 | Condicionales 2 y 3, voz pasiva, estilo indirecto, *wish / if only*, gerundios e infinitivos, conectores y artículos avanzados |
| 5 | 🏔️ Avanzado | C1 | Inversión, *cleft sentences*, condicionales mixtos, nominalización, phrasal verbs avanzados y modismos, registro formal/informal |
| 6 | 👑 Experto | C2 | Matices gramaticales y subjuntivo, escritura académica, matices de los modales, marcadores discursivos avanzados, colocaciones, estilo |

## ✨ Cada módulo incluye

- 📚 **Aprender**: explicaciones visuales con tarjetas, emojis, tablas de conjugación, diagramas ASCII y mapas mentales; ejemplos en inglés con traducción al español.
- ✍️ **Escritura**: escribes frases y la app las evalúa al instante (palabras y estructuras clave, longitud, mayúsculas y puntuación) con retroalimentación motivadora.
- 🎧 **Escuchar**: diálogo leído con síntesis de voz del navegador (velocidad normal y 🐢 lenta), preguntas de comprensión y dictado calificados automáticamente.
- 🎤 **Hablar**: escuchas el modelo, lo repites al micrófono y la app compara tu transcripción con la frase objetivo (nota de pronunciación/fluidez y palabras en rojo/verde). Si tu navegador no soporta reconocimiento de voz o no das permiso al micrófono, puedes escribir la frase como alternativa.
- 📝 **Quiz final**: 12 preguntas de opción múltiple con puntuación, estrellas y explicación por pregunta.
- 🎯 **Plan de refuerzo**: la app detecta tus áreas débiles (quiz, escucha, pronunciación, escritura pendiente) y las preguntas que más fallas, y te propone repasarlas.

## 💾 Progreso

Todo se guarda en el `localStorage` de tu navegador: nivel y pestaña actual, temas completados, ejercicios de escritura, puntuaciones de quiz, escucha y habla, y preguntas falladas. El botón **↻ Actualizar** recarga la última versión de la app (evita caché, útil en iPhone como app web) **sin borrar tu progreso**. Para empezar de cero usa “Reiniciar progreso” al pie de página.

## ▶️ Cómo usarlo localmente

1. Clona o descarga el repositorio: `git clone https://github.com/robchvz97/curso-ingles-visual.git`
2. Abre `index.html` en tu navegador (doble clic).
   - Para usar el micrófono es mejor servirlo por `http://localhost`: `python3 -m http.server 8000` y abre `http://localhost:8000`.
3. Recomendado: Chrome, Edge o Safari (iPhone/iPad) para voz y reconocimiento de voz.

## 🌐 Publicar con GitHub Pages

1. En GitHub ve a **Settings → Pages**.
2. En *Build and deployment* elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**.
3. Guarda; en unos minutos estará en `https://robchvz97.github.io/curso-ingles-visual/`.

> En iPhone: abre la URL en Safari → Compartir → “Añadir a pantalla de inicio”. GitHub Pages cachea los archivos unos minutos; si no ves los cambios, pulsa **↻ Actualizar**.

## 🗂️ Archivos

- `index.html` – estructura de la página
- `styles.css` – estilos visuales y responsive
- `app.js` – navegación, progreso, evaluación de escritura, escucha, habla y quizzes
- `data.js` – contenido de los 6 módulos (temas, escritura, quizzes, diálogos de escucha, dictados y frases para hablar)
