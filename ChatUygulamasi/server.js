const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3000)

app.use(express.static('public'))
const ioserver = socket(server)

ioserver.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('chat',data => {
        ioserver.sockets.emit('chat',data)
    })

    socket.on('typing', data=>{
        socket.broadcast.emit('typing',data)
    })
})
