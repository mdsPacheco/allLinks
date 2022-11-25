import connection from '../../Database/connection_bd_corer';
const table = "tblr_user_and_routes"


export async function Creat_and_Index_By_User(request, response) {

  const route_id = request.body.route_id;
  const user_email = request.body.user_email;

  const dados = {
    route_id,
    user_email
  }

  try {

    await connection(table).insert(dados);
    const result = await connection.select("*").from(table).where('user_email', user_email)

    return response.json({
      result: result,
      message: "Sucesso ao cadastrar"
    }); 
  } catch (error) {
    return response.json({
      result: error,
      message: "Erro ao cadastrar"
    });
  }
}

export async function Delete_and_Index_By_User(request, response) { 
  
  const route_id = request.body.route_id;
  const user_email = request.body.user_email;

  try {
    await connection(table).where('route_id', route_id).where('user_email', user_email).del()
    const result = await connection.select("*").from(table).where('user_email', user_email)

    return response.json({
      result: result,
      message: "Sucesso ao Deletar"
    }); 
  } catch (error) {
    return response.json({
      result: error,
      message: "Erro ao Deletar"
    });
  }
}

export async function IndexBy_By_User(request, response) {

 const user_email = request.body.user_email;

  try {
    const result = await connection.select("*").from(table).where('user_email', user_email)
    return response.json({
      result: result,
      message: "Sucesso ao listar"
    }); 
  } catch (error) {
    return response.json({
      result: error,
      message: "Erro ao listar"
    });
  }
}

