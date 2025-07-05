import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BorrowDialog from "@/components/module/BorrowDialog";
import SingleBookSkeleton from "@/components/Skeletons/SingleBookSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetBookByIdQuery, useGetBooksQuery } from "@/redux/api/booksApi";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading, isError, refetch } = useGetBookByIdQuery(id!);
  const { refetch: refetchBorrows } = useGetAllBorrowsQuery(undefined);
  const { refetch: refetchBooks } = useGetBooksQuery({ page, limit });

  const book = data?.data;

  useEffect(() => {
    setPage(1); // Might not be necessary unless tied to pagination logic
  }, []);

  if (isLoading) return <SingleBookSkeleton />;
  if (isError || !book) {
    return <p className="p-4 text-center text-destructive">Book not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6 rounded-xl shadow-md">
        <CardContent className="space-y-4 p-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">{book.title}</h2>
            <Badge className={book.available ? "bg-green-600" : "bg-red-600"}>
              {book.available ? "Available" : "Unavailable"}
            </Badge>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Author</p>
            <p className="font-medium text-lg">{book.author}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div>
              <strong>Genre:</strong> {book.genre}
            </div>
            <div>
              <strong>ISBN:</strong> {book.isbn}
            </div>
          </div>

          <div>
            <strong>Copies:</strong> {book.copies}
          </div>

          <Separator />

          {book.description && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                {book.description}
              </p>
            </div>
          )}

          <Button onClick={() => setBorrowOpen(true)} className="w-full mt-4">
            Borrow Book
          </Button>
        </CardContent>
      </Card>

      {/* Borrow Dialog */}
      <BorrowDialog
        book={book}
        open={borrowOpen}
        onOpenChange={setBorrowOpen}
        onComplete={() => {
          refetchBorrows();
          refetch();
          refetchBooks();
        }}
      />
    </div>
  );
}
