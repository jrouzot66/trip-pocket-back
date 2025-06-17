<!--  <p align="center"> -->
<!--   <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" style="margin-left: -7%; margin-right: 8%;" style="margin-left: -7%; margin-right: 8%;"/></a> -->
<!--  <a href="https://github.com/Cheikh785/mini-project-teamx-group-backend/" target="blank"><img src="teamx.png" width="500" alt="TeamX group Logo"/></a> -->
<!-- </p> -->

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Projet 1 

### Installation du projet

git clone git@github.com:jrouzot66/trip-pocket-back.git trip-pocket

(Avoir son service mysql allumé)
npm run start

### Commande Migration

npx ts-node ./node_modules/typeorm/cli.js migration:generate src/migrations/CreateUser -d src/data-source.ts
npx ts-node ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts
