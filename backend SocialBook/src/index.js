import express from 'express'
import cors from 'cors';
import { getLibrosbyid, getLibros, createLibro, updateLibro, deleteLibros, getBuscador,
    getUsuariosbyid, getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios,
    getResenasbyid, getResenas, createResenas, updateResenas, deleteResenas, getResenasLibro,
    getlibrosListasbyid, getlibrosListas, createlibrosListas, updatelibrosListas, deletelibrosListas,
    getlistaslibrosbyid, getlistaslibros, createlistaslibros, updatelistaslibros, deletelistaslibros,
    getlistasresenasbyid, getlistasresenas, createlistasresenas, updatelistasresenas, deletelistasresenas,
    getresenaslistasbyid, getresenaslistas, createresenaslistas, updateresenaslistas, deleteresenaslistas
    ,deleteLibrosTitulo,deleteResenasTitulo, deleteUsuariosTitulo
  } from './database.js'



const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
 // routes libros
    app.get('/libros', async (req, res) => {
        const libros = await getLibros()
      res.send(libros);
     });
 app.get('/libros/buscar,', async (req, res) => {
      const query = req.params.query
      const libro = await getBuscador(query)
      console.log(libro)
    res.send(libro);
   });
     // routes
    app.get('/libros/:id', async (req, res) => {
        const id = req.params.id
        const libro = await getLibrosbyid(id)
      res.send(libro);
     });

    

     // routes
    app.post('/libros', async (req, res) => {
        const { titulo, autor, imagen, resumen,
            genero, editorial, fecha, paginas, valoracion} = req.body;
        const libros = await createLibro(titulo, autor, imagen, resumen,
            genero, editorial, fecha, paginas, valoracion)
      res.send(libros);
     });

     app.put('/libros/:id', async (req, res) => {
        const id = req.params.id;
        const { titulo, autor, imagen, resumen, genero, editorial, fecha, paginas, valoracion } = req.body;

        const libro = await updateLibro(id, titulo, autor, imagen, resumen, genero, editorial, fecha, paginas, valoracion);
      res.send(libro);
     });

     app.delete('/libros/:id', async (req, res) => {
        const id = req.params.id
        const libro = await deleteLibros(id)
      res.send(libro);
     });

     app.delete('/libros/titulo/:titulo', async (req, res) => {
      const titulo = req.params.titulo
      const libro = await deleteLibrosTitulo(titulo)
    res.send(libro);
   });


      // routes Usuarios




    app.get('/usuarios', async (req, res) => {
        const usuarios = await getUsuarios()
      res.send(usuarios);
     });

     // routes
    app.get('/usuarios/:id', async (req, res) => {
        const id = req.params.id
        const usuarios = await getUsuariosbyid(id)
      res.send(usuarios);
     });

     // routes
    app.post('/usuarios', async (req, res) => {
        const { usuario, nombre, contraseña, correo} = req.body;
        const usuarios = await createUsuarios(usuario, nombre, contraseña, correo)
      res.send(usuarios);
     });

     app.patch('/usuarios/:id', async (req, res) => {
        const id = req.params.id;
        const { usuario, nombre, contraseña, correo } = req.body;

        const usuarios = await updateUsuarios(id,usuario, nombre, contraseña, correo);
      res.send(usuarios);
     });

     app.delete('/usuarios/:id', async (req, res) => {
        const id = req.params.id
        const usuarios = await deleteUsuarios(id)
      res.send(usuarios);
     });

     app.delete('/usuarios/correo/:correo', async (req, res) => {
      const correo = req.params.correo
      const libro = await deleteUsuariosTitulo(correo)
    res.send(libro);
   });
     
      // routes Resanas




    app.get('/resenas', async (req, res) => {
        const usuarios = await getResenas()
      res.send(usuarios);
     });

     app.get('/resenas/libro', async (req, res) => {
      const usuarios = await getResenasLibro()
    res.send(usuarios);
   });

     // routes
    app.get('/resenas/:id', async (req, res) => {
        const id = req.params.id
        const usuarios = await getResenasbyid(id)
      res.send(usuarios);
     });

     // routes
    app.post('/resenas', async (req, res) => {
        const { id_libro, votos, opinion, titulo, usuario, imagen} = req.body;
        const usuarios = await createResenas(id_libro, votos, opinion, titulo, usuario, imagen)
      res.send(usuarios);
     });

     app.patch('/resenas/:id', async (req, res) => {
        const id = req.params.id;
        const { id_libro, votos, opinion, titulo, usuario, imagen } = req.body;

        const usuarios = await updateResenas(id, id_libro, votos, opinion, titulo, usuario, imagen);
      res.send(usuarios);
     });

     app.delete('/resenas/:id', async (req, res) => {
        const id = req.params.id
        const usuarios = await deleteResenas(id)
      res.send(usuarios);
     });

     app.delete('/resenas/titulo/:titulo', async (req, res) => {
      const titulo = req.params.titulo
      const libro = await deleteResenasTitulo(titulo)
    res.send(libro);
   });


 // routes libroslistas




 app.get('/libroslistas', async (req, res) => {
  const usuarios = await getlibrosListas()
res.send(usuarios);
});

