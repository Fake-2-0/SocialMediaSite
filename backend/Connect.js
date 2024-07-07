import mysql from "mysql"

export const db = mysql.createConnection    ({
    host:"localhost",
    user:"root",
    password:"Riyal#3105",
    database:"socialmediasite"
});