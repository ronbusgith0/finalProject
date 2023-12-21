const Pool = require("pg").Pool;
const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "favMusics",
  password: "password",
  port: 5432,
});

const createLinks = (request, response) => {
    const { name, url } = req.body;
  
    pool.query(
      "INSERT INTO favMusics (name, url) VALUES ($1, $2) RETURNING *", [name, url],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`);
      }
    );
  };



const getLinks = (request, response) => {
    pool.query('SELECT * FROM favMusics ORDER BY id ASC', 
     
    (error, result) => {
    if (error) {
    throw error
    }
    response.status(200).json(result.rows)
    })
    }

 
const deleteLinks = (request, response) => {
    const id = parseInt(request.params.id)
    
      pool.query('DELETE FROM favMusics WHERE id = $2', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
      })
    }

    const updateLinks = (request, response) => {
        const id = parseInt(request.params.id)
        const { name, url } = request.body
      
        pool.query(
          'UPDATE favMusics SET name = $1, url = $2 WHERE id = $3',
          [name, url, id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
          }
        )
      }
 
module.exports = {
    createLinks,
    getLinks,
    deleteLinks,
    updateLinks
    }