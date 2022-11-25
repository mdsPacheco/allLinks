"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.Refresh = exports.Login = exports.Update = exports.Creat = void 0;
const connection_bd_corer_1 = __importDefault(require("../../Database/connection_bd_corer"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const fisrt_access = 1;
const table = "tbl_user";
const key_hash = "olympo_code_123_098_567_1234560987";
async function set_user(email, dados) {
    const user = await (0, connection_bd_corer_1.default)(table).where("email", email).first();
    if (!user) {
        const result = await (0, connection_bd_corer_1.default)(table).insert(dados);
        if (result) {
            return result;
        }
        else {
            return false;
        }
    }
    else {
        return user;
    }
}
async function set_rules_user(route_id, user_email) {
    const dados = {
        route_id,
        user_email,
    };
    try {
        await (0, connection_bd_corer_1.default)("tblr_user_and_routes").insert(dados);
        const result = await connection_bd_corer_1.default
            .select("*")
            .from("tblr_user_and_routes")
            .where("user_email", user_email);
        return result;
    }
    catch (error) {
        return error;
    }
}
async function Creat(request, response) {
    const email = request.body.email.toLowerCase();
    const password = await (0, bcrypt_1.hash)(request.body.password, 10);
    const fist_name = request.body.fist_name;
    const last_name = request.body.last_name;
    const user_type_id = request.body.user_type_id;
    const created_at = new Date();
    const updated_at = new Date();
    const dados = {
        email,
        password,
        fist_name,
        last_name,
        fisrt_access,
        user_type_id,
        created_at,
        updated_at,
    };
    if (user_type_id == 2) {
        const rules = [2, 1, 3, 4];
        const user = await set_user(email, dados);
        const user_rules = rules.map(async (route_id) => {
            return await set_rules_user(route_id, email);
        });
        const retorno_final = Promise.all(user_rules).then((values) => {
            return values;
        });
        return response.json({
            result: retorno_final,
            user: user,
            message: "Usuario atualizado com sucesso!!!",
        });
    }
    else {
        const user = await set_user(email, dados);
        return response.json({
            result: "retorno_final",
            user: user,
            message: "Usuario atualizado com sucesso!!!",
        });
    }
}
exports.Creat = Creat;
async function Update(request, response) {
    const email = request.body.email.toLowerCase();
    const fist_name = request.body.fist_name;
    const last_name = request.body.last_name;
    const photo_file = request.body.photo_file;
    const biography = request.body.biography;
    const updated_at = new Date();
    const dados = {
        email,
        fist_name,
        last_name,
        photo_file,
        biography,
        updated_at,
    };
    const user = await (0, connection_bd_corer_1.default)(table).where("email", email).first();
    if (user) {
        const result = await (0, connection_bd_corer_1.default)("tbl_user")
            .where("email", email)
            .update(dados);
        if (result) {
            return response.json({
                result: result,
                message: "Usuario atualizado com sucesso!!!",
            });
        }
        else {
            return response.json({
                result: result,
                message: "Erro ao atualizar usuario!!!",
            });
        }
    }
    else {
        return response.json({
            result: 0,
            message: "Erro ao atualizar usuario!!!",
        });
    }
}
exports.Update = Update;
async function Login(request, response) {
    const { password, email } = request.body;
    const user = await (0, connection_bd_corer_1.default)(table).where("email", email).first();
    if (!user) {
        return response.json(user);
    }
    if (!(await (0, bcrypt_1.compare)(password, user.password))) {
        return response.json({
            data: 0,
            message: "Erro ao logar usuário, procure o administrador do sistema!!!",
        });
    }
    else {
        const token = (0, jsonwebtoken_1.sign)({ email: user.email }, key_hash, {
            expiresIn: 8640000000000,
        });
        if (!token) {
            return response.json(false);
        }
        const acessos = await connection_bd_corer_1.default
            .select("tbl_routs.*")
            .from("tblr_user_and_routes")
            .leftJoin("tbl_routs", "tbl_routs.id", "tblr_user_and_routes.route_id")
            .where("user_email", email);
        user.acessos = acessos;
        user.token = token;
        if (user.fisrt_access === 1) {
            user.message = `Olá ${user.user_fist_name} seja bem vindo!`;
        }
        else {
            user.message = `Olá ${user.user_fist_name} seja bem vindo de volta!`;
        }
        return response.json(user);
    }
}
exports.Login = Login;
async function Refresh(request, response) {
    const user = await (0, connection_bd_corer_1.default)(table).where("email", request.email).first();
    if (user) {
        const acessos = await connection_bd_corer_1.default
            .select("tbl_routs.*")
            .from("tblr_user_and_routes")
            .leftJoin("tbl_routs", "tbl_routs.id", "tblr_user_and_routes.route_id")
            .where("user_email", request.email);
        user.acessos = acessos;
        delete user.password;
        return response.json(user);
    }
    return response.json(false);
}
exports.Refresh = Refresh;
async function List(request, response) {
    const users = await (0, connection_bd_corer_1.default)(table);
    return response.json(users);
}
exports.List = List;
