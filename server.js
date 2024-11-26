// import express from "express";
// import routes from "./src/routes/postsRoutes.js";

// const app = express();
// app.use(express.static("uploads"));
// routes(app);

// // Use a variável de ambiente PORT ou 3000 como fallback
// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//     console.log(`Servidor escutando na porta`);
// });

import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log("Servidor escutando...");
});

// import express from "express";
// import routes from "./src/routes/postsRoutes.js";

// const porta = process.env.PORT || 3000;
// const app = express();
// app.use(express.static("uploads"));
// routes(app);

// app.listen(porta, () => {
//     console.log(`Servidor escutando na porta ${porta}`);
// });