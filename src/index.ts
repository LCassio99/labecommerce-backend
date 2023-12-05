
//console.log('O aplicativo foi iniciado')

import express, { Request, Response } from 'express'
import cors from 'cors'
import { createUser, getAllUsers, products, users, createProduct, getAllProducts, searchProductsByName } from './database';
import { TProducts, TUsers } from './types'

//console.log(users, products);

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Arroz!')
})

//getAllUsers

app.get('/users', (req: Request, res: Response)=> {
    res.send(users)
})

//getAllProducts

app.get('/products', (req: Request, res: Response) => {
    const nameToFind = req.query.name as string
    if(nameToFind){
        const result: TProducts[] = products.filter((product) => {
            return product.name.toLowerCase().includes(nameToFind.toLowerCase())
        })
        res.send(result)
    }
    res.send(products)
})

//findProductByName

app.get('/product', (req: Request, res: Response) => {
    const nameToFind = req.query.name as string
    const result: TProducts[] = products.filter((product) => {
        return product.name.toLowerCase().includes(nameToFind.toLowerCase())
    })
    res.send(result)
    if(result === undefined){
        res.send(products)
    }
})

//createUser

app.post('/users', (req: Request, res: Response) => {
    const id = req.body.id as string
  const name = req.body.name as string
  const email = req.body.email as string
  const password = req.body.password as string
  
  const newUser: TUsers = {
    id,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  }
  users.push(newUser);
  res.status(201).send('Cadastro realizado com sucesso!')
})

//createProduct

app.post('/products', (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const description = req.body.description as string
    const imageUrl = req.body.imageUrl as string
    
    const newProduct: TProducts = {
        id,
        name,
        price,
        description,
        imageUrl
    }

    products.push(newProduct)
    res.status(201).send('Produto cadastrado com sucesso!')
})
