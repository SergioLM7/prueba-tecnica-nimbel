# Prueba técnica: Generador de personajes ficticios

## Objetivo:
Crear una pequeña aplicación en React que genere personajes ficticios con atributos aleatorios.

## Premisas:
No es necesario hacer un backend aunque es valorable mantener una arquitectura que permita la reutilización de los diferentes elementos desarrollados.

## Requisitos:
✅ Generar un personaje: Al hacer clic en un botón, el sistema debe crear un personaje con un nombre, edad, raza (humano, elfo, enano, etc.), y una habilidad especial (como volar, invisibilidad, superfuerza, etc.), todos ellos aleatorios.

✅ Mostrar el personaje: Una vez generado, se debe mostrar el personaje con todos sus atributos en pantalla (nombre, edad, raza, habilidad).

✅ Guardar personajes: El usuario puede guardar varios personajes, que se mostrarán en una lista.

✅ Eliminar personajes: El usuario puede eliminar personajes de la lista guardada.

✅ Persistencia (opcional): Al recargar la página, los personajes guardados permanecen usando localStorage.


## Ejemplo de flujo:
-El usuario abre la aplicación y ve un botón que dice "Generar Personaje".

-Al hacer clic, aparece un personaje aleatorio, como:

  Nombre: "Eldrin"
  
  Edad: 120
  
  Raza: Elfo
  
  Habilidad: Invisibility
  
-El usuario puede guardar este personaje en una lista, generar más, o eliminar personajes de la lista.

## Puntos a evaluar:
-Creatividad: Cómo estructura la generación aleatoria (puedes preparar listas predefinidas de nombres, razas y habilidades).

-Estado: Uso de useState para gestionar los personajes generados y guardados.

-Eventos: Manejo de eventos como clics y formularios.

-Listas y renderizado condicional: Cómo renderiza la lista de personajes guardados.

-Persistencia (opcional): Usar localStorage para que los personajes se conserven al refrescar la página.

## Extra (si tiene tiempo o avanza rápido):
✅ Asignar una imagen aleatoria para cada personaje (puede usar una API de imágenes o iconos).

✅ Añadir la opción de "editar" un personaje.

