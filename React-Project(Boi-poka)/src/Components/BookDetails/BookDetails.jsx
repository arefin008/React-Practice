import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList } from "../../utility/db";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  //   console.log(typeof bookId, typeof id, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleMarkAsWish = (id) => {
    addToStoredReadList(id);
  };
  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Mark as Read
      </button>
      <button
        onClick={() => handleMarkAsWish(bookId)}
        className="btn btn-acent"
      >
        Add to WishList
      </button>
    </div>
  );
};

export default BookDetails;
