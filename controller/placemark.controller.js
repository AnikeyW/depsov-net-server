const db = require('../db')

class Placemarks {
   async getPlacemarks(req, res) {
      try {
         const placemarks = await db.query('SELECT * FROM dps_placemark')
         res.json(placemarks.rows)
      } catch (error) {
         console.log(error)
      }

   }

   async addPlacemark(req, res) {
      let { latitude, longitude, is_verificated } = req.body
      if (!is_verificated) {
         is_verificated = false
      }
      await db.query(
         `INSERT INTO dps_placemark (latitude, longitude, is_verificated) values ($1, $2, $3)`,
         [latitude, longitude, is_verificated]
      )
      const placemarks = await db.query('SELECT * FROM dps_placemark')
      res.json(placemarks.rows)
   }
}

module.exports = new Placemarks()