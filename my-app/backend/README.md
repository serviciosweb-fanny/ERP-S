Backend de ejemplo con Express que expone dos webhooks:

- POST /webhook/frontend
- POST /webhook/backend

Instrucciones:

1. Abrir terminal en esta carpeta `commit/ERP-S/backend`.
2. Instalar dependencias:

```sh
npm install
```

3. Ejecutar servidor:

```sh
npm start
```

Por defecto el servidor escucha en el puerto `3000`.

Prueba con curl:

```sh
curl -X POST http://localhost:3000/webhook/frontend -H 'Content-Type: application/json' -d '{"test":1}'
```
Backend de ejemplo con Express que expone dos webhooks:

- POST /webhook/frontend
- POST /webhook/backend

Instrucciones:

1. Abrir terminal en esta carpeta `commit/ERP-S/backend`.
2. Instalar dependencias:

```sh
npm install
```

3. Ejecutar servidor:

```sh
npm start
```

Por defecto el servidor escucha en el puerto `3000`.

Prueba con curl:

```sh
curl -X POST http://localhost:3000/webhook/frontend -H 'Content-Type: application/json' -d '{"test":1}'
```
