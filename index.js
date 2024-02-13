//import dotenv
require('dotenv').config()

//import express
const express = require('express')

const cors = require('cors')

const router = require('./Routing/router')

require('./DB/connection')


const todoServer = express()

todoServer.use(cors())

todoServer.use(express.json())

todoServer.use(router)

const PORT = 4000 || process.env

todoServer.listen(PORT,()=>{
    console.log(`server running successfully  ${PORT}`);
})

todoServer.get('/',(req,res)=>{
    res.send(`server running successfully`)
})