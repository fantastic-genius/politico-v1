import pool from "../config"
class PartiesModel{

    async createParty(values){
        const query = `INSERT INTO 
                parties(name, hqaddress, logourl)
                values($1, $2, $3)
                RETURNING *`

        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAParty(idval){
        const query = 'SELECT * FROM parties WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAPartyByName(nameval){
        const query = 'SELECT * FROM parties WHERE name=$1'

        try {
            const {rows} = await pool.query(query, nameval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async selectAllParty(){
        const query = 'SELECT * FROM parties'

        try {
            const {rows} = await pool.query(query)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async updateAParty(values){
        const query = `UPDATE parties
                    SET name=$1 WHERE id=$2
                    RETURNING *`

        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAParty(idval){
        const query = `DELETE FROM parties
                       WHERE id=$1
                       RETURNING *`

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}
const partiesModel = new PartiesModel()
export default partiesModel
