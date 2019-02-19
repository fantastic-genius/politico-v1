import express from "express"
import bodyParser from "body-parser"
import debug from "debug"
import partyRouter from "./server/routes/partyRoutes"
import officeRouter from "./server/routes/officeRoutes"
import authRouter from "./server/routes/authRoutes"
import voteRouter from "./server/routes/voteRoutes"
import petitionRouter from "./server/routes/petitionRoutes"
import swaggerUi from  "swagger-ui-express"
import YAML from "yamljs"
 
const PORT = 5000
const app = express()
const debugg = debug('app:')
const swaggerDocument = YAML.load("./politico-api.yaml")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(partyRouter)
app.use(officeRouter)
app.use(authRouter)
app.use(voteRouter)
app.use(petitionRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

if(!module.parent){
    app.listen(process.env.PORT || PORT, () => {
        debugg(`App listening on port ${PORT}`)
    });
}

export default app;
