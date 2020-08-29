const express=require('express');
const app=express();

app.use(express.json());

const genres=[
{
    id:1,
    name:'Action'
},{
    id:2,
    name:'Adventure'
},{
    id:3,
    name:'Thriller'
}
];
app.listen(3000,()=>
{
    console.log('Listening on port 3000');
});
app.get('/genres',(req, res)=>
{
    res.send(genres);
});

app.get('/genres/:id',(req, res)=>
{
    let id=req.params.id;
    // res.send(id);/
    let genre=genres.find(c=>c.id===parseInt(id));
    if(!genre) return res.status(404).send('Genre not found be');
    res.send(genre);
});


app.post('/genres/add',(req,res)=>
{
    // Adding at end of array
    const genre={
        id:genres.length+1,
    name:req.body.name
}
//res.send(req.params);
genres.push(genre);
res.send(genre);
});

app.delete('/genres/remove/:id', (req,res)=>
{
    const id=req.body.id;
    const genre=genres.splice(id, 1);
    res.send(genre);

})