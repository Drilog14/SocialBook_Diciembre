
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
// mysql conection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
    
    }).promise()
    
    export async function getLibros() {
        const [rows] = await pool.query("SELECT * FROM libros")
        return rows
    }

    export async function getLibrosbyid(id) {
        const [rows] = await pool.query(`
        SELECT *
        FROM libros
        WHERE id = ?
        `, [id])
        return rows[0]
    }

    export async function getBuscador(titulo) {
        
        titulo = `%${titulo}%`;
        const [rows] = await pool.query(`
        SELECT * FROM libros WHERE titulo LIKE ?
            `, [titulo]);
        return rows;
    }




    export async function createLibro(titulo, autor, imagen, resumen,
        genero, editorial, fecha, paginas, valoracion) {
           const [rows] = await pool.query(`
            INSERT INTO libros (titulo, autor, imagen, resumen,
                genero, editorial, fecha, paginas, valoracion) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [titulo, autor, imagen, resumen,
                genero, editorial, fecha, paginas, valoracion]);
                return rows
    
    }

    // 
    export async function updateLibro(id, titulo, autor, imagen, resumen, genero, editorial, fecha, paginas, valoracion) {
        const sql = `
            UPDATE libros
            SET titulo = ?, autor = ?, imagen = ?, resumen = ?, genero = ?, editorial = ?, fecha = ?, paginas = ?, valoracion = ?
            WHERE id = ?
        `;
        const [rows] = await pool.query(sql, [titulo, autor, imagen, resumen, genero, editorial, fecha, paginas, valoracion, id]);
        return rows;
    }

    export async function deleteLibros(id) {
        const sql = 'DELETE FROM libros WHERE id = ?';
        const [rows] = await pool.query(sql, [id]);
        return rows;
    }

    export async function deleteLibrosTitulo(titulo) {
        const sql = 'DELETE FROM libros WHERE titulo = ?';
        const [rows] = await pool.query(sql, [titulo]);
        return rows;
    }






    // usuarios
    
    export async function getUsuarios() {
        const [rows] = await pool.query("SELECT * FROM usuarios")
        return rows
    }

    export async function getUsuariosbyid(id) {
        const [rows] = await pool.query(`
        SELECT *
        FROM usuarios
        WHERE id = ?
        `, [id])
        return rows[0]
    }

    export async function createUsuarios(usuario, nombre, contraseña, correo) {
           const [rows] = await pool.query(`
            INSERT INTO usuarios (usuario, nombre, contraseña, correo) 
                VALUES (?, ?, ?, ?)
            `, [usuario, nombre, contraseña, correo]);
                return rows
    
    }

    // 
    export async function updateUsuarios(id, usuario, nombre, contraseña, correo) {
        const sql = `
            UPDATE usuarios
            SET usuario = ?, nombre = ?, contraseña = ?, correo = ?
            WHERE id = ?
        `;
        const [rows] = await pool.query(sql, [usuario, nombre, contraseña, correo, id]);
        return rows;
    }

    export async function deleteUsuarios(id) {
        const sql = 'DELETE FROM usuarios WHERE id = ?';
        const [rows] = await pool.query(sql, [id]);
        return rows;
    }
   
    export async function deleteUsuariosTitulo(correo) {
        const sql = 'DELETE FROM usuarios WHERE correo = ?';
        const [rows] = await pool.query(sql, [correo]);
        return rows;
    }




  // resenas
    
  export async function getResenas() {
    const [rows] = await pool.query("SELECT * FROM resenas")
    return rows
}

export async function getResenasLibro() {
    const [rows] = await pool.query(`
    SELECT resenas.*, libros.titulo AS libro_titulo, Libros.autor, Libros.paginas, Libros.fecha
    FROM resenas
    JOIN libros ON resenas.id_libro = Libros.id;
`)
    return rows
}

export async function getResenasbyid(id) {
    const [rows] = await pool.query(`
    SELECT resenas.*, libros.titulo AS libro_titulo, libros.autor, libros.paginas, libros.fecha
        FROM resenas
        JOIN libros ON resenas.id_libro = libros.id
        WHERE resenas.id = ?
    `, [id])
    return rows[0]
}

export async function createResenas( id_libro, votos, opinion, titulo, usuario, imagen) {
       const [rows] = await pool.query(`
        INSERT INTO resenas (id_libro, votos, opinion, titulo, usuario, imagen) 
            VALUES (?, ?, ?, ?, ?, ?)
        `, [id_libro, votos, opinion, titulo, usuario, imagen]);
            return rows

}

// 
export async function updateResenas(id, id_libro, votos, opinion, titulo, usuario, imagen) {
    const sql = `
        UPDATE resenas
        SET id_libro = ?, votos = ?, opinion = ?, titulo = ? , usuario = ? , imagen = ?
        WHERE id = ?
    `;
    const [rows] = await pool.query(sql, [id_libro, votos, opinion, titulo, usuario, imagen, id]);
    return rows;
}

export async function deleteResenas(id) {
    const sql = 'DELETE FROM resenas WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}
export async function deleteResenasTitulo(titulo) {
    const sql = 'DELETE FROM resenas WHERE titulo = ?';
    const [rows] = await pool.query(sql, [titulo]);
    return rows;
}


  // librosListas
    
  export async function getlibrosListas() {
    const [rows] = await pool.query("SELECT * FROM libroslistas")
    return rows
}

export async function getlibrosListasbyid(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM libroslistas
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createlibrosListas( lista_id, libro_id) {
       const [rows] = await pool.query(`
        INSERT INTO libroslistas (lista_id, libro_id) 
            VALUES (?, ?)
        `, [lista_id, libro_id]);
            return rows

}

// 
export async function updatelibrosListas(id, lista_id, libro_id) {
    const sql = `
        UPDATE libroslistas
        SET lista_id = ?, libro_id = ?
        WHERE id = ?
    `;
    const [rows] = await pool.query(sql, [lista_id, libro_id, id]);
    return rows;
}

export async function deletelibrosListas(id) {
    const sql = 'DELETE FROM libroslistas WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}





 // listasLibros
    
 export async function getlistaslibros() {
    const [rows] = await pool.query("SELECT * FROM listaslibros")
    return rows
}

// export async function getlistaslibrosbyid(id) {
//     const [rows] = await pool.query(`
//     SELECT *
//     FROM listaslibros
//     WHERE id = ?
//     `, [id])
//     return rows[0]
// }

export async function getlistaslibrosbyid(lista_id) {
    const [rows] = await pool.query(`
    SELECT Libros.id, Libros.titulo, Libros.autor, Libros.imagen, Libros.resumen,
               Libros.genero, Libros.editorial, Libros.fecha, Libros.paginas, Libros.valoracion
        FROM Libros
        JOIN LibrosListas ON Libros.id = LibrosListas.libro_id
        WHERE LibrosListas.lista_id = ?
    `, [lista_id])
    return rows[0]
}

export async function createlistaslibros( usuario, titulo, tipo_lista) {
       const [rows] = await pool.query(`
        INSERT INTO listaslibros (usuario, titulo, tipo_lista) 
            VALUES (?, ?, ?)
        `, [usuario, titulo, tipo_lista]);
            return rows

}

// 
export async function updatelistaslibros(id, usuario, titulo, tipo_lista) {
    const sql = `
        UPDATE listaslibros
        SET usuario = ?, titulo = ?, tipo_lista = ?
        WHERE id = ?
    `;
    const [rows] = await pool.query(sql, [usuario, titulo, tipo_lista, id]);
    return rows;
}

export async function deletelistaslibros(id) {
    const sql = 'DELETE FROM listaslibros WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}


 // listasresenas
    
 export async function getlistasresenas() {
    const [rows] = await pool.query("SELECT * FROM listasresenas")
    return rows
}

export async function getlistasresenasbyid(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM listasresenas
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createlistasresenas( usuario, titulo) {
       const [rows] = await pool.query(`
        INSERT INTO listasresenas (usuario, titulo) 
            VALUES (?, ?)
        `, [usuario, titulo]);
            return rows

}

// 
export async function updatelistasresenas(id, usuario, titulo) {
    const sql = `
        UPDATE listasresenas
        SET usuario = ?, titulo = ?
        WHERE id = ?
    `;
    const [rows] = await pool.query(sql, [usuario, titulo, id]);
    return rows;
}

export async function deletelistasresenas(id) {
    const sql = 'DELETE FROM listasresenas WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}




// resenaslistas
    
export async function getresenaslistas() {
    const [rows] = await pool.query("SELECT * FROM resenaslistas")
    return rows
}

export async function getresenaslistasbyid(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM resenaslistas
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createresenaslistas( lista_id, resena_id) {
       const [rows] = await pool.query(`
        INSERT INTO resenaslistas (lista_id, resena_id) 
            VALUES (?, ?)
        `, [lista_id, resena_id]);
            return rows

}

// 
export async function updateresenaslistas(id, lista_id, resena_id) {
    const sql = `
        UPDATE resenaslistas
        SET lista_id = ?, resena_id = ?
        WHERE id = ?
    `;
    const [rows] = await pool.query(sql, [lista_id, resena_id, id]);
    return rows;
}

export async function deleteresenaslistas(id) {
    const sql = 'DELETE FROM resenaslistas WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}

