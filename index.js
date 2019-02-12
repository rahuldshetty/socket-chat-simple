var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html');
});

io.on('connection',(socket)=>{
    console.log('A user is connected...');
    socket.on('disconnect',()=>{
        console.log('user disconnected...')
    });

    socket.on('chat message',(msg)=>{
         io.emit('chat message',msg);
    });

    socket.on('name change',(arr)=>{
        io.emit('name change',arr);
    });


});





http.listen(3000,()=>{
    console.log('listening at 3000');
});