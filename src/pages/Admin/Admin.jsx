import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc
} from "firebase/firestore";
import { db, auth } from "../../services/firebase";
import { signOut } from "firebase/auth";
import "./Admin.css";
import { uploadImage } from "../../services/imgbb";
export function Admin() {

  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    image: "",
    printed: ""
  });


  useEffect(() => {

    const getBooks = async () => {

      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);

      const booksList = booksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setBooks(booksList);

    };

    getBooks();

  }, []);



  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este libro?"
    );

    if (!confirmDelete) return;


    await deleteDoc(doc(db, "books", id));


    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== id)
    );

  };



  const handleEdit = (book) => {

    setEditingBook(book);

  };



  const handleUpdate = async () => {

    try {

      await updateDoc(
        doc(db, "books", editingBook.id),
        {
          title: editingBook.title,
          author: editingBook.author,
          category: editingBook.category.trim(),
          price: editingBook.price,
          image: editingBook.image,
          printed: editingBook.printed
        }
      );


      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === editingBook.id
            ? editingBook
            : book
        )
      );


      setEditingBook(null);

      alert("Libro actualizado correctamente");


    } catch (error) {

      console.error(error);

    }

  };



  const handleAddBook = async () => {

    try {

      const docRef = await addDoc(
        collection(db, "books"),
        {
          title: newBook.title,
          author: newBook.author,
          category: newBook.category.trim(),
          price: Number(newBook.price),
          image: newBook.image,
          printed: newBook.printed
        }
      );


      setBooks([
        ...books,
        {
          id: docRef.id,
          ...newBook,
          price: Number(newBook.price)
        }
      ]);


      setNewBook({
        title: "",
        author: "",
        category: "",
        price: "",
        image: "",
        printed: ""
      });


      alert("Libro agregado correctamente");


    } catch (error) {

      console.error(error);

    }

  };
const handleLogout = async () => {

  await signOut(auth);

};


  return (

    <section className="admin">

      <h1>Panel Administrador</h1>

<button 
  className="logout-btn"
  onClick={handleLogout}
>
  Cerrar sesión
</button>
      <h2>Nuevo libro</h2>

      <div className="new-book-form">

        <input
          placeholder="Título"
          value={newBook.title}
          onChange={(e) =>
            setNewBook({
              ...newBook,
              title: e.target.value
            })
          }
        />


        <input
          placeholder="Autor"
          value={newBook.author}
          onChange={(e) =>
            setNewBook({
              ...newBook,
              author: e.target.value
            })
          }
        />


        <input
          placeholder="Categoría"
          value={newBook.category}
          onChange={(e) =>
            setNewBook({
              ...newBook,
              category: e.target.value
            })
          }
        />


        <input
          type="number"
          placeholder="Precio"
          value={newBook.price}
          onChange={(e) =>
            setNewBook({
              ...newBook,
              price: e.target.value
            })
          }
        />

<input
  type="file"
  accept="image/*"
  onChange={async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      setUploading(true);

      const url = await uploadImage(file);

      setNewBook({
        ...newBook,
        image: url
      });

      

    } catch (error) {

      console.error(error);
      alert("Error al subir imagen");

    } finally {

      setUploading(false);

    }

  }}
/>
       

    



        <input
          placeholder="Printed"
          value={newBook.printed}
          onChange={(e) =>
            setNewBook({
              ...newBook,
              printed: e.target.value
            })
          }
        />


       <button 
  disabled={uploading}
  onClick={handleAddBook}
>
  {uploading ? "Subiendo..." : "Agregar libro"}
</button>
      </div>



      {editingBook && (

        <form className="edit-form">

          <h2>Editando libro</h2>


          <input
            value={editingBook.title}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                title: e.target.value
              })
            }
          />


          <input
            value={editingBook.author}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                author: e.target.value
              })
            }
          />


          <input
            value={editingBook.category}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                category: e.target.value
              })
            }
          />


          <input
            type="number"
            value={editingBook.price}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                price: Number(e.target.value)
              })
            }
          />


          <input
            value={editingBook.image}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                image: e.target.value
              })
            }
          />


          <input
            value={editingBook.printed}
            onChange={(e) =>
              setEditingBook({
                ...editingBook,
                printed: e.target.value
              })
            }
          />


          <button
            type="button"
            onClick={handleUpdate}
          >
            Guardar cambios
          </button>


        </form>

      )}



      <h2>Libros</h2>


      <div className="admin-books">

        {books.map((book) => (

          <article
            key={book.id}
            className="admin-card"
          >

            <img
              src={book.image}
              alt={book.title}
            />


            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <p>${book.price}</p>


            <div className="admin-actions">

              <button
                className="edit-btn"
                onClick={() => handleEdit(book)}
              >
                Editar
              </button>


              <button
                className="delete-btn"
                onClick={() => handleDelete(book.id)}
              >
                Eliminar
              </button>

            </div>


          </article>

        ))}

      </div>


    </section>

  );

}