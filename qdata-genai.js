window.EXAM_QUESTIONS = [
  {
    id: 1,
    question: `Un ingeniero de IA generativa ha creado una aplicación RAG para buscar respuestas a preguntas sobre una serie de novelas de fantasía que se formulan en el foro web del autor. Los textos de las novelas se dividen en fragmentos y se almacenan en una base de datos vectorial con metadatos (número de página, número de capítulo, título del libro), se recuperan con la consulta del usuario y se proporcionan a un LLM para la generación de respuestas. El ingeniero de IA generativa utilizó su intuición para elegir la estrategia de división en fragmentos y las configuraciones asociadas, pero ahora quiere elegir los mejores valores de forma más metódica.`,
    questionEn: `Topic 1 - Exam A ‘A Generative AI Engineer has created a RAG application to look up answers ta questions ahout 2 series af fantasy novels that are being asked cn the author's wed forum. The fantasy novel texts are chunked and embedded into a vector store with metadata (page number, chapter number, book title), retrieved with the user's query, and provided to an LLM for response generation. The Generative AI Engineer used thei intuition to pick the chunking strategy and associated configurations but now wants to ‘mare methodically choose the best values. Which TWO strategies should the Generative AI Engineer Lake to optimize their chunking strategy and parameters? (Choose two.)`,
    options: [
    {k:"A", html: `Cambie los modelos de incrustación y compare el rendimiento.`, htmlEn: `Change embedding models and compare performance.`},
    {k:"B", html: `Añade un clasificador para las consultas de los usuarios que prediga qué libro contendrá mejor la respuesta. Utiliza esto para filtrar la recuperación de información.`, htmlEn: `Add a classifier for user queries that predicts which book will best contain the answer, ise this to fitter retrieval`},
    {k:"C", html: `Elija una métrica de evaluación apropiada (como la exhaustividad o el NDCG) y experimente con cambios en la estrategia de segmentación, como dividir los segmentos por párrafos o capítulos. Elija la estrategia que ofrezca la mejor métrica de rendimiento. Más votado`, htmlEn: `Choose an appropriate evaluation metric (such as recall or NDCG) and experiment with changes in the chunking strategy, such as spiltting chunks by paragraphs or chapters, Choose the strategy that gives the best performance metric. (ZEXZI)`},
    {k:"D", html: `Pase las preguntas conocidas y las mejores respuestas a un modelo LLM e indíquele que proporcione el mejor recuento de tokens. Utilice una estadística descriptiva (media, mediana, etc.) de los mejores recuentos de tokens para elegir el tamaño del fragmento.`, htmlEn: `Pass known questions and best answers to an LLM and Instruct the LLM to provide the best token count. Use a summary statistic (mean, median, ete.) of the best token counts to choose chunk size F. Create an LLM-as-audge metric to evaluate how well previous questions are answered by the most appropriate chunk. Optimize the chunking parameters based upon the values of the metric. QEERZE)`},
    {k:"E", html: `Cree una métrica LLM como juez para evaluar qué tan bien responde el fragmento más apropiado a las preguntas anteriores. Optimice los parámetros de segmentación en función de los valores de la métrica. Más votado`, htmlEn: ``},
  ],
    correct: "CE",
    voted: "CE",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 2,
    question: `Un ingeniero de IA generativa está diseñando una aplicación RAG para responder a las preguntas de los usuarios sobre las normas técnicas mientras aprenden un nuevo deporte.`,
    questionEn: `‘A Generative AI Engineer is designing a RAG application for answering user questions on technical regulations as they learn a new sport What are the steps needed to build this RAG application and deploy it?`,
    options: [
    {k:"A", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> El usuario envía consultas a un LLM -> El LLM recupera los documentos relevantes -> Evaluar el modelo -> El LLM genera una respuesta -> Implementarla usando Model Serving`, htmlEn: `Ingest documents from 2 source ~ -> Index the documents and saves to Vector Search ~> User subenits queries against an LLM ~> LLM retrieves relevant documents ~ -> Evaluate model - -> LLM generates a response - -> Deploy tt using Model Serving`},
    {k:"B", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> El usuario envía consultas a un LLM -> El LLM recupera los documentos relevantes -> El LLM genera una respuesta -> Evaluar el modelo -> Implementarlo usando Model Serving Más votado`, htmlEn: `Ingest documents from a source ~ -> Index the documents and save to Vector Search ~ -> User submits queries against an LLM ~ -> LLM retrieves relevant documents -> LUM generates a response > Evaluate model -> Deploy It using Mode! Serving ()`},
    {k:"C", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> Evaluar el modelo -> Implementarlo usando Model Serving`, htmlEn: `Ingest documents from & source - -> Index the documents and save to Vector Search - -> Evaluate medel -> Deploy it using Model Serving`},
    {k:"D", html: `El usuario envía consultas a un LLM -> Ingiere documentos de una fuente -> Indexa los documentos y los guarda en Vector Search -> El LLM recupera los documentos relevantes -> El LLM genera una respuesta -> Evalúa el modelo -> Lo implementa usando Model Serving`, htmlEn: `User submits queries against an LLM ~> Ingest documents from a source ~> Index the documents and save to Vector Search ~> LLM retrieves relevant documents > LUM generates a response - -> Evaluate model ~ -> Deploy It using Model Serving`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 3,
    question: `Un ingeniero de IA generativa acaba de implementar una aplicación LLM en una empresa de marketing digital para ayudar a responder consultas de servicio al cliente.`,
    questionEn: `‘A Generative AI Engineer just deployed 2n LLM application at = digital marketing company that assists with answering customer service inquiries. Which metric should they monitor for their customer service LLM application in production?`,
    options: [
    {k:"A", html: `Número de consultas de clientes procesadas por unidad de tiempo Más votado`, htmlEn: `Number of customer inquiries processed per unit of time (TEIN`},
    {k:"B", html: `Consumo de energía por consulta`, htmlEn: `Energy usage per query`},
    {k:"C", html: `Puntuaciones de perplejidad finales para el entrenamiento del modelo`, htmlEn: `Final perplexity scores for the training of the model`},
    {k:"D", html: `Valores de la tabla de clasificación de HuggingFace para el LLM base`, htmlEn: `HuggingFace Leaderboard values for the base LLM ride Souion ] Discusion @ |`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 4,
    question: `Un ingeniero de IA generativa está desarrollando un sistema de IA generativa que sugiere al empleado más idóneo para proyectos de nueva definición. El empleado se selecciona de un equipo muy numeroso. La selección debe basarse en la disponibilidad de fechas del proyecto y en la adecuación de su perfil al alcance del mismo. Tanto el perfil del empleado como el alcance del proyecto son texto no estructurado.`,
    questionEn: `A Generative AI Engineer is building a Generative AI system that suggests the best matched employee team member lo newly scoped projects. The team member is selected from a very large team. The match should be based upon project date availability and how well ther employee proe matches the project scope. Both the employee proe and project scope are unstructured text How should the Generative AI Engineer architect their system?`,
    options: [
    {k:"A", html: `Crea una herramienta para encontrar miembros de equipo disponibles según las fechas del proyecto. Incorpora todos los alcances del proyecto en un almacén de vectores y realiza una búsqueda utilizando los perfiles de los miembros del equipo para encontrar al mejor miembro.`, htmlEn: `Create a tool for finding avaiable team members given project dates. Cmbed all project scopes into a vector store, perform a retrieval using team member proes to find the best team member.`},
    {k:"B", html: `Crear una herramienta para determinar la disponibilidad de los miembros del equipo en función de las fechas del proyecto, y otra herramienta que utilice un modelo de lenguaje natural (LLM) para extraer palabras clave de los alcances del proyecto. Iterar a través de los perfiles de los miembros del equipo disponibles y realizar una coincidencia de palabras clave para encontrar al miembro del equipo más adecuado.`, htmlEn: `Create a too! for finding team member availability given project dates, anc another tol thal uses an LLM to extract keywords from project scopes. Iterate through available team members’ proes and perform keyword matching to find the best available team member.`},
    {k:"C", html: `Crea una herramienta para encontrar miembros de equipo disponibles según las fechas del proyecto. Crea una segunda herramienta que pueda calcular un índice de similitud para una combinación del perfil del miembro del equipo y el alcance del proyecto. Itera sobre los miembros del equipo y clasifícalos según el mejor índice para seleccionar a un miembro.`, htmlEn: `Create a tool to find available team members given project dates. Create 2 second tool that can calculate a similarity score for a combination of team member proe and the project scope. iterate through the team members and rank by best score to select a team member.`},
    {k:"D", html: `Crear una herramienta para encontrar miembros de equipo disponibles según las fechas del proyecto. Integrar los perfiles de equipo en un almacén vectorial y usar el alcance del proyecto y el filtrado para realizar la recuperación y encontrar a los miembros de equipo disponibles que mejor se ajusten al perfil. Más votado`, htmlEn: `Create a tool for finding available team members given project dates. Embed team proes into a vector store and use the project scope and tering to perform retrieval ta find the available best matches team memners. (ESI)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 5,
    question: `Un ingeniero de IA generativa está diseñando una plataforma de comentarios deportivos en directo basada en LLM. La plataforma ofrece actualizaciones en tiempo real y análisis generados por LLM para cualquier usuario que desee resúmenes en directo, en lugar de leer una serie de artículos de noticias potencialmente desactualizados.`,
    questionEn: `A Generative AI Engineer is designing an LLM-powered live sports commentary platform. The platform provides real-time updates and LLM-generated analyses for any users who would like to have live summaries, rather than reading a series of potentially outdated news articles Which tool below will give the platform access to real-time data for generating game analyses based on the latest game scores?`,
    options: [
    {k:"A", html: `DatabricksIQ`, htmlEn: `DatabricksiQ`},
    {k:"B", html: `API del modelo básico`, htmlEn: `Foundation Model APIs`},
    {k:"C", html: `Presentación de funciones Más votado`, htmlEn: `Feature Serving (EEX`},
    {k:"D", html: `AutoML`, htmlEn: `AutoML`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 6,
    question: `Un ingeniero de IA generativa tiene un modelo de rendimiento configurado que sirve un endpoint como parte de una aplicación RAG y desea monitorizar las solicitudes entrantes y las respuestas salientes de dicho endpoint. El enfoque actual consiste en incluir un microservicio entre el endpoint y la interfaz de usuario para escribir registros en un servidor remoto.`,
    questionEn: `A Generative AI Engineer has a provisioned throughput model serving endpoint as part of a RAG application and would like to monitor the serving endpoint's incoming requests and outgoing responses, The current approach is to include a micro-service in between the endpoint and the user interface to write logs to a remote server. Which Databricks feature should they use instead which will perform the same task?`,
    options: [
    {k:"A", html: `Búsqueda vectorial`, htmlEn: `Vector Search`},
    {k:"B", html: `Vista del lago`, htmlEn: `Lakeview`},
    {k:"C", html: `DBSQL`, htmlEn: `DBSQL. Inference Tables CERI`},
    {k:"D", html: `Tablas de inferencia Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 7,
    question: `Un ingeniero de IA generativa tiene la tarea de mejorar la calidad del RAG abordando sus resultados incendiarios.`,
    questionEn: `A Generative AI Engineer is tasked with improving the RAG quality by addressing its inflammatory outputs. Which action would be most effective in mitigating the problem of offensive text outputs?`,
    options: [
    {k:"A", html: `Aumentar la frecuencia de las actualizaciones de datos ascendentes`, htmlEn: `Increase the frequency of upstream data updates`},
    {k:"B", html: `Informar al usuario del comportamiento RAG esperado .`, htmlEn: `Inform the user of the expected RAG behavior`},
    {k:"C", html: `Restringir el acceso a las fuentes de datos a un número limitado de usuarios.`, htmlEn: `Restrict access to the data sources to a limited number of users`},
    {k:"D", html: `Gestionar adecuadamente los datos de origen, lo que incluye una revisión manual antes de introducirlos en el sistema RAG. Más votado`, htmlEn: `Curate upstream data properly that includes manual review before it is fed into the RAG system (EI`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 8,
    question: `Un ingeniero de IA generativa está creando una aplicación basada en LLM. Los documentos para su recuperador se han dividido en fragmentos de hasta 512 tokens cada uno. El ingeniero sabe que el costo y la latencia son más importantes que la calidad para esta aplicación. Tiene varios niveles de longitud de contexto para elegir.`,
    questionEn: `A Generative AI Engineer is creating an LLM-based application. The documents for its retriever have been chunked to a maximum of 512 tokens each. The Generative A Engineer knows that cost and latency are more important than quality for this application. They have several context length levels to choose from Which will full thelr need?`,
    options: [
    {k:"A", html: `Longitud del contexto 514; el modelo más pequeño es de 0,44 GB y la dimensión de incrustación es de 768.`, htmlEn: `context length 514; smatlest model is 0.44GB and embedding dimension 768`},
    {k:"B", html: `Longitud del contexto 2048: el modelo más pequeño es de 11 GB y la dimensión de incrustación es de 2560.`, htmlEn: `context length 2048: smallest model is 11GB and embedding dimension 2560`},
    {k:"C", html: `Longitud del contexto 32768: el modelo más pequeño es de 14 GB y la dimensión de incrustación es de 4096.`, htmlEn: `context length 32768: smallest model is 14GB and embedding dimension 4096`},
    {k:"D", html: `Longitud del contexto 512: el modelo más pequeño es de 0,13 GB y la dimensión de incrustación es de 384. Más votado`, htmlEn: `context length 512: smallest mode! Is 0.13GB and embedding dimension 384 QE5N20)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 9,
    question: `Una pequeña empresa emergente del sector de la investigación oncológica, centrada en el ahorro de costes, desea desarrollar una aplicación RAG utilizando las API del modelo Foundation.`,
    questionEn: `A small and cost-conscious startup in the cancer research field wants to bulld a RAG application using Foundation Mode! APIs. Which strategy would allow the startup to build a good-quality RAG application while being cost-conscious and able to cater to customer needs?`,
    options: [
    {k:"A", html: `Limitar el número de documentos relevantes disponibles para que la aplicación RAG los recupere.`, htmlEn: `Limit the number of relevant documents available for the RAG application to retrieve from`},
    {k:"B", html: `Elija un LLM más pequeño que sea específico del dominio.`, htmlEn: `Pick 2 smaller LLM that is domain-specific`},
    {k:"C", html: `Limitar el número de consultas que un cliente puede enviar por día.`, htmlEn: `Limit the number af queries a customer can send per day`},
    {k:"D", html: `Utilice el LLM más grande posible, ya que eso proporciona el mejor rendimiento para cualquier consulta general.`, htmlEn: `Use the largest LLM possible because that gives the best performance for any general queries`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 10,
    question: `Un ingeniero de IA generativa es responsable de desarrollar un chatbot para permitir que el equipo interno del centro de llamadas de HelpDesk de su empresa encuentre más rápidamente los tickets relacionados y proporcione una solución. Mientras crea las tareas de desglose del trabajo de la aplicación GenAI para este proyecto, se da cuenta de que necesita comenzar a planificar qué fuentes de datos (ya sea volumen del catálogo de Unity o tabla Delta) podría elegir para esta aplicación. Ha recopilado varias fuentes de datos candidatas para su consideración: call_rep_history: una tabla Delta con claves primarias representation_id, call_id. Esta tabla se mantiene para calcular la resolución de llamadas de los representantes a partir de los campos call_duration y call start_time. transcript Volume: un volumen del catálogo de Unity de todas las grabaciones como archivos *.wav, pero también una transcripción de texto como archivos *.txt. call_cust_history: una tabla Delta con claves primarias customer_id, cal1_id. Esta tabla se mantiene para calcular cuánto utilizan los clientes internos el HelpDesk para asegurarse de que el modelo de cobro sea coherente con el uso real del servicio. call_detail: una tabla Delta que incluye una instantánea de todos los detalles de las llamadas actualizada cada hora. Incluye los campos root_cause y resolution, pero estos campos pueden estar vacíos para las llamadas que aún están activas. maintenance_schedule: una tabla Delta que incluye una lista de las interrupciones de la aplicación HelpDesk, así como los próximos periodos de inactividad por mantenimiento planificados.`,
    questionEn: `A Generative AI Engineer is responsible for developing a chathot to enable thes company's internal HelpDesk Call Center team to more quickly find related tickets and provide resolution. While creating the GenAl application work breakdown tasks for this project, they realize they need to start planning which data sources (either Unity Catalog volume or Delta table) they could choose for this application. They have collected several candidate data sources for consideration: call_rep_history: a Delta table with primary keys representative_id, call_id. This table is maintained to calculate representatives’ call resolution from fields call duration and call start_time. transcript Volume: a Unity Catalog Volume of all recordings as a *.wav es, but also a text transcript as *.bt es. call_cust_history: a Detta table with primary keys customer_id cal1_id. This table is maintained to calculate how much internal customers use the HelpDesk to make sure that the charge back model is consistent with actual service use. call_detall; a Delta table that includes a snapshot of all call details updated hourly, It includes root_cause and resolution fields, but those fields may be empty for calls that are still active. maintenance_schedule - a Detta table that includes a listing of both HelpDesk application outages as well as planned upcoming maintenance downtimes They need sources that could add context to best identify ticket root cause and resolution, Which TWO sources do that? (Choose two.) ‘A. call_cust_history`,
    options: [
    {k:"A", html: `historial_de_llamadas_del_cliente`, htmlEn: ``},
    {k:"B", html: `Programa de mantenimiento`, htmlEn: `maintenanoe_schedule`},
    {k:"C", html: `historial_de_llamadas`, htmlEn: `call_sep_history`},
    {k:"D", html: `detalle_de_llamada Más votado`, htmlEn: `call_detail`},
    {k:"E", html: `Transcripción Volumen Más votado`, htmlEn: `transcript Volume QI)`},
  ],
    correct: "DE",
    voted: "DE",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 11,
    question: `¿Cuál es la biblioteca más adecuada para construir un flujo de trabajo basado en LLM de varios pasos?`,
    questionEn: `What is the most suitable library for building a multi-step LLM-based workflaw?`,
    options: [
    {k:"A", html: `Pandas`, htmlEn: `Pandas`},
    {k:"B", html: `TensorFlow`, htmlEn: `TensorFlow`},
    {k:"C", html: `PySpark`, htmlEn: `PySpark 0. LangChain (END`},
    {k:"D", html: `LangChain Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 12,
    question: `Al desarrollar una aplicación LLM, es fundamental garantizar que los datos utilizados para entrenar el modelo cumplan con los requisitos de licencia para evitar riesgos legales.`,
    questionEn: `When developing an LLM application, it's crucial to ensure that the data used for training the model complies with licensing requirements to avole legal risks. Which action is NOT appropriate to avoid legal risks? A Reach out to the data curators directly before you have started using the trained model to let them know.`,
    options: [
    {k:"A", html: `Comuníquese directamente con los curadores de datos antes de comenzar a utilizar el modelo entrenado para informarles.`, htmlEn: ``},
    {k:"B", html: `Utilice cualquier dato disponible que haya creado personalmente y que sea completamente original, y puede decidir qué licencia utilizar.`, htmlEn: `Use any available data you personally created which is completely original and you can decide what license to use.`},
    {k:"C", html: `Utilice únicamente datos etiquetados explícitamente con una licencia abierta y asegúrese de que se cumplan los términos de la licencia.`, htmlEn: `Only use data explicitly labeled with an open license and ensure the license terms are followed`},
    {k:"D", html: `Comuníquese directamente con los curadores de datos después de haber comenzado a utilizar el modelo entrenado para informarles. Más votado`, htmlEn: `Reach out to the data curators directly after you have started using the trained model to let them know. (EXE)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 13,
    question: `Un ingeniero está implementando un agente de asistencia IA que debe responder preguntas sobre suscripciones a bases de datos relacionales SQL. ¿Cuál debería ser la mejor estrategia?`,
    questionEn: `. @ im=openal (.`,
    options: [
    {k:"A", html: `Crear documentos técnicos sobre SQL construidos a partir de consultas legales`, htmlEn: ``},
    {k:"B", html: `Usar documentos de consultas SQL de ejemplo para entrenar el agente`, htmlEn: ``},
    {k:"C", html: `Guardar un diccionario SQL que puede consultar el agente internamente`, htmlEn: ``},
    {k:"D", html: `Usar un agente especializado que maneje SQL y escriba consultas adecuadas`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: `Un agente especializado en SQL puede entender el esquema de la base de datos, generar consultas correctas y ejecutarlas, proporcionando respuestas precisas. Esto es más eficiente que usar solo documentos o diccionarios.`,
    explanationEn: ``
  },
  {
    id: 14,
    question: `Un ingeniero de IA generativa está creando un sistema LLM que recuperará artículos de noticias del año 1918 relacionados con la consulta del usuario y los resumirá. El ingeniero ha observado que los resúmenes se generan correctamente, pero a menudo incluyen una explicación de cómo se generaron, lo cual no es deseable.`,
    questionEn: `Correct Answer: 0 i EE ee eee`,
    options: [
    {k:"A", html: `Divida la salida de LLM por caracteres de nueva línea para eliminar la explicación del resumen.`, htmlEn: ``},
    {k:"B", html: `Ajuste el tamaño de los fragmentos de los artículos de noticias o experimente con diferentes modelos de incrustación.`, htmlEn: ``},
    {k:"C", html: `Revisar su lógica de ingesta de documentos, asegurándose de que los artículos de noticias se estén ingiriendo correctamente.`, htmlEn: ``},
    {k:"D", html: `Proporcione algunos ejemplos cortos del formato de salida deseado al sistema y/o al usuario. Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 15,
    question: `Un ingeniero de IA generativa ha desarrollado una aplicación LLM para responder preguntas sobre las políticas internas de la empresa. El ingeniero debe asegurarse de que la aplicación no genere alucinaciones ni filtre datos confidenciales.`,
    questionEn: `AGenereove Ni Engines: has Gevelopes an LLM applicaton to answer questens sboxt intemal comeany poles. The Generative AI kngineee mutt ensure that Be sccllcuton coesathanucinae leak cedental cata nich oexoach shes NOT be wee to mitigate halcination x content data leakage?`,
    options: [
    {k:"A", html: `Agregar medidas de seguridad para filtrar las salidas del LLM antes de que se muestren al usuario.`, htmlEn: `A quiet ter cxtuts tem the LLM Bore shows tthe waer 1. Fine-tune the model on your data, hoping t Wal learn what Is appropriate and not (I)`},
    {k:"B", html: `Ajuste el modelo con sus datos, con la esperanza de que aprenda qué es apropiado y qué no. Más votado`, htmlEn: ``},
    {k:"C", html: `Limitar los datos disponibles en función del nivel de acceso del usuario.`, htmlEn: `Umit te cata avatable based on the users access lve`},
    {k:"D", html: `Utilice una indicación clara del sistema para asegurarse de que el modelo se ajuste a sus necesidades.`, htmlEn: `Use a stoeeg system promt to ensure the model aligns with you sees`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 16,
    question: `Un ingeniero de IA generativa interactúa con un modelo de aprendizaje automático (LLM) con comportamiento de solicitud/respuesta, entrenado con llamadas de clientes que consultan la disponibilidad de productos. El LLM está diseñado para mostrar "En stock" si el producto está disponible o solo "Agotado" si no lo está.`,
    questionEn: `AGanersve fi Engneesntertaces Wm a LLM wih promptvesponse beavio hat bas been rained oe cstome cls nquing abot product vataby, The LLM ie egies to cutout" SacI he procut Is avlable oon he tem “Out ot Stock” It net Rich prompt wl wont alow he engineer o respond to at classeaton labels comecty?`,
    options: [
    {k:"A", html: `Responda con “En stock” si el cliente pregunta por un producto.`, htmlEn: `Respond wt i Stock” tne cutter as Ye a prodat 6. You willbe given a customer cal ranscat wher the cester asks about poductaratabity. The outputs ar ember "Stock" oe "Uuto Stock. Format he utpetn ISON fo example ea i “12° “uber Stoek ©. Respond mth Out Sock Ite customer ants fra produc`},
    {k:"B", html: `Se le proporcionará una transcripción de una llamada de un cliente que pregunta sobre la disponibilidad del producto. Las respuestas serán "En stock" o "Agotado". Formatee la salida en JSON, por ejemplo: {"call_id": "123", "label": "En stock"}.`, htmlEn: ``},
    {k:"C", html: `Responda con “Sin existencias” si el cliente pregunta por un producto.`, htmlEn: ``},
    {k:"D", html: `Se le proporcionará una transcripción de la llamada del cliente en la que este pregunta sobre la disponibilidad del producto. Responda con "En stock" si el producto está disponible o "Agotado" si no lo está. Más votado`, htmlEn: `Youle given a custamer call ranscrt whee the cestomerinques about produc avait. Respons wh "eStock" the pockct is avatable ce “Out ot Stock It not CXE)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 17,
    question: `Un ingeniero de IA generativa tiene la tarea de desarrollar una aplicación RAG que ayude a un pequeño grupo interno de expertos de su empresa a responder preguntas específicas, con el apoyo de una base de conocimientos interna. Buscan la máxima calidad en las respuestas, y ni la latencia ni el rendimiento son una gran preocupación, dado que el grupo de usuarios es reducido y están dispuestos a esperar la mejor respuesta. Los temas son delicados y los datos son altamente confidenciales, por lo que, debido a requisitos normativos, no se permite la transmisión de ninguna información a terceros.`,
    questionEn: `‘A Cenerative AI Engineer is tasked with developing a RAG application that will help a small internal group of experts at thelr company answer specific questions, augmented by an internal krawiedge base, They want the best possible quality in the answers, and nether latency noe throughput Isa huge concem glen tht the user gr0up is small and they're wing to wait forthe hest answer. The topics are sensitive in nature and the data is highly coential and 0, ove to regulatory requirements, ‘ane of the information is allowed to be transmitted to third parties. Which model meets all the Generative AI Engineer's needs in this situation?`,
    options: [
    {k:"A", html: `Dolly 1.5B`, htmlEn: `Dolly 1.58`},
    {k:"B", html: `OpenAI GPT-4`, htmlEn: `Opendl GPT-4 6. BGEAarge`},
    {k:"C", html: `BGE-grande`, htmlEn: ``},
    {k:"D", html: `Llama2-70B Más votado`, htmlEn: `Llama?-708 (ED`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 18,
    question: `Un ingeniero de IA generativa necesita un modelo de lenguaje natural (LLM) para generar JSON formateado a partir de correos electrónicos. Esto requiere analizar y extraer la siguiente información: ID del pedido, fecha y correo electrónico del remitente. Aquí hay un ejemplo de correo electrónico:`,
    questionEn: `A Generative AI Engineer would lice an LLM to generate formatted JSOM from emails. This will require parsing and extracting the following information: order ID, date, and sender email. Here's a sample emall: Date: April 23, 2024 Time: 4:22 FM From: anjali.thayar@computex.org To: cuat_sarvicatrealtek.cem Subject: Shipmant datsils Hoy thers, i have a shipment (order ID is CD34R¥TZ) can you please send me an update? Thank you, Anjali They wat need to white a prompt that will extract the relerant information in JSON format with the highest level at output accuracy. Which prompt will do that? ‘A. You will reoeive customer emails anc need to extract date, sender emall, and order ID. You should return the date, sender email, and order D information in JSON format.`,
    options: [
    {k:"A", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Deberás devolver la fecha, el correo electrónico del remitente y el ID del pedido en formato JSON.`, htmlEn: ``},
    {k:"B", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Devuelve la información extraída en formato JSON.`, htmlEn: `You will receive customer emails and need to extract date, sender email and order ID, Return the extracted information in JSON format. Here's an example: {"date": “April 16, 2024", “sender_ email’: “sarah lee92S@gmall.corn’, “order jd": “RE9B7D")`},
    {k:"C", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Devuelve la información extraída en un formato legible para humanos.`, htmlEn: `You will receive customer emails anc need Lo extract date, sender email, and order 1D. Return the extracted information in a human feadable format,. You wil receive customer emalls and need to extract date, sender email and order IRetum the extracted information in JSON format`},
    {k:"D", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el pedido. Devuelve la información extraída en formato JSON.`, htmlEn: ``},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 19,
    question: `Se le ha solicitado a un ingeniero de IA generativa que desarrolle una aplicación de preguntas y respuestas basada en LLM. La aplicación debe tener en cuenta los nuevos documentos que se publican con frecuencia. El ingeniero desea desarrollar esta aplicación con el menor costo y esfuerzo de desarrollo posible, y que su funcionamiento sea lo más económico posible.`,
    questionEn: `‘A Generative AI Engineer has been asked to build an LLM-based question-answering application. The application should take into account new documents that are ‘requently published. The engineer wants to bulld this application with the least cost and least Gevelopment effort and have tt operate at the lowest cost possible Which combination of chaining components snd configuration meets these requirements? ‘For the eoplication a promot, a retriever, and an LLM are required. The retriever output is inserted into the prompt which is given to the LLM to generate answers.`,
    options: [
    {k:"A", html: `Para la aplicación se requieren una solicitud, un recuperador y un LLM. La salida del recuperador se inserta en la solicitud, la cual se le proporciona al LLM para generar las respuestas.`, htmlEn: ``},
    {k:"B", html: `El LLM necesita estar al día con los nuevos documentos para poder ofrecer las respuestas más actualizadas.`, htmlEn: `The LLM needs to be frequently with the new decuments in order to peovide most up-to-date answers.`},
    {k:"C", html: `Para la aplicación de respuesta a preguntas, se requiere ingeniería rápida y un LLM para generar respuestas.`, htmlEn: `For the question-nswering application, promot engineering and an LLM are required to generate answers`},
    {k:"D", html: `Para la aplicación se requiere una solicitud, un agente y un modelo de lenguaje natural (LLM) optimizado. El agente es utilizado por el LLM para recuperar el contenido relevante que se inserta en la solicitud, la cual se le proporciona al LLM para generar respuestas.`, htmlEn: `Fee the application a prompt, an agent and 2 fine-tuned LLM ate required. The agent is used by the LLM to retrieve rekeraeit content that is inserted into the peempt which is given to the LLM to generate answers,`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 20,
    question: `Un ingeniero de IA generativa está creando un sistema LLM basado en agentes para su equipo favorito de monster trucks. El sistema puede responder preguntas de texto sobre el equipo, consultar fechas de eventos mediante una llamada a la API o consultar tablas con la clasificación más reciente del equipo.`,
    questionEn: `A Generative AI Engineer is creating an agent based LLM system for their favorite monster truck team, The system can answer text based questions about the monster truck team, lookup event dates via an API call or query tables on the team’s latest standings. How could the Generative AI Enginzer best design these capabilities into thelr system? ‘Ingest POF documents about the monster truck team into a vector store and query itn a RAG architecture,`,
    options: [
    {k:"A", html: `Ingerir documentos PDF sobre el equipo de monster trucks en un almacén vectorial y consultarlos en una arquitectura RAG.`, htmlEn: ``},
    {k:"B", html: `Escriba un mensaje del sistema para el agente que muestre las herramientas disponibles e incorpórelo a un sistema de agente que ejecute varias llamadas para resolver una consulta. Más votado`, htmlEn: `Write a system prompt for the agent listing avallable tools and bundle it into an agent system that runs number of calls to solve a query. (AEE) G. Instruct the LLM to respond with "RAG", "APT, of “TABLE” depending on the query, then use text parsing and conditional statements to resolve the query.`},
    {k:"C", html: `Indique al LLM que responda con “RAG”, “API” o “TABLE” según la consulta, y luego utilice el análisis de texto y las sentencias condicionales para resolver la consulta.`, htmlEn: ``},
    {k:"D", html: `Cree un mensaje del sistema con todas las fechas de eventos posibles e información de la tabla. Utilice una arquitectura RAG para buscar preguntas de texto genéricas y aproveche la información del mensaje del sistema.`, htmlEn: `Bulld 2 system prompt with all possible event dates and table information in the system prompt, Use & RAG architecture to lookup generic text questions ané otherwise leverage the intormation in the system prompt.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 21,
    question: `Se le ha pedido a un ingeniero de IA generativa que diseñe una aplicación basada en LLM que cumpla el siguiente objetivo empresarial: responder a las preguntas de RR. HH. de los empleados utilizando documentación PDF de RR. HH.`,
    questionEn: `A Generative AI Engineer has been asked to design an LLM based application that accomplishes the following business objective: answer employee HR questions using HRPOF documentation. Which set of high level tasks should the Generative AI Engineer's system perform? ‘A Calculate averaged embeddings for each HR dacument, compare embeddings to user query to find the best document. Pass the best document with the user query into an LLM with a large context window to generate a response to the employee.`,
    options: [
    {k:"A", html: `Calcular las incrustaciones promedio para cada documento de RR. HH., comparar las incrustaciones con la consulta del usuario para encontrar el mejor documento. Pasar el mejor documento junto con la consulta del usuario a un LLM con una ventana de contexto amplia para generar una respuesta para el empleado.`, htmlEn: ``},
    {k:"B", html: `Utilice un LLM para resumir la documentación de RR. HH. Proporcione resúmenes de la documentación y la consulta del usuario en un LLM con una ventana de contexto amplia para generar una respuesta al usuario.`, htmlEn: `Use an LLM to summarize HR documentation, Provide summaries of documentation and user query into an LLM with a large context window lo generate a response to the user G, Create an interaction matrix of historical employee questions and HR documentation, Use ALS to tactorize the matrix and create embeddings, Calculate the embeddings of new queries and use them to find the best HR documentation. Use an LLM to generate 2 response to the employee question based upon the Gocumentation retrieved.`},
    {k:"C", html: `Cree una matriz de interacción entre las preguntas históricas de los empleados y la documentación de RR. HH. Utilice ALS para factorizar la matriz y crear incrustaciones. Calcule las incrustaciones de las nuevas consultas y utilícelas para encontrar la mejor documentación de RR. HH. Utilice un LLM para generar una respuesta a la pregunta del empleado en función de la documentación recuperada.`, htmlEn: ``},
    {k:"D", html: `Divida la documentación de RR. HH. en fragmentos e incorpórelos a un almacén vectorial. Utilice la pregunta del empleado para recuperar los fragmentos de documentación que mejor coincidan y use el modelo LLM para generar una respuesta al empleado basada en la documentación recuperada. Más votado`, htmlEn: `Split HR documentation into chunks and embed into a vector store. Use the employee question lo retrieve best matched chunks of documentation, and use the LLM to generate a response to the employee based upon the documentation retrieved. (EXIT`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 22,
    question: `Un ingeniero de IA generativa de una empresa de electrónica acaba de implementar una aplicación RAG para que los clientes hagan preguntas sobre los productos que ofrece la compañía. Sin embargo, ha recibido comentarios de que la respuesta de RAG a menudo proporciona información sobre productos irrelevantes.`,
    questionEn: `Generative AI Engineer at an electronics company just deployed a RAG application for customers to ask questions about products that the company carries. Hower, they received feedback that the RAG response often returns information about an relevant product. What can the engineer ca ta improve the relevance of the RAG's response? ‘A. Assess the quality of the retrieved context`,
    options: [
    {k:"A", html: `Evaluar la calidad del contexto recuperado.`, htmlEn: ``},
    {k:"B", html: `Implementar el almacenamiento en caché para las preguntas frecuentes.`, htmlEn: `Implement caching foe frequently asked questions`},
    {k:"C", html: `Utilice un LLM diferente para mejorar la respuesta generada.`, htmlEn: `Use a different LLM lo improve the generated response`},
    {k:"D", html: `Utilizar un algoritmo de búsqueda de similitud semántica diferente. Más votado`, htmlEn: `Use a different semantic similarity search algorithm (ZENE) | > mone @ |`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 23,
    question: `Un ingeniero de IA generativa está desarrollando un chatbot diseñado para ayudar a los usuarios con consultas relacionadas con seguros. El chatbot se basa en un modelo de lenguaje extenso (LLM) y es conversacional. Sin embargo, para mantener el enfoque del chatbot y cumplir con la política de la empresa, no debe responder preguntas sobre política. En cambio, ante consultas políticas, el chatbot debe responder con un mensaje estándar:`,
    questionEn: `A Generative AI Engineer is developing a chatbot designed to assist users with insurance-related queries, The chatbot is built on a large language model (LLM) and is conversational. However, to maintain the chatbot's focus end to comply with company policy, it must not provide responses to questions about politics. Instead, when presented with political inquiries, the chatbot should respond with a standard message: “Sorry, | cannot answer that. | am a chathot that can only answer questions sround Insurance" Which framework type should be implemented to solve this? A Sefety Guardrall QE)`,
    options: [
    {k:"A", html: `Barandilla de seguridad Más votado`, htmlEn: ``},
    {k:"B", html: `Barandilla de seguridad`, htmlEn: `Securty Guardrall 6. Contextual Guarda`},
    {k:"C", html: `Barrera de seguridad contextual`, htmlEn: ``},
    {k:"D", html: `Barandilla de cumplimiento`, htmlEn: `Compliance Guardrail`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 24,
    question: `Un ingeniero de IA generativa I está utilizando el siguiente código para probar la configuración de un almacén de vectores:`,
    questionEn: `‘A Generative AI Engineer | using the code below to test setting up a vector store: from databricks.vectoz_search.client import VecterSearchtlient vac = Vactorsaarchalians() vee. create_endpuint ( name~ “vector_search test”, endpoint typas “STANDARD” ) Assuming they inteng to use Databricks managed embeddings with the default embedding model, what should be the next logical function call? ‘A vse.get_indext)`,
    options: [
    {k:"A", html: `vsc.get_index()`, htmlEn: ``},
    {k:"B", html: `vsc.create_delta_sync_index() Más votado`, htmlEn: `vec.create delta_sync_index() (NI`},
    {k:"C", html: `vsc.create_direct_access_index()`, htmlEn: `vse.create_direct_access.indext)`},
    {k:"D", html: `vsc.similarity_search()`, htmlEn: `vsc-similarity.search{)`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 25,
    question: `Un ingeniero de IA generativa tiene la tarea de implementar una aplicación que aprovecha un modelo MLflow Pyfunc personalizado para devolver algunos resultados intermedios.`,
    questionEn: `A Generative AI Engineer Is tasked with deploying an application that takes advantage of a custom MLflow Pyfunc model to return some interim results. How should they configure the endpoint to pass the secrets and credentials?`,
    options: [
    {k:"A", html: `Utilice spark.conf.set()`, htmlEn: `Use spark.conf. set ()`},
    {k:"B", html: `Pasar variables mediante la API de Databricks Feature Store`, htmlEn: `Pass variables using the Databricks Feature Store API`},
    {k:"C", html: `Agregar credenciales usando variables de entorno Más votado`, htmlEn: `Add credentials using environment variables (EXIT)`},
    {k:"D", html: `Transmitir los secretos en texto plano`, htmlEn: `Pass the secrets In plain text`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 26,
    question: `Un ingeniero de IA generativa desea crear una solución basada en LLM para ayudar a un restaurante a mejorar la experiencia de sus clientes en línea con las reservas, gestionando automáticamente las consultas más frecuentes. El objetivo es minimizar la necesidad de intervención humana y llamadas telefónicas, manteniendo una interacción personalizada. Para diseñar la solución, el ingeniero de IA generativa necesita definir los datos de entrada para el LLM y la tarea que este debe realizar.`,
    questionEn: `A Generative AI Engineer wants to bulld an LLM based solution to help a restaurant improve its online customer experience with bookings by automatically handling common customer inquiries. The goal of the solution is to minimize escalations to human intervention and phone calls while maintaining a personalized interaction. To design the solution, the Generative AI Engineer needs to define the input data to the LLM and the task it should perform. Which input/output pair will support thelr goal?`,
    options: [
    {k:"A", html: `Entrada: Registros de chat en línea; Salida: Agrupar los registros de chat por usuarios y, a continuación, resumir las interacciones de cada usuario.`, htmlEn: `Input: Online chat logs; Output: Group the chat logs by users, followed by summarizing each user's interactions`},
    {k:"B", html: `Entrada: Registros de chat en línea; Salida: Botones que representan opciones para los detalles de la reserva. Más votado`, htmlEn: `Input: Online chat logs; Output: Buttons that represent choices for booking details (ZENO)`},
    {k:"C", html: `Entrada: Reseñas de clientes; Salida: Clasificación del sentimiento de las reseñas`, htmlEn: `Input: Customer reviews; Output: Classify review sentiment`},
    {k:"D", html: `Entrada: Registros de chat en línea; Salida: Opciones de cancelación`, htmlEn: `Input: Online chat logs; Output: Cancellation options`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 27,
    question: `¿Cuál es un método eficaz para preprocesar las indicaciones mediante código personalizado antes de enviarlas a un LLM?`,
    questionEn: `What is an effective method to preprocess prompts using custom code before sending them to an LLM?`,
    options: [
    {k:"A", html: `Modificar directamente la arquitectura interna del LLM para incluir pasos de preprocesamiento.`, htmlEn: `Directly modify the LLM's intemal architecture to include preprocessing steps`},
    {k:"B", html: `Es mejor no introducir código personalizado para preprocesar las indicaciones, ya que el LLM no ha sido entrenado con ejemplos de las indicaciones preprocesadas.`, htmlEn: `IL is better not to introduce custom code to preprocess prompts as the LLM has not been trained with examples of the preprocessed prompts`},
    {k:"C", html: `En lugar de preprocesar las indicaciones, es más eficaz posprocesar las salidas del LLM para alinearlas con los resultados deseados.`, htmlEn: `Rather than preprocessing prompts, it’s more effective to postprocess the LLM outputs to align the outputs to desired outcomes`},
    {k:"D", html: `Escriba un modelo PyFunc de MLflow que tenga una función separada para procesar las indicaciones. Más votado`, htmlEn: `Write a MLflow PyFunc model that has a separate function to process the prompts (EERE)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 28,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación de maestría en derecho (LLM) que permite a los usuarios generar poemas de cumpleaños personalizados a partir de sus nombres.`,
    questionEn: `A Generative AI Engineer is developing an LLM application that users can use to generate personalized birthday poems based on their names. Which technique would be most effective in safeguarding the application, given the potential for malicious user inputs?`,
    options: [
    {k:"A", html: `Implementar un filtro de seguridad que detecte cualquier entrada dañina y pedirle al LLM que responda que no puede ayudar. Más votado`, htmlEn: `Implement a safety ter that detects any harmful inputs and ask the LLM to respond that it is unable to assist (EYEE)`},
    {k:"B", html: `Reducir el tiempo que los usuarios pueden interactuar con el LLM.`, htmlEn: `Reduce the time that the users can interact with the LLM`},
    {k:"C", html: `Pídale al LLM que le recuerde al usuario que la entrada es maliciosa, pero que continúe la conversación con el usuario.`, htmlEn: `Ask the LLM to remind the user that the input is malicious but continue the conversation with the user`},
    {k:"D", html: `Aumentar la capacidad de procesamiento que utiliza el LLM para procesar la entrada más rápidamente.`, htmlEn: `Increase the amount of compute that powers the LLM to process input faster`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 29,
    question: `¿Qué indicador debe tenerse en cuenta para evaluar la seguridad de los resultados del LLM al evaluar cualitativamente las respuestas del LLM para un caso de uso de traducción?`,
    questionEn: `Which indicator should be considered to evaluate the safety of the LLM outputs when qualitatively assessing LLM responses for a translation use case?`,
    options: [
    {k:"A", html: `La capacidad de generar respuestas en código.`, htmlEn: `The ability to generate responses In code`},
    {k:"B", html: `La similitud con el idioma anterior`, htmlEn: `The similarity to the previous language`},
    {k:"C", html: `La latencia de la respuesta y la longitud del texto generado`, htmlEn: `The latency of the response and the length af text generated`},
    {k:"D", html: `La exactitud y relevancia de las respuestas`, htmlEn: `The accuracy and relevance of the responses =`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 30,
    question: `Un ingeniero de IA generativa está desarrollando un chatbot de atención médica para pacientes. Si la pregunta del paciente no es una emergencia médica, el chatbot debe solicitar más información para enviarla al consultorio médico y sugerir algunos artículos médicos relevantes preaprobados para leer. Si la pregunta del paciente es urgente, debe indicarle que llame a los servicios de emergencia locales.`,
    questionEn: `A Generative AI Engineer is developing a patient-facing healthcare-focused chatbot. if the patient's question is not a medical emergency, the chatbot should solicit more information from the patient to pass to the doctor's office and suggest a few relevant pre-approved medical articles for reading. If the patient’s question is urgent, direct the patient to calling their local emergency services, Given the following user input: “I have been experiencing severe headaches and dizziness for the past two days." Which response is most appropriate for the chathot to generate?`,
    options: [
    {k:"A", html: `Aquí tienes algunos artículos relevantes para que los consultes. Si tienes alguna pregunta después de leerlos, no dudes en consultarme.`, htmlEn: `Here are a few relevant articles for your browsing. Let me know If you have questions after reading them.`},
    {k:"B", html: `Por favor, llame a los servicios de emergencia locales. Más votado`, htmlEn: `Please call your local emergency services. (Z)`},
    {k:"C", html: `Los dolores de cabeza pueden ser muy duros. ¡Espero que te mejores pronto!`, htmlEn: `Headaches can be tough. Hope you fee! better soon!`},
    {k:"D", html: `Por favor, indique su edad, sus actividades recientes y cualquier otro síntoma que haya notado junto con sus dolores de cabeza y mareos.`, htmlEn: `Please provide your age, recent activities, and any other symptoms you have noticed along with your headaches and dizziness.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 31,
    question: `Tras cambiar el modelo LLM generador de respuestas en una canalización RAG de GPT-4 a un modelo con una longitud de contexto más corta alojado por la propia empresa, el ingeniero de IA generativa recibe el siguiente error:`,
    questionEn: `After changing the response generating LLM in a RAG pipeline from GPT-4 to a model with a shorter context length that the company self-hosts, the Generative AI Engineer is getting the following error: (Terror_code”: “BAD_REQUEST”, “message”: “Bad request: rpc error: code = InvalidArgument desc = prompt token count (4595) cannot exceed 4096..”) What TWO solutions should the Generative AI Engineer implement without changing the response generating model? (Choose two.) A Use a smaller embedding model to generate embeddings`,
    options: [
    {k:"A", html: `Utilice un modelo de incrustación más pequeño para generar incrustaciones.`, htmlEn: ``},
    {k:"B", html: `Reducir el número máximo de tokens de salida del nuevo modelo.`, htmlEn: `Reduce the maximum output tokens of the new model`},
    {k:"C", html: `Disminuir el tamaño de los fragmentos de los documentos incrustados. Más votado`, htmlEn: `Decrease the chunk size of embedded documents (NII`},
    {k:"D", html: `Reducir el número de registros recuperados de la base de datos vectorial. Más votado`, htmlEn: `Reduce the number of records retrieved from the vector database (ETI)`},
    {k:"E", html: `Reentrenar el modelo generador de respuestas usando ALiBi`, htmlEn: `Retrain the response generating madel using ALiBi`},
  ],
    correct: "CD",
    voted: "CD",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 32,
    question: `Un ingeniero de IA generativa está creando un sistema que responderá preguntas sobre las últimas noticias bursátiles.`,
    questionEn: `‘A Generative AI Engineer is building @ system which will answer questions on latest stock news articles. Which will NOT help with ensuring the outputs are relevant to financial news? ‘A. Implement a comprehensive guardrail framework that includes policies for content ters tailored to the finance sector.`,
    options: [
    {k:"A", html: `Implementar un marco integral de medidas de protección que incluya políticas de filtrado de contenido adaptadas al sector financiero.`, htmlEn: ``},
    {k:"B", html: `Aumentar la capacidad de procesamiento para mejorar la velocidad de procesamiento de las preguntas y permitir un análisis de mayor relevancia. Más votado`, htmlEn: `Increase the compute to improve processing speed of questions to allow greater relevancy analysis (ZENID`},
    {k:"C", html: `Implementar un filtro de lenguaje obsceno para eliminar el lenguaje ofensivo.`, htmlEn: `Implement a profanity fiter to screen out offensive language`},
    {k:"D", html: `Incorporar revisiones manuales para corregir cualquier resultado problemático antes de enviarlo a los usuarios.`, htmlEn: `Incorporate manual reviews to correct any problematic outputs prior to sending to the users`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 33,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación RAG que responde preguntas sobre documentos internos de la empresa SnoPen AI.`,
    questionEn: `A Generative AI Engineer Is bullding @ RAG application that answers questions about intemal documents for the company SnoPen Al, The source dacuments may contain a significant amount of irrelevant content, such as ativertisements, sports news, or entertainment news, or content about other ‘companies Which approach is advisable when butlding a RAG application to achieve this goal of tering irrelevant information? ‘A. Keep all articles because the RAG application needs to understand non-company content to avoid answering questions about them.`,
    options: [
    {k:"A", html: `Conserve todos los artículos porque la aplicación RAG necesita comprender el contenido que no pertenece a la empresa para evitar tener que responder preguntas sobre ellos.`, htmlEn: ``},
    {k:"B", html: `Incluir en el mensaje del sistema que cualquier información que vea será sobre SnoPenAI, incluso si no se realiza ningún filtrado de datos.`, htmlEn: `Include in the system prompt that any information it sees will be about SnoPenAl, even If no data tering Is performed.`},
    {k:"C", html: `Incluya en el mensaje del sistema que la aplicación no debe responder ninguna pregunta que no esté relacionada con SnoPen AI. Más votado`, htmlEn: `Include in the system prompt that the application is not supposed to answer any questions unrelated to SnoPen Al. (EXE)`},
    {k:"D", html: `Consolidar todos los documentos relacionados con SnoPen AI en un único bloque en la base de datos de vectores.`, htmlEn: `Consolidate all SnoPen Al related documents into a single chunk in the vector database.`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 34,
    question: `Un ingeniero de IA generativa ha procesado con éxito documentos no estructurados y los ha dividido en secciones. Desea almacenar estos fragmentos en un índice de búsqueda vectorial. El formato actual del dataframe tiene dos columnas: (i) el nombre del archivo del documento original y (ii) una matriz de fragmentos de texto para cada documento.`,
    questionEn: `A Generative AI Engineer has successfully ingested unstructured documents and chunked them by document sections. They would like to store the chunks in a Vector Search index. The current format of the dataframe has two colurnns: (i) original document e name (i) an array of text chunks for each document. What is the most pertormant way to store this dataframe? AA, Split the data into train and test set, create @ unique identifier for each document, then save to a Delta table`,
    options: [
    {k:"A", html: `Divida los datos en conjuntos de entrenamiento y prueba, cree un identificador único para cada documento y luego guárdelos en una tabla Delta.`, htmlEn: ``},
    {k:"B", html: `Aplanar el dataframe a un fragmento por fila, crear un identificador único para cada fila y guardarlo en una tabla Delta. Más votado`, htmlEn: `Flatten the dataframe to one chunk per row, create a unique identifier for each row, and save to a Delta table (ENE)`},
    {k:"C", html: `Primero, cree un identificador único para cada documento y luego guárdelo en una tabla Delta.`, htmlEn: `First create a unique identifier for each document, then save to a Delta table`},
    {k:"D", html: `Almacene cada fragmento como un archivo JSON independiente en el volumen del catálogo de Unity. Para cada archivo JSON, la clave es el nombre de la sección del documento y el valor es la matriz de fragmentos de texto para esa sección.`, htmlEn: `Store each chunk as an independent JSON e in Unity Catalog Volume. For each JSON e, the key is the document section name and the value is the array of text chunks for that section`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 35,
    question: `Un ingeniero de IA generativa ha creado una aplicación RAG que ayuda a los empleados a recuperar respuestas de una base de conocimientos interna, como páginas de Confluence o Google Drive. El prototipo ya funciona y ha recibido comentarios positivos de los evaluadores internos de la empresa. Ahora, el ingeniero de IA generativa quiere evaluar formalmente el rendimiento del sistema y determinar dónde enfocar sus esfuerzos para mejorarlo aún más.`,
    questionEn: `A Generative AI Engineer has created a RAG application which can help employees retrieve answers from an intemal knowledge base, such as Confluence pages or Google Drive. The prototype application is now working with some positive feedback from internal company testers. Now the Generative AI Enginger wants to formally evaluate the system's performance and understand where to focus thelr efforts to further improve the system. How should the Generative AI Engineer evaluate the system? ‘A. Use cosine similarity score to comprehensively evaluate the quality of the final generated answers.`,
    options: [
    {k:"A", html: `Utilice el índice de similitud del coseno para evaluar exhaustivamente la calidad de las respuestas finales generadas.`, htmlEn: ``},
    {k:"B", html: `Cree un conjunto de datos que permita probar por separado los componentes de recuperación y generación del sistema. Utilice las métricas de evaluación integradas de MLflow para evaluar dichos componentes. Más votado`, htmlEn: `Curate a dataset that can test the retrieval and generation components of the system separately. Use MLflow’s bullt In evaluation metrics to perform the evaluation ‘on the retrieval and generation components.`},
    {k:"C", html: `Compare el rendimiento de varios programas de Maestría en Derecho (LLM) con los mismos datos y seleccione el mejor programa para el trabajo.`, htmlEn: `Benchmark multiple LLMs with the same data and pick the best LLM for the job.`},
    {k:"D", html: `Utilice un LLM como juez para evaluar la calidad de las respuestas finales generadas.`, htmlEn: `Use an LLM-as-2judge to evaluate the quality of the final answers generated.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 36,
    question: `Un ingeniero de IA generativa ya ha entrenado un modelo LLM en Databricks y está listo para su implementación.`,
    questionEn: `‘A Generative AI Engineer has already trained an LLM on Databricks and it is now ready to be deployed Which of the following steps correctly outlines the easiest process for deploying a mode! on Databricks?`,
    options: [
    {k:"A", html: `Registre el modelo como un objeto pickle, cargue el objeto en Unity Catalog Volume, regístrelo en Unity Catalog usando MLflow e inicie un punto final de servicio.`, htmlEn: `Log the model as a pickle object, upload the object to Unity Catalog Volume, register it to Unity Catalog using MLflow, and start a serving endpoint`},
    {k:"B", html: `Registre el modelo usando MLflow durante el entrenamiento, registre directamente el modelo en el catálogo de Unity usando la API de MLflow e inicie un punto final de servicio. Más votado`, htmlEn: `Log the model using MLflow during training, directly register the model to Unity Catalog using the MLflow API, and start a serving endpoint (ENE)`},
    {k:"C", html: `Guarda el modelo junto con sus dependencias en un directorio local, crea la imagen de Docker y ejecuta el contenedor de Docker.`, htmlEn: `Save the model along with its dependencies in a local directory, build the Docker image, and run the Docker container`},
    {k:"D", html: `Envuelva la función de predicción del LLM en una aplicación Flask y utilícela con Gunicorn.`, htmlEn: `Wrap the LLM's prediction function into a Flask application and serve using Gunicom`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 37,
    question: `Un ingeniero de IA generativa desarrolló una aplicación LLM utilizando la API Foundation Model de rendimiento aprovisionado. Ahora que la aplicación está lista para su implementación, se da cuenta de que el volumen de solicitudes no es lo suficientemente alto como para crear su propio punto final de rendimiento aprovisionado. Desea elegir una estrategia que garantice la mejor relación costo-beneficio para su aplicación.`,
    questionEn: `‘A Generative AI Engineer developed an LLM application using the provisioned throughput Foundation Model API. Now that the application is ready to be deployed, they realize their volume of requests are not sufficiently high enough to create their awn provisioned throughput endpoint. They want to choose a strategy that ensures the best cost-effectiveness for their application. What strategy should the Generative AI Engineer use?`,
    options: [
    {k:"A", html: `Cambiar a modelos externos en su lugar.`, htmlEn: `Switch to using External Models instead`},
    {k:"B", html: `Implemente el modelo utilizando el pago por token, ya que viene con garantías de costos. Más votado`, htmlEn: `Deploy the model using pay-per-token throughput as it comes with cost guarantees (ESRI`},
    {k:"C", html: `Cambiar a un modelo con un menor número de parámetros para reducir los problemas de limitaciones de hardware.`, htmlEn: `Change to a model with a fewer number of parameters in order to reduce hardware constraint issues`},
    {k:"D", html: `Limite manualmente el lote de solicitudes entrantes para evitar problemas de limitación de velocidad.`, htmlEn: `Throttle the incoming batch of requests manually to avoid rate limiting issues`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 38,
    question: `Un ingeniero de IA generativa está desarrollando un modelo de lenguaje natural (MLN) para generar resúmenes de artículos en forma de poema, como un haiku, a partir del contenido del artículo. Sin embargo, el resultado inicial del MLN no coincide con el tono ni el estilo deseados.`,
    questionEn: `A Generative AI Engineer |s building an LLM to generate article summaries in the form of a type of poem, such as a haiku, given the article content. However, the initial output from the LLM does not match the desired tone or style. Which approach will NOT improve the LLM's response to achieve the desired response?`,
    options: [
    {k:"A", html: `Proporcione al LLM una indicación que le explique explícitamente que genere texto con el tono y estilo deseados.`, htmlEn: `Provide the LLM with a prompt that explicitly instructs it to generate text in the desired tone and style`},
    {k:"B", html: `Utilice un neutralizador para normalizar el tono y el estilo de los documentos subyacentes. Más votado`, htmlEn: `Use a neutralizer to normalize the tone and style of the underlying documents (EEYEE3`},
    {k:"C", html: `Incluya ejemplos de pocos disparos en la consigna del LLM.`, htmlEn: `Include few-shot examples in the prompt to the LLM`},
    {k:"D", html: `Ajustar el LLM en un conjunto de datos con el tono y estilo deseados.`, htmlEn: `Fine-tune the LLM on a dataset of desired tone and style`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 39,
    question: `Un ingeniero de IA generativa está creando una aplicación basada en LLM que necesitará acceso a noticias y cotizaciones bursátiles actualizadas.`,
    questionEn: `‘A Generative AI Engineer is creating an LLM-powered application that will need access to up-io<date news articles and stock prices. The design requires the use of stock prices which are stored in Delta tables and finding the latest relevant news articles by searching the internet How should the Generative AI Engineer architect their LLM system?`,
    options: [
    {k:"A", html: `Utilice un modelo lineal general (LLM) para resumir los artículos de noticias más recientes y busque los símbolos bursátiles en los resúmenes para encontrar los precios de las acciones.`, htmlEn: `Use an LLM to summarize the latest news articles and lookup stock tickers from the summaries to find stock prices.`},
    {k:"B", html: `Consultar la tabla Delta para obtener precios de acciones volátiles y utilizar un modelo lineal generalizado (LLM) para generar una consulta de búsqueda que permita investigar las posibles causas de la volatilidad de las acciones.`, htmlEn: `Query the Delta table for volatile stock prices and use an LLM to generate a search query to Investigate potential causes of the stock volatility.`},
    {k:"C", html: `Descarga y almacena artículos de noticias e información sobre precios de acciones en un almacén vectorial. Utiliza una arquitectura RAG para recuperar y generar información en tiempo de ejecución.`, htmlEn: `Download and store news articles and stock price Information in a vector store. Use a RAG architecture to retrieve and generate at runtime,`},
    {k:"D", html: `Crear un agente con herramientas para consultas SQL de tablas Delta y búsqueda web, y proporcionar los valores recuperados a un LLM para la generación de la respuesta. Más votado`, htmlEn: `Create an agent with tools for SQL querying of Delta tables and web searching, provide retrieved values to an LLM for generation of response. (NEED`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 40,
    question: `Un ingeniero de IA generativa está diseñando un chatbot para una empresa de videojuegos cuyo objetivo es interactuar con los usuarios en su plataforma mientras juegan videojuegos en línea.`,
    questionEn: `A Generative AI Engineer is designing a chatbot for 2 gaming company that aims to engage users on its platform while its users play online video games. Which metric would help them increase user engagement and retention for their platform?`,
    options: [
    {k:"A", html: `Aleatoriedad`, htmlEn: `Randomness`},
    {k:"B", html: `Diversidad de respuestas Más votado`, htmlEn: `Diversity of responses (ZENE`},
    {k:"C", html: `Falta de relevancia`, htmlEn: `Lack of relevance`},
    {k:"D", html: `Repetición de respuestas`, htmlEn: `Repetition of responses`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 41,
    question: `Una empresa cuenta con un chatbot típico de atención al cliente con algoritmo RAG en su sitio web.`,
    questionEn: `A company has a typical RAG enabled, customer facing chatbot on its website Select the correct sequence of components a user's questions will go through before the final output is retumed. Use the diagram above for reference ‘4. embedding model, 2.vector search, 3.context-augmented prompt, 4.response-generating LLM`,
    options: [
    {k:"A", html: `1. Modelo de incrustación, 2. Búsqueda vectorial, 3. Indicación con contexto aumentado, 4. Modelo lineal de aprendizaje (LLM) generador de respuestas. Más votado`, htmlEn: ``},
    {k:"B", html: `1. Indicación con contexto aumentado, 2. Búsqueda vectorial, 3. Modelo de incrustación, 4. Modelo lineal lógico (LLM) generador de respuestas.`, htmlEn: `1.context- augmented prompt, Z.vector search, J.embedding model, 4.response-generating LLM`},
    {k:"C", html: `1. LLM generador de respuestas, 2. búsqueda vectorial, 3. solicitud con contexto aumentado, 4. modelo de incrustación`, htmlEn: `1.response-generating LLM, 2.vector search, 3.context-augmented prompt, 4.embedding model`},
    {k:"D", html: `1. LLM generador de respuestas, 2. Indicación con contexto aumentado, 3. Búsqueda vectorial, 4. Modelo de incrustación`, htmlEn: `1.response-generating LLM, 2.context-augmented prompt, 3.vector search, 4.embedding model`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 42,
    question: `Un equipo busca implementar un modelo de generación de código que sirva de asistente para sus desarrolladores de software. Este modelo debe ser compatible con múltiples lenguajes de programación. La calidad es el objetivo principal.`,
    questionEn: `A team wants to serve a code generation model as an assistant for their software developers. It should support muttiple pragramming languages. Quality is the primary abjective. Which of the Databricks Foundation Mode! APIs, or models available in the Marketplace, would be the best fit? A Uama2-70b`,
    options: [
    {k:"A", html: `Llama2-70b`, htmlEn: ``},
    {k:"B", html: `BGE-grande`, htmlEn: `BEarge`},
    {k:"C", html: `MPT-7b`, htmlEn: `MPT 7D`},
    {k:"D", html: `CódigoLlama-34B Más votado`, htmlEn: `Codel lama-348 QTE)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 43,
    question: `Una empresa contrató un chatbot tipo ACS para seleccionar documentos de su sitio web. ¿Cuál de las siguientes sería la mejor forma de mejorar la precisión?`,
    questionEn: `A Generative AI Engineer Is buliding a RAG application that will rely on context retrieved from source documents that are currently in POF format. These PDFs can contain both text anc images, They want to develop a solution using the least amount of lines of code. Which Python package should be used to extract the text from the source documents?`,
    options: [
    {k:"A", html: `Crear un modelo de embedding personalizado con etiquetado semántico`, htmlEn: `flask 8, beautifuisoup`},
    {k:"B", html: `Implementar el modelo alojado en el párrafo nivel para mejorar por tabla`, htmlEn: ``},
    {k:"C", html: `Cambiar a un modelo con las mejores condiciones dimensionales`, htmlEn: `unstructured QEENEZ)`},
    {k:"D", html: `Implementar lógica de inclusión y exclusión accionable a nivel de preguntas`, htmlEn: `numpy`},
  ],
    correct: "A",
    voted: "A",
    explanation: `Los embeddings personalizados con etiquetado semántico permiten que el chatbot entienda mejor el contexto específico del dominio de la empresa, mejorando significativamente la relevancia de los documentos seleccionados.`,
    explanationEn: ``
  },
  {
    id: 44,
    question: `Un ingeniero de IA generativa recibió los siguientes requisitos comerciales para un chatbot externo.`,
    questionEn: `A Generalive AI Engineer received the following business requirements for an external chatbot The chatbot needs to know what types of questions the user asks and routes to appropriate models to answer the questions. For example, the user might ask about upcoming event details. Another user might ask about purchasing tickets for a particular event. What is an ideal workfiow for such a chatbot? ‘A. The chatbot should only look at previous event information`,
    options: [
    {k:"A", html: `El chatbot solo debe consultar la información de eventos anteriores.`, htmlEn: ``},
    {k:"B", html: `Debería haber dos chatbots diferentes que gestionen distintos tipos de consultas de los usuarios.`, htmlEn: `There should be two different chatbats handling ditterent types of user queries,`},
    {k:"C", html: `El chatbot debe implementarse como un flujo de trabajo LLM de varios pasos. Primero, se identifica el tipo de pregunta y luego se dirige al modelo apropiado. Si se trata de una pregunta sobre un evento próximo, se envía la consulta a un modelo de conversión de texto a SQL. Si se trata de la compra de entradas, el cliente debe ser redirigido a una plataforma de pago. Más votado`, htmlEn: `The chatbot should be implemented 2s 2 multi-step LLM workflow. First, identify the type of question asked, then route the question to the appropriate model. If it's an upcoming event question, send the query ta a text-to-SQL model. if it's about ticket purchasing, the customer should be redirected to a payment platform. [mes vsee}`},
    {k:"D", html: `El chatbot solo debe procesar pagos`, htmlEn: `The chatbot should only process payments`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 45,
    question: `Un ingeniero de IA generativa tiene la tarea de desarrollar una aplicación basada en un modelo de lenguaje grande (LLM) de código abierto. Necesita un LLM base con una ventana de contexto amplia.`,
    questionEn: `A Generative AI Engineer Is tasked with developing an application that Is based on an open source large language mode! (LLM). They need a foundation LLM with a large context window. Which model fits this need?`,
    options: [
    {k:"A", html: `DestiladorBERT`, htmlEn: `DistiIBERT 8, MPT-30B`},
    {k:"B", html: `MPT-30B`, htmlEn: ``},
    {k:"C", html: `Llama2-70B`, htmlEn: `Llama?-708 O. bbkx CEI)`},
    {k:"D", html: `DBRX Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 46,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación basada en LLM que realiza una importante tarea de transcripción (conversión de voz a texto). La velocidad es fundamental para el éxito de la aplicación.`,
    questionEn: `A Generative AI Engineer is building an LLM-based application that has an important transcription (speech-to-text) task. Speed is essential for the success of the application. Which open Generative AI models should be used?`,
    options: [
    {k:"A", html: `DBRX`, htmlEn: `DBRX`},
    {k:"B", html: `MPT-30B-Instrucciones`, htmlEn: `MPT-30B-instruct`},
    {k:"C", html: `Llama-2-70b-chat-hf`, htmlEn: `Llama-2-70b-chat hf`},
    {k:"D", html: `whisper-large-v3 (1.6B) Más votado`, htmlEn: `whisper-large-v3 (1.68) (EERIE)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 47,
    question: `Un ingeniero de IA generativa tiene un modelo de rendimiento configurado que sirve un punto final como parte de una aplicación RAG y desea monitorear las solicitudes entrantes y las respuestas salientes de dicho punto final.`,
    questionEn: `A Generative AI Engineer has @ provisioned throughput model serving endpoint as part of a RAG application and would like to monitor the serving endpoint’s incoming Fequests and outgoing responses. Which Databricks feature should they use?`,
    options: [
    {k:"A", html: `AutoML`, htmlEn: `AutoML`},
    {k:"B", html: `Búsqueda vectorial`, htmlEn: `Vector Search`},
    {k:"C", html: `Tablas de inferencia Más votado`, htmlEn: `Inference Tables (ZEEI0)`},
    {k:"D", html: `Presentación de funciones`, htmlEn: `Feature Serving`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 48,
    question: `Un ingeniero de IA generativa está decidiendo entre usar LSH (Locality Sensitive Hashing) y HNSW (Hierarchical Navigable Small World) para indexar su base de datos vectorial. Su máxima prioridad es la precisión semántica.`,
    questionEn: `A Generative AI Engineer is deciding between using LSH (Locality Sensitive Hashing) and HNSW (Hierarchical Navigable Small Viorld) tor indexing theit vector database. Their top priority is semantic accuracy. Which approach should the Generative AI Engineer use to evaluate these two techniques? ‘A. Compare the cosine similarities of the embeddings of returned results against those of a representative sample of test inputs (XR)`,
    options: [
    {k:"A", html: `Compare las similitudes del coseno de las incrustaciones de los resultados devueltos con las de una muestra representativa de entradas de prueba. Más votado`, htmlEn: ``},
    {k:"B", html: `Comparar las puntuaciones del Estudio de Evaluación Bilingüe (BLEU) de los resultados obtenidos para una muestra representativa de entradas de prueba.`, htmlEn: `Compare the Bilingual Evaluation Understudy (BLEU) scores of returned results for a representative sample of test inputs`},
    {k:"C", html: `Comparar las puntuaciones ROUGE (Recall-Oriented-Understudy for Gisting Evaluation) de los resultados devueltos para una muestra representativa de entradas de prueba.`, htmlEn: `Compare the Recall-Oriented-Understudy for Gisting Evaluation (ROUGE) scores of retumed results for a representative sample of test inputs`},
    {k:"D", html: `Compare las distancias de Levenshtein de los resultados devueltos con una muestra representativa de entradas de prueba.`, htmlEn: `Compare the Levenshitein distances of retumed results against a representative sample of test inputs`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 49,
    question: `Al desarrollar una aplicación LLM, es fundamental garantizar que los datos utilizados para entrenar el modelo cumplan con los requisitos de licencia para evitar riesgos legales.`,
    questionEn: `When developing an LLM application, it’s crucial to ensure that the data used for training the mode! complies with licensing requirements to avoid legal risks. Which action is most appropriate to avoid legal risks? ‘A. Only use data explicitly labeled with an open license and ensure the license terms are followed. ()`,
    options: [
    {k:"A", html: `Utilice únicamente datos etiquetados explícitamente con una licencia abierta y asegúrese de que se cumplan los términos de la licencia. Más votado`, htmlEn: ``},
    {k:"B", html: `Cualquier resultado de LLM es razonable utilizarlo porque no revela directamente las fuentes originales de los datos.`, htmlEn: `Any LLM outputs are reasonable to use because they do nol reveal the original sources of data directly.`},
    {k:"C", html: `Comuníquese directamente con los responsables de los datos para obtener su consentimiento por escrito para el uso de sus datos.`, htmlEn: `Reach out to the data curators directly to gain written consent for using their data.`},
    {k:"D", html: `Utilice cualquier dato disponible públicamente, ya que los datos públicos no tienen restricciones legales.`, htmlEn: `Use any publicly available cata as public data does not have legal restrictions.`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 50,
    question: `Un ingeniero de IA generativa interactúa con un modelo de aprendizaje automático (LLM) con capacidad de seguir instrucciones, entrenado con llamadas de clientes que consultan sobre la disponibilidad de un producto. El LLM debe mostrar "Éxito" si el producto está disponible o "Fallo" si no lo está.`,
    questionEn: `A Generative AI Engineer interfaces with an LLM with instruction following capabilites trained on customer calls inquiring about product availability. The LLM should output “Success” if the product Is available or “Fall” If not. Which prompt allows the enginger to receive call classification labels correctly?`,
    options: [
    {k:"A", html: `Eres un asistente servicial que lee las transcripciones de las llamadas de los clientes. Revisa la transcripción y piensa paso a paso si las consultas del cliente se resolvieron correctamente. Responde "Éxito" si es así; de lo contrario, responde "Fracaso".`, htmlEn: `You ate a helpful assistant that reads customer call transcripts. Walk through the transcript and think step-by-step if the customer's inquiries are addressed successfully. Answer "Success" if yes; otherwise, answer ‘Fail 8. You will be given @ customer call transcript where the customer asks about product availability. Classify the call as “Success” i the product is available and “Fail” if the product is unavallable, (XIRIID. You willbe given 2 customer call transcript where the customer asks about product avaitabilty. The outputs are either “Success” or “Fail", Format the output in JSON, for example: (‘cal.id*: "123°, “label: “Succes*). You will be given a customer call transcript. Answer “Success* If the customer call has been resolves successtully. Answer “Fall If the call Is redirected or if the question is not resolved.`},
    {k:"B", html: `Se le proporcionará una transcripción de una llamada de un cliente en la que este pregunta sobre la disponibilidad del producto. Clasifique la llamada como "Éxito" si el producto está disponible y como "Fallido" si no lo está. Más votado`, htmlEn: ``},
    {k:"C", html: `Se le proporcionará una transcripción de una llamada de un cliente que pregunta sobre la disponibilidad del producto. Los resultados serán "Éxito" o "Fallo". Formatee el resultado en JSON, por ejemplo: {"call_id": "123", "label": "Éxito"}.`, htmlEn: ``},
    {k:"D", html: `Se le proporcionará una transcripción de la llamada del cliente. Responda «Éxito» si la llamada se resolvió satisfactoriamente. Responda «Fallido» si la llamada se redirige o si la pregunta no se resuelve.`, htmlEn: ``},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 51,
    question: `¿Cuáles son los DOS componentes de la cadena necesarios para construir una aplicación de chat básica con capacidad LLM que incluya funciones conversacionales, recuperación de conocimiento y memoria contextual? (Elija dos).`,
    questionEn: `Which TWO chain components are required for building a basic LUM-enabled chat application that includes conversational capabilities, knowledge retrieval, and contextual memory? (Choose two.)`,
    options: [
    {k:"A", html: `Tiendas de vectores Más votado`, htmlEn: `Vector Stores (EXIT 8. Conversation Buffer Memory [XIII`},
    {k:"B", html: `Memoria intermedia de conversación Más votado`, htmlEn: ``},
    {k:"C", html: `Herramientas externas`, htmlEn: `External tools`},
    {k:"D", html: `Cargadores de chat`, htmlEn: `Chat loaders`},
    {k:"E", html: `Componentes de React`, htmlEn: `React Components`},
  ],
    correct: "AB",
    voted: "AB",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 52,
    question: `Un ingeniero de IA generativa ha escrito código PySpark escalable para procesar documentos PDF no estructurados y dividirlos en fragmentos para su posterior almacenamiento en un índice de Databricks Vector Search. Actualmente, las dos columnas de su dataframe incluyen el nombre del archivo original como una cadena de texto y una matriz con fragmentos de texto de dicho documento.`,
    questionEn: `A Generative AI Engineer has written scalable PySpark code to ingest unstructured PDF documents and chunk them in preparation for storing in a Databricks Vector Search index. Currently, the two columns of their dataframe include the original ename as a string and an array of text chunks from that document. What set of steps should the Generative AI Engineer perform to store the chunks in a ready-to-Ingest manner for Databricks Vector Search?`,
    options: [
    {k:"A", html: `Utilice el autocargador de PySpark para aplicar una UDF a todos los fragmentos, formateándolos en una estructura JSON para su ingesta por Vector Search.`, htmlEn: `Use PySpark's autoloader to apply @ UDF across all chunks, formatting them in a JSON structure for Vector Search ingestion 8. Flatten the dataframe to ane chunk per raw, create @ unique identifier far each row, and enable change feed on the output Delta table. (2ENII). Utilize the original ename as the unique identifier and save the dataframe as is.`},
    {k:"B", html: `Aplanar el marco de datos a un fragmento por fila, crear un identificador único para cada fila y habilitar la alimentación de cambios en la tabla Delta de salida. Más votado`, htmlEn: ``},
    {k:"C", html: `Utilice el nombre de archivo original como identificador único y guarde el dataframe tal cual.`, htmlEn: ``},
    {k:"D", html: `Cree un identificador único para cada documento, aplane el marco de datos a un fragmento por fila y guárdelo en una tabla Delta de salida.`, htmlEn: `Create @ unique identifier for each document, flatten the dataframe to one chunk per row and save to an output Delta table.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 53,
    question: `Se le pide a un ingeniero de IA generativa que desarrolle una aplicación LLM que destaque en la generación de código. Debe seleccionar un modelo entrenado específicamente para generar código.`,
    questionEn: `A Generative AI Engineer is asked to build an LLM application that would excel at code generation. They need to select a model that has been specifically trained to generate code. Which model would likely produce the best results out of the box?`,
    options: [
    {k:"A", html: `CodeLlama-34b-Instruct-hf Más votado`, htmlEn: `CodeLlame-34b-Instruct-nt (ERIE)`},
    {k:"B", html: `Mixtral-8x7B-v0.1`, htmlEn: `Mixtral 8x76-v0.1`},
    {k:"C", html: `Llama-2-70b-hf`, htmlEn: `Uama-2-70b-ht`},
    {k:"D", html: `mpt-7b-8k-instruct`, htmlEn: `mpt-7b-8k-instruct =`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 54,
    question: `Un ingeniero de IA generativa necesita diseñar un flujo de trabajo de aprendizaje automático (LLM) para realizar razonamientos en múltiples etapas que aprovechen herramientas externas. Para lograrlo, el LLM deberá planificar y adaptar sus acciones mientras realiza tareas de razonamiento complejas.`,
    questionEn: `A Generative AI Engineer needs to design an LLM pipeline to conduct multi-stage reasoning thal leverages external tools. To be effective at this, the LLM will need to plan and adapt actions while performing complex reasoning tasks. Which approach wil do this? ‘A Train the LLM to generate a single, comprehensive response without interacting with any external toals, relying solely on its presrained knowledge.`,
    options: [
    {k:"A", html: `Entrenar al LLM para que genere una respuesta única y completa sin interactuar con ninguna herramienta externa, basándose únicamente en su conocimiento preentrenado.`, htmlEn: ``},
    {k:"B", html: `Utilice una técnica de indicación de Cadena de Pensamiento (CoT) para guiar al LLM a través de una serie de pasos de razonamiento, y luego ingrese manualmente los resultados de herramientas externas para la respuesta final.`, htmlEn: `Use a Chain-of-Thought (CoT) prompting technique to guide the LLM through a series of reasoning steps, then manually input the results from external tools for the final answer.`},
    {k:"C", html: `Implementar un marco de trabajo como ReAct, que permite al LLM generar rastros de razonamiento y realizar acciones específicas para cada tarea, aprovechando herramientas externas si es necesario. Más votado`, htmlEn: `Implement 2 framework like ReA\ct, which allows the LLM to generate reasoning traces and perform task-specific actions that leveraye extemal tools if necessary.`},
    {k:"D", html: `Animar al LLM a realizar múltiples llamadas a la API en secuencia sin planificar ni estructurar las llamadas, permitiendo que el LLM decida cuándo y cómo utilizar herramientas externas de forma espontánea.`, htmlEn: `Encourage the LLM to make multiple API calls in sequence without planning or structuring the calls, allowing the LLM to decide when and how to use external tools spontaneously`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 55,
    question: `Un ingeniero está implementando un agente de IA que debe responder preguntas sobre noticias tecnológicas. Los documentos fuente contienen un cantidad significativa de contenido irrelevante. ¿Cuál sería el mejor enfoque?`,
    questionEn: `A Generative AI Enginger at an automotive company would like to build a question-answering chatbot for customers to inquire about their vehicles. They have a database containing various documents of different vehicle makes, their hardware parts, and common maintenance information. Which of the following components will NOT be useful in building such a chatbot? ‘A Invite users to submit long, rather than concise, questions (EXE)`,
    options: [
    {k:"A", html: `Usar un reranker para ordenar los documentos según su relevancia`, htmlEn: ``},
    {k:"B", html: `Modificar el prompt para indicar el LLM sobre los documentos según su puntuación de relevancia`, htmlEn: `Response-generating LLM`},
    {k:"C", html: `Usar un modelo diferente de incrustación para calcular las incrustaciones de documentos`, htmlEn: `Embedding mocel`},
    {k:"D", html: `Aumentar la cantidad de documentos agregados al prompt para mejorar la contexto relevancia`, htmlEn: `Vector database`},
  ],
    correct: "A",
    voted: "A",
    explanation: `Un reranker es una herramienta diseñada específicamente para clasificar documentos por relevancia en el contexto de la consulta, lo que mejora la precisión al filtrar contenido irrelevante antes de pasarlo al LLM.`,
    explanationEn: ``
  },
  {
    id: 56,
    question: `Un ingeniero de IA generativa está desarrollando un modelo de lenguaje natural (LLM) para generar titulares de artículos a partir del contenido de estos. Sin embargo, el resultado inicial del LLM no coincide con el tono ni el estilo deseados.`,
    questionEn: `A Generative A\l Engineer is building an LLM to generate article headlines given the article content. However, the initial output from the LLM does not match the desired tone or style Which approach would be most effective tor adjusting the LLMs response to achieve the desired response?`,
    options: [
    {k:"A", html: `Excluir los titulares de los artículos que no coincidan con el resultado deseado.`, htmlEn: `Exclude any article headlines that do nat match the desired output`},
    {k:"B", html: `Ajustar el LLM en un conjunto de datos con el tono y estilo deseados.`, htmlEn: `Fine-tune the LLM on 2 dataset of desired tone and style`},
    {k:"C", html: `Proporcione al LLM una indicación que le explique explícitamente que genere texto con el tono y estilo deseados. Más votado`, htmlEn: `Provide the LLM with a prompt that explicitly instructs it to generate text in the desired tone and style (ENE)`},
    {k:"D", html: `Todas las anteriores`, htmlEn: `All of the above`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 57,
    question: `Un ingeniero de IA generativa está creando un bot de atención al cliente que responda de forma diferente a cada usuario según el sentimiento expresado en su mensaje inicial. Por ejemplo, si el mensaje del usuario refleja enfado, el bot debería intentar atenuar su enfado mientras resuelve su consulta. Quieren asegurarse de que su enfoque siga las mejores prácticas.`,
    questionEn: `A Generative AI Engineer is creating a customer support bot that should respond differently to an end user based on the sentiment in their initial message. For example, if the end user's message was angry, the bot should try to de-escalate their negative sentiments as it solves the customer query. They want to make sure theit approach follows best practices, Which approach will 6o this?`,
    options: [
    {k:"A", html: `Utilice un modelo LLM basado únicamente en el codificador para detectar el sentimiento y generar respuestas en función del sentimiento detectado.`, htmlEn: `Use an encoder-only LLM model to both detect sentiment and generate replies based upon the detected sentiment.`},
    {k:"B", html: `Implementar una arquitectura RAG para determinar cómo responder a los usuarios en función del sentimiento detectado.`, htmlEn: `Implement a RAG architecture for haw to respond to users depending on detected sentiment,`},
    {k:"C", html: `Utilice un modelo de regresión lineal para clasificar el sentimiento y enviar el resultado a una solicitud del sistema para que el LLM responda.`, htmlEn: `Use linear regression model to classify sentiment and feed the result to & system prompt for the LLM to respond`},
    {k:"D", html: `Cree una cadena que primero utilice un LLM para clasificar el sentimiento y luego cambie el mensaje del sistema para la interacción del cliente LLM en función del sentimiento de la consulta inicial del cliente. Más votado`, htmlEn: `Create a chain which first uses an LLM to classity sentiment, then changes system prompt for the customer interaction LLM based upon the initial customer query sentiment. (20)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 58,
    question: `Un ingeniero de IA generativa está listo para implementar una aplicación LLM escrita con las API de Foundation Model. Desea seguir las mejores prácticas de seguridad para entornos de producción.`,
    questionEn: `A Generative AI Engineer is ready to deploy an LLM application written using Foundation Model APIs. They want to follow security best practices for production scenarios. Wmich authentication method should they choose?`,
    options: [
    {k:"A", html: `Utilice la autenticación de máquina a máquina OAuth.`, htmlEn: `Use OAuth machine-to-machine authentication`},
    {k:"B", html: `Utilice un token de acceso perteneciente a las entidades de servicio. Más votado`, htmlEn: `Use an access token belonging to service principals (ZEKE)`},
    {k:"C", html: `Utilice un token de acceso perteneciente a cualquier usuario del espacio de trabajo.`, htmlEn: `Use an access token belonging to any workspace user`},
    {k:"D", html: `Utilice un token de acceso que se rote con frecuencia y que pertenezca a un usuario del espacio de trabajo o a una entidad de servicio.`, htmlEn: `Use a frequently rotated access token belonging to elther a workspace user or a service principal`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 59,
    question: `Un ingeniero de IA generativa está desarrollando un sistema RAG para su empresa con el fin de realizar preguntas y respuestas internas sobre políticas de recursos humanos estructuradas, pero las respuestas obtenidas suelen ser incompletas y no estructuradas. Parece que el sistema de recuperación no devuelve todo el contexto relevante. El ingeniero ha experimentado con diferentes modelos de lógica descriptiva (LLM) para la incrustación y la generación de respuestas, pero esto no mejoró los resultados.`,
    questionEn: `A Generative AI Engineer is developing a RAG system for their company to perform internal document Q&A for structured HR pobicies, but the answers returned are frequently incomplete and unstructured. It seems that the retriever is nol returning all relevant context. The Generative AI Engineer has experimented with different embedding and response generating LLMs but that did not improve results. Wmich 170 options could be used to improve the response quality? (Choose two.)`,
    options: [
    {k:"A", html: `Agregue el encabezado de sección como prefijo a los bloques. Más votado`, htmlEn: `Add the section header as a prefix to chunks (EZ)`},
    {k:"B", html: `Divide el documento por oraciones.`, htmlEn: `Split the document by sentence`},
    {k:"C", html: `Utilice un modelo de incrustación más grande.`, htmlEn: `Use a larger embedding model`},
    {k:"D", html: `Aumentar el tamaño del fragmento del documento. Más votado`, htmlEn: `Increase the document chunk size (I)`},
    {k:"E", html: `Ajustar con precisión el modelo de generación de respuesta.`, htmlEn: `Fine tune the response generation model`},
  ],
    correct: "AD",
    voted: "AD",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 60,
    question: `Un ingeniero de IA generativa está desarrollando un sistema LLM listo para producción que responde directamente a los clientes. La solución utiliza la API del modelo Foundation mediante un flujo de datos aprovisionado. Les preocupa que el LLM pueda responder de forma tóxica o insegura. Además, desean que esto se logre con el mínimo esfuerzo.`,
    questionEn: `A Generative AI Engineer Is bullding @ production-ready LLM system which replies directly to customers, The solution makes use of the Foundation Model API via provisioned throughput. They are concerned that the LLM could potentially respond in & toxic ar otherwise unsafe way. They also wish to perform this with the least amount of effort Which approach will do this? ‘A. Ask users to report unsafe responses`,
    options: [
    {k:"A", html: `Solicitar a los usuarios que informen sobre respuestas inseguras.`, htmlEn: ``},
    {k:"B", html: `Aloje Llama Guard en la API del modelo Foundation y utilícelo para detectar respuestas no seguras. Más votado`, htmlEn: `Host Llama Guard on Foundation Model API and use it to detect unsafe responses. (EEIEE)`},
    {k:"C", html: `Agregue algunas llamadas LLM a su cadena para detectar contenido no seguro antes de devolver texto.`, htmlEn: `Add some LLM calls to their chain to detact unsafe content before returning text`},
    {k:"D", html: `Agregue una expresión regular a las entradas y salidas para detectar respuestas inseguras.`, htmlEn: `Add a regex expression on inputs and outputs to detect unsafe responses.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 61,
    question: `Un ingeniero de IA generativa necesita un modelo de lenguaje natural (LLM) para analizar y extraer la siguiente información: fecha, correo electrónico del remitente e ID del pedido. El resultado debe estar formateado en JSON. Aquí hay un ejemplo de correo electrónico:`,
    questionEn: `A Generative AI Cagincer would lik an LLM to parse and extract the following information: date, sender ema, and urdes ID. The output should ke formatted ints JSON, Here's an email sample: 2. You vil receive customer emalls 2d neecto extract cet. sender ema and orcer ID, Retum th exact Intormston in JSON tora. {cate "April 16, 2024", “sender_emall"sareh.Jee925agmall. com, “orcer Id"7RE98/D") CLETEED`,
    options: [
    {k:"A", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Devuelve la información extraída en un formato legible para humanos.`, htmlEn: ``},
    {k:"B", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Devuelve la información extraída en formato JSON.`, htmlEn: ``},
    {k:"C", html: `Recibirás correos electrónicos de clientes y deberás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Devuelve la información extraída en formato JSON. Aquí tienes un ejemplo: {"date":"16 de abril de 2024", "sender_email":" sarah.lee925@gmail.com ", "order_id":"RE987D"} Más votado`, htmlEn: ``},
    {k:"D", html: `Recibirás correos electrónicos de clientes y necesitarás extraer la fecha, el correo electrónico del remitente y el ID del pedido. Debes devolver la fecha, el correo electrónico del remitente y la información del ID del pedido en formato JSON.`, htmlEn: `You will receive customer emails and need to extract date, sender email, and order "You should return the date, sender email, and order (0 information in JSON tons`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 62,
    question: `Un ingeniero está creando una aplicación multiagente con modelos de lenguaje de distinto tamaño. ¿Cuál sería la mejor forma de aplicar la arquitectura?`,
    questionEn: `A Generative AI Coginees has buat an LUM based sysiem that will automaticaly translate uscr tex between two languages. They now want fo benchmark multiple LLMs con this task anc pick the best one. Ibey have an evaluaticn set with known high quality trenslation examples. They want to evaluate each LLM using the evaluation set with 3 perfoemant mst Which metric shauld they chonse for this eralustion? A BLEU metric CE 8. NDCS metric ©, ROUGE metic`,
    options: [
    {k:"A", html: `Usar modelos pequeños para tareas simples y modelos grandes para tareas complejas`, htmlEn: ``},
    {k:"B", html: `Usar siempre el modelo más grande disponible`, htmlEn: ``},
    {k:"C", html: `Usar siempre el modelo más pequeño disponible`, htmlEn: ``},
    {k:"D", html: `Usar el mismo modelo para todas las tareas`, htmlEn: `RECALL metric`},
  ],
    correct: "A",
    voted: "A",
    explanation: `Usar modelos de tamaño apropiado optimiza el costo y el rendimiento: modelos pequeños son rápidos y baratos para tareas simples, mientras que modelos grandes son necesarios para razonamiento complejo. Este enfoque mejora la eficiencia general del sistema.`,
    explanationEn: ``
  },
  {
    id: 63,
    question: `Un ingeniero de IA generativa está utilizando un modelo de lenguaje natural (LLM) para clasificar especies de hongos comestibles a partir de descripciones textuales de ciertas características. El modelo está arrojando resultados precisos en las pruebas y el ingeniero confía en tener la lista correcta de etiquetas posibles, pero la respuesta suele incluir razonamientos adicionales cuando el ingeniero solo desea obtener la etiqueta sin texto adicional.`,
    questionEn: `A Generative AI Coginese is using an LLM toclassify species of edible mushrooms based on vert descriptions of certain features. The model is reluming accurate responses In testing and the Generative AI Engineer's confident they have the correct list of possible labels, but the curput frequently contains additional ressoning In the answer when the Generatine Al Cagis only wants to return the label with mo aliional tex, Which 2etion should they take to elicit the Gesives behavior troen this LIM?`,
    options: [
    {k:"A", html: `Utilice indicaciones con pocos ejemplos para instruir al modelo sobre el formato de salida esperado. Más votado`, htmlEn: `Use few shat prompting to instruct the model on expected eutpult forrst CNET 8, Use zero shot prompting to Instruct the model on expected cutput format ©, Use zvro shot chain of thought prompting to prevent a verbose aulpet format`},
    {k:"B", html: `Utilice indicaciones de disparo cero para instruir al modelo sobre el formato de salida esperado.`, htmlEn: ``},
    {k:"C", html: `Utilice la sugerencia de cadena de pensamiento de disparo cero para evitar un formato de salida verboso.`, htmlEn: ``},
    {k:"D", html: `Utilice una indicación del sistema para que el modelo sea conciso en su respuesta.`, htmlEn: `Use a system peompt to Instruct the mode! to be succinct in its answer`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 64,
    question: `Un ingeniero de IA generativa colabora con una empresa minorista que busca mejorar la experiencia del cliente gestionando automáticamente las consultas más frecuentes. Están desarrollando una solución de IA basada en LLM que debería optimizar los tiempos de respuesta manteniendo una interacción personalizada. Quieren definir la entrada y la tarea LLM adecuadas para lograrlo.`,
    questionEn: `‘A Gonorative AI Engineer is working with a retail company that wants to enhance its Customer experience by automatically handing common customer inquries. They are Working on an LLM-powered Al solution thet should Improve response times while maintaining @ perscealized interaction. They want to define the appropriate Inout and LUM task ts do tis, Which inp? autpt pat wil do this?`,
    options: [
    {k:"A", html: `Entrada: Registros de chat de atención al cliente; Salida: Agrupar los registros de chat por usuarios, seguido de un resumen de las interacciones de cada usuario y, finalmente, responder. Más votado`, htmlEn: `Input: Qastome service chat logs: Qutput: Groep the cst lags by ust, followed ty summarizing each user's interactions, thee respond CEI)`},
    {k:"B", html: `Entrada: Registros de chat de atención al cliente; Salida: Encuentra las respuestas a preguntas similares y responde con un resumen.`, htmlEn: `Input: Customer service chat fogs; Output: Ind the answers to similar questions and respond with a summary 6. Input: Customer reviews; Output: Classify review sentiment`},
    {k:"C", html: `Entrada: Reseñas de clientes; Salida: Clasificación del sentimiento de las reseñas`, htmlEn: ``},
    {k:"D", html: `Entrada: Reseñas de clientes; Salida: Agrupar las reseñas por usuarios y agregar la calificación promedio por usuario, luego responder`, htmlEn: `Input: Customer reviews: Cutout Group the reviews by users and aggregate per-uses average rating, then respond`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 65,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación RAG y desea experimentar con diferentes modelos de incrustación para mejorar su rendimiento.`,
    questionEn: `A Generative AI Engineer is developing a RAG application and would like to experiment with different embedding models to improve the application performance. Which strategy for picking an embedding model should they choose?`,
    options: [
    {k:"A", html: `Elija un modelo de incrustación con soporte multilingüe para dar respuesta a posibles preguntas de usuarios multilingües.`, htmlEn: `Pick an embedding model with multilingual support to support potential muftlingual user questions`},
    {k:"B", html: `Elija el programa LLM abierto más reciente y de mejor rendimiento lanzado hasta el momento.`, htmlEn: `Pick the most recent and most pertormant open LLM released at the time`},
    {k:"C", html: `Seleccione un modelo de incrustación entrenado con conocimientos del dominio relacionado. Más votado`, htmlEn: `Pick an embedding model trained on retated domain knowledge EIRII`},
    {k:"D", html: `Elija el modelo de incrustación mejor clasificado en la tabla de posiciones del Massive Text Embedding Benchmark (MTEB) alojada por HuggingFace.`, htmlEn: `Pick the embedding madel ranked highest an the Massive Text Embedding Benchmark (MMTEB) leaderboard hosted by HuggingF ace`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 66,
    question: `Un ingeniero de IA generativa desea que sus modelos LLM optimizados, ubicados en su espacio de trabajo de producción de Databricks, estén disponibles para pruebas también en su espacio de trabajo de desarrollo. Todos sus espacios de trabajo están habilitados para Unity Catalog y actualmente registran sus modelos en el Registro de Modelos de MLflow.`,
    questionEn: `‘A Generative AI Engineer wants their finetuned LLMs in theit prod Databricks workspace available for testing in thei dev workspace as well. All of theit workspaces are Unity Catalog enabled end they are currently logging their models into the Model Registry in MLflow. What is the most cost-effective and secure option for the Generative AI Engineer to accomplish thelr goal? ‘A Use an external model registry which can be accessed from all workspaces.`,
    options: [
    {k:"A", html: `Utilice un registro de modelos externo al que se pueda acceder desde todos los espacios de trabajo.`, htmlEn: ``},
    {k:"B", html: `Utilice MLflow para registrar el modelo directamente en Unity Catalog y habilite el acceso de LECTURA al modelo en el espacio de trabajo de desarrollo. Más votado`, htmlEn: `Use MLilow to log the model directly into Unity Catalog, and enable READ access in the dev workspace to the model. (EEN)`},
    {k:"C", html: `Configure una canalización de entrenamiento duplicada en el entorno de desarrollo, de modo que haya un modelo idéntico disponible en dicho entorno.`, htmlEn: `Setup a cupiicate training pipeline in dev, so that an identical model is available in dev.`},
    {k:"D", html: `Configurar un script para exportar el modelo desde producción e importarlo a desarrollo.`, htmlEn: `Setup a script to export the model from prod and import It to dev.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 67,
    question: `Un ingeniero de IA generativa acaba de implementar una aplicación LLM en una empresa manufacturera para ayudar a responder consultas de servicio al cliente. Necesita identificar las métricas empresariales clave para monitorear la aplicación en producción.`,
    questionEn: `‘A Generative AI Engineer has just deployed an LLM application at a manufacturing company that assists with answering customer service inquiries. They need to identity the key enterprise metrics to monitor the application in production Which is NOT a metric they will implement for their customer service LLM application in production? ‘A. Massive Multi-task language Understanding (MMU) score [XSI`,
    options: [
    {k:"A", html: `Puntuación de comprensión masiva del lenguaje multitarea (MMLU). Más votado`, htmlEn: ``},
    {k:"B", html: `Número de consultas de clientes procesadas por unidad de tiempo`, htmlEn: `Number of customer inquiries processed per unit of time`},
    {k:"C", html: `Exactitud de la respuesta`, htmlEn: `Factual accuracy of the response`},
    {k:"D", html: `Tiempo que tarda LLM en generar una respuesta`, htmlEn: `Time taken for LLM to generate a response`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 68,
    question: `Un ingeniero de IA generativa está ayudando a un cine a ampliar el chatbot de su sitio web para que pueda responder preguntas sobre los horarios de las películas que se proyectan actualmente en su sala local. Ya disponen de la ubicación del usuario, proporcionada por los servicios de localización a su agente, y de una tabla Delta que se actualiza continuamente con la información más reciente sobre los horarios por ubicación. Quieren implementar esta nueva funcionalidad en su aplicación RAG.`,
    questionEn: `Generative AI Engineer Is helping a cinema extend Its website's chat bot to be able to respond to questions about specific showtimes for movies currently playing at thelr local theater. They already have the location of the user provided by location services to their agent, and a Delta table which is continually updated with the latest ‘showtime information by location. They want to implement this new capability in their RAG application. Which option will do this with the least effort and in the mast performant way?`,
    options: [
    {k:"A", html: `Cree un punto final de servicio de características a partir de una especificación de características que haga referencia a una tienda en línea sincronizada desde la tabla Delta. Consulte el punto final de servicio de características como parte de la lógica del agente o la implementación de la herramienta. Más votado`, htmlEn: `Create a Feature Serving Endpoint from a FeatureSpec thal references an online store synced from the Delta table. Query the Feature Serving Endpoint as part of the agent logic / tool implementation. (ESTEE)`},
    {k:"B", html: `Consultar la tabla Delta directamente mediante una consulta SQL construida a partir de la entrada del usuario utilizando un LLM de texto a SQL en la lógica del agente / implementación de la herramienta.`, htmlEn: `Query the Delta table directly via a SQL query constructed from the user's input using @ lext-to-SQL LLM in the agent logic / tool implementation.`},
    {k:"C", html: `Configure una tarea en Databricks Workflows para escribir periódicamente la información de la tabla Delta en una base de datos externa como MySQL y consultar la información desde allí como parte de la lógica del agente / implementación de la herramienta.`, htmlEn: `Set up a task in Databricks Workfows to write the information in the Delta table periodically to an external database such as MySQL and query the information from there as part of the agent logic / tool implementation.`},
    {k:"D", html: `Escriba el contenido de la tabla Delta en una columna de texto, luego incruste esos textos utilizando un modelo de incrustación y almacénelos en el índice del vector. Consulte la información basándose en la incrustación como parte de la lógica del agente o la implementación de la herramienta.`, htmlEn: `Write the Delta table contents to a text column, then embed those texts using an embedding model and store these in the vector index. Look up the information based on the embedding as part of the agent logic / tool implementation.`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 69,
    question: `Un ingeniero de IA generativa necesita crear una aplicación LLM capaz de comprender documentos médicos, incluidos los de reciente publicación. Desea seleccionar un modelo abierto disponible en el centro de modelos de HuggingFace.`,
    questionEn: `Generative AI Engineer needs to build an LLM application that can understand medical documents, including recently published ones, They want to select an open model available on HuggingFace’s model hub. Which step is most appropriate for selecting an LLM?`,
    options: [
    {k:"A", html: `Elija cualquier modelo de la familia Mistral, ya que los modelos Mistral son adecuados para todo tipo de casos de uso.`, htmlEn: `Pick any model in the Mistral family, as Mistral models are good with all types of use cases`},
    {k:"B", html: `Seleccione un modelo en función del mayor número de descargas, ya que esto indica popularidad, fiabilidad y adecuación general.`, htmlEn: `Select a model based on the highest number of downloads, as this indicates popularity, reliability, ané general suitability`},
    {k:"C", html: `Seleccione el modelo que se haya subido más recientemente, ya que esto indica que el modelo es el más nuevo y, por lo tanto, el que tiene mayor probabilidad de ofrecer el mejor rendimiento.`, htmlEn: `Select a model that is most recently uploaded, as this indicates the model is the newest and highly likely to be the most performant`},
    {k:"D", html: `Compruebe la descripción del modelo y de los datos de entrenamiento para identificar si el modelo se ha entrenado con algún dato médico. Más votado`, htmlEn: `Check for the mode! and training data description to identify if the model is trained on any medical data. (RII) =`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 70,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación RAG que responde preguntas sobre artículos de noticias tecnológicas. Los documentos fuente pueden contener una cantidad significativa de contenido irrelevante, como anuncios, noticias deportivas o de entretenimiento.`,
    questionEn: `Generative AI Engineer is building a RAG application that answers questions about technology-related news articles. The source documents may contain a significant amount of irrelevant content, such as advertisements, sports news, or entertainment news. Which approach is NOT acvisable for buliding a RAG application focused on answering technology-oniy questions? ‘A Include in the system promat that the application is nat supposed to answer any questions unrelated to technology.`,
    options: [
    {k:"A", html: `Incluya en el mensaje del sistema que la aplicación no debe responder preguntas que no estén relacionadas con la tecnología.`, htmlEn: ``},
    {k:"B", html: `Filtrar los artículos de noticias irrelevantes en el proceso de recuperación.`, htmlEn: `Filter out irrelevant news articles in the retrieval process.`},
    {k:"C", html: `Conserva todos los artículos de noticias porque la aplicación RAG necesita comprender el contenido no tecnológico para evitar responder preguntas sobre ellos. Más votado`, htmlEn: `Keep all news articles because the RAG application needs to understanc non-technological content to avoid answering questions about them. (ZEXETE) O. Filter out irrelevant news articles in the upstream document database.`},
    {k:"D", html: `Filtrar los artículos de noticias irrelevantes en la base de datos de documentos de origen.`, htmlEn: ``},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 71,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación RAG que se basará en el contexto extraído de documentos fuente en formato HTML. Su objetivo es crear una solución con la menor cantidad de líneas de código posible.`,
    questionEn: `A Generative A\l Engineer is building @ RAG application that will rely on context retrieved from source documents that are currently in HTML format. They want to develop 2 solution using the least amount of lines of code Which Python package should be used to extract the text from the source documents?`,
    options: [
    {k:"A", html: `pytesseract`, htmlEn: `pytesseract`},
    {k:"B", html: `numpy`, htmlEn: `numpy`},
    {k:"C", html: `pypdf2`, htmlEn: `pynat2. beautifulsoup`},
    {k:"D", html: `sopa hermosa Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 72,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación RAG para responder a las preguntas de los empleados sobre las políticas de la empresa.`,
    questionEn: `A Generative AI Engineer is bullding a RAG application for answering employee questions on company policies. What are the steps needed to build this RAG application and deploy it?`,
    options: [
    {k:"A", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> El usuario envía consultas a un LLM -> El LLM recupera los documentos relevantes -> Evaluar el modelo -> El LLM genera una respuesta -> Implementarla usando Model Serving`, htmlEn: `Ingest documents from a source -> Index the documents and saves to Vector Search > User submits queries against an LLM > LLM retrieves relevant Gocuments > Evaluate model -> LLM generates a response > Deploy it using Model Serving 8. User submits queries against an LLM -> Ingest documents from a source > index the documents and save to Vector Search > LLM retrieves relevant documents > LLM generates a response -> Evaluate model -> Deploy it using Model Serving`},
    {k:"B", html: `El usuario envía consultas a un LLM -> Ingiere documentos de una fuente -> Indexa los documentos y los guarda en Vector Search -> El LLM recupera los documentos relevantes -> El LLM genera una respuesta -> Evalúa el modelo -> Lo implementa usando Model Serving`, htmlEn: ``},
    {k:"C", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> Evaluar el modelo -> Implementarlo mediante Model Serving -> El usuario envía consultas a un LLM -> El LLM recupera los documentos relevantes -> El LLM genera una respuesta`, htmlEn: `Ingest documents trom a source -> Index the documents and save to Vector Search -> Evaluate model -> Deploy it using Model Serving > User submits queries against an LLM -> LLM retrieves relevant documents -> LLM generates a response`},
    {k:"D", html: `Ingerir documentos de una fuente -> Indexar los documentos y guardarlos en Vector Search -> El usuario envía consultas a un LLM -> El LLM recupera los documentos relevantes -> El LLM genera una respuesta -> Evaluar el modelo -> Implementarlo mediante Model Serving Más votado`, htmlEn: `Ingest documents from a source > Index the documents and save to Vector Search > User submits queries against an LLM > LLM retrieves relevant documents -> LLM generates a response > Evaluate model -> Deploy it using Mode! Serving (EEN)`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 73,
    question: `Un ingeniero de IA generativa que estaba creando un prototipo de sistema LLM ejecutó accidentalmente miles de consultas de inferencia en un punto final del modelo Foundation durante el fin de semana. Quiere tomar medidas para evitar que esto vuelva a suceder involuntariamente en el futuro.`,
    questionEn: `A Generative AI Engineer who was prototyping an LLM system accidentally ran thousands of inference queries against a Foundation Model endpoint over the weekend. They want to Lake action to prevent this from unintentionally happening again in the future, What action should they take?`,
    options: [
    {k:"A", html: `Utilice ingeniería de avisos para instruir a los puntos finales de LLM para que rechacen demasiadas consultas posteriores.`, htmlEn: `Use prompt engineering to instruct the LLM endpoints to refuse too many subsequent queries`},
    {k:"B", html: `Exigir que todo el código de desarrollo que interactúe con un punto final del Modelo de Fundación sea revisado por un ingeniero de nivel Staff antes de su ejecución.`, htmlEn: `Require that all development code which interfaces with a Foundation Model endpoint must be reviewed by a Staff level engineer before execution.`},
    {k:"C", html: `Cree un modelo pyfunc que actúe como proxy para el punto final del modelo Foundation y agregue limitación de velocidad dentro del modelo pyfune.`, htmlEn: `Build a pyfunc model which proxies to the Foundation Madel endpoint and add throttling within the pyfune model Configure rate limiting on the Foundation Mode! endpoints, (IRI`},
    {k:"D", html: `Configure la limitación de velocidad en los puntos finales del modelo Foundation. Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 74,
    question: `Un ingeniero de IA generativa está configurando una búsqueda vectorial en Databricks que buscará artículos de noticias por tema dentro de los 10 días posteriores a la fecha especificada. Un ejemplo de consulta podría ser: «Infórmenme sobre noticias de monster trucks alrededor del 5 de enero de 1992». Quieren lograrlo con el mínimo esfuerzo. ¿`,
    questionEn: `A Generative AI Engineer is setting up a Databricks Vector Search that will lookup news articles by topic within 10 days of the date specified. An example query might be “Tell me about monster truck news around January Sth 1992°. They want to do this with the least amount of effort How can they set up their Vector Search index to support this use case?`,
    options: [
    {k:"A", html: `Cree índices separados por tema y agregue un modelo clasificador para seleccionar adecuadamente el mejor índice.`, htmlEn: `Create separate indexes by topic and add a classifier model to appropriately pick the best index. 8. Include metadata columns for article date and topic to support metadata tering,`},
    {k:"B", html: `Incluir columnas de metadatos para la fecha y el tema del artículo para admitir el filtrado de metadatos. Más votado`, htmlEn: ``},
    {k:"C", html: `Pasar la consulta directamente al índice de búsqueda vectorial y devolver los mejores artículos.`, htmlEn: `Pass the query directly to the vector search index and return the best articies, 0. Split articles by 10 day blocks and return the black closest to the query.`},
    {k:"D", html: `Dividir los artículos en bloques de 10 días y devolver el bloque más cercano a la consulta.`, htmlEn: ``},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 75,
    question: `Un ingeniero de IA generativa desarrolló una aplicación LLM utilizando la API del modelo Foundation de pago por token. Ahora que la aplicación está lista para su implementación, desea asegurarse de que el punto final del modelo pueda gestionar un alto volumen de solicitudes entrantes en producción.`,
    questionEn: `A Generative AI Engineer developed an LLM application using the pay-per-token Foundation Model API. Now that the application is ready to be deployes, they would like to ensure the mode! endpoint can serve high incoming volumes of requests in production. What should the Generative AI Engineer consider?`,
    options: [
    {k:"A", html: `Cambiar a modelos externos en su lugar.`, htmlEn: `Switch to using External Models instead 8. Throttle the incoming batch of requests manually to avoid rate limiting issues`},
    {k:"B", html: `Limite manualmente el lote de solicitudes entrantes para evitar problemas de limitación de velocidad.`, htmlEn: ``},
    {k:"C", html: `Cambiar a un modelo con un menor número de parámetros para reducir los problemas de limitaciones de hardware.`, htmlEn: `Change to a model with a fewer number of parameters in order to reduce hardware constraint issues 0. Deploy the model using provisioned throughput as It comes with performance quarantees (IEINZI)`},
    {k:"D", html: `Implemente el modelo utilizando el rendimiento aprovisionado, ya que incluye garantías de rendimiento. Más votado`, htmlEn: ``},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 76,
    question: `Un ingeniero de IA generativa de una empresa de electrodomésticos recibió el encargo de diseñar una aplicación basada en LLM que cumpliera el siguiente objetivo comercial: responder a las preguntas de los clientes sobre electrodomésticos utilizando los manuales de instrucciones correspondientes.`,
    questionEn: `A Generative AI Engineer at a home appliance company has been asked to design an LLM based application that accomplishes the following business objective: answer customer questions on home appliances using the associated instruction inanuals. Which set of high-level tasks should the Generative AI Engineer's system perform?`,
    options: [
    {k:"A", html: `Divida los manuales de instrucciones en fragmentos e incorpórelos a un almacén vectorial. Utilice la pregunta para recuperar los fragmentos del manual que mejor coincidan y use el modelo LLM para generar una respuesta al usuario basada en el manual recuperado. Más votado`, htmlEn: `Split instruction manuals into chunks and embed into a vector store, Use the question to retrieve best matched chunks of manual, and use the LLM to generate a response to the user based upon the manual retrieved. CEERI) 8. Create an interaction matrix of historical user questions and appliance instruction manuals. Use ALS to factorize the matrix and create embeddings. Calculate the embeddings of new queries and use them to find the best manual. Use an LLM to generate a response to the question based upon the manual retrieved,`},
    {k:"B", html: `Cree una matriz de interacción de preguntas históricas de usuarios y manuales de instrucciones de electrodomésticos. Utilice ALS para factorizar la matriz y crear incrustaciones. Calcule las incrustaciones de nuevas consultas y utilícelas para encontrar el mejor manual. Utilice un LLM para generar una respuesta a la pregunta basándose en el manual recuperado.`, htmlEn: ``},
    {k:"C", html: `Calcular las incrustaciones promedio para cada manual de instrucciones, comparar las incrustaciones con la consulta del usuario para encontrar el mejor manual. Pasar el mejor manual junto con la consulta del usuario a un LLM con una ventana de contexto amplia para generar una respuesta para el empleado.`, htmlEn: `Calculate averaged embeddings for each instruction manual, compare embeddings to user query to find the best manual. Pass the best manual with user query into an LLM with a large context window to generate a response to the employee. D_ Use an LLM to summatize all of the instruction manuals. Provide summaries of each manual and user query into an LLM with a large context window to generate a response to the user.`},
    {k:"D", html: `Utilice un LLM para resumir todos los manuales de instrucciones. Proporcione resúmenes de cada manual y la consulta del usuario en un LLM con una ventana de contexto amplia para generar una respuesta al usuario.`, htmlEn: ``},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 77,
    question: `Un ingeniero de IA generativa está desarrollando una aplicación LLM para interactuar con los usuarios y ofrecer recomendaciones de películas personalizadas.`,
    questionEn: `A Generative AI Engineer is developing an LLM application to interact with users to provide personalized movie recommendations. Given the potential for malicious user inputs, which technique would be most effective in safeguarding the application?`,
    options: [
    {k:"A", html: `Reducir el tiempo que los usuarios pueden interactuar con el LLM.`, htmlEn: `Reduce the time that the users can interact with the LLM`},
    {k:"B", html: `Aumentar la capacidad de procesamiento del LLM para procesar la entrada más rápidamente.`, htmlEn: `Increase the amount of compute that powers the LLM to process input faster`},
    {k:"C", html: `Pídale al LLM que le recuerde al usuario que la entrada es maliciosa, pero que continúe la conversación con el usuario.`, htmlEn: `Ask the LLM to remind the user that the input is malicious but continue the conversation with the user`},
    {k:"D", html: `Implementar un filtro de seguridad que detecte cualquier entrada dañina y solicitar al LLM que responda que no puede ayudar. Más votado`, htmlEn: `linplement a safety ter that detects any harmful inputs and ask the LLM to respond that it is unable to assist (EERE) fs se`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 78,
    question: `Un ingeniero de IA generativa recibió los siguientes requisitos comerciales para un chatbot interno. El chatbot debe identificar el tipo de preguntas que formula el usuario y dirigirlas a los modelos adecuados para responderlas. Por ejemplo, un usuario podría preguntar sobre las tasas históricas de fallas de una pieza eléctrica específica. Otro usuario podría preguntar cómo solucionar problemas con un equipo eléctrico.`,
    questionEn: `‘A Generative AI Engineer received the following business requirements for an internal chathot. The internal chatbot needs to know what types of questions the user asks and route them to appropriate models to answer the questions. For example, the user might ask about historical failure rates of a specific electrical part. Another user might ask about how to troubleshoot a piece of electrical equipment, Available data sources include a database of electrical equipment POF manuals anc also a table with information on when an electrical part experiences failure Which workflow supports such a chatbot?`,
    options: [
    {k:"A", html: `Analizar los manuales en PDF de los equipos eléctricos y convertirlos en una tabla de pares de preguntas y respuestas. De esta forma, el mismo chatbot podrá consultar fácilmente las tablas para responder preguntas sobre las tasas históricas de fallos y la resolución de problemas de los equipos.`, htmlEn: `Parse the electrical equinment PDF manuals into a table of question and response palrs. That way, the same chathot can query tables easily to answer questions about both historical failure rates and equipment troubleshooting, 8. The chatbot should be implemented as a multistep LLM workflow. First, identity the type of question asked, then route the question to the appropriate model. I it's a historical failure rate question, send the query to @ tex!-40-SOL model. If i's a troubleshooting question, then send the query to another model that summarizes the equipment specific document and generates the response, (EIZI`},
    {k:"B", html: `El chatbot debe implementarse como un flujo de trabajo LLM de varios pasos. Primero, identifique el tipo de pregunta y luego diríjala al modelo apropiado. Si se trata de una pregunta sobre la tasa histórica de fallas, envíe la consulta a un modelo de conversión de texto a SQL. Si se trata de una pregunta de resolución de problemas, envíe la consulta a otro modelo que resuma el documento específico del equipo y genere la respuesta. Más votado`, htmlEn: ``},
    {k:"C", html: `Debería haber dos chatbots diferentes que gestionen distintos tipos de consultas de los usuarios.`, htmlEn: `There should be two different chatbots handling ditterent types of user queries.`},
    {k:"D", html: `La tabla con las fallas de las piezas eléctricas debe convertirse primero en un documento de texto. De esta manera, el mismo chatbot podrá utilizar el mismo proceso de recuperación de documentos para generar respuestas independientemente del tipo de pregunta.`, htmlEn: `The table with electrical part failures should be converted into a text document first. That way, the same chatbot can use the same document retrieval process to ‘generate answers regardless of question types.`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 79,
    question: `Un ingeniero de IA generativa está desarrollando un sistema que responderá preguntas sobre temas de actualidad. Para ello, recopila información de diversas fuentes, como artículos y publicaciones en redes sociales. Le preocupa que las publicaciones tóxicas en redes sociales puedan generar resultados negativos en su sistema.`,
    questionEn: `A Generative AI Engineer is bullding a system that will answer questions on currently unfolding news topics. As such, It pulls information from a vartety of sources including articles and social media posts. They are concemed about toxic posts on social media causing toxic outputs fram their system. ‘Wihich guardrail will limit toxic outputs? ‘A. Reduce the amount of context items the system will include in consideration for its response.`,
    options: [
    {k:"A", html: `Reducir la cantidad de elementos de contexto que el sistema incluirá en consideración para su respuesta.`, htmlEn: ``},
    {k:"B", html: `Utilice únicamente cuentas de redes sociales y noticias aprobadas para evitar que información tóxica inesperada llegue al programa LLM. Más votado`, htmlEn: `Use only approved social media and news accounts to prevent unexpected toxic data from getting to the LLM. CEXZI)`},
    {k:"C", html: `Registre todas las respuestas del sistema LLM y realice un análisis de toxicidad por lotes mensualmente.`, htmlEn: `Log all LLM system responses and perform a hatch toxicity analysis monthly. 0. Implement rate limiting.`},
    {k:"D", html: `Implementar la limitación de velocidad.`, htmlEn: ``},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 80,
    question: `Un ingeniero de IA generativa ha creado una aplicación RAG que ayuda a los empleados a interpretar la documentación de recursos humanos. El prototipo ya funciona y ha recibido comentarios positivos de los evaluadores internos de la empresa. Ahora, el ingeniero de IA generativa quiere evaluar formalmente el rendimiento del sistema y determinar dónde enfocar sus esfuerzos para mejorarlo aún más.`,
    questionEn: `A Generative AI Engineer has created a RAG application which can help employees interpret HR Gocumentation. The prototype application is now working with some positive feedback from internal company testers. Now the Generative AI Engineer wants ta formally evaluate the system's performance and understand where to facus their efforts to further improve the system How should the Generative /\l Engineer evaluate the system?`,
    options: [
    {k:"A", html: `Utilice la puntuación ROUGE para evaluar exhaustivamente la calidad de las respuestas finales generadas.`, htmlEn: `Use ROUGE score to comprehensively evaluate the quality of the final generated answers.`},
    {k:"B", html: `Utilice un LLM como juez para evaluar la calidad de las respuestas finales generadas.`, htmlEn: `Use an LLM-as-2-judge to evaluate the quality of the frial answers generated.`},
    {k:"C", html: `Crea un conjunto de datos que permita probar por separado los componentes de recuperación y generación del sistema. Utiliza las métricas de evaluación integradas de MLflow para evaluar dichos componentes. Más votado`, htmlEn: `Curate a dataset that can test the retrieval and generation components of the system separately. Use MLflow’s built in evaluation metnes to perform the evaluation ‘on the retrieval ane generation components. (INIT`},
    {k:"D", html: `Comparar varios programas de maestría en derecho (LLM) con los mismos datos y elegir el mejor programa para el trabajo.`, htmlEn: `Benchmark muttiple LLMs with the same data and pick the Dest LLM for the job.`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 81,
    question: `Un ingeniero de IA generativa está utilizando LangChain para ayudar a un museo a clasificar documentos y está usando este código:`,
    questionEn: ``,
    options: [
    {k:"A", html: `Proporcione un argumento LLM a PromptTemplate().`, htmlEn: `Provide an LLM argument to PromptTemplate(} 8. Provide template and LLM arguments to PromptTemplatet)`},
    {k:"B", html: `Proporcione la plantilla y los argumentos LLM a PromptTemplate().`, htmlEn: ``},
    {k:"C", html: `Omita PromptTemplate(), solo se utiliza para plantillas de varias partes.`, htmlEn: `Omit Prompt! emplate(), 't 's onty used tor multi-part templates`},
    {k:"D", html: `Proporcione un argumento de plantilla a PromptTemplate().`, htmlEn: `Provide 3 template argument to ’rempt lemptate()`},
  ],
    correct: "D",
    voted: "D",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 82,
    question: `Un ingeniero de IA generativa ha estado revisando problemas con el asistente de preguntas y respuestas basado en LLM de su empresa y ha determinado que una técnica llamada encadenamiento de indicaciones podría ayudar a mitigar algunos problemas de rendimiento. Sin embargo, para sugerir esto a su equipo, debe explicar claramente cómo funciona y cómo puede beneficiar al asistente.`,
    questionEn: `A Generative AI Engineer has been reslewing issues with their company’s LLM based question-ansmering assistant and has determined that a techirique called prompt chaining oocld help alleviate some pertormence concems. However, to Saggest this to their team, they hwve to clearly explain how it weeks and how it can benef their Question answuing assistant Which explanation da they communicate te the tess?`,
    options: [
    {k:"A", html: `Permite dividir tareas complejas en múltiples subtareas independientes. Esto posibilita que el asistente genere respuestas más completas y precisas.`, htmlEn: `It allows you to break down complex tasks into multiple independent sudtasks, This enables the assistant to generate more comprehensive and accurate retpenses 8. It allows you 10 reduce the latency of your applications. By having multiple chains participating in the response as 4 chain, you Increase the rate at which the response is generated`},
    {k:"B", html: `Permite reducir la latencia de tus aplicaciones. Al tener varias cadenas participando en la respuesta como una sola, aumentas la velocidad a la que se genera la respuesta.`, htmlEn: ``},
    {k:"C", html: `Permite disminuir el esfuerzo necesario para crear una consigna. Las cadenas permiten reutilizar el texto de la consigna en diferentes casos de uso.`, htmlEn: `talons you to decresse the eto involved in crafting & prompt. Cains meke it possible to reuse prompt txt scross mutipl citferent use cases`},
    {k:"D", html: `Reduce el costo promedio de una solicitud típica. Las cadenas hacen un uso más eficiente de los tokens producidos para generar respuestas de mayor calidad con menos tokens.`, htmlEn: `reduces the sverage cost ofa typical request. Chains make more eMicient use of he tokens peduced to generate igher quality responses with fewer tokens.`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 83,
    question: `Un ingeniero está compilando documentos para una aplicación RAG que responde preguntas sobre productos de seguimiento. Los documentos vienen en varios formatos: PDF, Word, imágenes escaneadas y HTML. ¿Cuál es el mejor enfoque?`,
    questionEn: `An Al developer Inam wants to fine ture an oper weight mocel to hare exceptions! performanct: an 2 cnle generation ust case. They are tying to choose: the best mute Which TWO medel attributes and metncs should the team focus on to make ther selection? (Choose two.)`,
    options: [
    {k:"A", html: `Utilizar beautifulsoup para extraer el texto de todos los archivos`, htmlEn: `Big Code Models Leaderboard 8. Number of model parameters`},
    {k:"B", html: `Utilizar extractores de texto nativos de cada formato`, htmlEn: ``},
    {k:"C", html: `Usar una herramienta de conversión como Unstructured`, htmlEn: `MIEB Leadetboars`},
    {k:"D", html: `Usar OCR para todos los documentos`, htmlEn: `Chatbot Area Leaderboard F Narrber of matlel downass! marth`},
  ],
    correct: "C",
    voted: "C",
    explanation: `Herramientas como Unstructured están diseñadas específicamente para manejar múltiples formatos de documentos (PDF, Word, imágenes, HTML) y extraer el contenido de manera consistente, preservando la estructura y significado del texto.`,
    explanationEn: ``
  },
  {
    id: 84,
    question: `Un ingeniero de IA generativa de una empresa automotriz desea crear un chatbot de preguntas y respuestas para ayudar a los clientes a resolver dudas específicas sobre sus vehículos. Disponen de:`,
    questionEn: `They have; + A catalog with hundreds of thousands of cars manufactured since the 1960s = Descriptions of thelr own cars in multiple languages They have sireacy selected an open acurce LLM and created a test set of user Queries. They need to discard techniques thet will not help them bul the chatbot`,
    options: [
    {k:"A", html: `Ajustar el tamaño del fragmento para que coincida con la ventana de contexto del modelo para maximizar la cobertura. Más votado`, htmlEn: ``},
    {k:"B", html: `Implementación de filtrado de metadatos basado en modelos y años de automóviles`, htmlEn: ``},
    {k:"C", html: `Ajuste fino de un modelo de incrustación en terminología automotriz`, htmlEn: `Fine-tuning an embedding model on automotive termrotogy. 0. Accing tew-shot examotes tor response generation`},
    {k:"D", html: `Agregar ejemplos con pocos disparos para la generación de respuestas`, htmlEn: ``},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 85,
    question: `Un ingeniero de IA generativa de un bufete de abogados está diseñando un sistema RAG para analizar precedentes legales históricos. El sistema necesita procesar millones de sentencias judiciales y documentos legales, ya organizados por fecha y tema, para rastrear cómo han evolucionado las interpretaciones de leyes específicas a lo largo del tiempo. Todos estos documentos están en texto plano. El ingeniero debe elegir un método de segmentación que preserve de la manera más eficaz la continuidad y la naturaleza temporal de los casos.`,
    questionEn: `‘A.Generative AI Engineer al a legal firm is designing @ RAG system to analyze historical legal case precedents. The system needs to process millions of court opinions and legal documents, already organized by time and topic, to track haw interpretations of spectfic laws have evolved aver time. All of these Cacuments are In plain-text. The engineer needs to choose a chunking method that would most effectively preserve continuily and the temporal nature of the cases. ‘Which method da they chonse?`,
    options: [
    {k:"A", html: `Implementar la función de resumen por ventanas con fragmentos superpuestos. Más votado`, htmlEn: `Implement windowed summarization with oveslapping chunks. (EI`},
    {k:"B", html: `Implementar una estructura de árbol jerárquica, como RAPTOR, para agrupar conceptos legales similares.`, htmlEn: `Impiement a hierarchical tree structure, like RAPTOR, to group similar legal concepts`},
    {k:"C", html: `Implementar incrustaciones a nivel de párrafo con cada fragmento.`, htmlEn: `Implement paragraph level embeddings with each chunk.`},
    {k:"D", html: `Implementar incrustaciones a nivel de oración con cada fragmento etiquetado con la hora para permitir el filtrado de metadatos.`, htmlEn: `Implement sentence level embeddings with each chunk tagged with the time to enable metadata tering.`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 86,
    question: `Un ingeniero de IA generativa está desarrollando un sistema de agentes utilizando una popular biblioteca de creación de agentes. El agente consta de múltiples cadenas paralelas y secuenciales. El ingeniero se enfrenta a dificultades cuando el agente falla en uno de los pasos, lo que dificulta la depuración de la causa raíz. Necesita encontrar un enfoque adecuado para investigar este problema y descubrir la causa del fallo.`,
    questionEn: `A Generative AI Engineer is developing an agent system using a popular agent authosing library. The agent comprises muttile paaiel and sequential chains, The engineer encounters challenges as the ayent fails at one of the steps, inaking it cfficult to debug the rgot cause, They need to find an appropriate approach to research this Issue and discover the cause of failure. ‘Which approach do they choose? ‘A Enable MLflow tracing to gain visibility into each agent's behavior and execution step.`,
    options: [
    {k:"A", html: `Habilite el rastreo de MLflow para obtener visibilidad del comportamiento y los pasos de ejecución de cada agente. Más votado`, htmlEn: ``},
    {k:"B", html: `Ejecute MLflow.evaluate para determinar la causa raíz del paso fallido.`, htmlEn: `Run MLflow.evaluate to determine root cause of failed step.`},
    {k:"C", html: `Implementar un registro estructurado dentro del código del agente para capturar información detallada de la ejecución.`, htmlEn: `Implement structured logging within the agent's code to capture detailed execution information.`},
    {k:"D", html: `Descomponga el agente en pasos independientes para simplificar la depuración.`, htmlEn: `Deconstruct the agent into independent steps to simplify debugging.`},
  ],
    correct: "C",
    voted: "C",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 87,
    question: `Un ingeniero de IA generativa está experimentando con el uso de parámetros para configurar un agente en Mosaic Agent Framework. Sin embargo, tiene dificultades para que el agente responda con información relevante con esta configuración.`,
    questionEn: `‘A Generative AI Engineer is experimenting with using parameters to configure an agent in Mosaic Agent Framework. However, they are struggling to get the agent to ‘respond with relevant information with this configuration: config_dict = "prompt_template": "You are a trivia bot. Generate a trivia question based on the user's input.", “nodel_serving endpoint": “databricks-dbrx-instruct", “Lim_ parameters": ("temperature": 0.01, "max_tokens": 500), Which error is causing the problem? A The prompt does not parse the user's input vars`,
    options: [
    {k:"A", html: `El mensaje no analiza las variables de entrada del usuario.`, htmlEn: ``},
    {k:"B", html: `La solicitud no establece el esquema del recuperador.`, htmlEn: `The prompt does not set the retriever schema. The prompt does not list available agents for the LLM to call 1, The peompt Is nat wrapped in ChatMtadel`},
    {k:"C", html: `El mensaje no enumera los agentes disponibles para que el LLM llame.`, htmlEn: ``},
    {k:"D", html: `La solicitud no está envuelta en ChatModel.`, htmlEn: ``},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 88,
    question: `Un ingeniero de IA generativa está utilizando LangGraph para definir varias herramientas en una única aplicación de agentes. Su objetivo es que el orquestador principal, LLM, decida por sí mismo qué herramientas son las más adecuadas para una solicitud dada. Para ello, debe determinar el flujo general del código.`,
    questionEn: `‘A Generative AI Engineer is using LangGraph to define multiple toots in a single agentic application. They want to enable the main orchestrator LLM to decide on its own which tonis are most appropriate to call for a given prampt. To do this, they must determine the general flaw at the code. Which sequence will do this? ‘41. Define or import the tools 2. Add tools and LLM to the agent 3. Create the Refct agent`,
    options: [
    {k:"A", html: `1. Definir o importar las herramientas. 2. Agregar herramientas y LLM al agente. 3. Crear el agente ReAct.`, htmlEn: ``},
    {k:"B", html: `1. Defina o importe las herramientas. 2. Defina el agente. 3. Inicialice el agente con ReAct, el LLM y las herramientas. Más votado`, htmlEn: `1. Define or import the tools 2. Define the agent 3. inivalize the agent with Re/ct, the LLM, and the tools CEEXII`},
    {k:"C", html: `1. Definir las herramientas 2. Cargar cada herramienta en un agente separado 3. Indicar al LLM que utilice ReAct para llamar al agente apropiado`, htmlEn: `1. Define the tools 2. Load each tou! into a separate ayent 3. Instruct the LUM to use ReAct to call the appropriate agent`},
    {k:"D", html: `1. Definir las herramientas dentro de los agentes 2. Cargar los agentes en el LLM 3. Instruir al LLM para que utilice el razonamiento CoT para determinar el agente apropiado`, htmlEn: `1. Define the tools inside the agents 2, Load the agents into the LLM 3. Instruct the LLM to use CoT reasoning to determine the appropriate agent`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 89,
    question: `Todas las siguientes son API de Python que se utilizan para consultar los modelos de la base de datos Databricks. Al ejecutarse en un cuaderno interactivo, ¿cuál de las siguientes bibliotecas no utiliza automáticamente las credenciales de la sesión actual?`,
    questionEn: `All of the following are python APIs used to query Databricks foundation models. When running In an interactive notebook, which of the following libraries does not automatically use the current session credentials?`,
    options: [
    {k:"A", html: `Cliente de OpenAI`, htmlEn: `OpenAl client`},
    {k:"B", html: `API REST mediante la biblioteca requests Más votado`, htmlEn: `REST API via requests library CEN`},
    {k:"C", html: `SDK de implementaciones de MLflow`, htmlEn: `MLflow Deployments SDK`},
    {k:"D", html: `SDK de Python de Databricks`, htmlEn: `Databricks Python SDK`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 90,
    question: `Un ingeniero de IA generativa está implementando un modelo LLM optimizado para clientes en su sitio web público. Dada la gran inversión realizada por la empresa en la optimización de este modelo y la naturaleza propietaria de los datos de optimización, les preocupan los ataques de inversión de modelos.`,
    questionEn: `A Generative AI Engineer is deploying a customer-facing, fine-tuned LLM on their public website, Given the large investment the company put into fine tuning this model, and the proprietary nature of the tuning Gata, they are concerned about model inversion attacks. Which of the following Databricks Al Security Framework (DASF) risk mitigation strategies are most relevant to this use case?`,
    options: [
    {k:"A", html: `Implementar medidas de seguridad de IA para permitir a los usuarios configurar y hacer cumplir el cumplimiento.`, htmlEn: `Implement Al guardrails to allow users to configure and enforce compliance 8. Leverage Databricks access control ists (ACLs) to configure permissions for accessing models (EINE`},
    {k:"B", html: `Utilice las listas de control de acceso (ACL) de Databricks para configurar los permisos de acceso a los modelos. Más votado`, htmlEn: ``},
    {k:"C", html: `Utilice funciones de modelo seguras con Databricks Feature Store.`, htmlEn: `Use secure model features with Databeicks Feature Store`},
    {k:"D", html: `Aplicar controles de acceso basados ​​en atributos (ABAC) para limitar el acceso no autorizado.`, htmlEn: `Apply attribute-based access controls (ABAC) to limit unauthorized access`},
  ],
    correct: "B",
    voted: "B",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 91,
    question: `Un equipo utiliza Mosaic AI Vector Search para recuperar documentos para su canalización de Generación Aumentada por Recuperación (RAG). La consulta de búsqueda devuelve cinco documentos relevantes, y los tres primeros se añaden a la solicitud como contexto. La evaluación del rendimiento con Agent Evaluation muestra que algunos documentos recuperados de menor rango tienen puntuaciones de relevancia contextual más altas que los documentos de mayor rango.`,
    questionEn: `‘A team uses Mosaic Al Vector Search to retrieve documents for their Retrieval-Augmented Generation (RAG) pipeline. The search query returns five relevant documents, ‘and the first three are added to the prompt as context. Performance evaluation with Agent Evaluation shows that some lower-ranked retrieved documents have higher context relevancy scores than higher-ranked documents, Which option should the team consider to optimize this workflow?`,
    options: [
    {k:"A", html: `Utilice un reordenador para ordenar los documentos según sus puntuaciones de relevancia.`, htmlEn: `Use a reranker to order the documents based on the relevance scores,`},
    {k:"B", html: `Modifique la consigna para indicar al LLM que ordene los documentos en función de las puntuaciones de relevancia.`, htmlEn: `Modify the promp! to instruct the LLM to order the documents based on the relevance scares.`},
    {k:"C", html: `Utilice un modelo de incrustación diferente para calcular las incrustaciones de documentos.`, htmlEn: `Use a different embedding model for computing document embeddings.`},
    {k:"D", html: `Aumentar el número de documentos añadidos a la consigna para mejorar la relevancia del contexto.`, htmlEn: `Increase the number of Gocuments added to the prompt to improve context relevance.`},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  },
  {
    id: 92,
    question: `Un ingeniero de IA generativa está implementando un agente de IA creado con la interfaz ChatAgent de MLflow para el sistema de atención al cliente de una empresa minorista en Databricks. El agente debe gestionar miles de consultas diarias, y el ingeniero necesita monitorizar su rendimiento y calidad en tiempo real para garantizar que cumpla con los acuerdos de nivel de servicio.`,
    questionEn: `A generative Al engineer is deploying an Al agent authored with MLflow’s ChatAgent interface for a retail company’s customer support system on Databricks. The agent ‘must handle thousands of inquiries daily, and the engineer needs to track its performance and quality in realtime to ensure it meets service level agreements, Which metrics are automatically captured by default and made available for monitoring when the agent is deployed using the Mosaic Al Agent Framework?`,
    options: [
    {k:"A", html: `Métricas operativas como el volumen de solicitudes, la latencia y los errores. Más votado`, htmlEn: `Operational metrics like request volume, latency, and errors (2)`},
    {k:"B", html: `Indicadores de calidad como la corrección y el cumplimiento de las directrices.`, htmlEn: `Quality metrics like correctness and guideline adherence`},
    {k:"C", html: `Métricas tanto operativas como de calidad`, htmlEn: `Both operational and quality metrics 0. No metrics are automatically captured`},
    {k:"D", html: `No se capturan métricas automáticamente.`, htmlEn: ``},
  ],
    correct: "A",
    voted: "A",
    explanation: ``,
    explanationEn: ``
  }
];
