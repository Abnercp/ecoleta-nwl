//importar a dependenca do sqlite3
const sqlite3 = require("sqlite3").verbose();

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db

//db.serialize(() => {
  ///criar a tabela com comandos SQL
  //db.run(`
   // CREATE TABLE IF NOT EXISTS places (
    //  id INTEGER PRIMARY KEY AUTOINCREMENT,
    //  image TEXT, 
    //  name TEXT,
   //   address TEXT,
    //  address2 TEXT, 
    //  state TEXT,
   //   city TEXT,
    //  items TEXT
   // );
 // `);

  //inserir dados na tabela
 // const query = `
   // INSERT INTO places (
   //   image,
   //   name,
   //   address,
   //   address2,
  //    state,
    //  city,
   //   items
  //  ) VALUES (?,?,?,?,?,?,?);
  //`;

  //const values = [
  //  "https://cdn4.ecycle.com.br/cache/images/guia_da_reciclagem/50-750-logoreciclagem-750.jpg",
   // "Papersider",
   // "Guilherme Gemballa, Jardim América",
   // "N˚260",
    //"Santa Catarina",
   // "Rio do Sul",
   // "Resíduos Eletrônicos, Lãmpadas",
  //];

 // function afterInsertData(err) {
  //  if(err){
   //   return console.log(err)
  //  }

  //  console.log('Cadastro com sucesso')
   // console.log(this)
  //}

  //db.run(query, values, afterInsertData) 


  //consultar os dados da tabela

  //db.all(`SELECT * FROM places`, function(err, rows) {
  // if(err){
  //   return console.log(err)
  // }

   // console.log('Aqui estao seus registros: ')
    //console.log(rows)
  //})


  // deletar um dado da tabela

 //db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
 // if(err){
  //  return console.log(err)
 // }

 // console.log('Registro deletado com sucesso!')
 //})



//})
