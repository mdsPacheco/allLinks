"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexBy_By_User = exports.Delete_and_Index_By_User = exports.Creat_and_Index_By_User = void 0;
const connection_bd_corer_1 = __importDefault(require("../../Database/connection_bd_corer"));
const table = "tblr_user_and_routes";
async function Creat_and_Index_By_User(request, response) {
    const route_id = request.body.route_id;
    const user_email = request.body.user_email;
    const dados = {
        route_id,
        user_email
    };
    try {
        await (0, connection_bd_corer_1.default)(table).insert(dados);
        const result = await connection_bd_corer_1.default.select("*").from(table).where('user_email', user_email);
        return response.json({
            result: result,
            message: "Sucesso ao cadastrar"
        });
    }
    catch (error) {
        return response.json({
            result: error,
            message: "Erro ao cadastrar"
        });
    }
}
exports.Creat_and_Index_By_User = Creat_and_Index_By_User;
async function Delete_and_Index_By_User(request, response) {
    const route_id = request.body.route_id;
    const user_email = request.body.user_email;
    try {
        await (0, connection_bd_corer_1.default)(table).where('route_id', route_id).where('user_email', user_email).del();
        const result = await connection_bd_corer_1.default.select("*").from(table).where('user_email', user_email);
        return response.json({
            result: result,
            message: "Sucesso ao Deletar"
        });
    }
    catch (error) {
        return response.json({
            result: error,
            message: "Erro ao Deletar"
        });
    }
}
exports.Delete_and_Index_By_User = Delete_and_Index_By_User;
async function IndexBy_By_User(request, response) {
    const user_email = request.body.user_email;
    try {
        const result = await connection_bd_corer_1.default.select("*").from(table).where('user_email', user_email);
        return response.json({
            result: result,
            message: "Sucesso ao listar"
        });
    }
    catch (error) {
        return response.json({
            result: error,
            message: "Erro ao listar"
        });
    }
}
exports.IndexBy_By_User = IndexBy_By_User;
