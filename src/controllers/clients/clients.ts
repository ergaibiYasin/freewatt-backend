import clientsdb from '../../db/clients/clients'

const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(express.json());

server.use(bodyParser.json());


export default class ClientsController{
    public static addOrUpdateClient(req) {
        var clientId = req.body.clientID;
        if (clientId ) {
            const fournisseur = req.body;
            clientsdb.updateClient(fournisseur);
        } else {
            return this.addClient(req);
            
        }
        
    };

    public static allClients() {
        const results = clientsdb.allClients();
        return results;
        
    };

    public static delClient(req) {
        var clientId = req.params.id;
        clientsdb.delClient(clientId);
        return clientId;
    };

    private static addClient(req : any){
        const client = req.body;
        var values = [];
        values.push([client.fullname, client.email, client.num]);
        clientsdb.addClient(values);
        return values;
    }

    public static async clientsFullname() {
        const results = await clientsdb.selectClientsFullname();
        var table = [];

        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        for (var i = 0; i<json.length; i++){
            table.push(json[i].fullname)
            
        };
        return table;
        
    };
}