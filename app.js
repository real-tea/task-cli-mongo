const { MongoClient, ObjectID } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017'

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(err,client) => {
    if(err){return console.log(err);}
    console.log("connection success")

    const db = client.db('cli-task')


    //* -> Inserting many document in a collection of "tasks"
    // db.collection('tasks').insertMany([
    //     {
    //         task : 'Going for a run',
    //         compleated : true
    //     },
    //     {
    //         task : 'Playing',
    //         completed : false 
    //     },
    //     {
    //         task : 'Coding',
    //         task : true
    //     }
    // ],(err,result) => {
    //     if(err)return console.log(err)
    //     console.log(result)
    // })


    //* -> Finding a data using find() function 
    // db.collection('tasks').find({ completed : false }).toArray((error , task)=>{
    //     if(error) return console.log("error encounterd")
    //     console.log(task);
    // })
    
    //* -> Updating a field using $set

//     db.collection('tasks').updateOne({
//         _id : new ObjectID("61693bd720760ca27c09bf74")
//     },{
//         $set : {
//             completed : false 
//         }
//     }).then((result )=>{
//         console.log(result)
//     }).catch((err)=>{
//         console.log(err)
//     })

    //* -> Deleting task using DeleteOne
    db.collection('tasks').deleteOne({
        task : 'Washing'
    }).then((res)=>{
        console.log("Deleted")
    }).catch((err)=>{
        console.log(err)
    })
 })

