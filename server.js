const express = require("express");
const knex = require('./knex');

const app = express();
app.use(express.json());


    app.get("/api/drivers", async (request, response) => {
        let drivers = await knex.select().table('drivers');
        knex.select().table('drivers').orderBy('ranking', 'desc');
        response.send(drivers);
    })


    app.post("/api/drivers", async (request, response) => {
        try {
            await knex.insert(request.body).into('drivers');
            response.send(204);
        } catch (error) {
            console.error(error);
        }
        
    })



app.patch("/api/drivers/:number", async (request, response) => {
    var driverNumber = request.params.number;
    try {
        let drivers = await knex.select().table('drivers');
        let driver = drivers.filter(driver => parseInt(driver.number) === parseInt(driverNumber));
        let patchedDriver = request.body;
        Object.assign(driver[0], patchedDriver);
        await knex('drivers').where({'number': driverNumber}).update({number: driverNumber, ranking: patchedDriver.ranking, name: patchedDriver.name, nationality: patchedDriver.nationality, team: patchedDriver.team, wins: patchedDriver.wins, podiums:patchedDriver.podiums, points:patchedDriver.points});
        response.sendStatus(204);
    } catch (error) {
        console.error(error);
    }
})

app.delete("/api/drivers/:number", async (request, response) => {
    var driverNumber = request.params.number;
    try {
        let drivers = await knex.select().table('drivers');
        let driver = drivers.filter(driver => parseInt(driver.number) === parseInt(driverNumber));
        await knex('drivers').where({'number': driverNumber}).del();
        response.send(200);
    } catch (error) {
        console.error(error);
    }


})

knex.select().table('drivers').orderBy('ranking', 'desc');

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`);
});

