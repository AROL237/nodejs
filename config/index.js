

var configvalue= require('./config')

module.exports={
     getDbConnectionString: function(){
         return "mongodb+srv://arol:"+ configvalue.pwd+"@cluster0.uryio.mongodb.net/"+configvalue.uname+"?retryWrites=true&w=majority"
     }
} 