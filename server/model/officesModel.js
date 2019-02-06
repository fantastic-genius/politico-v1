import pool from "../config"
class OfficesModel{
    async selectAnOffice(idval){
        const query = 'SELECT * FROM offices WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

const officesModel = new OfficesModel()
export default officesModel
