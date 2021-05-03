const app = require ('./app')

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`);
});