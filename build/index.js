"use strict";
//console.log('O aplicativo foi iniciado')
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
//console.log(users, products);
const createUserMessage = (0, database_1.createUser)('u003', 'Astrodev', 'astrodev@email.com', 'astrodev99');
console.log(createUserMessage);
const allUsers = (0, database_1.getAllUsers)();
console.log('Lista de usuários: ', (0, database_1.getAllUsers)());
const createProductMessage = (0, database_1.createProduct)('prod003', 'SSD gamer', 349.99, 'Acelere seu sistema com velocidades incríveis de leitura e gravação.', 'https://images.unsplash.com/photo');
console.log(createProductMessage);
const allProducts = (0, database_1.getAllProducts)();
console.log('Lsita de produtos', allProducts);
const searchTerm = 'gamer';
const productsByName = (0, database_1.searchProductsByName)(searchTerm);
console.log(`Produtos com o termo ${searchTerm}:`, productsByName);
