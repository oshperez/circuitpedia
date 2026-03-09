import pg from "pg";
import "./dotenv.js";

// console.log({
//   PGUSER: process.env.PGUSER,
//   PGPASSWORD_type: typeof process.env.PGPASSWORD,
//   PGHOST: process.env.PGHOST,
//   PGPORT: process.env.PGPORT,
//   PGDATABASE: process.env.PGDATABASE,
// });

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
};

export const pool = new pg.Pool(config);
