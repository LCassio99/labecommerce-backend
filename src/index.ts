
//console.log('O aplicativo foi iniciado')

import { createUser, getAllUsers, products, users, createProduct, getAllProducts, searchProductsByName } from './database';

//console.log(users, products);

const createUserMessage = createUser('u003', 'Astrodev', 'astrodev@email.com', 'astrodev99')
console.log(createUserMessage)

const allUsers = getAllUsers()
console.log('Lista de usuários: ', getAllUsers())

const createProductMessage = createProduct('prod003', 'SSD gamer', 349.99, 'Acelere seu sistema com velocidades incríveis de leitura e gravação.', 'https://images.unsplash.com/photo')
console.log(createProductMessage)

const allProducts = getAllProducts()
console.log('Lsita de produtos', allProducts)

const searchTerm = 'gamer'
const productsByName = searchProductsByName(searchTerm)

console.log(`Produtos com o termo ${searchTerm}:`, productsByName)
