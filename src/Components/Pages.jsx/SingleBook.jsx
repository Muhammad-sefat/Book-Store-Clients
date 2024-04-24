import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { photo, name, email, descrip, _id } = book;
  console.log(_id);
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
            <button className="btn btn-warning">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
