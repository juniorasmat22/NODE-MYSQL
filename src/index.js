const express=require('express');
const path=require('path');
const morgan=require('morgan');
const exphbs=require('express-handlebars');
//inicializations
const app=express();
const indexRoutes=require('./routers/index');
const indexAuth=require('./routers/authentication');
const indexLinks=require('./routers/links');
//setting
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'inicio',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partial'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs')

//middlewares
//funciones cuando una peticion cliente se envia al servidor
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Global variables
app.use((req, res, next)=>{
    next();
});
//routes
app.use(indexRoutes);
app.use(indexAuth);
app.use('/links',indexLinks);
//static files
app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'),()=>{
    console.log("server on port",app.get('port'));
});