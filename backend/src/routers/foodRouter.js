import {Router} from 'express';
import Fooddata from '../FoodData.js';


const router = Router();

router.get('/',(req, res)=>{
    res.json(Fooddata);
});

router.get('/search/:searchTerm',(req, res) =>{
    const {searchTerm} = req.params;
    const filteredfoods = Fooddata.filter((item) =>
        item.fname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    res.json(filteredfoods);
})

// router.get('/:id',(req, res) =>{
//     const {id} = req.params;
//     const foodItem = Fooddata.find(item => item.id === id);
//     res.send(foodItem || null);
// })

export default router;
