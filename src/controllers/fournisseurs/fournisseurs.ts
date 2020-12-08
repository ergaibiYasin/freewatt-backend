import fournisseurdb from '../../db/fournisseurs/fournisseurs'

const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(express.json());

server.use(bodyParser.json());


export default class FournisseursController{
    public static addOrUpdatefournisseur(req) {
        var fournisseurId = req.body.fournisseurID;
        if (fournisseurId ) {
            const fournisseur = req.body;
            fournisseurdb.updateFournisseur(fournisseur);
        } else {
            return this.addfournisseur(req);
            
        }
        
    };

    public static allfournisseurs() {
        const results = fournisseurdb.allFourmisseurs();
        return results;
        
    };
    
    public static async selectFournisseur() {
        const results = await fournisseurdb.selectFournisseurName();
        var table = [];
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        for (var i = 0; i<json.length; i++){
            table.push(json[i].nom + ' ' + json[i].prenom)
        };
        return table;
        
    };

    public static delFournisseur(req) {
        var fournisseurId = req.params.id;
        fournisseurdb.delFournisseur(fournisseurId);
        return fournisseurId;
    };

    private static addfournisseur(req : any){
        const fournisseur = req.body;
        var values = [];
        values.push([fournisseur.nom, fournisseur.prenom, fournisseur.email, fournisseur.num]);
        fournisseurdb.addFournisseur(values);
        return values;
    }
}