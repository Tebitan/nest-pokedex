export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'env',
  mongodb: process.env.MONGODB,
  port: process.env.PORT,
  defaultLimit: +process.env.DEFAULTLIMIT,
});
//MAPEAMOS LAS VARIBLES DE ENTORNO DESDE (.ENV) O COLOCAMOS LOS VALORES POR DEFAULT
