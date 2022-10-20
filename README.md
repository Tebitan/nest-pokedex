<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia **.env**

6. LLenar las variables de entorno definadas en `.env`

7. Ejecutar la aplicacion en DEV:

```
yarn start:dev
```

8. Reconstruir la BBDD con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MogoDB
- Nest

# Notas

Keroku redeploy sin cambios

```
git commit --allow-empaty -m "Tigger Heroku deploy"
git push heroku main
```
