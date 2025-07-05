import App from "@/App";
import BookDetails from "@/pages/BookDetails";
import Books from "@/pages/Books";
import BorrowBooks from "@/pages/BorrowBooks";
import CreateBook from "@/pages/CreateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Books,
      },
      {
        path: "books/:id",
        Component: BookDetails,
      },
      {
        path: "create-book",
        Component: CreateBook,
      },
      {
        path: "borrow-book",
        Component: BorrowBooks,
      },
    ],
  },
]);

export default router;
