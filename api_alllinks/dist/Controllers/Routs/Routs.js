"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = exports.Delete_and_Index = exports.Update_and_Index = exports.Creat_and_Index = void 0;
const connection_bd_corer_1 = __importDefault(require("../../Database/connection_bd_corer"));
const table = "tbl_routs";
async function Creat_and_Index(request, response) {
    const path = request.body.path;
    const description = request.body.description;
    const component = request.body.component;
    const icon = request.body.icon;
    const created_at = new Date();
    const updated_at = new Date();
    const dados = {
        path,
        description,
        component,
        icon,
        created_at,
        updated_at
    };
    try {
        await (0, connection_bd_corer_1.default)(table).insert(dados);
        const result = await connection_bd_corer_1.default.select("*").from(table);
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
exports.Creat_and_Index = Creat_and_Index;
async function Update_and_Index(request, response) {
    const id = request.body.id;
    const path = request.body.path;
    const description = request.body.description;
    const component = request.body.component;
    const icon = request.body.icon;
    const updated_at = new Date();
    const dados = {
        path,
        description,
        component,
        icon,
        updated_at
    };
    try {
        await (0, connection_bd_corer_1.default)(table).where('id', id).update(dados);
        const result = await connection_bd_corer_1.default.select("*").from(table);
        return response.json({
            result: result,
            message: "Sucesso ao atualizar"
        });
    }
    catch (error) {
        return response.json({
            result: error,
            message: "Erro ao atualizar"
        });
    }
}
exports.Update_and_Index = Update_and_Index;
async function Delete_and_Index(request, response) {
    const id = request.body.id;
    try {
        await (0, connection_bd_corer_1.default)(table).where('id', id).del();
        const result = await connection_bd_corer_1.default.select("*").from(table);
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
exports.Delete_and_Index = Delete_and_Index;
async function Index(request, response) {
    try {
        const result = await connection_bd_corer_1.default.select("*").from(table);
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
exports.Index = Index;
