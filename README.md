# 🧠 Simulador Exam Databricks Certified Generative AI Engineer Associate

Simulador de examen **bilingüe** (español/inglés) con +92 preguntas reales de ExamTopics para prepararte para la certificación **Databricks Certified Generative AI Engineer Associate**.

## 🎯 Características

- ✅ **Preguntas reales** del banco ExamTopics (92+ preguntas)
- 🌍 **Bilingüe**: Español + Inglés con selector de idioma
- 📚 **3 modos de estudio**:
  - 📖 **Modo Estudio**: Todas las preguntas con feedback instantáneo
  - ⏱️ **Modo Examen**: 45 preguntas en 90 minutos con cronómetro (como el real)
  - 🔁 **Repaso de Falladas**: Solo las preguntas que erraste
- 💾 **Progreso persistente**: Se guarda automáticamente en localStorage
- 📊 **Métricas en tiempo real**: Preguntas respondidas, falladas, porcentaje
- 🎨 **Interfaz premium**: Dark mode, animaciones suave, diseño profesional
- ♾️ **Responsivo**: Funciona en desktop, tablet y móvil

## 📋 Requisitos del Examen Real

| Aspecto | Detalle |
|---------|---------|
| **Preguntas** | 45 preguntas de opción múltiple/selección múltiple |
| **Tiempo** | 90 minutos |
| **Tarifa** | $200 USD |
| **Formato** | Online Proctored (Kryterion Secure Browser) |
| **Validez** | 2 años |
| **Recertificación** | Cada 2 años |

### Requisitos de Hardware

- **Espacio**: Mínimo 50 MB disponibles
- **Resolución**: 1024 × 768 o superior
- **Webcam + Micrófono**: Requeridos (USB si es externo)
- **Teclado**: Inglés (QWERTY)
- **⚠️ NO máquinas virtuales**

### Requisitos de Internet

- **Descarga**: ≥ 1.0 Mbps
- **Carga**: ≥ 1.0 Mbps
- **Ping**: < 200ms
- **Jitter**: < 50ms

**Verificar antes**: https://www.kryterion.com/systemcheck/

### Sistemas Operativos

- **Windows**: 10, 11
- **macOS**: Monterey, Ventura, Sonoma, Sequoia
- **Chromebook**: Versión actual de Chrome (con lista oficial de Google)

## 🚀 Cómo Usar

### Opción 1: En el navegador (sin instalar nada)

1. Descargá los 2 archivos:
   - `simulador-genai-bilingue.html`
   - `qdata-genai.js`

2. Ponelos en la **misma carpeta**

3. Hacé doble clic en el HTML para abrir en tu navegador

4. ¡Empezá a estudiar!

### Opción 2: En tu propio servidor/sitio

```bash
# Clonalo o descargá el repo
git clone https://github.com/tu-usuario/databricks-genai-simulator
cd databricks-genai-simulator

# Levantá un servidor local (Python)
python -m http.server 8000

# O con Node.js
npx http-server

# Abrí http://localhost:8000 en el navegador
```

### Opción 3: GitHub Pages

1. Forkea este repo
2. Habilitá GitHub Pages en Settings
3. El simulador estará en `https://tu-usuario.github.io/databricks-genai-simulator`

## 🧬 Estructura del Proyecto

```
.
├── simulador-genai-bilingue.html    # App principal (HTML + CSS + JS)
├── qdata-genai.js                   # Base de datos de preguntas
├── exam-requirements.md              # Detalles de requisitos
└── README.md                         # Este archivo
```

## 📊 Estructura de una Pregunta (qdata-genai.js)

```javascript
{
  id: 1,                              // ID único
  question: `Texto en español`,       // Pregunta en español
  questionEn: `Text in English`,      // Pregunta en inglés
  options: [                          // Opciones A, B, C, D...
    {k: "A", html: `Opción A`, htmlEn: `Option A`},
    {k: "B", html: `Opción B`, htmlEn: `Option B`},
    // ...
  ],
  correct: "A",                       // Respuesta correcta
  voted: "A",                         // Más votada por comunidad
  explanation: `Explicación`,         // En español
  explanationEn: `Explanation`        // En inglés
}
```

## 💡 Consejos para Aprobar

1. **Usa los 3 modos**: Estudio → Examen simulado → Repaso de falladas
2. **Lee la documentación oficial**: Descargá la [guía oficial de Databricks](https://databricks.com/certification)
3. **Entiende los conceptos**: No solo memorices respuestas
4. **Practica RAG**: Vector Search, embeddings, Model Serving
5. **Conoce MLflow + Mosaic**: Para ciclo de vida de soluciones
6. **Repasá Unity Catalog**: Gobernanza de datos en Databricks

## 📚 Topics Clave del Examen

- Fundamentos de GenAI y LLMs
- **RAG** (Retrieval-Augmented Generation)
- **Vector Search** en Databricks
- **Model Serving** y deployments
- **MLflow** para ML Ops
- **Unity Catalog** para gobernanza
- Prompting y few-shot learning
- Evaluación de respuestas
- Seguridad y responsabilidad en IA

## 🔧 Customización

### Cambiar idioma por defecto

En `simulador-genai-bilingue.html`, al final:

```javascript
const savedLang = localStorage.getItem('examLang') || 'es';  // Cambiá 'es' a 'en'
```

### Agregar más preguntas

Editá `qdata-genai.js` y agregá más objetos al array `EXAM_QUESTIONS`:

```javascript
window.EXAM_QUESTIONS = [
  { id: 1, question: '...', ... },
  { id: 2, question: '...', ... },
  // Agregá más
];
```

### Cambiar colores (dark mode)

En el `<style>` del HTML, modificá las CSS variables:

```css
:root{
  --accent: #ff3621;    /* Naranja Databricks */
  --accent2: #2563eb;   /* Azul */
  --ok: #22c55e;        /* Verde (correcto) */
  --bad: #ef4444;       /* Rojo (incorrecto) */
  /* ... más variables */
}
```

## 📝 Licencia

Este proyecto usa preguntas de **ExamTopics** como referencia educativa. Respetá los términos de servicio de ExamTopics.

## 🤝 Contribuciones

¿Encontraste un error? ¿Tenés mejores explicaciones?

1. Fork este repo
2. Crea una rama: `git checkout -b fix/pregunta-123`
3. Commitea: `git commit -m "Fix: explicación pregunta 123"`
4. Push: `git push origin fix/pregunta-123`
5. Abrí un Pull Request

## ⭐ Créditos

- Preguntas: **ExamTopics**
- Databricks: Documentación oficial
- Desarrollo: Community-driven

---

## 🎓 Última Actualización

Este simulador se actualiza regularmente con nuevas preguntas y características. Verificá la fecha de la guía oficial de Databricks (v3.0 - Marzo 2026) para asegurarte de estudiar la versión más reciente.

**Buena suerte en tu examen! 🚀**

---

**¿Preguntas?** Abrí un issue o contactame en [tu-email/GitHub].
