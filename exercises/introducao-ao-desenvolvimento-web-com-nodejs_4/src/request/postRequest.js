module.exports = {
  async postUser(request, response) {
    const user = request.body;

    if (user.name.length < 3) return response.status(401).json({ Erro: "Precisa de 3 caracteres" });

    return response.status(201).json({ Aviso: "Usuario criado", Usuario: user });
  }
}