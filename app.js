const { MongoClient } = require("mongodb");

// Remplacez l'URL de connexion avec votre propre chaîne de connexion.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db('fruitsDB');

        // Remplacez 'fruits' par le nom de votre collection
        // coll pour creer une reference de la collection fruits de votre base de donnee
        const coll = database.collection('fruits');

        // Effectuez les opérations souhaitées sur votre base de données ici

        // insertion 
        const result = await coll.insertMany(document);
        const insertedCount = result.insertedCount;
        console.log("Nombre de documents insérés : " + insertedCount);


        // utiliser les donnes a partir notre bd in our application 
        const cursor = coll.find();
        for await (const doc of cursor) {
            console.log(doc);
        }



    } finally {
        await client.close();
    }
}

run().catch(console.dir);


document = [
    { title: 'Dangal', rating: 'Not Rated' },
    { title: 'The Boss Baby', rating: 'PG' }
];
