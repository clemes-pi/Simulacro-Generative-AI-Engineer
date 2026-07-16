# 🤝 Guía de Contribución

¡Gracias por querer mejorar este simulador! Aquí te explicamos cómo contribuir.

## 📝 ¿Cómo Agregar Preguntas?

### 1. Fork & Clone

```bash
# Forkea el repo en GitHub
# Clonalo
git clone https://github.com/tu-usuario/databricks-genai-simulator
cd databricks-genai-simulator
```

### 2. Edita `qdata-genai.js`

Abre el archivo y agrega nuevas preguntas al array `EXAM_QUESTIONS`:

```javascript
window.EXAM_QUESTIONS = [
  {
    id: 93,  // Próximo ID disponible
    question: `Pregunta en español aquí...`,
    questionEn: `Question in English here...`,
    options: [
      {k: "A", html: `Opción A`, htmlEn: `Option A`},
      {k: "B", html: `Opción B`, htmlEn: `Option B`},
      {k: "C", html: `Opción C`, htmlEn: `Option C`},
      {k: "D", html: `Opción D`, htmlEn: `Option D`}
    ],
    correct: "A",        // Respuesta correcta (letra)
    voted: "A",          // Más votada por comunidad
    explanation: `Explicación detallada en español...`,
    explanationEn: `Detailed explanation in English...`
  },
  // ... más preguntas
];
```

### 3. Template Completo

```javascript
{
  id: 123,
  question: `¿Cuál es la mejor práctica para implementar RAG en Databricks?`,
  questionEn: `What is the best practice for implementing RAG in Databricks?`,
  options: [
    {k: "A", html: `Vector Search + Model Serving`, htmlEn: `Vector Search + Model Serving`},
    {k: "B", html: `Solo usar embeddings`, htmlEn: `Just use embeddings`},
    {k: "C", html: `Usar LLM sin retrieval`, htmlEn: `Use LLM without retrieval`},
    {k: "D", html: `Combinar todas las anteriores`, htmlEn: `Combine all of the above`}
  ],
  correct: "A",
  voted: "A",
  explanation: `Vector Search permite buscar documentos similares por semántica, y Model Serving permite servir el modelo para generación. Esta es la arquitectura recomendada para RAG robusto en Databricks.`,
  explanationEn: `Vector Search allows semantic document retrieval, and Model Serving provides model deployment for generation. This is the recommended architecture for robust RAG in Databricks.`
}
```

### 4. Validación

Antes de hacer push:

- ✅ IDs únicos e incrementales
- ✅ Ambos idiomas (question + questionEn)
- ✅ 4 opciones (A, B, C, D) o especificá cantidad
- ✅ Respuesta correcta válida (coincide con una letra)
- ✅ Explicación clara en ambos idiomas
- ✅ Sin errores de sintaxis JavaScript

**Test rápido**:
```bash
# Abre el HTML en el navegador
# Verifica que las preguntas cargan sin errores en consola (F12)
```

### 5. Commit & Push

```bash
git add qdata-genai.js
git commit -m "Add: 5 new GenAI questions (IDs 93-97)"
git push origin main
```

### 6. Pull Request

1. En GitHub, abrí un PR desde tu rama a `main`
2. Describí:
   - Cantidad de preguntas agregadas
   - Fuente (ExamTopics, documentación oficial, etc.)
   - Dificultad (Fácil / Medio / Difícil)

---

## 🐛 Reportar Errores

### Si encontraste una respuesta incorrecta

1. Abrí un Issue con:
   - Número de pregunta
   - Respuesta actual
   - Respuesta correcta (con fuente)
   - Explicación por qué está mal

```markdown
## Error en Pregunta #42

**Pregunta**: "¿Cuál es...?"

**Respuesta Actual**: C

**Respuesta Correcta**: B

**Razón**: Según la documentación oficial de Databricks [link], 
la respuesta correcta es B porque...

**Fuente**: https://docs.databricks.com/...
```

### Si encontraste un bug en el simulador

1. Abrí un Issue describiendo:
   - Qué sucede
   - Qué debería suceder
   - Pasos para reproducir
   - Screenshots si es posible

```markdown
## Bug: El cronómetro no funciona en modo examen

**Pasos**:
1. Abrir simulador
2. Clickear "Modo examen"
3. Configurar 45 preguntas, 90 min
4. Comenzar examen

**Esperado**: Cronómetro cuenta hacia atrás

**Actual**: Cronómetro no aparece / se congela

**Navegador**: Chrome 120 en Windows 11
```

