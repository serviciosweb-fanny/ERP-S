Proyecto frontend de ejemplo para probar webhooks.

Instrucciones rápidas:

- Abrir frontend/index.html en tu navegador (o servirlo con un servidor estático).
- Pulsar los botones para enviar peticiones POST al backend en http://localhost:3000.

También puedes usar curl:

```sh
curl -X POST http://localhost:3000/webhook/frontend -H 'Content-Type: application/json' -d '{"msg":"hola desde frontend"}'
```
