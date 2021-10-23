const express = require('express');
const env = require('dotenv');
const { json } = require('express');
const { urlencoded } = require('express');
const  cors  = require('cors');
// connect mongoose db connection
const db = require('./db/connection');
const path = require('path');
// import routes


const adminauthRoutes = require('./routes/admin/admin');
const roleRouters = require('./routes/admin/role');
const useradminRouters = require('./routes/admin/user/userroute');
const astrologeradminRouters = require('./routes/admin/astrologer/astroroute');
const serviceRouters = require('./routes/admin/serviceroute');
const bannerRouters = require('./routes/admin/bannerroute');
const blogCategoryRouters =require('./routes/admin/blogroute/categoryblogroute');
const blogRouters =require('./routes/admin/blogroute/blogRoute');
// product section route
const categoryRouters = require('./routes/admin/product/categoryRoute');
const productRouters = require('./routes/admin/product/productRoute');

// for website
const callhistoryRouters = require('./routes/user/callhistoryRoute');


// GET PROT IN ENV FILE
const port = process.env.PORT || 8000;

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "../.env" });
}


// CALL ENVERMENT VARIABLE
env.config();
// CREATE APP USING EXPRESS
const app = express();

// WORK AS MIDDLWARES 


app.use(express.json());
app.use(express.urlencoded({extended: true })); //Parse URL-encoded bodies
app.use(cors());
app.use('/public',express.static(path.join(__dirname,'uploads')));
// CREATE



app.use('/api', adminauthRoutes);
app.use('/api', roleRouters);

// service
app.use('/api', serviceRouters);
// for banner
app.use('/api',bannerRouters);
// blog category
app.use('/api',blogCategoryRouters);
app.use('/api',blogRouters);

// product
app.use('/api',categoryRouters);
app.use('/api',productRouters);

// USER ADMIN SIDE ROUTE
app.use('/api',useradminRouters);
// ASTROLOGER ADMIN SIDE ROUTE
app.use('/api',astrologeradminRouters);
// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: "Hello From server" 
//     });
// });

// WEBSITE 
app.use('/api',callhistoryRouters);




app.use(express.static(path.join(__dirname, "../admin/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../admin/build/index.html"));
});


app.listen(port, () => {
    console.log(`Server is running on port no ${port}`);
});