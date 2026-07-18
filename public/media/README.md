# Medios de Altum San Isidro

Este directorio contiene exclusivamente la estructura para los medios finales. La interfaz actual usa reservas de composición en lugar de fotografías, renders o videos temporales.

Reemplaza cada reserva con el archivo indicado por su ruta en pantalla, conservando los nombres:

- `hero/reserva-exterior-dusk.jpg` y `hero/reserva-exterior-dusk.mp4` — exterior principal, 16:9, mínimo 2560 px de ancho.
- `architecture/arrival-lobby.jpg` — detalle de acceso o lobby, vertical 4:5, mínimo 1600 px de alto.
- `residences/residencia-jardin.jpg`, `residencia-tipica.jpg`, `penthouse-terrace.jpg` — renders de las tres tipologías, 4:3.
- `amenities/lobby-arrival.jpg`, `rooftop-terrace.jpg`, `private-service.jpg` — áreas comunes, vertical para lobby y 16:10 para los dos restantes.
- `location/san-isidro-aerial.jpg` — fotografía aérea del entorno, vertical 4:5.
- `architecture/materials-lobby.jpg` — detalle de piedra, madera o lobby, vertical 3:4.
- `architecture/arrival-lobbyy.jpg` — acceso o lobby con iluminación cálida, vertical 4:5.
- `amenities/private-service.jpg` — espacio de servicio y almacenamiento, 16:10.
- `contact/sales-gallery.mp4` — video o fotografía de la visita a la sala de ventas, 16:9, mínimo 1920 px de ancho.

Antes de conectar archivos reales, actualiza el componente `FutureMedia` por `next/image` o por el reproductor de video correspondiente. Los contenedores, sus proporciones y sus textos ya están preparados para las dimensiones indicadas.
