import { pool } from "./database.js";
// import "./dotenv.js";
import componentData from "../data/components.js";

const createComponentsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS components;

    CREATE TABLE IF NOT EXISTS components (
        id SERIAL PRIMARY KEY,
        name VARCHAR(225) NOT NULL,
        category VARCHAR(225) NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(225) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
    
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("Componets table created sucessfully");
  } catch (error) {
    console.error("Error creating components table", error);
    throw error;
  }
};

const seedComponentsTable = async () => {
  await createComponentsTable();
  componentData.forEach((component) => {
    const insertQuery = {
      text: "INSERT INTO components(name, category, description, image, submittedOn) VALUES($1, $2, $3, $4, $5)",
    };
    const values = [
      component.name,
      component.category,
      component.description,
      component.image,
      component.submittedOn,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error(`Error inserting ${component.name}`, err.message);
        return;
      }

      console.log(`${component.name} insterted sucessfully`);
    });
  });
};

seedComponentsTable();
