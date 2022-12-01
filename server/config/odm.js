// Importamos dependencia de mongoose
import mongoose, { connection } from 'mongoose';
// Llamamos dependencia de winston
import logger from './winston';

class MongooseOdm {
  // Constructor de la clase
  constructor(url) {
    this.url = url;
  }

  // Metodo para conectar a la BD
  async connect() {
    try {
      // Configuraciones que requiere mongoose
      mongoose.Promise = global.Promise;
      logger.info(`La base de datos se ha conectado en: ${this.url}`);
      return connection;
    } catch (error) {
      logger.error(
        ` No se pudo realizar la conexión: ${error.message}`
      );
      return false;
    }
  }
}
export default MongooseOdm;