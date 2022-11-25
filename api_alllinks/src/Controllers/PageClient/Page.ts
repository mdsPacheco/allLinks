import connection from '../../Database/connection_bd_corer';

const table = "tbl_page"

export async function Create_Page(request, response) {

  const url_path = request.body.url_path;
  const link_rout = request.body.link_rout;
  const produto_rout = request.body.produto_rout;
  const type_de_fundo = request.body.type_de_fundo;
  const cor_de_fundo_solida = request.body.cor_de_fundo_solida;
  const direcao_do_degrade = request.body.direcao_do_degrade;
  const primeira_cor = request.body.primeira_cor;
  const primeira_posicao = request.body.primeira_posicao;
  const segunda_cor = request.body.segunda_cor;
  const segunda_posicao = request.body.segunda_posicao;
  const user_created =  request.email
  const user_updated =  request.email
  const created_at = new Date();
  const updated_at = new Date();

  const dados = {
    url_path,
    link_rout,
    produto_rout,
    type_de_fundo,
    cor_de_fundo_solida,
    direcao_do_degrade,
    primeira_cor,
    primeira_posicao,
    segunda_cor,
    segunda_posicao,
    user_created,
    user_updated,
    created_at,
    updated_at
  }

  try {

    const [result_find] = await connection.select("*").from(table).where( "user_created", user_created )

    if(!result_find){
      const [result] =  await connection(table).insert(dados, [
        'id', 
        'url_path',
        'link_rout',
        'produto_rout',
        'type_de_fundo',
        'cor_de_fundo_solida',
        'direcao_do_degrade',
        'primeira_cor',
        'primeira_posicao',
        'segunda_cor',
        'segunda_posicao',
        'user_created',
        'user_updated',
        'created_at',
        'updated_at'
      ]);
      return response.json({
        result: result,
        message: "Sucesso ao cadastrar"
      }); 
    }

    return response.json({
      result: result_find,
      message: "Sucesso ao cadastrar"
    }); 
  } catch (error) {
    console.log(error)
    return response.json({
      result: error,
      message: "Erro ao cadastrar"
    });
  }
}

export async function Update_Page(request, response) { 

  const id = request.body.id;
  const url_path = request.body.url_path;
  const link_rout = request.body.link_rout;
  const produto_rout = request.body.produto_rout;
  const type_de_fundo = request.body.type_de_fundo;

  const cor_de_fundo_solida = request.body.cor_de_fundo_solida;
  const direcao_do_degrade = request.body.direcao_do_degrade;

  const primeira_cor = request.body.primeira_cor;
  const primeira_posicao = request.body.primeira_posicao;

  const segunda_cor = request.body.segunda_cor;
  const segunda_posicao = request.body.segunda_posicao;

  const user_created =  request.email
  const user_updated =  request.email

  const updated_at = new Date();

  const dados = {
    url_path,
    link_rout,
    produto_rout,
    type_de_fundo,
    cor_de_fundo_solida,
    direcao_do_degrade,

    primeira_cor,
    primeira_posicao,

    segunda_cor,
    segunda_posicao,

    user_created,
    user_updated,

    updated_at
  }

  try {
    const [result] = await connection(table).where('id', id).update(dados,[
      'id', 
      'url_path',
      'link_rout',
      'produto_rout',
      'type_de_fundo',
      'cor_de_fundo_solida',
      'direcao_do_degrade',
      'primeira_cor',
      'primeira_posicao',
      'segunda_cor',
      'segunda_posicao',
      'user_created',
      'user_updated',
      'created_at',
      'updated_at'
    ]);
    // const [result] = await connection.select("*").from(table)

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

export async function Delete_Page(request, response) { 
  
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

export async function Index_Page(request, response) {
  const user_created =  request.email

  try {
    const [result] = await connection.select("*").from(table).where( "user_created", user_created )
    return response.json({
      result: result,
      message: "Sucesso ao listar"
    }); 
  } catch (error) {
    console.log(error)
    return response.json({
      result: error,
      message: "Erro ao listar"
    });
  }
}


export async function Index_Page_Url(request, response) {
  const url_path =  request.params.url_path

  try {
    const [pagina] = await connection.select("*").from(table).where( "url_path", url_path )
    const links = await connection.select("*").from("tbl_links").where( "user_created", pagina.user_created )
    const user = await connection.select("fist_name", "fist_name", "photo_file", "biography").from("tbl_user").where('email', pagina.user_created).first();


    return response.json({
      pagina: pagina,
      links: links,
      user: user,
      message: "Sucesso ao listar"
    }); 
  } catch (error) {
    console.log(error)
    return response.json({
      result: error,
      message: "Erro ao listar"
    });
  }
}

