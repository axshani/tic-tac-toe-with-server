import express from 'express'
import { TicTacToe } from "../lib/TicTacToe.js"

const router = express.Router();

let game = null

router.post('/new', (req, res) => {
	game = new TicTacToe()
	res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }).status(201).send(game.toJSON()) // returns a new game
});

router.post('/move', (req, res) => {
	if (!game)
		res.status(400).send("Game hasn't started yet")

	try {
		const { i, j } = req.body
		game.move(i,j)
		res.set({
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}).status(200).send(game.toJSON())
	} catch (error){
		res.status(400).send({message: error.message})
	}
})

export { router }