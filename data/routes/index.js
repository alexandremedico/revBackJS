// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/move/:movement', function(req, res, next) {
//   let choice = req.params.movement;
//   let values = ["papier","ciseaux","pierre"];
//   let valueToUse = values[Math.floor(Math.random() * values.length)];
//   console.log(valueToUse);
//
//   if (choice === "papier") {
//     if (valueToUse === "ciseaux"){
//       res.send("Perdu");
//     } else if (valueToUse === "pierre") {
//       res.send("Gagné");
//     } else {
//       res.send("égalité");
//     }
//   }
//   if (choice === "ciseaux") {
//     if (valueToUse === "papier"){
//       res.send("Gagné");
//     } else if (valueToUse === "pierre") {
//       res.send("Perdu");
//     } else {
//       res.send("égalité");
//     }
//   }
//   if (choice === "pierre") {
//     if (valueToUse === "feuille"){
//       res.send("Perdu");
//     } else if (valueToUse === "ciseaux") {
//       res.send("Gagné");
//     } else {
//       res.send("égalité");
//     }
//   }
// });
//
// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/move/:movement', function(req, res, next) {

  let result = "victory";
  const randNumber = Math.floor((Math.random() * 3) + 1);
  switch (randNumber) {
    case 1:
      if(req.params.movement == 'rock') {
        result = "defeat";
      } else if (req.params.movement == 'paper') {
        result = "tie";
      }
      break;
    case 2:
      if(req.params.movement == 'scissors') {
        result = "defeat";
      } else if (req.params.movement == 'rock') {
        result = "tie";
      }
      break;
    case 3:
      if(req.params.movement == 'paper') {
        result = "defeat";
      } else if (req.params.movement == 'scissors') {
        result = "tie";
      }
      break;
  }
  res.send(result);
});

module.exports = router;
