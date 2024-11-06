import express from "express"
import {create, getAllUsers, getUserById, updateUserbyId, deleteUserbyId} from "../controller/UserController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById );
route.put("/update/user/:id", updateUserbyId);
route.delete("/delete/user/:id", deleteUserbyId);

export default route;