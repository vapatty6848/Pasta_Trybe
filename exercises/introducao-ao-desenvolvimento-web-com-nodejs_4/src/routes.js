const express = require("express");

const routes = express.Router();

const listUsers = require("./requests/getRequest");
const postResquest = require("./requests/postRequest");
const putRequest = require("./requests/putRequest");
const delRequest = require("./requests/delRequest");

routes.get('/', listUsers.listUsers);

routes.post('/user/register', postResquest.postUser);

routes.put('/user/edit/:id', putRequest.editUser);

routes.delete('/user/delete/', delRequest.delUser);

module.exports = routes;