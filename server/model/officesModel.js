import pool from "../config"
class OfficesModel{

    async createOffice(values){
        const query = `INSERT INTO 
                offices(type, name)
                values($1, $2)
                RETURNING *`

        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAnOffice(idval){
        const query = 'SELECT * FROM offices WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAllOffice(){
        const query = 'SELECT * FROM offices'

        try {
            const {rows} = await pool.query(query)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

const officesModel = new OfficesModel()
export default officesModel
