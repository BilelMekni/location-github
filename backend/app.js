//-------Module Importation -------//
/**import Express Module****/
const express = require("express");
/**import Module Body Parser****/
const bodyParser = require("body-parser");
/**import Module Path (module interne)****/
const path = require("path");
/**import Module Multer ****/
const multer = require("multer");
/**import Module Bycript ****/
const bcrypt = require("bcrypt");
/**import Module Axios ****/
const axios = require("axios");
/**import Mongoose Module ****/
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (projetLocationDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/projetLocationDB');

////----------Express Application--------////
// creates express application //
const app = express();
/** Module Importation  ****/
const User = require("./models/user");
const Client = require("./models/client");
const Publications = require("./models/publications");
const Car = require("./models/car");
const Contact = require("./models/contact");




// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf',
    'video/mp4': 'mp4',



};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-projetlocation-' + '.' +
            extension;
        cb(null, imgName);
    }
});

////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Admin------------------------------------////
//**********************signup Admin************************************/// */
app.post("/admin/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "trainer-1.jpg";
    console.log("URL", url);
    // http://localhost:3008
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Password", cryptedPwd);
        let admin = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            email: req.body.email,
            telephone: req.body.telephone,
            adresse: req.body.adresse,
            password: cryptedPwd,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,


        });
        admin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });

                }
            } else {
                res.json({ message: "Added with success" });
            }
        });
    });
});
//**********************Get All Admin************************************/// */
app.get("/admin", (req, res) => {
    console.log("Here into BL: Get All admin");
    Client.find({ "role": { "$in": "admin" } }).then((docs) => {
        res.json({ admin: docs });
    });
});
//**********************Get Admin By Id************************************/// */
app.get("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get admin By ID", id);
    Client.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ admin: doc })
            : res.json({ message: "Admin does not exist" });
    });


}

);
//**********************Delete Clients************************************/// */
app.delete("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Admin By ID", id);
    Client.deleteOne({ _id: id }).then((response) => {
        console.log("Here response admin after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Clients------------------------------------////
//**********************Signup Clients************************************/// */
app.post("/clients/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images" + req.file.filename
        : url + "/images/" + "ssss.jpg";
    console.log("URL", url);
    // http://localhost:3008
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);
        let client = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            email: req.body.email,
            password: cryptedPwd,
            phone: req.body.phone,
            adresse: req.body.adresse,
            gender: req.body.gender,
            avatar: path,
            role: req.body.role,
        });
        client.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }
            } else {
                res.json({ message: "Added with success" });
            }
        });
    });
});
//**********************Get Clients************************************/// */
app.get("/clients", (req, res) => {
    console.log("Here into BL: Get All Clients");
    Client.find({ "role": { "$in": "clients" } }).then((docs) => {
        res.json({ client: docs });
    });
});
//**********************Get Clients By Id************************************/// */
app.get("/clients/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get clients By ID", id);
    Client.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ owner: doc })
            : res.json({ message: "clients does not exist" });
    });


}

);
//**********************Delete Clients************************************/// */
app.delete("/clients/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Clients By ID", id);
    Client.deleteOne({ _id: id }).then((response) => {
        console.log("Here response clients after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Login------------------------------------////
app.post("/clients/login", (req, res) => {
    console.log("Here into login", req.body);
    let manager;
    Client.findOne({ email: req.body.email }).then((doc) => {
        if (!doc) {
            res.json({ msg: "0" });

        }
        manager = doc;
        return bcrypt.compare(req.body.password, doc.password);
    }).then(
        (pwdResponse) => {
            console.log("here pwdResponse ", pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1" });

            } else {
                // send user information {id , fName, lName, role}
                let userTosend = {
                    id: manager._id,
                    fName: manager.firstName,
                    lName: manager.lastName,
                    role: manager.role,
                };
                res.json({ manager: userTosend, msg: "2" });

            }
        });
});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Publications Clients------------------------------------////
//**********************Add Publications Clients************************************/// */
app.post("/publications", (req, res) => {
    console.log("Here into BL: Add Publication Clients", req.body);
    let publ = new Publications({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        status: req.body.status,
        clientsId: req.body.clientsId,
    });
    console.log("Here add publications clients", publ);
    publ.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });

        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************Get Publications Clients************************************/// */
app.get("/publications/all", (req, res) => {
    console.log("here publications with Clients");
    Publications.aggregate(
        [
            {
                $lookup: {
                    from: "clients", // collection to join
                    localField: "clientsId", // filed from the input documents
                    foreignField: "_id", // field from the documents of the "from" collection
                    as: "publicite", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all publications", docs);
            res.status(200).json({
                publicite: docs,
            });
        }
    );
})

//**********************Get Publications Clients By ID************************************/// */
app.get("/publications/:id", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publications.aggregate(
        [
            {
                $match: { clientsId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "clients", // collection to join
                    localField: "clientsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "clients", // output array field
                },
            },
            {
                $lookup: {
                    from: "clients", // collection to join
                    localField: "clientId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "clients", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by clients id", docs);
            res.status(200).json({
                produit: docs,
            });
        }
    );

})
//**********************Delete Products Owners************************************/// */
app.delete("/publications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Publications Clients By ID", id);
    Publications.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publications Clients after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Cars By Admin------------------------------------////
//**********************Add Car************************************/// */
app.post("/cars", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Cars");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images" + req.file.filename
        : url + "/images/" + "bolbol.jpg";
    console.log("URL", url);
    let car = new Car({
        name: req.body.name,
        matricule: req.body.matricule,
        color: req.body.color,
        pays: req.body.pays,
        price: req.body.price,
        guarantee: req.body.guarantee,
        date: req.body.date,
        avatar: path,
    });
    car.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });

        } else {
            res.json({ message: "Error" });
        }
    });
});
//**********************Get Clients************************************/// */
// app.get("/cars/all/all", (req, res) => {
//     console.log("here carss with Admin");
//     Car.aggregate(
//         [
//             {
//                 $lookup: {
//                     from: "clients", // collection to join
//                     localField: "adminId", // filed from the input documents
//                     foreignField: "_id", // field from the documents of the "from" collection
//                     as: "car", // output array field
//                 },
//             },
//         ],
//         (error, docs) => {
//             console.log("here all cars", docs);
//             res.status(200).json({
//                 car: docs,
//             });
//         }
//     );
// })
//**********************Get Cars By Admin************************************/// */
app.get("/cars", (req, res) => {
    console.log("Here into BL : Get cars By ID");
    Car.find().then((doc) => {
        console.log("here doc", doc);
        res.json({ principale: doc })
    });
})
//**********************Get Cars By Id************************************/// */
app.get("/cars/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL : Get cars By ID", id);
    Car.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ info: doc })
            : res.json({ message: "cars does not exist" });
    });
})
//**********************Put Cars By Admin************************************/// */
app.put("/cars", (req, res) => {
    console.log("here into BL:Update Cars", req.body);
    Car.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "cars is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
})
//**********************Delete Cars By Admin************************************/// */
app.delete("/cars/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Cars Admin By ID", id);
    Car.deleteOne({ _id: id }).then((response) => {
        console.log("Here response car admin after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
//**********************Search Cars************************************/// */
app.post("/cars/search", (req, res) => {
    let searchObj = req.body;
    console.log(searchObj);
    Car.find({
        $or: [
            { pays: searchObj.pays },
            { price: searchObj.price },

        ],
    }).then((docs) => {
        res.json({ searchTab: docs });
    });
});
////-------------------Buisness Logic ----------------------------------////
////--------------------Partie Contact------------------------------------////
//**********************Add Contact************************************/// */
app.post("/contact", (req, res) => {
    console.log("Here into BL: Add Contact", req.body);
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    });
    console.log("here add contact", contact);
    contact.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Add with success" });
        } else {
            res.json({ message: "Error" });
        }


    });


});
//**********************Get Contact************************************/// */
app.get("/contact/contact/all/all", (req, res) =>{
    console.log("Here into BL: Get All Contact Problem");
    Contact.find().then((docs) =>{
        res.json({contact: docs});
    });
    
});
//**********************Delete Contact By Admin************************************/// */
app.delete("/contact/:id",(req, res)=>{
    let id = req.params.id;
    console.log("Here into BL: Delete contact By ID",id);
    Contact.deleteOne({_id:id}).then((response) =>{
        console.log("Here response contact after delete",response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted:true});
            
        } else {
            res.json({ isDeleted: false});
        }
        
    })
    
});





///---------App Exportation--------///
// make app importable from another files
module.exports = app;