const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//var dbname = 'mongodb://localhost:27017/todoAPI';

mongoose.connect('mongodb://zueore:ashish`1@ds035059.mlab.com:35059/todoapp', (e) => {
  if (e) throw e;
  console.log('Database connected');
});

module.exports = {
  mongoose
};