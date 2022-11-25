import connection from "../../Database/connection_bd_corer";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const fisrt_access = 1;
const table = "tbl_user";
const key_hash = "olympo_code_123_098_567_1234560987";

async function set_user(email, dados) {
  // Busca email para validar se o user ja ta na base
  const user = await connection(table).where("email", email).first();

  // Chek de se o user ja foi criado
  if (!user) {
    const result = await connection(table).insert(dados);

    if (result) {
      return result;
    } else {
      return false;
    }
  } else {
    return user;
  }
}

async function set_rules_user(route_id, user_email) {
  const dados = {
    route_id,
    user_email,
  };

  try {
    await connection("tblr_user_and_routes").insert(dados);
    const result = await connection
      .select("*")
      .from("tblr_user_and_routes")
      .where("user_email", user_email);
    return result;
  } catch (error) {
    return error;
  }
}

export async function Creat(request, response) {
  const email = request.body.email.toLowerCase();
  const password = await hash(request.body.password, 10);
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
  } else {
    const user = await set_user(email, dados);
    return response.json({
      result: "retorno_final",
      user: user,
      message: "Usuario atualizado com sucesso!!!",
    });
  }
}

export async function Update(request, response) {
  const email = request.body.email.toLowerCase();

  // Dados enviados
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

  // Busca email para validar se o user ja ta na base
  const user = await connection(table).where("email", email).first();

  if (user) {
    const result = await connection("tbl_user")
      .where("email", email)
      .update(dados);

    if (result) {
      return response.json({
        result: result,
        message: "Usuario atualizado com sucesso!!!",
      });
    } else {
      return response.json({
        result: result,
        message: "Erro ao atualizar usuario!!!",
      });
    }
  } else {
    return response.json({
      result: 0,
      message: "Erro ao atualizar usuario!!!",
    });
  }
}
export async function Login(request, response) {
  // Token de Acesso do G-mail enviado via body post
  const { password, email } = request.body;
  // Busca email para validar se o user ja ta na base
  const user = await connection(table).where("email", email).first();
  if (!user) {
    return response.json(user);
  }

  if (!(await compare(password, user.password))) {
    return response.json({
      data: 0,
      message: "Erro ao logar usuário, procure o administrador do sistema!!!",
    });
  } else {
    const token = sign({ email: user.email }, key_hash, {
      expiresIn: 8640000000000,
    });

    if (!token) {
      return response.json(false);
    }

    const acessos = await connection
      .select("tbl_routs.*")
      .from("tblr_user_and_routes")
      .leftJoin("tbl_routs", "tbl_routs.id", "tblr_user_and_routes.route_id")
      .where("user_email", email);

    user.acessos = acessos;
    user.token = token;

    if (user.fisrt_access === 1) {
      user.message = `Olá ${user.user_fist_name} seja bem vindo!`;
    } else {
      user.message = `Olá ${user.user_fist_name} seja bem vindo de volta!`;
    }

    return response.json(user);
  }
}
export async function Refresh(request, response) {
  const user = await connection(table).where("email", request.email).first();

  if (user) {
    const acessos = await connection
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

export async function List(request, response) {
  const users = await connection(table);
  return response.json(users);
}
