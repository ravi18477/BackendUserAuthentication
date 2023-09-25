import express from 'express';
import { signupUser, loginUser} from '../controller/usercontroller.js';
// import Authenticate from '../middleware/authenticate.js'; 
const router=express.Router();

router.post("/signup",signupUser);
router.post("/signin",loginUser);
// router.get("/about",Authenticate,(req,res)=>{
//     console.log('Hello my about');
//     res.send('Hello About world from server');
// });

export default router;