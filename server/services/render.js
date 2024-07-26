const axios = require('axios');

const homeRoutes = (req, res) => {
    axios.get("http://localhost:5000/api/users")
        .then(response => {
           
            res.render('index.ejs', { users: response.data });
        })
        .catch(err => {
            console.error(err); // Log the error for debugging
            res.status(500).send("An error occurred while fetching users");
        });
};

const add_user=(req,res)=>{
    res.render('add_user.ejs');

}

update_user = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
module.exports={homeRoutes,add_user,update_user};
