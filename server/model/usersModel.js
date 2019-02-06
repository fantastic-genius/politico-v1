import pool from "../config"
class UsersModel{
    async createUser(values){
        const query = `INSERT INTO 
                users(firstname, lastname, othername, email, password, phoneNumber, isAdmin)
                values($1, $2, $3, $4, $5, $6, $7)
                RETURNING *`
        
        try {
            const {rows} = await pool.query(query, values)
            return rows
        } catch (error) {
            console.log(error)
        }
        
    }


    async selectAllUsers(){
        const query = 'SELECT * FROM users'

        try {
            const {rows} = await pool.query(query)
            return rows
        } catch (error) {
            console.log(error)
        }
        
    }

    async selectUserById(idval){
        const query = 'SELECT * FROM users WHERE id=$1'

        try {
            const {rows} = await pool.query(query, idval)
            return rows
        } catch (error) {
            console.log(error)
        }
        
    }

    async selectAUser(value){
        const query = 'SELECT * FROM users WHERE email=$1'

        try {
            const {rows} = await pool.query(query, value)
            return rows
        } catch (error) {
            console.log(error)
        }
        
    }


}

const usersModel = new UsersModel()
export default usersModel
