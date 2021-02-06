module.exports = {
  async listUsers(request, response) {

    const users = [
      {
        "uuid": "123e4567-aabb-55d3-4a98-426655449987",
        "name": "user1",
        "job": "Backend Developer",
        "email": "user1@betrybe.com",
        "pass": "aa321ad9cab46acd12d41ca211d863d1"
      },
      {
        "uuid": "223e4567-e89b-12d3-a456-426655440000",
        "name": "user2",
        "job": "Frontend Developer",
        "email": "user2@betrybe.com",
        "pass": "cc4c700dd9c02aa90363ba3d41ca8d06"
      }
    ];

    try {
      if (!users) return response.status(500).json({ Aviso: "Erro interno" });
    } catch (err) {
      return response.status(500).json({ Erro: err.message });
    }

    response.status(200).json(users);
  }
}