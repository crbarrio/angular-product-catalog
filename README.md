# AngularProductCatalog

## Descripción
Aplicación para la visualización de un catálogo de productos de videojuegos y navegación a su página de detalles

## Tecnologías utilizadas
- **Angular** (v21.2.7)
- **TypeScript**
- **Tailwind CSS**
- **HTML5**
- **Vitest** (pruebas unitarias)

## Instalación y ejecución
1. Clona el repositorio:
	```bash
	git clone https://github.com/crbarrio/angular-product-catalog.git
	cd budget
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	ng serve
	```
4. Accede a la aplicación en tu navegador en [http://localhost:4200](http://localhost:4200)

## Ejecutar tests unitarios
Para correr los tests unitarios ejecuta:
```bash
ng test
```

## Estructura del proyecto
- `src/app/components/`: Componentes reutilizables (formularios, ítems, cabecera, navbar, etc.)
- `src/app/layout/`: Página con el layout principal de la aplicación.
- `src/app/pages/`: Páginas principales de la aplicación (lista y detalles)
- `src/app/services/`: Servicios de lógica de negocio y gestión de datos
- `src/app/interfaces/`: Definición de interfaces TypeScript
- `src/app/text/`: Textos y recursos estáticos