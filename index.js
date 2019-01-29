import express from "express";
import bodyParser from "body-parser";
import debug from "debug";
import partyRouter from "./routes/partyRoutes"

const PORT = 5000;
const app = express();
const debugg = debug('app:');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(partyRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening on port ${PORT}`);
});