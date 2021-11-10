import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
let users = [
  {
    id: "faf2131c-fbf5-46df-bd15-0859da1ccfbc",
    Name: "sudesh",
    userName: "rampurkar",
    password : "THISISHISPASSWORD",
  },
  {
    id: "1b95abbc-d659-45b4-9866-f3cea500d12d",
    Name: "john",
    userName: "cena",
    password: "YOUCANTSEEME",
  },
];
router.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/users", (req, res) => {
  const user = req.body;
  const userid = uuidv4();
  const userwithid = {
    id: userid,
    ...user,
  };
  users.push(userwithid);
  res.send(users);
  console.log(users);
});

router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    let usertobe = users.find((user) => user.id===id);
    console.log(usertobe);
    res.send(usertobe);
});
 
router.delete("/users/:id" , (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(users);
    console.log(users);
}) 

router.patch("/users/:id" , (req,res)=>{
    const {id} = req.params;
    let usertobe = users.find((user) => user.id===id);
    const {Name , userName , password} = req.body ;

//  you can not change password

    if(Name){
        usertobe.Name = Name 
    }
    if(userName){
        usertobe.userName = userName 
    }
    console.log(usertobe);
    res.send(usertobe);
})
export default router;
