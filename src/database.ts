import { Profiler } from 'inspector';
import { TProducts, TUsers } from './types';

export const users: TUsers[] = [
  {
    id: 'u001',
    name: 'Leonardo Palestra',
    email: 'leo@email.com',
    password: 'leo123',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'u002',
    name: 'Vincenzo di Napoli',
    email: 'vincenzo@email.com',
    password: 'vince123',
    createdAt: new Date().toISOString(),
  },
]


export const products: TProducts[] = [
    {
      id: 'prod001',
      name: 'Mouse gamer',
      price: 250,
      description: 'Melhor mouse do mercado!',
      imageUrl: 'https://picsum.photos/seed/Mouse%20gamer/400',
    },
    {
      id: 'prod002',
      name: 'Monitor',
      price: 900,
      description: 'Monitor LED Full HD 24 polegadas',
      imageUrl: 'https://picsum.photos/seed/Monitor/400',
    },
  ]
  



export function createUser(id: string, name: string, email: string, password: string):string {
  const createdAt = new Date().toISOString()
  const newUser: TUsers = {id, name, email, password, createdAt}
  users.push(newUser)

  return 'Cadastro realizado com sucesso' 
}

export function getAllUsers(): TUsers[] {
  return users
}

export function createProduct(id: string, name: string, price: number, description: string, imageUrl: string):string {
  const newProduct: TProducts = {id, name, price, description, imageUrl}
  products.push(newProduct)
  return 'Produto criado com sucesso'
}

export function getAllProducts(): TProducts[]{
  return products
}

export function searchProductsByName(name: string): TProducts[] {
  const searchTermLower = name.toLowerCase()
  return products.filter(product => product.name.toLowerCase().includes(searchTermLower))
}
