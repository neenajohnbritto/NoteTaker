var router = require("express").Router();
var notes = require("../db/db.json");
var fs = require("fs");



router.get("/notes", function(req,res){
    fs.readFile("db/db.json", "utf8", function(err, data){
        if(err) throw err;
        console.log("data: " + data);
         return  res.json(data);
      });
});

router.post("/notes", function(req,res){
    var newNote = req.body;
   console.log("object: " + JSON.stringify(newNote));
    fs.readFile("db/db.json", function (err, data) {
        var json = JSON.parse(data);
        json.push(newNote);    
        fs.writeFile("db/db.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
    })
})

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

router.delete("/notes/:id", function(req,res){
    const id = req.params.id;
    notes = notes.filter(function(note) {
      if (note.title === id) {
        return false;
      }
      return true;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(true);
  
})

module.exports = router;