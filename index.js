const { server } = require('./config/server.js');




const port = process.env.PORT || 7000;
server.listen(port, () => {
    console.log(`Server started on port ${port}!`)
})