"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const connection = (0, knex_1.default)({
    client: "pg",
    connection: {
        "host": "kesavan.db.elephantsql.com",
        "database": "dzjbwonv",
        "user": "dzjbwonv",
        "password": "VXCCOa1DyO0tti53b4ne7H9jIIIgP00g"
    },
    useNullAsDefault: true,
});
exports.default = connection;
