import { User } from "../models/UsersModel.js";

User.create({
    name:"bad bunny",
    age:20
})

export const test = () => {
    console.log("se llama bien el controller")
}