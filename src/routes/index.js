const express = require('express');
const router = express.Router();

const products = require('../data.json');

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const { name1 } = req.body;
  const {emp }= req.body;  

  products.push({
    id: products.length + 1,
    name,
    name1,
    emp,
    
    
  });
  res.json('Successfully created');
});

router.put('/:id', (req, res) => {
  console.log(req.body, req.params)
  const { id } = req.params;
  const { name } = req.body;
  const { name1 } = req.body;
  const { emp }  = req.body;
  products.forEach((product, i) => {
    if (product.id == id) {
      product.name = name;
      product.name1=name1;
      console.log("data is right or wrong")
      console.log(product.name1);
      product.emp=emp;
    }
  });
  res.json('Successfully updated');

});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  products.forEach((product, i) => {
    if(product.id == id) {
      products.splice(i, 1);
    }
  });
  res.json('Successfully deleted');
});

module.exports = router;
