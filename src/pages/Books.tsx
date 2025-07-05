import BookCard from "@/components/module/BookCard";
import BorrowDialog from "@/components/module/BorrowDialog";
import DeleteBookDialog from "@/components/module/DeleteBookDialog";
import EditBookDialog from "@/components/module/EditBookDialog";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import type { IBook } from "@/types";
import { useState } from "react";
import { useLocation } from "react-router";

export default function Books() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const {
    data: booksData,
    isLoading,
    isError,
    refetch,
  } = useGetBooksQuery({ page, limit }) as {
    data?: {
      success: boolean;
      message: string;
      data: IBook[];
    };
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
  };

  const { refetch: refetchBorrows } = useGetAllBorrowsQuery(undefined);

  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const location = useLocation();
  const isBooksPage = location.pathname === "/books";

  // Extract the books properly from `booksData.data`
  const books = booksData?.data || [];
  const total = books.length;
  const totalPages = Math.ceil(total / limit);
  const displayedBooks = isBooksPage ? books : books.slice(0, 6);

  const handleBorrow = (book: IBook) => {
    setSelectedBook(book);
    setBorrowOpen(true);
  };

  const handleEdit = (book: IBook) => {
    setSelectedBook(book);
    setEditOpen(true);
  };

  const handleDelete = (book: IBook) => {
    setSelectedBook(book);
    setDeleteOpen(true);
  };

  if (isError) {
    return (
      <p className="text-center text-destructive">Failed to load books.</p>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{isBooksPage ? "All Books" : ""}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => <CardSkeleton key={i} />)
          : displayedBooks.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onBorrow={handleBorrow}
              />
            ))}
      </div>

      {isBooksPage && totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === page ? "default" : "outline"}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Dialogs */}
      <BorrowDialog
        book={selectedBook}
        open={borrowOpen}
        onOpenChange={setBorrowOpen}
        onComplete={() => {
          setSelectedBook(null);
          refetchBorrows();
          refetch();
        }}
      />
      <EditBookDialog
        book={selectedBook}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSuccess={() => {
          setSelectedBook(null);
          refetch();
        }}
      />
      <DeleteBookDialog
        book={selectedBook}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onSuccess={() => {
          setSelectedBook(null);
          refetch();
          refetchBorrows();
        }}
      />
    </div>
  );
}
