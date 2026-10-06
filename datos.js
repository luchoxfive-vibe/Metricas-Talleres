/* Horas y volumen de trabajo de Branding — Club Atlético Talleres.
   Fuentes: "ARTE Y DISEÑO.xlsx", "PRODUCCIÓN GRAFICA.xlsx" y
   "Copia de Agosto 2026. Análisis Demanda fotográfica por área.xlsx".

   PARA AGREGAR UN MES: sumá un objeto al final del array `meses` del equipo.
   PARA AGREGAR UN EQUIPO: sumá un objeto a `equipos` con la misma forma.
   Totales, porcentajes, evolución, comparador y tabla se recalculan solos. */

window.DATOS = {
  equipos: [

  { key: 'diseno', label: 'Arte y Diseño', unidad: 'h', unidadLarga: 'horas', etiqueta: 'Horas relevadas',
    capacidad: { personas: 9, horasDia: 8, diasHabiles: 22 },
    fuente: 'Planilla ARTE Y DISEÑO, una hoja por mes.',
    meses: [
    { key: 'abr', label: 'Abril', extras: null, corto: 'ABR', areas: [
      { name: 'TIENDAS', total: 170, items: [['Campañas',90],['Indumentaria - Productos',40],['Comunicación',28],['Vidrieras - Tiendas',10],['Reuniones - Meet',2]] },
      { name: 'COMUNICACIÓN', total: 170, items: [['Institucional',50],['Formativas',35],['Femenino',25],['Match Days',25],['Primer equipo',20],['Coberturas',15]] },
      { name: 'SOCIOS', total: 100, items: [['Socios',60],['Filiales',40]] },
      { name: 'UDN', total: 70, items: [['Presentaciones',20],['Web UX-UI',10],['Mailing',10],['Imagen con IA',10],['Diseño de identidad',10],['Planificación - Organización',5],['Producción ejecutiva',5]] },
      { name: 'COMERCIAL', total: 60, items: [['Aliados',50],['Comercialización',10]] },
      { name: 'INSTITUCIONAL', total: 40, items: [['Asambleas',30],['Presentaciones',10]] },
      { name: 'OPERACIONES', total: 33, items: [['Día de partido',20],['Presentaciones',13]] },
      { name: 'RRHH', total: 15, items: [['Soporte',5.3],['Eventos',5],['Comunicación interna',4.3]] },
      { name: 'SISTEMAS', total: 15, items: [['Rediseños',15]] },
      { name: 'FEMENINO', total: 15, items: [['Presentaciones',15]] },
      { name: 'JUVENILES', total: 10, items: [['Presentaciones',5],['Jornada puertas abiertas',5]] },
      { name: 'MESA DE TRABAJO', total: 10, items: [['Filiales',10]] },
      { name: 'DIRECCIÓN PRESIDENCIA', total: 9, items: [['Reunión',6.3],['Protocolo',2.3]] },
      { name: 'COMISIÓN DIRECTIVA', total: 6, items: [['Asambleístas',4],['Comisión Directiva',2]] },
      { name: 'ESCUELAS', total: 5, items: [['Auditoría',5]] }
    ] },
    { key: 'may', label: 'Mayo', extras: null, corto: 'MAY', areas: [
      { name: 'TIENDAS', total: 283, items: [['Campañas',120],['Producción de fotos',65],['Indumentaria - Productos',58],['Comunicación',25],['Reuniones - Meet',10],['Vidrieras - Tiendas',5]] },
      { name: 'COMUNICACIÓN', total: 227, items: [['Formativas',85],['Primer equipo',50],['Femenino',40],['Institucional',35],['Coberturas',12],['Match day',5]] },
      { name: 'COMERCIAL', total: 135, items: [['Aliados',115],['Comercialización',20]] },
      { name: 'UDN', total: 105, items: [['Campus',60],['Academia',30],['Web UX-UI',10],['Reuniones',5]] },
      { name: 'SOCIOS', total: 100, items: [['Socios',80],['Filiales',20]] },
      { name: 'BRANDING', total: 97, items: [['Daily',160],['Presentaciones',65],['Coordinación',60],['Imagen de marca',20],['Desarrollo de producto',12],['Planificación del área',10],['Tareas administrativas',5]] },
      { name: 'RRHH', total: 26, items: [['Comunicación interna',10],['Capacitaciones',10],['Soporte',6]] },
      { name: 'OPERACIONES', total: 25, items: [['Día de partido',20],['Presentaciones',5]] },
      { name: 'INSTITUCIONAL', total: 20, items: [['Relaciones públicas',5],['Vinculación institucional',5],['Presentaciones',5],['Institucional',5]] },
      { name: 'MESA DE TRABAJO', total: 10, items: [['Desarrollo del estadio Talleres',10]] },
      { name: 'ESCUELAS', total: 10, items: [['Auditoría',10]] },
      { name: 'PRIMER EQUIPO', total: 5, items: [['Presentaciones',5]] },
      { name: 'JUVENILES', total: 3, items: [['Torneo Jóvenes Promesas',3]] },
      { name: 'FEMENINO', total: 2, items: [['Presentaciones',2]] },
      { name: 'DIRECCIÓN PRESIDENCIA', total: 2, items: [['Reunión',2]] },
      { name: 'COMISIÓN DIRECTIVA', total: 2, items: [['Comisión Directiva',2]] }
    ] },
    { key: 'jun', label: 'Junio', extras: null, corto: 'JUN', areas: [
      { name: 'BRANDING', total: 261, items: [['Daily',112],['Planificación del área',40],['Coordinación',33],['Presentaciones',28],['Desarrollo de producto',25],['Institucional',23]] },
      { name: 'COMUNICACIÓN', total: 191, items: [['Primer equipo',106],['Institucional',35],['Formativas',22],['Femenino',20],['Coberturas',6],['Reuniones',2]] },
      { name: 'COMERCIAL', total: 185, items: [['Cobranding',95],['Aliados',90]] },
      { name: 'TIENDAS', total: 176, items: [['Indumentaria - Productos',45],['Campañas',36],['Comunicación',30],['Reuniones - Meet',20],['Producción de fotos',15],['Vidrieras - Tiendas',15],['Tienda online',10],['Equipación oficial',5]] },
      { name: 'UDN', total: 71, items: [['Campus',36],['Academia',30],['Reuniones',5]] },
      { name: 'SOCIOS', total: 49, items: [['Socios',40],['Filiales',7],['Reuniones',2]] },
      { name: 'PRIMER EQUIPO', total: 40, items: [['Producción',30],['Planificación',5],['Mercado de pases',3],['Reuniones',2]] },
      { name: 'RRHH', total: 37, items: [['Comunicación interna',18],['Capacitaciones',11],['Soporte',8]] },
      { name: 'JUVENILES', total: 20, items: [['Torneo Jóvenes Promesas',16],['Torneo Lazos de Gol',2],['Reuniones',2]] },
      { name: 'ESCUELAS', total: 10, items: [['Auditoría',10]] },
      { name: 'INSTITUCIONAL', total: 5, items: [['Presentaciones',5]] },
      { name: 'OPERACIONES', total: 5, items: [['Día de partido',5]] },
      { name: 'SISTEMAS', total: 2, items: [['Reuniones',2]] }
    ] },
    { key: 'jul', label: 'Julio', extras: null, corto: 'JUL', areas: [
      { name: 'TIENDAS', total: 226, items: [['Indumentaria - Productos',72],['Campañas',42],['Vidrieras - Tiendas',42],['Comunicación',35],['Reuniones - Meet',10],['Producción de fotos',10],['Tienda online',10],['Equipación oficial',5]] },
      { name: 'COMUNICACIÓN', total: 204, items: [['Primer equipo',70],['Femenino',56],['Institucional',33],['Coberturas',23],['Formativas',22]] },
      { name: 'COMERCIAL', total: 146, items: [['Aliados',124],['Cobranding',15],['Comercialización',7]] },
      { name: 'UDN', total: 96, items: [['Academia',46],['Campus',45],['Reuniones',5]] },
      { name: 'SOCIOS', total: 53, items: [['Socios',35],['Filiales',16],['Reuniones',2]] },
      { name: 'PRIMER EQUIPO', total: 40, items: [['Producción',30],['Planificación',5],['Mercado de pases',3],['Reuniones',2]] },
      { name: 'RRHH', total: 32, items: [['Capacitaciones',20],['Comunicación interna',10],['Soporte',2]] },
      { name: 'INSTITUCIONAL', total: 31, items: [['Presentaciones',16],['Institucional',15]] },
      { name: 'BRANDING', total: 30, items: [['Daily',80],['Coordinación',40],['Planificación del área',20],['Institucional',20],['Presentaciones',10]] },
      { name: 'MATCH DAY', total: 30, items: [['Póster día de partido',30]] },
      { name: 'DEPORTES FEDERADOS', total: 15, items: [['Cartelería',10],['Reunión',5]] },
      { name: 'COMISIÓN DIRECTIVA', total: 10, items: [['Comunicación',10]] },
      { name: 'JUVENILES', total: 5, items: [['Torneo Jóvenes Promesas',5]] },
      { name: 'FEMENINO', total: 5, items: [['Comunicación eventos',5]] },
      { name: 'ESCUELAS', total: 5, items: [['Auditoría',5]] },
      { name: 'OPERACIONES', total: 5, items: [['Día de partido',5]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 5, items: [['Día de partido',5]] }
    ] },
    { key: 'ago', label: 'Agosto', extras: null, corto: 'AGO', areas: [
      { name: 'TIENDAS', total: 204, items: [['Papelería',72],['Indumentaria - Productos',65],['Campañas',25],['Comunicación',25],['Tienda online',10],['Vidrieras - Tiendas',5],['Reuniones - Meet',2]] },
      { name: 'COMUNICACIÓN', total: 163, items: [['Primer equipo',56],['Femenino',35],['Institucional',35],['Formativas',27],['Coberturas',10]] },
      { name: 'BRANDING', total: 101, items: [['Coordinación',25],['Daily',20],['Planificación del área',15],['Desarrollo de productos',12],['Institucional',10],['Producción',7],['Imagen de marca',7],['Presentaciones',5]] },
      { name: 'COMERCIAL', total: 80, items: [['Aliados',55],['Cobranding',25]] },
      { name: 'SOCIOS', total: 45, items: [['Socios',35],['Filiales',5],['Eventos',3],['Experiencias',2]] },
      { name: 'UDN', total: 30, items: [['Academia',15],['Campus',15]] },
      { name: 'ESPORT', total: 25, items: [['Comunicación',15],['Presentación',10]] },
      { name: 'JUVENILES', total: 20, items: [['Torneo Jóvenes Promesas',20]] },
      { name: 'MATCH DAY', total: 20, items: [['Póster día de partido',20]] },
      { name: 'RRHH', total: 16, items: [['Comunicación interna',10],['Capacitaciones',6]] },
      { name: 'INSTITUCIONAL', total: 10, items: [['Institucional',6],['Acción social',4]] },
      { name: 'PRIMER EQUIPO', total: 5, items: [['Producción',5]] },
      { name: 'FEMENINO', total: 5, items: [['Presentaciones',5]] },
      { name: 'ESCUELAS', total: 5, items: [['Auditoría',5]] },
      { name: 'OPERACIONES', total: 5, items: [['Día de partido',5]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 5, items: [['Día de partido',5]] },
      { name: 'PRESIDENCIA', total: 5, items: [['Proyectos',5]] },
      { name: 'COMISIÓN DIRECTIVA', total: 2, items: [['Comunicación',2]] }
    ] },
    { key: 'sep', label: 'Septiembre', extras: null, corto: 'SEP', areas: [
      { name: 'TIENDAS', total: 188, items: [['Papelería',72],['Indumentaria - Productos',45],['Campañas',20],['Comunicación',16],['Reuniones - Meet',10],['Producción de fotos',10],['Tienda online',10],['Vidrieras - Tiendas',5]] },
      { name: 'COMUNICACIÓN', total: 150, items: [['Primer equipo',40],['Femenino',35],['Institucional',35],['Formativas',35],['Coberturas',5]] },
      { name: 'BRANDING', total: 135, items: [['Desarrollo de productos',70],['Coordinación',25],['Institucional',20],['Daily',10],['Planificación del área',10]] },
      { name: 'COMERCIAL', total: 65, items: [['Aliados',60],['Cobranding',5],['Eventos Sponsor day',5]] },
      { name: 'UDN', total: 52, items: [['Campus',37],['Academia',15]] },
      { name: 'RRHH', total: 32, items: [['Comunicación interna',30],['Soporte - eventos',2]] },
      { name: 'JUVENILES', total: 32, items: [['Torneo internacional Talleres',30],['Presentaciones',2]] },
      { name: 'MATCH DAY', total: 30, items: [['Póster día de partido',30]] },
      { name: 'SOCIOS', total: 24, items: [['Socios',15],['Filiales',7],['Experiencias',2]] },
      { name: 'DEPORTES FEDERADOS', total: 20, items: [['Comunicación',20]] },
      { name: 'FEMENINO', total: 15, items: [['Torneo internacional Talleres',15],['Presentaciones',10]] },
      { name: 'INSTITUCIONAL', total: 6, items: [['Presentaciones institucionales',6]] },
      { name: 'PRIMER EQUIPO', total: 5, items: [['Presentaciones / Dep. del jugador',5]] },
      { name: 'PRESIDENCIA', total: 5, items: [['Institucional - protocolo',5]] },
      { name: 'ESCUELAS', total: 2, items: [['Auditoría',2]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 2, items: [['Día de partido',2]] }
    ] }
    ],
    /* Ranking por tipo de pieza (planilla de abril, 880 h relevadas). */
    piezas: [
      ['RRSS',105.2],['Planificación - Organización',84.5],['Libros',83.3],
      ['Desarrollo de proyecto',81.1],['Imagen con IA',40.2],['Merchandising',29.2],
      ['Ediciones',25.2],['Carpetas',25],['Coberturas',23],['Placas WhatsApp',20.5],
      ['Producción ejecutiva',15.45],['Banners',8.25],
      ['Papelería comercial e institucional',6.15],['Presupuesto',5.3],
      ['Preparación de archivos para impresión',4.2],['Revistas',3],
      ['Portadas de YouTube',2],['Avisos gráficos',2],['Pantallas',0.3]
    ],
    piezasNota: 'Relevamiento por tipo de pieza sobre 880 h. Ocho filas de la planilla llegaron sin nombre de categoría (≈143 h) y no se incluyen.',
    personas: [['Cande',156.75],['SA',155.75],['Lucho',152],['Enzo',149],['Sin identificar',146.75],['Esteban',139.25],['Pili',128.75]],
    personasRef: 152,
    personasNota: 'Los siete registros de la planilla. Uno de ellos (146 h 45 min) llegó sin nombre.'
  },

  { key: 'produccion', label: 'Producción Gráfica', unidad: 'h', unidadLarga: 'horas', etiqueta: 'Horas relevadas',
    fuente: 'Planilla PRODUCCIÓN GRAFICA. Para julio se usa la hoja "PRODUCCION JULIO - OK" (240 h).',
    meses: [
    { key: 'abr', label: 'Abril', extras: null, corto: 'ABR', areas: [
      { name: 'COMERCIAL', total: 60, items: [['Coberturas',25],['Presupuesto',25],['Merchandising',10],['Cartelería',5],['Indumentaria',5]] },
      { name: 'BRANDING', total: 26.9, items: [['Tareas administrativas',11.3],['Cobranding',5],['Institucional',4.3],['Desarrollo de productos',3.3],['Imagen de marca',3]] },
      { name: 'JUVENILES', total: 20, items: [['Cartelería',10],['Libros',5],['Merchandising',3],['Papelería comercial e institucional',2]] },
      { name: 'TIENDAS', total: 20, items: [['Vidrieras - Tiendas',20]] },
      { name: 'PRIMER EQUIPO', total: 20, items: [['Cartelería',20]] },
      { name: 'UDN', total: 10, items: [['Campus',5],['Reuniones',5]] },
      { name: 'MESA DE TRABAJO', total: 10, items: [['Filiales',10]] },
      { name: 'INSTITUCIONAL', total: 10, items: [['Asambleas',10]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 7, items: [['Carpetas',2],['Producción ejecutiva',2],['Placas WhatsApp',1.3],['Merchandising',1],['Coberturas',0.3]] },
      { name: 'OPERACIONES', total: 7, items: [['Día de partido',7]] },
      { name: 'SCOUTING', total: 6, items: [['Cartelería',6]] }
    ] },
    { key: 'may', label: 'Mayo', extras: null, corto: 'MAY', areas: [
      { name: 'COMERCIAL', total: 62, items: [['Cartelería',15],['Presupuesto',15],['Merchandising',15],['Armado de eventos',10],['Presentaciones',7]] },
      { name: 'UDN', total: 44, items: [['Campus',22],['Academias',17],['Reuniones',5]] },
      { name: 'RRHH', total: 41, items: [['Merchandising',41]] },
      { name: 'BRANDING', total: 40, items: [['Cartelería',33],['Daily',25],['Tareas administrativas',18],['Merchandising',5],['Capacitaciones',2]] },
      { name: 'OPERACIONES', total: 34, items: [['Día de partido',30],['Impresiones',4]] },
      { name: 'TIENDAS', total: 30, items: [['Vidrieras - Tiendas',30]] },
      { name: 'JUVENILES', total: 23, items: [['CFT',10],['Jóvenes promesas',7],['Merchandising',3],['Papelería comercial e institucional',3]] },
      { name: 'MESA DE TRABAJO', total: 16, items: [['Filiales',16]] },
      { name: 'SOCIOS', total: 14, items: [['Reuniones',12],['Filiales',2]] },
      { name: 'INFRAESTRUCTURA', total: 12, items: [['Propuestas',12]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 11, items: [['Merchandising',11]] },
      { name: 'INSTITUCIONAL', total: 8, items: [['Relaciones públicas',8]] },
      { name: 'SCOUTING', total: 4, items: [['Impresiones',4]] },
      { name: 'PRIMER EQUIPO', total: 2, items: [['Reuniones',2]] }
    ] },
    { key: 'jun', label: 'Junio', extras: null, corto: 'JUN', areas: [
      { name: 'UDN', total: 44, items: [['Campus',39],['Reuniones',5]] },
      { name: 'COMERCIAL', total: 28, items: [['Armado de eventos',9],['Presupuesto',8],['Presentaciones',6],['Cartelería',5]] },
      { name: 'JUVENILES', total: 25, items: [['Merchandising',13],['Papelería comercial e institucional',7],['Jóvenes Promesas',3],['CFT',2]] },
      { name: 'PRIMER EQUIPO', total: 24, items: [['Reuniones',24]] },
      { name: 'RRHH', total: 21, items: [['Merchandising',11],['Capacitaciones (pasado a Branding)',10]] },
      { name: 'BRANDING', total: 20, items: [['Cartelería',20],['Daily',19],['Tareas administrativas',15]] },
      { name: 'TIENDAS', total: 10, items: [['Vidrieras - Tiendas',10]] },
      { name: 'SOCIOS', total: 6, items: [['Filiales',6]] },
      { name: 'MESA DE TRABAJO', total: 4, items: [['Filiales',4]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 4, items: [['Merchandising',4]] },
      { name: 'OPERACIONES', total: 4, items: [['Impresiones',4]] },
      { name: 'INFRAESTRUCTURA', total: 4, items: [['Propuestas',4]] },
      { name: 'SCOUTING', total: 3, items: [['Impresiones',3]] }
    ] },
    { key: 'jul', label: 'Julio', extras: null, corto: 'JUL', areas: [
      { name: 'UDN', total: 55, items: [['Campus',40],['Academias',10],['Reuniones',5]] },
      { name: 'PRIMER EQUIPO', total: 37, items: [['Producción',26],['Presentaciones',5],['Relevamiento',4],['Reuniones',2]] },
      { name: 'COMERCIAL', total: 30, items: [['Aliados',25],['Comercialización',5]] },
      { name: 'OPERACIONES', total: 30, items: [['Día de partido',25],['Reunión prepartido',5]] },
      { name: 'BRANDING', total: 28, items: [['Daily',15],['Producción',15],['Planificación del área',15],['Tareas administrativas',12],['Cartelería',10],['Presupuesto',8],['Coordinación',5],['Presentaciones',5]] },
      { name: 'JUVENILES', total: 21, items: [['Merchandising',12],['Preparación de archivos',6],['Reuniones',2],['Cartelería',1]] },
      { name: 'TIENDAS', total: 14, items: [['Vidrieras - Tiendas',12],['Papelería',2]] },
      { name: 'RRHH', total: 7, items: [['Capacitaciones',4],['Merchandising',2],['Eventos',1]] },
      { name: 'INFRAESTRUCTURA', total: 7, items: [['Cartelería',4],['Presentaciones',3]] },
      { name: 'SOCIOS', total: 5, items: [['Eventos',4],['Socios',1]] },
      { name: 'DEPORTES FEDERADOS', total: 3, items: [['Producción',3]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 2, items: [['Logística',2]] },
      { name: 'SCOUTING', total: 1, items: [['Oficinas',1]] }
    ] },
    { key: 'ago', label: 'Agosto', extras: null, corto: 'AGO', areas: [
      { name: 'BRANDING', total: 119, items: [['Reuniones',38],['Producción',15],['Daily',10],['Planificación del área',10],['Presentaciones',10],['Papelería institucional',6],['Tareas administrativas',5],['Presupuesto',5],['Cartelería',5],['Desarrollo de productos',5],['Imagen de marca',5],['Relevamiento',5]] },
      { name: 'COMERCIAL', total: 42, items: [['Aliados',40],['Cobranding',2]] },
      { name: 'SOCIOS', total: 35, items: [['Filiales',20],['Eventos',15]] },
      { name: 'OPERACIONES', total: 32, items: [['Día de partido',25],['Reunión prepartido',5],['Presentaciones',2]] },
      { name: 'UDN', total: 27, items: [['Academias',20],['Campus',7]] },
      { name: 'INFRAESTRUCTURA', total: 16, items: [['Cartelería',8],['Presentaciones',8]] },
      { name: 'JUVENILES', total: 14, items: [['Preparación de archivos',5],['Reuniones',3],['Colocación',3],['Presupuesto',3]] },
      { name: 'DEPORTES FEDERADOS', total: 11, items: [['Relevamiento',8],['Cartelería',3]] },
      { name: 'TIENDAS', total: 10, items: [['Vidrieras - Tiendas',4],['Papelería',2],['Indumentaria productos',2],['Presupuesto',2]] },
      { name: 'PRIMER EQUIPO', total: 10, items: [['Producción',10]] },
      { name: 'DESARROLLO INSTITUCIONAL', total: 10, items: [['Reuniones',5],['Presupuesto',3],['Merchandising',2]] },
      { name: 'COMUNICACIÓN ESTRATÉGICA', total: 8, items: [['Streaming',5],['Impresiones',3]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 4, items: [['Merchandising',4]] }
    ] },
    { key: 'sep', label: 'Septiembre', extras: null, corto: 'SEP', areas: [
      { name: 'COMERCIAL', total: 129, items: [['Cobranding',99],['Aliados',30]] },
      { name: 'BRANDING', total: 60.3, items: [['Daily',26],['Producción',15],['Planificación del área',10],['Presentaciones',5],['Tareas administrativas',2],['Desarrollo de productos',1.3],['Relevamiento',1]] },
      { name: 'OPERACIONES', total: 25, items: [['Día de partido',25]] },
      { name: 'TIENDAS', total: 25.3, items: [['Papelería',9],['Vidrieras - Tiendas',6],['Indumentaria productos',6],['Presupuesto',4.3]] },
      { name: 'PROTOCOLO Y EVENTOS', total: 19.3, items: [['Merchandising',19.3]] },
      { name: 'UDN', total: 16.3, items: [['Campus',15.3],['Reuniones',2],['Academias',1]] },
      { name: 'PRIMER EQUIPO', total: 11, items: [['Producción',11]] },
      { name: 'JUVENILES', total: 9.3, items: [['Reuniones',9.3]] },
      { name: 'SOCIOS', total: 5, items: [['Filiales',5]] },
      { name: 'DEPORTES FEDERADOS', total: 3, items: [['Cartelería',3]] },
      { name: 'COMUNICACIÓN ESTRATÉGICA', total: 3, items: [['Streaming',3]] },
      { name: 'INFRAESTRUCTURA', total: 2, items: [['Cartelería',2]] },
      { name: 'DESARROLLO INSTITUCIONAL', total: 1, items: [['Reuniones',1]] }
    ] }
    ],
    costosNota: 'Montos de producción en pesos, de las hojas PROD GASTOS. En la planilla los valores están escritos con la coma corrida (376,95 = $376.950); acá se muestran ya corregidos.',
    costos: [
      { key: 'jun', label: 'Junio', total: 15760.95, areas: [
        { name: 'BRANDING', total: 4737, items: [['Ploteo lockers primera',1694],['Estrellas escudos',1549],['Atriles copas',1494]] },
        { name: 'RRHH', total: 4279, items: [['Bolsos Día del padre',2851],['Mate y vasos Talleres es Mundial',825],['Banderas Talleres es Mundial',363],['Vasos 3D',240]] },
        { name: 'INSTITUCIONAL', total: 1871, items: [['Remeras malvinas',799],['Vasos cafeteros',600],['Asamblea',363],['Placa Belgrano',109]] },
        { name: 'COMERCIAL', total: 1682, items: [['Aeropuerto + cartel Kazaro',772],['Gazebo Advanta',668],['Credenciales eventos',242]] },
        { name: 'TIENDAS', total: 1355, items: [['Vidrieras camiseta naranja',1355]] },
        { name: 'INFRAESTRUCTURA', total: 829, items: [['Señalética y carteles exteriores',829]] },
        { name: 'CFT', total: 565, items: [['Vinilos CFT',565]] },
        { name: 'JUVENILES', total: 376.95, items: [['Cartelería Nutrición',254.1],['Fajas cajones',102.85],['Stickers GPS',20]] },
        { name: 'OPERACIONES', total: 66, items: [['Lona Kempes',66]] }
      ] },
      { key: 'jul', label: 'Julio', total: 8216, areas: [
        { name: 'COMERCIAL', total: 2513, items: [['Gazebo Advanta',1400],['Pecheras Advanta',1113]] },
        { name: 'PRIMER EQUIPO', total: 1162, items: [['Botellas jugadores',792],['Cuadernos entrenamiento',240],['Cuadernos entrenamiento',130]] },
        { name: 'OPERACIONES', total: 1065, items: [['Pulseras acreditaciones',1065]] },
        { name: 'JUVENILES', total: 955, items: [['Cuadernos entrenamiento',810],['Cuadernos entrenamiento femenino',90],['Planes entrenamiento',55]] },
        { name: 'UNIDADES DE NEGOCIO', total: 868, items: [['Medallas Campus',398],['Certificados Campus',226],['Canilleras Campus',193],['Tarjetas pulseras Campus',38],['Certificados Academia',13]] },
        { name: 'RRHH', total: 862, items: [['Bolsos día del padre',793],['Tarjetas día del padre',46],['Medallas Talleres es Mundial',23]] },
        { name: 'BRANDING', total: 402, items: [['Bolsas protocolo',402]] },
        { name: 'TIENDA', total: 372, items: [['Tarjetones día del padre',372]] },
        { name: 'COMUNICACIÓN', total: 71, items: [['Cuadro Guido',71]] },
        { name: 'ADMINISTRACIÓN', total: 17, items: [['Órdenes de servicio',17]] }
      ] },
      { key: 'ago', label: 'Agosto', total: 12105, areas: [
        { name: 'TIENDA', total: 3816, items: [['Vidriera día del niño',3030],['Vidriera día del amigo',786]] },
        { name: 'PRIMER EQUIPO', total: 3165, items: [['Cenefas lockers vestuarios CARD',1779],['Pizarras scouting',357],['Pizarra oficina Seba y Manzur',345],['Pizarra Sampaoli',303],['Pared nutrición',193],['Pizarras canchas móviles',188]] },
        { name: 'OPERACIONES', total: 1555, items: [['Cintas seguridad',908],['Lona túnel salida jugadores',308],['Señalización palco W',131],['Carteles autos CARD',105],['Pulseras',90],['Sticker radios',13]] },
        { name: 'INSTITUCIONAL', total: 1331, items: [['Pulseras silicona',1331]] },
        { name: 'ADMINISTRACIÓN', total: 1222, items: [['Sobre de retiro',956],['Ticket estacionamiento',266]] },
        { name: 'COMERCIAL', total: 303, items: [['Tótem Algabo para QR',303]] },
        { name: 'DEPORTES FEDERADOS', total: 280, items: [['Carteles reglamento',280]] },
        { name: 'JUVENILES', total: 236, items: [['Carteles frases para vestuarios',85],['Vinilos cajones utilería',64],['Fichas reserva',45],['Sticker pesas',42]] },
        { name: 'COMUNICACIÓN', total: 115, items: [['Mapa para recorrido',115]] },
        { name: 'BRANDING', total: 82, items: [['Pasillo histórico (Benavídez)',82]] }
      ] },
      { key: 'sep', label: 'Septiembre', total: 17288, areas: [
        { name: 'COMISIÓN DIRECTIVA', total: 5800, items: [['Telón Messi',5800]] },
        { name: 'COMERCIAL', total: 5544, items: [['Lona aeropuerto Nobis',3085],['Peine Holcim',496],['Peine Cadena 3',496],['Back de prensa Advanta',387],['Pendones Tempograss',276],['Tercera línea Basani',255],['Contorno de juego boutique Holcim',187],['Contorno de juego boutique Cadena 3',187],['Cenefa banco de suplentes Holcim',175]] },
        { name: 'PRIMER EQUIPO', total: 3304, items: [['Presentes institucionales: mates imperiales x21',1215],['Presentes institucionales: botellas de aluminio x50',990],['Planillas tácticas cuerpo técnico',426],['Sticker redondo jugadores',317],['Cenefas locker vestuario cuerpo técnico De Felippe',305],['Carpeta nutrición',51]] },
        { name: 'INSTITUCIONAL', total: 2117, items: [['Planchas de stickers institucionales',2117]] },
        { name: 'TIENDA', total: 250, items: [['Seña bolsas tote',250]] },
        { name: 'DEPORTES FEDERADOS', total: 98, items: [['Folletos Deportes Federados',98]] },
        { name: 'OPERACIONES', total: 90, items: [['Folletos No sentarse en escaleras',90]] },
        { name: 'SOCIOS', total: 75, items: [['Voucher comida socios día de partido',50],['Impresiones día del niño CARD',25]] },
        { name: 'RRHH', total: 10, items: [['Tarjetas día del amigo',10]] }
      ] }
    ]
  },

  { key: 'fotografia', label: 'Fotografía', unidad: 'fotos', unidadLarga: 'fotos', etiqueta: 'Fotos entregadas',
    fuente: 'Planillas Análisis de demanda fotográfica por área, agosto y septiembre 2026.',
    /* Primera vs Femenino por tipo de cobertura: [tipo, primera, femenino]. */
    vs: {
      ago: [['Partido de local',1666,608],['Partido de visitante',430,0],['Entrenamiento',529,461]],
      sep: [['Partido de local',1845,709],['Partido de visitante',182,0],['Entrenamiento',551,508]]
    },
    vsNota: 'Primera y Femenino de Primera División. Local: fechas con cobertura para Socios y Comercial. Visitante: fechas cubiertas solo por prensa. No incluye inferiores, reserva ni juveniles.',
    destacado: '2.274 de las 7.469 fotos del mes (30%) salen de días de partido: demanda fija que impone el calendario deportivo, no decisiones del área.',
    meses: [
    { key: 'ago', label: 'Agosto', extras: null, corto: 'AGO', areas: [
      { name: 'RRSS / PRENSA', total: 4853, items: [['Entrenamientos Primera',529],['Entrenamientos Femenino',461],['Torneo Clausura F4 vs Lanús',412],['Torneo Clausura F6 vs Central',404],['Jornada Inferiores Femenino vs Belgrano',353],['Femenino Clausura F3 vs San Lorenzo',326],['Entrenamientos Fem. Inferiores',311],['Torneo Clausura F3 vs Platense',224],['Entrenamiento inferiores',220],['Torneo Clausura F5 vs Gimnasia MDZ',206],['Jornada Juveniles F21 vs Barracas',199],['Torneo Clausura F2 vs Vélez',181],['Jornada Juveniles F19 vs DyJ',172],['Femenino Clausura F5 vs Newells',164],['Jornada Juveniles F20 vs ERC',141],['Partido Reserva F5 vs Central',128],['Partido Reserva F3 vs San Lorenzo',123],['Partido Juveniles F22 vs Quilmes',110],['Partido Reserva F1 vs River',95],['Portadas Reels inferiores',67],['Fotos Refuerzo Agustín Álvarez Martínez',15],['Presentación Refuerzos Femenino',12]] },
      { name: 'SOCIOS', total: 1201, items: [['Experiencias Boutique',246],['Torneo Clausura F6 vs Central',200],['Evento Día del niño CARD',191],['Evento Día del niño Filial Carlos Paz',187],['Torneo Clausura F2 vs Vélez',120],['Torneo Clausura F4 vs Lanús',101],['Experiencia Golazo CARD',72],['Femenino Clausura F3 vs San Lorenzo',49],['Femenino Clausura F5 vs Newells',35]] },
      { name: 'COMERCIAL', total: 328, items: [['Entre Aliados (Eon)',91],['Torneo Clausura F2 vs Vélez',75],['Torneo Clausura F6 vs Central',58],['Torneo Clausura F4 vs Lanús',49],['Firma Alianza estratégica Chammas',21],['Femenino Clausura F3 vs San Lorenzo',19],['Femenino Clausura F5 vs Newells',15]] },
      { name: 'DIRECCIÓN GENERAL', total: 311, items: [['Fotos institucionales Refuerzos y promociones femenino',125],['Academia Talleres Mendiolaza',86],['Relevamiento Club Fiat',81],['Fotos institucionales Agustín Álvarez Martínez',19]] },
      { name: 'NUEVAS U. DE NEGOCIOS', total: 205, items: [['Evento Misión inversa - turismo deportivo',127],['Firma convenio Global Sports Alliance',47],['Firma acuerdo "Gira Futbolera"',31]] },
      { name: 'VINCULACIÓN INST.', total: 198, items: [['Programa vinculación educativa (Colegio Nazareth)',74],['Homenaje a Ramón Gómez',43],['Torneo Clausura F2 vs Vélez',36],['Torneo Clausura F6 vs Central',20],['Visita ministerio de educación',12],['Torneo Clausura F4 vs Lanús',10],['Visita Consejo Cs. Económicas',3]] },
      { name: 'INSTITUCIONAL', total: 106, items: [['Visita CARD ex jugadores',49],['Visita Entrenamiento Kempes ex jugadores',27],['Firma primer contrato Bruno Tray',17],['Obras CARD',13]] },
      { name: 'ÁREAS DEPORTIVAS', total: 95, items: [['Jornada Fútbol Femenino "Jugamos juntas"',95]] },
      { name: 'TIENDAS', total: 89, items: [['Foto catálogo',45],['Sesión tiendas Día del niño',44]] },
      { name: 'DEP. FEDERADOS', total: 83, items: [['Evento Deportes Federados Día del niño',83]] }
    ] },
    { key: 'sep', label: 'Septiembre', corto: 'SEP', areas: [
      { name: 'RRSS / PRENSA', total: 4601, items: [['Torneo Clausura 2026 - Fecha 6 vs R Central',605],['Entrenamientos primera',551],['Entrenamientos Femenino primera',508],['MATCHDAY - Fecha 8 vs Union',409],['Torneo Femenino clausura 2025 - Fecha 9 vs Belgrano',391],['Torneo Clausura 2026 - Fecha 7 vs Central Cordoba',344],['Entrenamientos formativas',247],['Entrenamientos Juveniles Femenino',230],['Torneo Clausura 2026 - Fecha 10 vs Instituto',182],['TORNEO FEMENINO 2026 - CLAUSURA 2026- FECHA 7 vs Banfield',161],['TORNEO JUVENILES AFA 2026 FECHA 25 VS CASLA',149],['TORNEO JUVENILES AFA 2026 FECHA 26 VS GELP',125],['TORNEO JUVENILES AFA 2026 FECHA 24 VS UNION',125],['INFERIORES FEMENINO - FECHA 18 VS UNIÓN',114],['TORNEO PROYECCIÓN - CLAUSURA 2026 - FECHA 8 VS BARRACAS',114],['Torneo inferiores Femenino 2026 - Fecha vs River',113],['TORNEO JUVENILES AFA 2026 FECHA 23 VS RIVER',102],['Portadas reel',79],['CFT y Formativas Femenino visitan el Teatro Real',21],['Presentación Omar De Felippe',18],['Entenamientos Infantiles',13]] },
      { name: 'SOCIOS', total: 938, items: [['EVENTOS 2026 - DIA DEL NIÑO - FILIAL CARLOS PAZ',187],['Experiencias socioc - Boutique',181],['Visita a Escuela El Huaico - Filial Traslasierras',151],['Torneo Clausura 2026 - Fecha 7 vs Central Cordoba',94],['Torneo Clausura 2026 - Fecha 6 vs R Central',82],['MATCHDAY - Fecha 8 vs Union',72],['Visita a Escuela de Futbol Talleres Traslasierras',67],['Torneo Femenino clausura 2025 - Fecha 9 vs Belgrano',49],['TORNEO FEMENINO 2026 - CLAUSURA 2026- FECHA 7 vs Banfield',29],['Visita Colegio Peña',26]] },
      { name: 'COMERCIAL', total: 258, items: [['Torneo Clausura 2026 - Fecha 6 vs R Central',59],['Torneo Femenino clausura 2025 - Fecha 9 vs Belgrano',56],['Torneo Clausura 2026 - Fecha 7 vs Central Cordoba',42],['MATCHDAY - Fecha 8 vs Union',39],['MATCHDAY - Fecha 8 vs Union (exp. comercial)',39],['TORNEO FEMENINO 2026 - CLAUSURA 2026- FECHA 7 vs Banfield',23]] },
      { name: 'VINCULACIÓN INST.', total: 149, items: [['Expomov Cámara de Gimnasios - Evento CARD',48],['Visita de ex jugadores al CARD',41],['MATCHDAY - Fecha 8 vs Union',28],['Torneo Clausura 2026 - Fecha 6 vs R Central',22],['Torneo Clausura 2026 - Fecha 7 vs Central Cordoba',10]] },
      { name: 'NUEVAS U. DE NEGOCIOS', total: 116, items: [['Misión inversa',116]] },
      { name: 'ÁREAS DEPORTIVAS', total: 92, items: [['EVENTOS 2026 - Jornada Puertas Abiertas Agosto',71],['Amistosos juveniles 2026 - Maipú de mendoza',21]] },
      { name: 'DIRECCIÓN GENERAL', total: 46, items: [['Nuevo Cuerpo técnico (De felippe)',40],['Texturas y fondos',6]] },
      { name: 'TIENDAS', total: 45, items: [['Fotos productos para redes',25],['Foto Producto Catálogo',20]] },
      { name: 'INSTITUCIONAL', total: 36, items: [['Obras',36]] }
    ] }
    ],
    bloques: [
      { titulo: 'RRSS / Prensa por subárea', nota: 'Las 4.853 fotos de RRSS abiertas por cuenta.',
        filas: [['RRSS Inferiores',1784],['RRSS Principal',1753],['RRSS Femenino',1316]] },
      { titulo: 'Matchday masculino', nota: '1.666 fotos en las cuatro fechas del Clausura relevadas.',
        filas: [['RRSS / Prensa',997],['Socios',421],['Comercial',182],['Institucional',66]] },
      { titulo: 'Matchday femenino', nota: '608 fotos en las dos fechas relevadas.',
        filas: [['RRSS / Prensa',490],['Socios',84],['Comercial',34]] }
    ]
  }

  ]
};
