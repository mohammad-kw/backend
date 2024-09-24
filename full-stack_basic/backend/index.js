// if we are import express like this, then  we have to make changes in package.json  ("type":"module")

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

// --->

app.get('/api/entries', (req, res) => {
    const employees = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'admin' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'moderator' },
        { id: 3, name: 'Bob Brown', email: 'bobbrown@example.com', role: 'user' },
        { id: 4, name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'admin' },
        { id: 5, name: 'Mike Davis', email: 'mikedavis@example.com', role: 'user' },
        { id: 6, name: 'Emily Chen', email: 'emilychen@example.com', role: 'moderator' },
        { id: 7, name: 'David Lee', email: 'davidlee@example.com', role: 'admin' },
        { id: 8, name: 'Sarah Taylor', email: 'sarahtaylor@example.com', role: 'user' },
    ];

    res.send(employees)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);

})