---

## 📚 Mejorar Documentación

### README.md
Si hay secciones confusas o falta información:
1. Editá el archivo
2. Hacé el cambio claro y conciso
3. Abrí un PR

### Ejemplos
- Agregar screenshot de UI
- Mejorar explicaciones
- Agregar tabla de contenidos
- Actualizar links rotos

---

## 🎨 Mejorar la Interfaz

### CSS/Diseño
1. Editá el `<style>` en `simulador-genai-bilingue.html`
2. Testea en múltiples resoluciones
3. Asegurate compatibilidad con dark mode

**Ejemplo**:
```css
/* Cambiar color principal */
--accent: #ff3621;  /* Naranja Databricks */
```

### Funcionalidad (JavaScript)
1. Modificá las funciones en el HTML
2. Testeá en consola (F12 → Console)
3. Asegurate que localStorage sigue funcionando

**Checklist**:
- ✅ No rompe funcionalidad existente
- ✅ Funciona en múltiples navegadores
- ✅ Mobile responsive
- ✅ Accesible (ARIA labels si aplica)

---

## 🧪 Testing

### Antes de hacer PR

1. **Abre en Firefox, Chrome, Safari**
   - Verifica que todo funciona igual

2. **Modo responsivo** (F12 → Toggle device toolbar)
   - Testeá en 320px (móvil), 768px (tablet), 1366px (desktop)

3. **Consola** (F12 → Console)
   - No debe haber errores rojos
   - Warnings amarillos son OK

4. **Funcionalidad** 
   - [ ] Cargan las preguntas
   - [ ] Selector de idioma funciona
   - [ ] Modo estudio completo
   - [ ] Modo examen con cronómetro
   - [ ] Repaso de falladas
   - [ ] Guarda progreso (localStorage)

---

## 📐 Estándares de Código

### Nombres de Variables
- Usa camelCase: `currentLang`, `sessionMode`
- IDs en español: `q-text`, `q-opts`, `q-feedback`

### Comentarios
```javascript
// Comentarios claros y útiles
// ❌ Evitar: var x = 5
// ✅ Mejor: const questionId = 5
```

### Commits
```
✅ "Add: 10 new questions about Vector Search"
✅ "Fix: timer bug in exam mode"
✅ "Docs: update README with new features"

❌ "fix"
❌ "asdf"
❌ "updated stuff"
```

---

## 🎯 Objetivos de Contribución

### Corto Plazo (próximas semanas)
- [ ] Agregar todas las 92+ preguntas de ExamTopics
- [ ] Verificar respuestas con documentación oficial
- [ ] Mejorar explicaciones en ambos idiomas

### Mediano Plazo (próximos meses)
- [ ] Agregar búsqueda y filtrado por topic
- [ ] Estadísticas detalladas (por topic, dificultad)
- [ ] Exportar resultados a PDF
- [ ] Dark mode vs Light mode toggle

### Largo Plazo (próximos trimestres)
- [ ] Spaced repetition algoritmo
- [ ] Integracion con Anki
- [ ] Colaboración en tiempo real
- [ ] Base de datos en el backend

---

## 💬 Comunicación

### Dudas sobre una pregunta?
- Abrí un Issue con `[QUESTION]` en el título
- Incluí el número de pregunta y fuente

### Idea de feature?
- Abrí un Issue con `[FEATURE REQUEST]`
- Describí el problema que resuelve
- Ejemplos de cómo sería

### Algo urgente?
- Email: carolina@example.com
- GitHub: Mencioname en Issues

---

## 📋 Checklist para Contribuyentes

Antes de hacer PR:

- [ ] Leí esta guía completamente
- [ ] Fork + branch con nombre descriptivo
- [ ] Cambios en la rama, no en `main`
- [ ] Testeé en múltiples navegadores
- [ ] Sin errores en consola
- [ ] Commit messages descriptivos
- [ ] PR description clara
- [ ] Esperé feedback antes de merge

---

## 🎁 Reconocimiento

Todos los contributors serán:
- ✅ Mencionados en README.md
- ✅ Agregados a CONTRIBUTORS.md
- ✅ Recompensados con mención en commits

---

**Gracias por mejorar este proyecto! 🙏**

*Last updated: July 2026*
