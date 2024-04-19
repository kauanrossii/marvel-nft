import App from "./app";
import { AppDataSource } from "./domain/data-source";

AppDataSource.initialize().then(async () => {
    await App.listen({port: 3000, host: "0.0.0.0"})
    
}).catch(error => console.log(error));