window.EXAM_QUESTIONS = [
  {
    id: 41,
    question: `Una empresa contrató un chatbot tipo ACS para seleccionar documentos de su sitio web. ¿Cuál de las siguientes sería la mejor forma de mejorar la precisión?`,
    questionEn: `A company contracted an ACS-type chatbot to select documents from its website. Which of the following would be the best way to improve accuracy?`,
    options: [
      {k:"A", html: `Crear un modelo de embedding personalizado con etiquetado semántico`, htmlEn: `Create a custom embedding model with semantic tagging`},
      {k:"B", html: `Implementar el modelo alojado en el párrafo nivel para mejorar por tabla`, htmlEn: `Implement the model hosted at paragraph level to improve by table`},
      {k:"C", html: `Cambiar a un modelo con las mejores condiciones dimensionales`, htmlEn: `Switch to a model with the best dimensional conditions`},
      {k:"D", html: `Implementar lógica de inclusión y exclusión accionable a nivel de preguntas`, htmlEn: `Implement inclusion and exclusion logic actionable at the questions level`}
    ],
    correct: "A",
    voted: "A",
    explanation: `Los embeddings personalizados con etiquetado semántico permiten que el chatbot entienda mejor el contexto específico del dominio de la empresa, mejorando significativamente la relevancia de los documentos seleccionados.`,
    explanationEn: `Custom embeddings with semantic tagging allow the chatbot to better understand the specific context of the company's domain, significantly improving the relevance of selected documents.`
  },
  {
    id: 42,
    question: `Un ingeniero está implementando un agente de IA que debe responder preguntas sobre noticias tecnológicas. Los documentos fuente contienen un cantidad significativa de contenido irrelevante. ¿Cuál sería el mejor enfoque?`,
    questionEn: `An engineer is implementing an AI agent that must answer questions about technology news. The source documents contain a significant amount of irrelevant content. Which would be the best approach?`,
    options: [
      {k:"A", html: `Usar un reranker para ordenar los documentos según su relevancia`, htmlEn: `Use a reranker to order documents by their relevance`},
      {k:"B", html: `Modificar el prompt para indicar el LLM sobre los documentos según su puntuación de relevancia`, htmlEn: `Modify the prompt to instruct the LLM on documents by their relevance score`},
      {k:"C", html: `Usar un modelo diferente de incrustación para calcular las incrustaciones de documentos`, htmlEn: `Use a different embedding model to calculate document embeddings`},
      {k:"D", html: `Aumentar la cantidad de documentos agregados al prompt para mejorar la contexto relevancia`, htmlEn: `Increase the number of documents added to the prompt to improve context relevance`}
    ],
    correct: "A",
    voted: "A",
    explanation: `Un reranker es una herramienta diseñada específicamente para clasificar documentos por relevancia en el contexto de la consulta, lo que mejora la precisión al filtrar contenido irrelevante antes de pasarlo al LLM.`,
    explanationEn: `A reranker is a tool specifically designed to rank documents by relevance in the context of the query, which improves accuracy by filtering irrelevant content before passing it to the LLM.`
  },
  {
    id: 43,
    question: `Un ingeniero está compilando documentos para una aplicación RAG que responde preguntas sobre productos de seguimiento. Los documentos vienen en varios formatos: PDF, Word, imágenes escaneadas y HTML. ¿Cuál es el mejor enfoque?`,
    questionEn: `An engineer is compiling documents for a RAG application that answers questions about tracking products. The documents come in various formats: PDF, Word, scanned images, and HTML. Which is the best approach?`,
    options: [
      {k:"A", html: `Utilizar beautifulsoup para extraer el texto de todos los archivos`, htmlEn: `Use beautifulsoup to extract text from all files`},
      {k:"B", html: `Utilizar extractores de texto nativos de cada formato`, htmlEn: `Use native text extractors for each format`},
      {k:"C", html: `Usar una herramienta de conversión como Unstructured`, htmlEn: `Use a conversion tool like Unstructured`},
      {k:"D", html: `Usar OCR para todos los documentos`, htmlEn: `Use OCR for all documents`}
    ],
    correct: "C",
    voted: "C",
    explanation: `Herramientas como Unstructured están diseñadas específicamente para manejar múltiples formatos de documentos (PDF, Word, imágenes, HTML) y extraer el contenido de manera consistente, preservando la estructura y significado del texto.`,
    explanationEn: `Tools like Unstructured are specifically designed to handle multiple document formats (PDF, Word, images, HTML) and extract content consistently, preserving text structure and meaning.`
  },
  {
    id: 44,
    question: `Un ingeniero está creando una aplicación multiagente con modelos de lenguaje de distinto tamaño. ¿Cuál sería la mejor forma de aplicar la arquitectura?`,
    questionEn: `An engineer is creating a multi-agent application with language models of different sizes. What would be the best way to apply the architecture?`,
    options: [
      {k:"A", html: `Usar modelos pequeños para tareas simples y modelos grandes para tareas complejas`, htmlEn: `Use small models for simple tasks and large models for complex tasks`},
      {k:"B", html: `Usar siempre el modelo más grande disponible`, htmlEn: `Always use the largest available model`},
      {k:"C", html: `Usar siempre el modelo más pequeño disponible`, htmlEn: `Always use the smallest available model`},
      {k:"D", html: `Usar el mismo modelo para todas las tareas`, htmlEn: `Use the same model for all tasks`}
    ],
    correct: "A",
    voted: "A",
    explanation: `Usar modelos de tamaño apropiado optimiza el costo y el rendimiento: modelos pequeños son rápidos y baratos para tareas simples, mientras que modelos grandes son necesarios para razonamiento complejo. Este enfoque mejora la eficiencia general del sistema.`,
    explanationEn: `Using appropriately sized models optimizes cost and performance: small models are fast and cheap for simple tasks, while large models are needed for complex reasoning. This approach improves overall system efficiency.`
  },
  {
    id: 45,
    question: `Un ingeniero está implementando un agente de asistencia IA que debe responder preguntas sobre suscripciones a bases de datos relacionales SQL. ¿Cuál debería ser la mejor estrategia?`,
    questionEn: `An engineer is implementing an AI assistance agent that must answer questions about subscriptions to relational SQL databases. What should be the best strategy?`,
    options: [
      {k:"A", html: `Crear documentos técnicos sobre SQL construidos a partir de consultas legales`, htmlEn: `Create technical SQL documents built from legal queries`},
      {k:"B", html: `Usar documentos de consultas SQL de ejemplo para entrenar el agente`, htmlEn: `Use example SQL query documents to train the agent`},
      {k:"C", html: `Guardar un diccionario SQL que puede consultar el agente internamente`, htmlEn: `Store a SQL dictionary that the agent can consult internally`},
      {k:"D", html: `Usar un agente especializado que maneje SQL y escriba consultas adecuadas`, htmlEn: `Use a specialized agent that handles SQL and writes appropriate queries`}
    ],
    correct: "D",
    voted: "D",
    explanation: `Un agente especializado en SQL puede entender el esquema de la base de datos, generar consultas correctas y ejecutarlas, proporcionando respuestas precisas. Esto es más eficiente que usar solo documentos o diccionarios.`,
    explanationEn: `A SQL-specialized agent can understand the database schema, generate correct queries and execute them, providing accurate answers. This is more efficient than using only documents or dictionaries.`
  }
];
