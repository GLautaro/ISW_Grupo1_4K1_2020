# Universidad Tecnologica Nacional - FRC

## Ingenieria de Software - 4K1 - 2020

_Repositorio publico utilizado para aplicar los conceptos de administración de configuración de software vistos durante el año en la cátedra de Ingeniería de Software_

### Grupo Nº 1

#### Miembros:

- Arroyo, Camila
- Azabal, Dahyana
- Chiavassa, Agustín
- Gonzalez, Lautaro
- Mok, Ivan
- Vivas Castillo, Matías

### Estructura del repositorio

```
ISW_Grupo1_4K1_2020
├── Cursado
│    ├── Bibliografia
|    |    ├── Libros
│    │    └── Papers
│    └── Trabajos prácticos
│    │    ├── Evaluables
|    |    |     ├── Práctico 1
|    |    |     ├── Práctico 4
|    |    |     ├── Práctico 5
|    |    |     ├── Práctico 6
|    |    |     ├── Práctico 7
|    |    |     ├── Práctico 8
|    |    |     ├── Práctico 12
|    |    |     ├── Práctico 13
|    |    |     ├── Práctico 14
│    │    └── No evaluables
|    |    |     ├── Práctico 2
|    |    |     ├── Práctico 3
|    |    |     ├── Práctico 9
|    |    |     ├── Práctico 10
|    |    |     ├── Práctico 11
│    └── Trabajos conceptuales
|    └── Parciales
│    │    ├── Primer Parcial
│    │    └── Segundo Parcial
|    └── Reglamento y Lineamientos
└── README.md
```

### Ítems de configuración - Definicion de reglas de nombrado

|                Nombre del item                 |                  Regla de nombrado                   |                                                           Ruta de acceso                                                           |
| :--------------------------------------------: | :--------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|             Reglamento/Lineamiento             |           ISW*RL*\<nombre-documento\>.pdf            |                                                 Cursado/Reglamento y Lineamientos                                                  |
|                     Libro                      |    ISW*LIBRO*\<nombre-libro>\_\<nombre-autor>.pdf    |                                                    Cursado/Bibliografía/Libros                                                     |
|                     Paper                      |            ISW*PAPER*\<nombre-paper>.pdf             |                                                    Cursado/Bibliografía/Papers                                                     |
|                    Articulo                    |  ISW*ART*\<nombre-articulo>\_\<autor-articulo>.pdf   |                                                   Cursado/Bibliografia/Articulos                                                   |
|                    Filmina                     |     ISW*FILM*\<nro-filmina>\_\<tema-filmina>.pdf     |                                                 Cursado/Material de Clase/Teórico                                                  |
|         Trabajo Práctico No Evaluable          | ISW*TPNE\<nro-tp>*\<nombre-tp>.(docx \| xlsx \| pdf) |                                    Cursado/Trabajos prácticos/No evaluables/Práctico \<nro-tp>                                     |
|           Trabajo Práctico Evaluable           | ISW*TPE\<nro-tp>*\<nombre-tp>.(docx \| xlsx \| pdf)  |                                      Cursado/Trabajos Practicos/Evaluables/Práctico \<nro-tp>                                      |
|               Trabajo Conceptual               |     ISW*TPC\<nro-tp>*\<nombre-tp>.(docx \| pdf)      |                                                   Cursado/Trabajos conceptuales                                                    |
|                Guia de trabajos                |             ISW*GUIA*\<nombre-guia>.pdf              |                                                 Cursado/Material de Clase/Practico                                                 |
|  Material extra utilizado en Clases Prácticas  |           ISW*MCP*\<nombre-documento>.pdf            |                                                 Cursado/Material de Clase/Práctico                                                 |
|  Material extra utilizado en Clases Teóricas   |           ISW*MCT*\<nombre-documento>.pdf            |                                                 Cursado/Material de Clase/Teórico                                                  |
|            Templates para Parciales            |           ISW*Temp*\<nombre-template>.docx           |                                           Cursado/Primer Parcial Cursado/Segundo Parcial                                           |
|        Material soporte para parciales         |           ISW*MSP*\<nombre-documento>.pdf            |                                                         Cursado/Parciales                                                          |
|       Dependencias de la implementación        |                     package.json                     |                                    Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea                                    |
|  Archivo de bloqueo de dependendencia (Yarn)   |                      yarn.lock                       |                                    Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea                                    |
|              Configuración ESlint              |                    .eslintrc.json                    |                                    Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea                                    |
|     Documentación sobre la implementación      |                      README.md                       |                                    Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea                                    |
|      Archivo Índice de la implementación       |                      index.html                      |                                Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea/public                                 |
| Configuración de extensiones ignoradas por GIT |                      .gitignore                      |                                    Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea                                    |
|               Configuración PWA                |                    manifest.json                     |                                Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea/public                                 |
|    Imagenes utilziadas en la implementación    |            <nombre-imagen\>.(png \| jpg)             |                             Cursado/Trabajos Practicos/Evaluables/Práctico 6/ lo-que-sea/public/images                             |
|             Configuración Prettier             |                     .prettierrc                      |                                  Cursado/Trabajos Practicos/Evaluables/Práctico 6/lo-que-sea/src                                   |
|               Código Javascript                |                <nombre-archivo\> .js                 | Cursado/Trabajos Practicos/Evaluables/Práctico 6/lo-que-sea/src Cursado/Trabajos Practicos/Evaluables/Práctico 6/lo-que-sea/public |
|                 Hoja de estilo                 |                      index.css                       |                                  Cursado/Trabajos Practicos/Evaluables/Práctico 6/lo-que-sea/src                                   |
|             Código JavaScript XML              |              <nombre-componente\> .jsx               |                                  Cursado/Trabajos Practicos/Evaluables/Práctico 6/lo-que-sea/src                                   |
