const express = require("express");
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/comics");
})
// Get all comics
app.get("/comics", (req, res) => {
    db.comic.findAll()
        .then(comics => {
            res.json(comics);
        })
        .catch(err => {
            res.send("ERROR: Couldn't get all comics");
        });
});

// Add a new comic
app.post("/comics", (req, res) => {
    db.comic.findOrCreate({
        where: {
            comicUrl: req.body.comicUrl
        },
        defaults: {
            creatorName: req.body.creatorName,
            supportUrl: req.body.supportUrl,
            rating: req.body.rating,
            updated: req.body.updated,
            isActive: req.body.isActive,
            isFree: req.body.isFree
        }
    }).then(([comic, created]) => {
        if (created) {
            console.log("Created new comic");
        } else {
            console.log("Found comic");
        }
        res.redirect(`/comics/${comic.id}`);
    }).catch(err => {
        res.send("Error: Couldn't add new comic");
    });
});

// See a specific comic
app.get("/comics/:id", (req, res) => {
    db.comic.findOne({
        where: {
            id: req.params.id
        }
    }).then(comic => {
        res.json(comic);
    }).catch(err => {
        res.send(`Error: Couldn't find comic ${req.params.id}`);
    });
})

// Update a specific comic
app.put("/comics/:id", (req, res) => {
    db.comic.update({
        creatorName: req.body.creatorName,
        comicUrl: req.body.comicUrl,
        supportUrl: req.body.supportUrl,
        rating: req.body.rating,
        updated: req.body.updated,
        isActive: req.body.isActive,
        isFree: req.body.isFree
    }, {
        where: {
            id: req.params.id
        }
    }).then(comic => {
        res.redirect(`/comics/${comic.id}`);
    }).catch(err => {
        res.send(`ERROR: Comic ${comic.id} failed to update`);
    });
});

// Delete a specific comic
app.delete("/comics/:id", (req, res) => {
    db.comic.destroy({
        where: {
            id: req.params.id
        }
    }).then(numDel => {
        res.send(`${numDel} thing is gone`);
    }).catch(err => {
        console.log(err);
        res.send("ERROR: Comic was not destroyed.");
    });
});

app.listen(3000, () => { console.log("I took a trip to the port 3000!") });