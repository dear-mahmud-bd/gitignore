const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello World..!")
})

const users = [
    { id: 1, name: 'shabnur', email: 'sabnur@gmail.com', phone: '01478963258' },
    { id: 2, name: 'ssabana', email: 'sabana@gmail.com', phone: '01474893258' },
    { id: 3, name: 'ssuchori', email: 'suchori@gmail.com', phone: '01478978915' },
    { id: 4, name: 'kabila', email: 'kabila@gmail.com', phone: '01478963820' },
    { id: 5, name: 'shuvo', email: 'shuvo@gmail.com', phone: '01478963182' },
    { id: 6, name: 'kajol', email: 'kajol@gmail.com', phone: '01478963158' },
    { id: 7, name: 'arifin', email: 'arifin@gmail.com', phone: '01478584058' }
]


app.get('/users', (req, res) => {
    // filter by search query parameter...
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched= users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users)
    }
})


// To get single data with URL
app.get('/user/:id', (req, res) => {
    // console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

// data get
app.post('/user', (req, res) => {
    console.log('Request', req.body)
    const user = req.body;
    user.id = users.length+1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port)
})