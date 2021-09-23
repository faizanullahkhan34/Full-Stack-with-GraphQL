const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./Schema/schema");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin request
app.use(cors());

// Connect MongoDB Atlass
mongoose.connect("mongodb+srv://restapis:54321@faizan.x5hma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.once("open",()=>{
    console.log("Connection Successfull");
});

app.use("/graphql", graphqlHTTP({
    schema:schema,
    graphiql:true,


}));

app.listen(4000, () => console.log('listening at port no. 4000'));
