import pool from "../config"
class PartiesModel{
    async selectAParty(idval){
        const query = 'SELECT * FROM parties WHERE id=$1'

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