// routes
app.get('/libroslistas/:lista_id', async (req, res) => {
  const lista_id = req.params.lista_id
  const usuarios = await getlibrosListasbyid(lista_id)
res.send(usuarios);
});

// routes
app.post('/libroslistas', async (req, res) => {
  const {  lista_id, libro_id} = req.body;
  const usuarios = await createlibrosListas( lista_id, libro_id)
res.send(usuarios);
});

// app.patch('/libroslistas/:id', async (req, res) => {
//   const id = req.params.id;
//   const {  lista_id, libro_id } = req.body;

//   const usuarios = await updatelibrosListas(id,  lista_id, libro_id);
// res.send(usuarios);
// });

// app.delete('/libroslistas/:id', async (req, res) => {
//   const id = req.params.id
//   const usuarios = await deletelibrosListas(id)
// res.send(usuarios);
// });

// routes listaslibros




app.get('/listaslibros', async (req, res) => {
  const usuarios = await getlistaslibros()
res.send(usuarios);
});

// routes
app.get('/listaslibros/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await getlistaslibrosbyid(id)
res.send(usuarios);
});

// routes
app.post('/listaslibros', async (req, res) => {
  const {  usuario, titulo, tipo_lista} = req.body;
  const usuarios = await createlistaslibros( usuario, titulo, tipo_lista)
res.send(usuarios);
});

app.patch('/listaslibros/:id', async (req, res) => {
  const id = req.params.id;
  const {  usuario, titulo, tipo_lista } = req.body;

  const usuarios = await updatelistaslibros(id, usuario, titulo, tipo_lista);
res.send(usuarios);
});

app.delete('/listaslibros/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await deletelistaslibros(id)
res.send(usuarios);
});



// routes listasresenas




app.get('/listasresenas', async (req, res) => {
  const usuarios = await getlistasresenas()
res.send(usuarios);
});

// routes
app.get('/listasresenas/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await getlistasresenasbyid(id)
res.send(usuarios);
});

// routes
app.post('/listasresenas', async (req, res) => {
  const {  usuario, titulo} = req.body;
  const usuarios = await createlistasresenas( usuario, titulo)
res.send(usuarios);
});

app.patch('/listasresenas/:id', async (req, res) => {
  const id = req.params.id;
  const { usuario, titulo } = req.body;

  const usuarios = await updatelistasresenas(id, usuario, titulo);
res.send(usuarios);
});

app.delete('/listasresenas/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await deletelistasresenas(id)
res.send(usuarios);
});

// routes resenaslistas




app.get('/resenaslistas', async (req, res) => {
  const usuarios = await getresenaslistas()
res.send(usuarios);
});

// routes
app.get('/resenaslistas/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await getresenaslistasbyid(id)
res.send(usuarios);
});

// routes
app.post('/resenaslistas', async (req, res) => {
  const { lista_id, resena_id} = req.body;
  const usuarios = await createresenaslistas( lista_id, resena_id)
res.send(usuarios);
});

app.patch('/resenaslistas/:id', async (req, res) => {
  const id = req.params.id;
  const {lista_id, resena_id} = req.body;

  const usuarios = await updateresenaslistas(id, lista_id, resena_id);
res.send(usuarios);
});

app.delete('/resenaslistas/:id', async (req, res) => {
  const id = req.params.id
  const usuarios = await deleteresenaslistas(id)
res.send(usuarios);
});









app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

 app.use(express.json());


   



app.listen(port, () => {
    console.log('server is running on port port', port);
});