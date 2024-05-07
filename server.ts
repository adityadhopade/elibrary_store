import app from './src/app'
import { config } from './src/config/config';
console.log("Server Running");

const startServer = () =>{
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  })
}

startServer();
