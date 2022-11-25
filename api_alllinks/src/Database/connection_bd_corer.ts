import knex from "knex";

const connection = knex({
  client: "pg",
  connection: {
    "host" : "kesavan.db.elephantsql.com",
    "database": "dzjbwonv",
    "user":     "dzjbwonv",
    "password": "VXCCOa1DyO0tti53b4ne7H9jIIIgP00g"
  },
  useNullAsDefault: true,
});

export default connection;
