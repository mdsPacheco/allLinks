import connection from '../../Database/connection_bd_corer';

const table = "tbl_tipo_user"

export async function Creat_and_Index(request, response) {

  const description = request.body.description;
  const created_at = new Date();
  const updated_at = new Date();

  const dados = {
    description,
    created_at,
    updated_at
  }

  try {

    await connection(table).insert(dados);
    const result =  await connection.select("*").from(table)

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
export async function Update_and_Index(request, response) { 
  
  const description = request.body.description;
  const id = request.body.id;
  const updated_at = new Date();

  const dados = {
    description,
    updated_at
  }

  try {
    await connection(table).where('id', id).update(dados);
    const result = await connection.select("*").from(table)

    return response.json({
      result: result,
      message: "Sucesso ao atualizar"
    }); 
  } catch (error) {
    return response.json({
      result: error,
      message: "Erro ao atualizar"
    });
  }
}
export async function Delete_and_Index(request, response) { 
  
  const id = request.body.id;

  try {
    await connection(table).where('id', id).del()
    const result = await connection.select("*").from(table)

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
export async function Index(request, response) {
  try {
    const result = await connection.select("*").from(table)
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