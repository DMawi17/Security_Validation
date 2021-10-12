import express from "express";
import { validationResult } from "express-validator";
import userValidators from "./user.validators.js";

const server = express();
server.use(express.json());

server.use((req, res, next) => {
    console.log(
        `\n${count} - [ ${req.method} ] REQUEST ON ROUTE [ ${req.path} ]`
    );
    next();
});

server.post("/users", userValidators, (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400);
        res.send({
            error: result.errors.map((e) => e.msg),
        });
        return;
    }
    res.json("Validated!!");
});

server.listen(3000, (e) =>
    e ? console.log(e) : console.log(`\nServer started on port: 3000`)
);