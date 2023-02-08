//// node server for socket io

const io = require('socket.io')(8000)

const users = {}

io.on('connection' , socket =>{
    socket.on('user-joined', name =>{
        user[]
    })
})