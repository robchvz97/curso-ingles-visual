/* Contenido del curso — interfaz en español, contenido en inglés */
window.COURSE = [];
window.COURSE.push({
id:'a1',n:1,cefr:'A1',name:'Básico',emoji:'🌱',color:'#1a9e5c',color2:'#4cc9a0',
desc:'Tus primeros pasos: saludos, el verbo "to be", artículos, vocabulario esencial y preguntas simples.',
topics:[
{icon:'👋',title:'Greetings & Introductions',html:'<p>Saludar depende del momento del día y del nivel de formalidad.</p>',
 cards:[['🌅','Good morning','Buenos días (hasta 12pm)'],['☀️','Good afternoon','Buenas tardes (12–6pm)'],['🌙','Good evening','Buenas noches (al llegar)'],['😴','Good night','Buenas noches (al despedirse)'],['🙋','Hi / Hello','Hola'],['👋','Bye / See you!','Adiós / ¡Nos vemos!']],
 diagram:`   FORMAL 🎩                 INFORMAL 😎
   Good morning.             Hi! / Hey!
   How do you do?            How's it going?
   Nice to meet you.         Nice to meet ya!
   Goodbye.                  See ya! / Bye!`,
 examples:[['Hello! My name is Ana.','¡Hola! Me llamo Ana.'],['Nice to meet you.','Mucho gusto.'],['How are you? — I\'m fine, thanks.','¿Cómo estás? — Bien, gracias.'],['Where are you from? — I\'m from Mexico.','¿De dónde eres? — Soy de México.']],
 tip:'"Good night" solo se usa para <b>despedirse</b> o ir a dormir, nunca para saludar.'},
{icon:'🔤',title:'Alphabet & Numbers',html:'<p>Las vocales en inglés suenan distinto al español. ¡Cuidado con A, E, I!</p>',
 table:[['Letra','Suena como','Letra','Suena como'],['A','"ei"','E','"i"'],['I','"ai"','O','"ou"'],['U','"iu"','G','"yi"'],['J','"yei"','H','"eich"'],['W','"dábliu"','Y','"uai"']],
 cards:[['1️⃣','one','1'],['2️⃣','two','2'],['3️⃣','three','3'],['🔟','ten','10'],['1️⃣3️⃣','thirteen','13 (-teen)'],['3️⃣0️⃣','thirty','30 (-ty)'],['💯','one hundred','100'],['🎉','one thousand','1,000']],
 examples:[['My phone number is five-five, three-two, one-eight.','Mi número es 55 32 18.'],['How do you spell your name? — M-A-R-I-A.','¿Cómo se deletrea tu nombre?'],['I am twenty-five years old.','Tengo 25 años.']],
 tip:'En inglés la edad se dice con <b>be</b>: "I <b>am</b> 25", no "I have 25".'},
{icon:'🧱',title:'Verb "to be" (ser/estar)',html:'<p>El verbo más importante: significa <b>ser</b> y <b>estar</b>.</p>',
 table:[['Sujeto','➕ Afirmativo','➖ Negativo','❓ Pregunta'],['I','I am (I\'m)','I\'m not','Am I?'],['You','You are (You\'re)','You aren\'t','Are you?'],['He/She/It','He is (He\'s)','He isn\'t','Is he?'],['We','We are (We\'re)','We aren\'t','Are we?'],['They','They are (They\'re)','They aren\'t','Are they?']],
 diagram:`        I ──► AM
  He/She/It ──► IS
 You/We/They ──► ARE`,
 examples:[['I am a student.','Soy estudiante.'],['She is happy today.','Ella está feliz hoy.'],['They are not at home.','Ellos no están en casa.'],['Is it cold? — Yes, it is.','¿Hace frío? — Sí.']]},
{icon:'🅰️',title:'Articles: a / an / the',
 cards:[['🍎','an apple','"an" antes de sonido vocal'],['🐶','a dog','"a" antes de sonido consonante'],['⏰','an hour','h muda → an'],['🎓','a university','suena "yu" → a'],['☀️','the sun','"the" = algo único/específico']],
 diagram:`   ¿Es uno cualquiera? ── sí ──► a / an
          │
          no (específico, ya mencionado, único)
          ▼
         THE`,
 examples:[['I have a cat. The cat is black.','Tengo un gato. El gato es negro.'],['She is an engineer.','Ella es ingeniera.'],['The moon is beautiful.','La luna es hermosa.']],
 tip:'Las profesiones llevan artículo en inglés: "I am <b>a</b> doctor".'},
{icon:'🎨',title:'Basic Vocabulary: family, colors, food',
 html:'<h4>🌳 Mapa mental: FAMILY</h4>',
 diagram:`                 grandparents 👴👵
                        │
        uncle/aunt ── parents 👨👩 ── in-laws
                        │
     cousin ──── ME 🙂 ──── brother/sister
                        │
                 children 👦👧 (son/daughter)`,
 cards:[['🔴','red','rojo'],['🔵','blue','azul'],['🟢','green','verde'],['🟡','yellow','amarillo'],['🍞','bread','pan'],['🥛','milk','leche'],['🍗','chicken','pollo'],['🍚','rice','arroz']],
 examples:[['My mother is a teacher.','Mi madre es maestra.'],['I like green apples.','Me gustan las manzanas verdes.'],['My brother has a red car.','Mi hermano tiene un coche rojo.']],
 tip:'El adjetivo va <b>antes</b> del sustantivo: "a <b>red</b> car", no "a car red".'},
{icon:'❓',title:'Simple Questions (Wh- words)',
 table:[['Palabra','Significado','Ejemplo'],['What','Qué / Cuál','What is your name?'],['Where','Dónde','Where are you from?'],['Who','Quién','Who is she?'],['When','Cuándo','When is your birthday?'],['How','Cómo','How are you?'],['How old','Qué edad','How old are you?']],
 diagram:`  WH-word + BE + sujeto + ... ?
  Where   + is + Tom     + ?     → Where is Tom?`,
 examples:[['What is your favorite color?','¿Cuál es tu color favorito?'],['Who is your teacher?','¿Quién es tu maestro?'],['How old is your sister?','¿Cuántos años tiene tu hermana?']]}
],
writing:[
{prompt:'Preséntate: di tu nombre, tu edad y de dónde eres.',hint:'Usa "My name is…", "I am … years old", "I am from…".',min:8,sample:'Hello! My name is Carlos. I am 30 years old and I am from Mexico.',
 checks:[{label:'Dices tu nombre (my name is / I am / I\'m)',any:['my name is',/ i am | i'm /]},{label:'Dices tu edad (years old)',any:['years old',/ \d+ /]},{label:'Dices tu origen (from)',any:['from']}]},
{prompt:'Describe a un miembro de tu familia con el verbo "to be" y un color o adjetivo.',hint:'"My sister is…", "She is tall", "Her car is blue".',min:6,sample:'My sister is a doctor. She is very kind and her car is blue.',
 checks:[{label:'Mencionas un familiar',any:['mother','father','sister','brother','mom','dad','grandmother','grandfather','son','daughter','aunt','uncle','cousin','wife','husband']},{label:'Usas is / are',any:[' is ',' are ',"she's","he's"]}]},
{prompt:'Escribe dos frases usando "a", "an" y "the".',hint:'"I have an apple. The apple is red."',min:6,sample:'I have a dog and an umbrella. The dog is small.',
 checks:[{label:'Usas "a"',any:[' a ']},{label:'Usas "an"',any:[' an ']},{label:'Usas "the"',any:[' the ']}]},
{prompt:'Escribe dos preguntas con palabras Wh- (What, Where, Who, How…).',hint:'"What is your name? Where are you from?"',min:6,sample:'What is your name? Where do you live?',
 checks:[{label:'Usas una palabra interrogativa',any:['what','where','who','when','how','why']},{label:'Usas el verbo be o do',any:[' is ',' are ',' am ',' do ',' does ']}]}
],
quiz:[
{q:'Choose the correct form: "She ___ a teacher."',o:['am','is','are','be'],a:1,e:'He/She/It → IS.'},
{q:'"___ apple a day keeps the doctor away."',o:['A','An','The','—'],a:1,e:'"apple" empieza con sonido vocal → AN.'},
{q:'Which greeting is used to say goodbye at night?',o:['Good evening','Good morning','Good night','Good afternoon'],a:2,e:'"Good night" se usa al despedirse.'},
{q:'"They ___ not at school."',o:['is','am','are','be'],a:2,e:'They → ARE.'},
{q:'How do you say 13?',o:['thirty','thirteen','three-ten','threeteen'],a:1,e:'13 = thirteen (-teen); 30 = thirty (-ty).'},
{q:'"___ are you from?" — "I\'m from Peru."',o:['What','Who','Where','When'],a:2,e:'Origen/lugar → WHERE.'},
{q:'Correct sentence:',o:['I have 20 years.','I am 20 years.','I am 20 years old.','I have 20 years old.'],a:2,e:'La edad se expresa con BE: I am 20 (years old).'},
{q:'"My mother\'s mother is my…"',o:['aunt','grandmother','cousin','sister'],a:1,e:'La madre de tu madre es tu grandmother.'},
{q:'Choose the correct order:',o:['a car red','a red car','red a car','car a red'],a:1,e:'Adjetivo antes del sustantivo.'},
{q:'"___ is your birthday?" — "In May."',o:['Where','Who','When','How'],a:2,e:'Tiempo → WHEN.'},
{q:'"She is ___ engineer."',o:['a','an','the','—'],a:1,e:'"engineer" empieza con sonido vocal → AN.'},
{q:'Negative of "He is tired":',o:['He not is tired.','He isn\'t tired.','He don\'t tired.','He aren\'t tired.'],a:1,e:'Negativo: is not / isn\'t.'}
]});

window.COURSE.push({
id:'a2',n:2,cefr:'A2',name:'Elemental',emoji:'🌿',color:'#0e86c7',color2:'#53c1f0',
desc:'Rutinas, acciones en progreso, el pasado, comparaciones, verbos modales y situaciones cotidianas.',
topics:[
{icon:'🔁',title:'Present Simple vs Present Continuous',
 table:[['','Present Simple','Present Continuous'],['Uso','Rutinas, hechos','Acción ahora / temporal'],['Forma','I work / She works','I am working'],['Negativo','I don\'t work / She doesn\'t work','I\'m not working'],['Pregunta','Do you work? / Does she work?','Are you working?'],['Señales','always, usually, every day','now, right now, at the moment']],
 diagram:`  SIMPLE:      ●───●───●───●───►   (siempre/a menudo)
  CONTINUOUS:          [■■■]         (ahora mismo)
                        NOW`,
 examples:[['I usually drink coffee, but today I am drinking tea.','Normalmente tomo café, pero hoy estoy tomando té.'],['She works in a bank.','Ella trabaja en un banco.'],['Look! It is raining.','¡Mira! Está lloviendo.']],
 tip:'He/She/It en presente simple lleva <b>-s</b>: she work<b>s</b>, he watch<b>es</b>, it stud<b>ies</b>.'},
{icon:'⏪',title:'Past Simple: regular & irregular',
 cards:[['✅','work → worked','regular (-ed)'],['💃','dance → danced','regular (-d)'],['📚','study → studied','y → ied'],['🏃','go → went','irregular'],['👀','see → saw','irregular'],['🍽️','eat → ate','irregular'],['🛒','buy → bought','irregular'],['✍️','write → wrote','irregular']],
 diagram:`  ➕ I played / I went
  ➖ I did not (didn't) play / go     ← el verbo vuelve a base
  ❓ Did you play? / Did you go?`,
 examples:[['I visited my grandmother yesterday.','Visité a mi abuela ayer.'],['We went to the beach last summer.','Fuimos a la playa el verano pasado.'],['Did you see the movie? — No, I didn\'t.','¿Viste la película? — No.']],
 tip:'Con <b>did</b> el verbo va en forma base: "Did you <b>go</b>?" nunca "Did you went?".'},
{icon:'⚖️',title:'Comparatives & Superlatives',
 table:[['Adjetivo','Comparativo','Superlativo'],['tall','taller than','the tallest'],['big','bigger than','the biggest'],['happy','happier than','the happiest'],['expensive','more expensive than','the most expensive'],['good','better than','the best'],['bad','worse than','the worst']],
 diagram:`  🐭 small   <   🐶 smaller?  NO →  🐭 is smaller than 🐶
  🐘 is the biggest of all  🏆`,
 examples:[['My brother is taller than me.','Mi hermano es más alto que yo.'],['This is the best pizza in town.','Esta es la mejor pizza de la ciudad.'],['Gold is more expensive than silver.','El oro es más caro que la plata.']]},
{icon:'🛠️',title:'Modals: can, must, should',
 cards:[['💪','can','habilidad / permiso'],['🚫','can\'t','no poder'],['⚠️','must','obligación fuerte'],['⛔','mustn\'t','prohibición'],['💡','should','consejo'],['🙅','shouldn\'t','consejo negativo']],
 diagram:`  Modal + VERBO BASE (sin "to", sin -s)
  She can swim.   ✅      She cans swim. ❌   She can to swim. ❌`,
 examples:[['I can speak two languages.','Puedo hablar dos idiomas.'],['You must wear a seatbelt.','Debes usar cinturón.'],['You should drink more water.','Deberías beber más agua.']]},
{icon:'🧮',title:'Countable & Uncountable',
 table:[['','Contable 🍎','Incontable 💧'],['Ejemplos','apple, chair, book','water, rice, money, information'],['¿Cuántos?','How many apples?','How much water?'],['Pocos','a few books','a little milk'],['Muchos','many cars','much time (neg/preg)'],['Algunos','some / any eggs','some / any bread']],
 examples:[['How much money do you have?','¿Cuánto dinero tienes?'],['There are a few eggs in the fridge.','Hay unos cuantos huevos en el refri.'],['Is there any milk?','¿Hay leche?']],
 tip:'"Information", "advice" y "news" son incontables: "some advice", no "an advice".'},
{icon:'🛍️',title:'Everyday Situations',
 cards:[['☕','Ordering','Can I have a coffee, please?'],['🗺️','Directions','How do I get to the station?'],['🏨','Hotel','I have a reservation.'],['🛒','Shopping','How much is this?'],['🏥','Doctor','I have a headache.'],['📞','Phone','Can I speak to Mr. Smith?']],
 examples:[['Excuse me, where is the nearest bank?','Disculpe, ¿dónde está el banco más cercano?'],['Turn left and go straight on.','Gira a la izquierda y sigue derecho.'],['Could I have the bill, please?','¿Me trae la cuenta, por favor?']]}
],
writing:[
{prompt:'Describe tu rutina diaria (presente simple) y lo que estás haciendo ahora (presente continuo).',hint:'"Every day I…", "Right now I am …ing".',min:12,sample:'Every day I wake up at 7 and go to work. Right now I am studying English.',
 checks:[{label:'Usas una expresión de rutina (every day, usually, always…)',any:['every','usually','always','often','sometimes','never']},{label:'Usas presente continuo (am/is/are + -ing)',any:[/ (am|is|are|i'm|she's|he's|we're|they're) \w+ing /]}]},
{prompt:'Cuenta qué hiciste el fin de semana pasado (pasado simple, incluye un verbo irregular).',hint:'"Last weekend I went…, I saw…, I visited…".',min:10,sample:'Last weekend I went to the park and I visited my friends. We ate tacos.',
 checks:[{label:'Marcador de pasado (last, yesterday, ago)',any:['last','yesterday','ago']},{label:'Verbo irregular en pasado',any:['went','saw','ate','bought','had','made','took','came','got','wrote','met','drank','slept','drove']},{label:'Verbo regular en -ed',any:[/ \w+ed /]}]},
{prompt:'Compara dos ciudades o dos personas usando comparativos y un superlativo.',hint:'"…is bigger than…", "…is the most beautiful…".',min:10,sample:'Mexico City is bigger than Puebla, but Oaxaca is the most beautiful city.',
 checks:[{label:'Comparativo (-er than / more … than)',any:[/ \w+er than /,/ more \w+ than /,'better than','worse than']},{label:'Superlativo (the -est / the most)',any:[/ the \w+est /,'the most','the best','the worst']}]},
{prompt:'Da tres consejos a un amigo que quiere aprender inglés (should, must, can).',hint:'"You should…", "You must…", "You can…".',min:10,sample:'You should practice every day. You must be patient. You can watch movies in English.',
 checks:[{label:'Usas should',any:['should']},{label:'Usas must o have to',any:['must','have to']},{label:'Usas can',any:[' can ']}]}
],
quiz:[
{q:'"She ___ to work every day."',o:['go','goes','going','is go'],a:1,e:'Presente simple con she → goes.'},
{q:'"Listen! The baby ___."',o:['cries','cry','is crying','cried'],a:2,e:'"Listen!" indica ahora → presente continuo.'},
{q:'Past of "buy":',o:['buyed','bought','brought','buys'],a:1,e:'buy → bought (irregular). brought es de bring.'},
{q:'"Did you ___ the email?"',o:['sent','send','sending','sends'],a:1,e:'Después de did, verbo en forma base.'},
{q:'"An elephant is ___ than a horse."',o:['big','bigger','biggest','more big'],a:1,e:'big → bigger (doble consonante).'},
{q:'"This is ___ day of my life!"',o:['the better','the most good','the best','best'],a:2,e:'good → better → the best.'},
{q:'"You ___ smoke here. It\'s forbidden."',o:['mustn\'t','shouldn\'t','can','don\'t have to'],a:0,e:'Prohibición → mustn\'t.'},
{q:'"How ___ sugar do you want?"',o:['many','much','few','a lot'],a:1,e:'sugar es incontable → much.'},
{q:'Which is correct?',o:['She can sings.','She can to sing.','She can sing.','She cans sing.'],a:2,e:'Modal + verbo base.'},
{q:'"I need ___ advice."',o:['an','a','some','many'],a:2,e:'advice es incontable → some advice.'},
{q:'"We ___ a movie last night."',o:['watch','watched','watching','are watching'],a:1,e:'Acción terminada en el pasado → watched.'},
{q:'In a restaurant, the polite request is:',o:['Give me the bill.','I want bill.','Could I have the bill, please?','Bill now.'],a:2,e:'"Could I have…, please?" es la forma educada.'}
]});

window.COURSE.push({
id:'b1',n:3,cefr:'B1',name:'Intermedio',emoji:'🌳',color:'#7b3fe4',color2:'#b38cff',
desc:'Experiencias, narraciones, planes futuros, condicionales 0/1, oraciones de relativo, phrasal verbs y opiniones.',
topics:[
{icon:'🔗',title:'Present Perfect',html:'<p>Conecta el pasado con el presente: <b>have/has + participio</b>.</p>',
 diagram:`  PASADO ●━━━━━━━━━━━━━━━━━━━━► AHORA
         (cuándo? no importa)    resultado ✔
  I have visited Paris.  /  She has lost her keys (y no las tiene).`,
 table:[['Uso','Ejemplo','Palabras clave'],['Experiencias','Have you ever been to Japan?','ever, never'],['Acción reciente','I have just finished.','just, already, yet'],['Desde hasta hoy','I have lived here for 5 years.','for, since'],['vs Past Simple','I went to Japan in 2019.','yesterday, in 2019, ago']],
 examples:[['I have never eaten sushi.','Nunca he comido sushi.'],['She has worked here since 2020.','Ella trabaja aquí desde 2020.'],['Have you finished your homework yet?','¿Ya terminaste tu tarea?']],
 tip:'Si dices <b>cuándo</b> (yesterday, in 2019) → usa past simple, no present perfect.'},
{icon:'🎞️',title:'Past Continuous',
 diagram:`  was/were + -ing  = acción en progreso en el pasado
  I was cooking ━━━━━━━━━━━━━━━━━━━
                      ⚡ the phone rang (past simple interrumpe)`,
 examples:[['I was watching TV when you called.','Estaba viendo la tele cuando llamaste.'],['While they were walking, it started to rain.','Mientras caminaban, empezó a llover.'],['At 8 pm we were having dinner.','A las 8 pm estábamos cenando.']],
 tip:'<b>When</b> + acción corta; <b>while</b> + acción larga.'},
{icon:'🔮',title:'Future forms',
 table:[['Forma','Uso','Ejemplo'],['will','decisión espontánea, predicción','I\'ll help you!'],['be going to','plan / evidencia','I\'m going to study medicine. Look at those clouds — it\'s going to rain.'],['Present continuous','cita fija','I\'m meeting Ana tomorrow at 5.'],['Present simple','horarios','The train leaves at 9.']],
 examples:[['I think it will be a great year.','Creo que será un gran año.'],['We are going to buy a house.','Vamos a comprar una casa.'],['The concert starts at 8.','El concierto empieza a las 8.']]},
{icon:'🔀',title:'Conditionals 0 & 1',
 diagram:`  ZERO  : If + present , present        → verdades generales
          If you heat ice, it melts. 🧊➡💧
  FIRST : If + present , will + verbo    → posibilidad real futura
          If it rains, I will stay home. 🌧️🏠`,
 examples:[['If you mix red and blue, you get purple.','Si mezclas rojo y azul, obtienes morado.'],['If I have time, I will call you.','Si tengo tiempo, te llamaré.'],['Unless you hurry, you will miss the bus.','A menos que te apures, perderás el autobús.']],
 tip:'Nunca uses <b>will</b> después de <b>if</b>: "If it <b>rains</b>", no "If it will rain".'},
{icon:'🧩',title:'Relative clauses',
 cards:[['🧑','who','personas'],['📦','which','cosas'],['🔄','that','personas o cosas'],['📍','where','lugares'],['👜','whose','posesión'],['🕐','when','tiempo']],
 examples:[['The woman who lives next door is a doctor.','La mujer que vive al lado es doctora.'],['This is the book that I told you about.','Este es el libro del que te hablé.'],['That\'s the restaurant where we met.','Ese es el restaurante donde nos conocimos.'],['He\'s the man whose car was stolen.','Es el hombre cuyo coche fue robado.']]},
{icon:'🧗',title:'Common Phrasal Verbs & Opinions',
 cards:[['⬆️','get up','levantarse'],['🔍','look for','buscar'],['🚭','give up','dejar/rendirse'],['🧹','find out','averiguar'],['🤝','get on with','llevarse bien'],['🔁','turn on/off','encender/apagar']],
 diagram:`  🗣️ OPINIONS MAP
  In my opinion… ─┬─ I think / I believe…
                  ├─ I agree / I disagree because…
                  └─ On the one hand… on the other hand…`,
 examples:[['I gave up smoking last year.','Dejé de fumar el año pasado.'],['In my opinion, cities are too noisy.','En mi opinión, las ciudades son muy ruidosas.'],['I agree with you, but…','Estoy de acuerdo contigo, pero…']]}
],
writing:[
{prompt:'Escribe sobre tres experiencias de tu vida con present perfect (ever/never/already).',hint:'"I have been to…", "I have never…".',min:12,sample:'I have been to Canada. I have never tried skiing, but I have already learned to swim.',
 checks:[{label:'have/has + participio',any:[/ (have|has|i've|she's|he's|we've|they've) (never |already |just |ever )?\w+(ed|en|wn|ne|ght|ung|um|ut|ad|ot|ide|een) /,'have been','has been']},{label:'Usas ever, never, already, just o yet',any:['ever','never','already','just','yet']}]},
{prompt:'Narra una interrupción: algo que estabas haciendo cuando pasó otra cosa.',hint:'"I was …ing when …".',min:10,sample:'I was cooking dinner when the lights went out.',
 checks:[{label:'was/were + -ing',any:[/ (was|were) \w+ing /]},{label:'when o while',any:['when','while']}]},
{prompt:'Escribe tus planes para el próximo año (going to) y una predicción (will).',hint:'"I am going to…", "I think it will…".',min:12,sample:'Next year I am going to travel to Spain. I think it will be amazing.',
 checks:[{label:'be going to',any:['going to']},{label:'will / \'ll',any:[' will ',"'ll"]}]},
{prompt:'Escribe dos oraciones condicionales (tipo 1) y una con relativo (who/which/that).',hint:'"If I…, I will…". "The person who…".',min:14,sample:'If I save money, I will buy a bike. The friend who helped me is Ana.',
 checks:[{label:'Condicional: if + will',any:[/ if .* (will|'ll|won't) /]},{label:'Pronombre relativo',any:[' who ',' which ',' that ',' where ',' whose ']}]},
{prompt:'Da tu opinión sobre las redes sociales con conectores de opinión.',hint:'"In my opinion…", "I think…", "because…".',min:15,sample:'In my opinion, social media is useful because we can talk to friends, but I think it is addictive.',
 checks:[{label:'Expresión de opinión',any:['in my opinion','i think','i believe','i feel','personally']},{label:'Justificas (because / since)',any:['because','since',' as ']}]}
],
quiz:[
{q:'"I ___ to Paris three times."',o:['went','have been','was','am going'],a:1,e:'Experiencia sin tiempo específico → present perfect.'},
{q:'"She ___ her keys yesterday."',o:['has lost','lost','have lost','loses'],a:1,e:'"yesterday" → past simple.'},
{q:'"I have lived here ___ 2015."',o:['for','since','from','during'],a:1,e:'Punto de inicio → since.'},
{q:'"I ___ a shower when the phone rang."',o:['had','was having','have had','am having'],a:1,e:'Acción larga en progreso → past continuous.'},
{q:'Look at those clouds! It ___ rain.',o:['will','is going to','rains','is raining to'],a:1,e:'Evidencia presente → going to.'},
{q:'"If you heat water to 100°C, it ___."',o:['boils','will boil','boiled','would boil'],a:0,e:'Verdad general → zero conditional.'},
{q:'"If it ___ tomorrow, we will cancel the trip."',o:['will rain','rains','rained','raining'],a:1,e:'No va will después de if.'},
{q:'"The man ___ car is red is my uncle."',o:['who','which','whose','that'],a:2,e:'Posesión → whose.'},
{q:'"That\'s the hotel ___ we stayed."',o:['which','where','who','when'],a:1,e:'Lugar → where.'},
{q:'"I need to ___ what time the shop opens."',o:['find out','give up','get up','turn off'],a:0,e:'find out = averiguar.'},
{q:'"The train ___ at 9:15 every morning."',o:['leaves','will leave','is going to leave','leaving'],a:0,e:'Horarios → present simple.'},
{q:'Best way to express opinion:',o:['I am agree.','In my opinion, it\'s true.','I opinion that…','Me think so.'],a:1,e:'"I agree" (sin am) o "In my opinion".'}
]});

window.COURSE.push({
id:'b2',n:4,cefr:'B2',name:'Intermedio alto',emoji:'🚀',color:'#e2489b',color2:'#ff8fc4',
desc:'Condicionales irreales, voz pasiva, estilo indirecto, wish/if only, gerundios e infinitivos y conectores.',
topics:[
{icon:'💭',title:'Conditionals 2 & 3',
 table:[['Tipo','Estructura','Uso','Ejemplo'],['2nd','If + past, would + verb','hipotético presente/futuro','If I won the lottery, I would travel.'],['3rd','If + past perfect, would have + pp','pasado irreal (arrepentimiento)','If I had studied, I would have passed.']],
 diagram:`  REAL ◄────────────────────────────► IRREAL
  0/1st: If it rains…   2nd: If I were rich…   3rd: If I had known…
         (posible)           (imaginario hoy)        (pasado imposible)`,
 examples:[['If I were you, I would accept the job.','Si yo fuera tú, aceptaría el trabajo.'],['If she had left earlier, she wouldn\'t have missed the flight.','Si hubiera salido antes, no habría perdido el vuelo.']],
 tip:'En 2º condicional se prefiere <b>were</b> para todas las personas: "If I/he were…".'},
{icon:'🔄',title:'Passive Voice',
 diagram:`  ACTIVE : Shakespeare  wrote   Hamlet.
                 ╲                ╱
  PASSIVE: Hamlet  was written  by Shakespeare.
           objeto → sujeto   BE + participio   (by + agente)`,
 table:[['Tiempo','Pasiva'],['Present simple','is made'],['Past simple','was made'],['Present perfect','has been made'],['Future','will be made'],['Modal','can be made'],['Continuous','is being made']],
 examples:[['English is spoken all over the world.','El inglés se habla en todo el mundo.'],['The bridge was built in 1990.','El puente fue construido en 1990.'],['The results will be announced tomorrow.','Los resultados se anunciarán mañana.']]},
{icon:'🗨️',title:'Reported Speech',
 table:[['Directo','Indirecto'],['"I am tired."','She said (that) she was tired.'],['"I will call."','He said he would call.'],['"I have finished."','She said she had finished.'],['"Can you help?"','He asked if I could help.'],['"Where do you live?"','She asked where I lived.']],
 diagram:`  backshift ⬇:  present → past → past perfect
                will → would   can → could   here → there   now → then`,
 examples:[['He told me he was busy.','Me dijo que estaba ocupado.'],['She asked me what time it was.','Me preguntó qué hora era.']],
 tip:'<b>Tell</b> lleva persona (told <b>me</b>), <b>say</b> no (said that…).'},
{icon:'🌠',title:'Wish / If only',
 cards:[['😔','wish + past','deseo presente: I wish I had more time.'],['😩','wish + past perfect','arrepentimiento: I wish I had studied.'],['🙄','wish + would','queja: I wish you would stop!'],['🔥','If only…','más enfático: If only I knew!']],
 examples:[['I wish I lived near the sea.','Ojalá viviera cerca del mar.'],['If only I hadn\'t said that.','Ojalá no hubiera dicho eso.']]},
{icon:'🎯',title:'Gerunds vs Infinitives',
 table:[['+ -ing','+ to + verb','Cambia significado'],['enjoy, avoid, mind, suggest, finish','want, decide, hope, plan, refuse','stop, remember, try, forget'],['I enjoy reading.','I decided to leave.','I stopped smoking (dejé) / I stopped to smoke (me detuve para)']],
 examples:[['She avoids eating sugar.','Ella evita comer azúcar.'],['Remember to lock the door.','Recuerda cerrar la puerta.'],['I remember meeting him.','Recuerdo haberlo conocido.']]},
{icon:'🧷',title:'Linking words & advanced articles',
 cards:[['➕','moreover, furthermore','además'],['↔️','however, nevertheless','sin embargo'],['🎯','therefore, as a result','por lo tanto'],['🧱','although, even though','aunque'],['🔍','in spite of / despite + -ing','a pesar de'],['📌','whereas','mientras que']],
 html:'<p>📰 Artículos avanzados: sin artículo para generalizar (<i>Life is short</i>), <b>the</b> con instituciones específicas (<i>the hospital where I work</i>), sin "the" con go to school/bed/church en su función.</p>',
 examples:[['Although it was late, we kept working.','Aunque era tarde, seguimos trabajando.'],['Despite feeling tired, she went to the gym.','A pesar de sentirse cansada, fue al gimnasio.']]}
],
writing:[
{prompt:'¿Qué harías si ganaras la lotería? (2º condicional)',hint:'"If I won…, I would…".',min:12,sample:'If I won the lottery, I would buy a house and I would help my family.',
 checks:[{label:'If + pasado',any:[/ if i (won|had|were|was|lived|could) /,/ if \w+ (won|had|were) /]},{label:'would / \'d',any:['would',"'d "]}]},
{prompt:'Escribe un arrepentimiento con 3er condicional.',hint:'"If I had…, I would have…".',min:12,sample:'If I had studied harder, I would have passed the exam.',
 checks:[{label:'if + had + participio',any:[/ if .* had \w+ /]},{label:'would have / could have',any:['would have','could have','might have',"would've"]}]},
{prompt:'Describe cómo se fabrica algo usando voz pasiva (mínimo 2 verbos pasivos).',hint:'"Coffee is grown…, then it is roasted…".',min:12,sample:'Coffee is grown in Mexico. Then the beans are roasted and packed.',
 checks:[{label:'Pasiva: be + participio',any:[/ (is|are|was|were|been|be) \w+(ed|en|wn|ght|t) /]}]},
{prompt:'Reporta lo que alguien te dijo ayer (reported speech).',hint:'"She told me that she was…", "He said he would…".',min:10,sample:'My boss told me that he was happy and said he would give me a raise.',
 checks:[{label:'said / told / asked',any:['said','told','asked']},{label:'Backshift (was, would, had, could…)',any:[' was ',' were ',' would ',' had ',' could ']}]},
{prompt:'Escribe un deseo con "I wish" y una frase con conector de contraste (although/however/despite).',hint:'"I wish I had…". "Although…".',min:12,sample:'I wish I spoke French. Although it is difficult, I will try.',
 checks:[{label:'I wish / If only',any:['wish','if only']},{label:'Conector de contraste',any:['although','however','despite','in spite of','even though','nevertheless','whereas']}]}
],
quiz:[
{q:'"If I ___ you, I would apologize."',o:['am','was being','were','will be'],a:2,e:'2º condicional: If I were…'},
{q:'"If they had left earlier, they ___ the train."',o:['would catch','would have caught','caught','will catch'],a:1,e:'3er condicional: would have + participio.'},
{q:'Passive: "They make cars in Japan."',o:['Cars made in Japan.','Cars are made in Japan.','Cars are making in Japan.','Cars were make in Japan.'],a:1,e:'Present simple pasivo: are made.'},
{q:'"The house ___ right now."',o:['is painted','is being painted','has painted','paints'],a:1,e:'Pasiva continua: is being + pp.'},
{q:'"I will help," he said. → He said he ___ help.',o:['will','would','can','helps'],a:1,e:'will → would.'},
{q:'"Where do you live?" → She asked me where ___.',o:['do I live','I lived','did I live','I live?'],a:1,e:'Pregunta indirecta: orden afirmativo + backshift.'},
{q:'"I wish I ___ more time now."',o:['have','had','will have','would have had'],a:1,e:'Deseo presente → wish + past.'},
{q:'"She enjoys ___ novels."',o:['to read','read','reading','to reading'],a:2,e:'enjoy + -ing.'},
{q:'"He decided ___ the job."',o:['accepting','to accept','accept','accepted'],a:1,e:'decide + to-infinitive.'},
{q:'"I stopped ___ a coffee." (me detuve para tomar un café)',o:['having','to have','have','had'],a:1,e:'stop + to = detenerse para.'},
{q:'"___ the rain, we played football."',o:['Although','Despite','However','Because'],a:1,e:'Despite + sustantivo/-ing.'},
{q:'"He told ___ he was tired."',o:['that','to me','me','for me'],a:2,e:'tell + persona: told me.'}
]});

window.COURSE.push({
id:'c1',n:5,cefr:'C1',name:'Avanzado',emoji:'🏔️',color:'#e07a00',color2:'#ffb84d',
desc:'Inversión, oraciones escindidas, condicionales mixtos, nominalización, phrasal verbs avanzados, registro y modismos.',
topics:[
{icon:'🙃',title:'Inversion for emphasis',
 diagram:`  Adverbio negativo/restrictivo + AUXILIAR + SUJETO + verbo
  Never     have   I   seen such chaos.
  Not only  did    she win, but she also broke the record.
  Hardly    had    we  arrived when it started.`,
 table:[['Normal','Invertido'],['I have never seen…','Never have I seen…'],['I rarely go out.','Rarely do I go out.'],['As soon as he left…','No sooner had he left than…'],['If I had known…','Had I known…'],['You should not open it.','Under no circumstances should you open it.']],
 examples:[['Seldom do we see such talent.','Rara vez vemos tanto talento.'],['Had I known, I would have come.','De haberlo sabido, habría venido.']]},
{icon:'✂️',title:'Cleft sentences',
 cards:[['🎯','It is/was … that…','It was Tom who called.'],['💡','What … is/was…','What I need is a break.'],['📍','The place where…','The place where we met is gone.'],['🔁','All (that)…','All I want is peace.']],
 examples:[['It was in 2010 that we moved to London.','Fue en 2010 cuando nos mudamos a Londres.'],['What surprised me most was his honesty.','Lo que más me sorprendió fue su honestidad.']]},
{icon:'🧬',title:'Mixed Conditionals',
 diagram:`  Pasado → Presente: If I had taken the job, I would be rich now.
  Presente → Pasado: If I were braver, I would have spoken up.`,
 examples:[['If she hadn\'t missed the flight, she would be here now.','Si no hubiera perdido el vuelo, estaría aquí ahora.'],['If he weren\'t so stubborn, he would have listened.','Si no fuera tan terco, habría escuchado.']]},
{icon:'🏗️',title:'Nominalization',
 table:[['Verbal (informal)','Nominal (formal)'],['The company grew quickly.','The rapid growth of the company…'],['They decided to close it.','Their decision to close it…'],['Prices increased.','There was an increase in prices.'],['We analyzed the data.','Our analysis of the data…']],
 examples:[['The introduction of the new law caused controversy.','La introducción de la nueva ley causó controversia.']],
 tip:'La nominalización hace tu escritura más académica y objetiva.'},
{icon:'🧗‍♀️',title:'Advanced phrasal verbs & Idioms',
 cards:[['🧾','come up with','idear'],['🕵️','look into','investigar'],['🎭','put up with','tolerar'],['📉','fall through','fracasar (plan)'],['🌧️','under the weather','enfermo'],['🎯','hit the nail on the head','dar en el clavo'],['🧊','break the ice','romper el hielo'],['💸','cost an arm and a leg','costar un ojo de la cara']],
 examples:[['We need to come up with a better plan.','Necesitamos idear un mejor plan.'],['The deal fell through at the last minute.','El trato fracasó a último momento.']]},
{icon:'🎩',title:'Register: formal vs informal',
 table:[['Informal','Formal'],['get','obtain / receive'],['ask for','request'],['find out','discover / ascertain'],['sorry','we apologize for'],['Thanks a lot','I would be grateful'],['kids','children']],
 diagram:`  😎 chat ─── 🙂 neutral email ─── 🎩 business letter ─── 🎓 academic paper`,
 examples:[['I am writing to request further information.','Le escribo para solicitar más información.'],['We regret to inform you that…','Lamentamos informarle que…']]}
],
writing:[
{prompt:'Reescribe con inversión: "I have never felt so happy."',hint:'Empieza con "Never have I…".',min:5,sample:'Never have I felt so happy.',
 checks:[{label:'Never/Rarely/Seldom + auxiliar + sujeto',any:[/ (never|rarely|seldom|hardly|not only|little|no sooner|under no circumstances) (have|has|had|do|does|did|will|should|can|would) (i|you|he|she|we|they|it) /]}]},
{prompt:'Escribe una cleft sentence sobre lo que más valoras.',hint:'"What I value most is…" o "It is … that…".',min:7,sample:'What I value most is honesty.',
 checks:[{label:'Estructura cleft (What … is / It is … that/who)',any:[/ what .* (is|was) /,/ it (is|was) .* (that|who) /,/ all i .* is /]}]},
{prompt:'Escribe un condicional mixto sobre una decisión pasada y su efecto actual.',hint:'"If I had…, I would … now."',min:10,sample:'If I had learned English as a child, I would be fluent now.',
 checks:[{label:'if + had + participio',any:[/ if .* had \w+ /]},{label:'would + verbo base (efecto presente)',any:[/ would (be|have|live|know|speak|work|feel) /]},{label:'Referencia al presente (now, today…)',any:['now','today','currently','these days']}]},
{prompt:'Redacta el inicio de un correo formal solicitando información.',hint:'"Dear…, I am writing to…", "I would be grateful if…".',min:15,sample:'Dear Sir or Madam, I am writing to request information about your course. I would be grateful if you could send me details.',
 checks:[{label:'Saludo formal (Dear…)',any:['dear']},{label:'Fórmula formal (I am writing to / I would be grateful)',any:['i am writing','i would be grateful','i would appreciate','please find','i look forward']},{label:'Vocabulario formal (request, inquire, regarding…)',any:['request','inquire','enquire','regarding','further','information','assistance']}]}
],
quiz:[
{q:'"Never ___ such a beautiful view."',o:['I have seen','have I seen','I saw','seen I have'],a:1,e:'Inversión: Never + auxiliar + sujeto.'},
{q:'"___ had we sat down than the phone rang."',o:['Hardly','No sooner','Not only','Seldom'],a:1,e:'No sooner … than.'},
{q:'"___ I known, I would have helped."',o:['If','Had','Have','Did'],a:1,e:'Condicional invertido: Had I known.'},
{q:'"What I need ___ a long holiday."',o:['are','is','be','it is'],a:1,e:'Cleft con What → is.'},
{q:'"If I had taken that job, I ___ in London now."',o:['would have lived','would live','will live','lived'],a:1,e:'Mixto: pasado → presente.'},
{q:'Nominalization of "The population grew rapidly":',o:['The rapid growth of the population','The population growing rapid','Rapidly grew population','The grow of population'],a:0,e:'grow → growth; rapidly → rapid.'},
{q:'"I can\'t ___ his rudeness any longer."',o:['put up with','come up with','look into','fall through'],a:0,e:'put up with = tolerar.'},
{q:'"Feeling under the weather" means:',o:['very happy','slightly ill','outside','angry'],a:1,e:'Under the weather = algo enfermo.'},
{q:'Most formal option:',o:['Can you tell me…?','I\'d like to know…','I would be grateful if you could inform me…','Tell me…'],a:2,e:'Fórmula muy formal.'},
{q:'"Not only ___ late, but he also forgot the tickets."',o:['he was','was he','he is','did he was'],a:1,e:'Not only + inversión: was he.'},
{q:'"The police are ___ the case."',o:['looking into','looking up','looking after','looking forward'],a:0,e:'look into = investigar.'},
{q:'"It was Maria ___ solved the problem."',o:['which','who','what','where'],a:1,e:'Cleft con persona: who/that.'}
]});

window.COURSE.push({
id:'c2',n:6,cefr:'C2',name:'Experto',emoji:'👑',color:'#c0263b',color2:'#ff6b81',
desc:'Matices gramaticales, escritura académica, sutilezas de los modales, marcadores discursivos, precisión idiomática y estilo.',
topics:[
{icon:'🔬',title:'Subtle grammar nuances',
 table:[['Par','Matiz'],['I\'ve been reading / I\'ve read the book','proceso (quizás sin terminar) vs resultado terminado'],['used to / be used to / get used to','hábito pasado / estar acostumbrado / acostumbrarse'],['It\'s time we left','pasado con valor de presente (urgencia)'],['Were he to resign…','condicional formal hipotético'],['should (subjuntivo británico) / bare subjunctive','I insist that he be present.']],
 examples:[['I suggest that she be informed immediately.','Sugiero que se le informe de inmediato.'],['It\'s high time we tackled this issue.','Ya es hora de que abordemos este asunto.']]},
{icon:'🎓',title:'Academic writing',
 diagram:`  📄 ESSAY
  ├─ Introduction: hook → context → THESIS
  ├─ Body ¶: topic sentence → evidence → analysis → link
  ├─ Counter-argument → rebuttal
  └─ Conclusion: restate thesis → implications`,
 cards:[['🛡️','Hedging','It could be argued that… / This suggests…'],['📊','Evidence','According to… / Data indicate…'],['⚖️','Impersonal','It is widely acknowledged that…']],
 examples:[['It could be argued that urbanisation has exacerbated inequality.','Podría argumentarse que la urbanización ha agravado la desigualdad.'],['These findings tentatively suggest a correlation.','Estos hallazgos sugieren tentativamente una correlación.']]},
{icon:'🎚️',title:'Nuance of modals',
 diagram:`  CERTEZA ▲  must have / can't have  (deducción ~95%)
          │  will / would (supuesto)
          │  should / ought to (expectativa)
          │  may / might / could (posibilidad)
  DUDA    ▼  might conceivably…`,
 examples:[['She must have forgotten.','Seguro se le olvidó.'],['He can\'t have known.','No puede haberlo sabido.'],['You needn\'t have bought it.','No hacía falta que lo compraras (pero lo hiciste).'],['That will be the postman.','Ese debe de ser el cartero.']],
 tip:'<b>needn\'t have done</b> (lo hiciste innecesariamente) ≠ <b>didn\'t need to do</b> (no era necesario; probablemente no lo hiciste).'},
{icon:'🧭',title:'Advanced discourse markers',
 cards:[['🔄','that said','dicho esto'],['📌','by the same token','del mismo modo'],['🎯','to all intents and purposes','a efectos prácticos'],['➡️','be that as it may','sea como fuere'],['🔎','notwithstanding','no obstante'],['🧠','insofar as','en la medida en que']],
 examples:[['The plan is costly; that said, it is feasible.','El plan es costoso; dicho esto, es viable.'],['Be that as it may, we must proceed.','Sea como fuere, debemos continuar.']]},
{icon:'🎯',title:'Idiomatic precision & collocations',
 table:[['❌ Impreciso','✅ Natural'],['make a crime','commit a crime'],['strong rain','heavy rain'],['do a decision','make / reach a decision'],['big mistake (OK) → precise','grave / glaring error'],['say a lie','tell a lie']],
 examples:[['The proposal was met with fierce opposition.','La propuesta encontró fuerte oposición.'],['She has a vested interest in the outcome.','Ella tiene un interés personal en el resultado.']]},
{icon:'🖋️',title:'Style: concision & rhythm',
 diagram:`  Wordy  ✗ "Due to the fact that it was raining, we made the decision to stay."
  Concise ✓ "Because it was raining, we decided to stay."
  🔁 Varía la longitud de las frases · evita la voz pasiva innecesaria · elige verbos fuertes`,
 examples:[['In spite of the fact that → although','A pesar del hecho de que → aunque'],['At this point in time → now','En este momento → ahora']]}
],
writing:[
{prompt:'Escribe una tesis académica con hedging sobre la inteligencia artificial.',hint:'"It could be argued that…", "This suggests…".',min:15,sample:'It could be argued that artificial intelligence may significantly reshape the labour market, although its long-term effects remain uncertain.',
 checks:[{label:'Hedging (could be argued, may, might, suggest, tend to)',any:['could be argued','may','might','suggest','arguably','tend to','appears to','likely']},{label:'Conector de concesión/contraste',any:['although','while','whereas','nevertheless','that said','notwithstanding','however']}]},
{prompt:'Deduce qué pasó: alguien no contestó el teléfono (must have / can\'t have / might have).',hint:'"He must have…", "He can\'t have…".',min:10,sample:'He must have been asleep; he can\'t have heard the phone.',
 checks:[{label:'Modal perfecto de deducción',any:['must have','can\'t have','cannot have','might have','could have','may have',"must've"]}]},
{prompt:'Usa el subjuntivo formal: una recomendación oficial.',hint:'"We recommend that he be…", "It is essential that she attend…".',min:8,sample:'It is essential that every employee attend the meeting.',
 checks:[{label:'Verbo de recomendación + that',any:[/ (recommend|suggest|insist|essential|vital|important|demand|propose|require)\w* that /]},{label:'Subjuntivo (be / verbo base tras sujeto 3ª persona)',any:[/ that (he|she|it|every \w+|the \w+|they|we|you|employees?) (be|attend|submit|go|have|take|leave|arrive|sign|work|consider) /]}]},
{prompt:'Reescribe de forma concisa: "Due to the fact that the budget was limited, we made the decision to postpone the project."',hint:'Usa "Because…" y "decided".',min:8,sample:'Because the budget was limited, we decided to postpone the project.',
 checks:[{label:'Conector conciso (because / as / since / given)',any:['because','since',' as ','given']},{label:'Verbo fuerte "decided"',any:['decided']},{label:'Evitas "due to the fact that"',any:[/^(?!.*due to the fact).*$/]}]}
],
quiz:[
{q:'"It\'s high time we ___ home."',o:['go','went','will go','have gone'],a:1,e:'It\'s time + past con valor presente.'},
{q:'"I insist that he ___ present."',o:['is','be','will be','was'],a:1,e:'Subjuntivo: be.'},
{q:'"You ___ brought food; we had plenty." (lo trajiste innecesariamente)',o:['didn\'t need to','needn\'t have','mustn\'t have','couldn\'t'],a:1,e:'needn\'t have + pp = innecesario pero hecho.'},
{q:'"She ___ seen us; she was looking the other way."',o:['must have','can\'t have','should have','would have'],a:1,e:'Deducción negativa: can\'t have.'},
{q:'Best hedging:',o:['This proves everything.','This clearly shows.','This tentatively suggests…','This is 100% true.'],a:2,e:'Hedging suaviza la afirmación.'},
{q:'Natural collocation:',o:['make a crime','do a crime','commit a crime','perform a crime'],a:2,e:'commit a crime.'},
{q:'"The costs are high; ___, the benefits outweigh them."',o:['that said','because','so that','in order to'],a:0,e:'that said = dicho esto (contraste).'},
{q:'"___ he to resign, chaos would ensue."',o:['If','Were','Was','Had'],a:1,e:'Were + sujeto + to: hipotético formal.'},
{q:'"I am used to ___ early."',o:['get up','getting up','got up','have got up'],a:1,e:'be used to + -ing.'},
{q:'Most concise:',o:['At this point in time','Now','At the present moment in time','In the current time period'],a:1,e:'Estilo: concisión.'},
{q:'"heavy" collocates best with:',o:['rain','wind speed','sun','idea'],a:0,e:'heavy rain / heavy traffic.'},
{q:'"___ his efforts, the project failed." (formal)',o:['Notwithstanding','Insofar','Whereas','Hence'],a:0,e:'Notwithstanding = a pesar de.'}
]});

/* Listening (Escuchar) y Speaking (Hablar) integrados en cada módulo */
(function(){
const A={
a1:{listening:{title:'At the café ☕',dialogue:[['Waiter','Good morning! What would you like?'],['Ana','Hello! A coffee and an orange juice, please.'],['Waiter','Anything to eat?'],['Ana','Yes, a sandwich. How much is it?'],['Waiter','It is seven dollars.'],['Ana','Here you are. Thank you!']],
 questions:[{q:'What time of day is it?',o:['Morning','Afternoon','Night'],a:0,e:'El mesero dice "Good morning".'},{q:'What does Ana drink?',o:['Tea and water','Coffee and orange juice','Milk'],a:1,e:'"A coffee and an orange juice".'},{q:'How much is it?',o:['$11','$7','$17'],a:1,e:'"It is seven dollars".'}],
 dictation:['My name is Ana.','She is my sister.','I am from Mexico.']},
 speaking:['Hello, my name is Ana.','Nice to meet you.','I am twenty years old.','Where are you from?','My favorite color is blue.']},
a2:{listening:{title:'Last weekend 🏖️',dialogue:[['Tom','Hi Lisa! What did you do last weekend?'],['Lisa','I went to the beach with my family. It was sunny and hot.'],['Tom','Nice! Did you swim?'],['Lisa','Yes, I did. And we ate fish in a small restaurant.'],['Tom','I stayed at home. I was tired, so I watched movies.']],
 questions:[{q:'Where did Lisa go?',o:['To the mountains','To the beach','To a museum'],a:1,e:'"I went to the beach".'},{q:'What was the weather like?',o:['Rainy','Cold','Sunny and hot'],a:2,e:'"It was sunny and hot".'},{q:'What did Tom do?',o:['He watched movies','He swam','He worked'],a:0,e:'"I watched movies".'}],
 dictation:['I went to the park yesterday.','She is cooking dinner now.','You should drink more water.']},
 speaking:['I usually get up at seven.','Yesterday I went to the supermarket.','My brother is taller than me.','You should study every day.','Could I have the bill, please?']},
b1:{listening:{title:'Job interview 💼',dialogue:[['Interviewer','Have you ever worked in a team?'],['Carlos','Yes, I have. I have worked in a marketing team since 2021.'],['Interviewer','What are you going to do if you get this job?'],['Carlos','If I get the job, I will move to the city and improve my skills.'],['Interviewer','Great. What were you doing before marketing?'],['Carlos','I was studying economics at university.']],
 questions:[{q:'Since when has Carlos worked in marketing?',o:['2012','2021','2020'],a:1,e:'"since 2021".'},{q:'What will he do if he gets the job?',o:['Move to the city','Quit','Travel abroad'],a:0,e:'"I will move to the city".'},{q:'What was he doing before?',o:['Working in a bank','Studying economics','Teaching'],a:1,e:'"I was studying economics".'}],
 dictation:['I have never been to London.','If it rains, I will stay at home.','The woman who lives next door is a doctor.']},
 speaking:['I have lived here for five years.','I was watching TV when you called.','I am going to travel next summer.','If I have time, I will call you.','In my opinion, it is a good idea.']},
b2:{listening:{title:'A news report 📰',dialogue:[['Reporter','A new bridge was opened in the city yesterday.'],['Reporter','It was built in only two years and it is used by thousands of drivers.'],['Mayor','If we had started earlier, we would have finished sooner.'],['Reporter','The mayor said that more projects would be announced next month.'],['Citizen','Although traffic is still bad, I think the bridge will help.']],
 questions:[{q:'When was the bridge opened?',o:['Last month','Yesterday','Two years ago'],a:1,e:'"opened … yesterday".'},{q:'What did the mayor say?',o:['Projects would be announced next month','The bridge failed','Taxes would rise'],a:0,e:'Reported speech: "more projects would be announced".'},{q:'What does the citizen think?',o:['The bridge is useless','The bridge will help','Traffic is perfect'],a:1,e:'"I think the bridge will help".'}],
 dictation:['If I were you, I would accept the offer.','The results will be announced tomorrow.','She told me that she was tired.']},
 speaking:['If I won the lottery, I would travel the world.','English is spoken all over the world.','He said that he would call me later.','I wish I had more free time.','Despite the rain, we went out.']},
c1:{listening:{title:'A business meeting 🏢',dialogue:[['Manager','Never before have we faced such a challenge.'],['Manager','What we need is a completely new strategy.'],['Analyst','Had we invested in digital marketing, we would be in a stronger position now.'],['Manager','Agreed. Could you look into the costs and come up with a proposal?'],['Analyst','Certainly. I will send a formal report by Friday.']],
 questions:[{q:'What does the manager say they need?',o:['More staff','A new strategy','A holiday'],a:1,e:'"What we need is a completely new strategy" (cleft).'},{q:'What should they have invested in?',o:['Real estate','Digital marketing','Hardware'],a:1,e:'"Had we invested in digital marketing".'},{q:'When will the report arrive?',o:['Monday','Friday','Tomorrow'],a:1,e:'"by Friday".'}],
 dictation:['Never have I seen such a crowd.','What I need is a long holiday.','We need to come up with a solution.']},
 speaking:['Never have I seen such a beautiful view.','What surprised me most was his honesty.','If I had taken that job, I would be living abroad now.','I am writing to request further information.','We need to look into the problem.']},
c2:{listening:{title:'Academic lecture 🎓',dialogue:[['Professor','It could be argued that urbanisation has exacerbated inequality.'],['Professor','That said, the evidence is far from conclusive.'],['Professor','Some researchers must have overlooked rural data, which tentatively suggests a different pattern.'],['Student','So you are suggesting that the conclusions be revised?'],['Professor','Precisely. It is essential that further research be conducted.']],
 questions:[{q:'What is the professor\'s claim about the evidence?',o:['It is conclusive','It is far from conclusive','It does not exist'],a:1,e:'"the evidence is far from conclusive".'},{q:'What might researchers have overlooked?',o:['Rural data','Urban data','Historical data'],a:0,e:'"must have overlooked rural data".'},{q:'What does the professor consider essential?',o:['Stopping research','Further research','Publishing now'],a:1,e:'"essential that further research be conducted" (subjuntivo).'}],
 dictation:['It could be argued that the policy has failed.','She must have forgotten the meeting.','It is essential that he be informed.']},
 speaking:['It could be argued that technology has transformed education.','That said, the evidence remains inconclusive.','He can\'t have known about the decision.','It is high time we tackled this issue.','I insist that she be present at the meeting.']}
};
window.COURSE.forEach(l=>Object.assign(l,A[l.id]));
})();
