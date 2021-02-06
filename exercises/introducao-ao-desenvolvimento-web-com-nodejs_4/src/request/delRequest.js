
module.exports = {
  async delUser(request, response) {
    const { name } = request.headers;
    const { page } = request.query;

    console.log(name);
    console.log(page);

    if (!name || !page) return response.status(404).json({ Erro: "Falta informação" });

    return response.status(200).json({ Sucesso: `O usuario: ${name} na pagina ${page} foi deletado com sucesso` });
  }
}