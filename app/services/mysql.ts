import { RowDataPacket } from 'mysql2';
import mysql from 'mysql2/promise';
import net from 'net'

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'home_hydro',
  password: 'plants2024',
  database: 'home_hydro',
  connectionLimit: 10
});


export async function fetchHumidity() {
    try {
        const [rows] = await pool.execute('select * from humidity_data');
        return rows;
    }
    catch (error) {
        throw error;
    }
}