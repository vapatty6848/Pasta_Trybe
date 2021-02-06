module.exports = {
  async editUser(request, response) {
    const { id } = request.params;
    const newUser = request.body;

    if (!id) return response.status(404).json({ Erro: "Usuario não encontrado" });

    return response.status(200).json({ Sucesso: "Usuario alterado com sucesso", idUsuario: `${id}`, campoAlterado: newUser });

  }
}