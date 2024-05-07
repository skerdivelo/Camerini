import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    //Verifico se esista l'user
    const q = `SELECT * FROM users WHERE email = ? OR username = ?`;

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length > 0) {
            return res.status(409).json("Utente già registrato");
        }
        //Hash della password, inserimento user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (username, email, password) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];
        db.query(q, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json("Utente registrato con successo");
        });
    });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
