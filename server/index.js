
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { router as ticTacToeRouter } from "./controllers/tic_tac_toe.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', ticTacToeRouter);

app.set('port', process.env.PORT || 8000);

const server = app.listen(app.get('port'), function () {
	console.log('Listening on port ' + app.get('port'));
});
