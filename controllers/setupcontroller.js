var Todos=require('../model/todomodel')

module.exports=function(app)
{
    app.get('/api/setupTodo', function(req,res){
        // to send data
        var starterTodos=[        
        {
            username:'test',
            todo: 'feed dog',
            isDone: false,
            hasAttarchment:'false'

        },
        {
            username:'test',
            todo: 'buy milk ',
             isDone: false,
            hasAttarchment:'false'

        },
        {
            username:'test',
            todo: 'learn node',
            isDone: false,
            hasAttarchment:'false'

        }
    ]

    Todos.create(starterTodos,function(err,results){
      res.send(results);  
    })
    })
}