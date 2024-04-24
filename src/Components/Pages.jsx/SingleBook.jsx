import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleBook = ({ book, books, setBooks }) => {
  const { photo, name, email, descrip, _id } = book;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/book/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Book has been deleted.",
                icon: "success",
              });
              const remaning = books.filter((bok) => bok._id !== id);
              setBooks(remaning);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={photo} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl text-center font-semibold">{name}</h2>
          <p className="font-medium py-2">{email}</p>
          <p>{descrip}</p>
          <div>
            <Link to={`update/${_id}`}>
              <button className="btn btn-secondary mr-5">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
