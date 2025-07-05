// import { Helmet } from "react-helmet";
import BorrowSkeleton from "@/components/Skeletons/BorrowSkeleton";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import type { BorrowProps } from "@/types";

export default function BorrowBooks() {
  const {
    data,
    isLoading,
    isError,
  } = useGetAllBorrowsQuery(undefined);

  const borrows: BorrowProps[] = data?.data || [];

  return (
    <div>
      {/* <Helmet>
        <title>Borrow Summary</title>
        <meta name="description" content="List of borrowed books with summary info." />
      </Helmet> */}

      <h2 className="text-xl font-semibold mb-4">Borrow Summary</h2>

      {isError && (
        <p className="text-destructive text-sm">Failed to load borrow records.</p>
      )}

      <ul className="space-y-2">
        {isLoading ? (
          // Show multiple skeletons
          Array.from({ length: 5 }).map((_, idx) => <BorrowSkeleton key={idx} />)
        ) : borrows.length === 0 ? (
          <p className="text-muted-foreground text-sm">No borrow records found.</p>
        ) : (
          borrows.map((borrow) => (
            <li
              key={borrow._id}
              className="border p-4 rounded-md shadow-sm dark:bg-neutral-900/40"
            >
              <p>
                <strong>Book Title:</strong> {borrow.book.title}
              </p>
              <p>
                <strong>ISBN:</strong> {borrow.book.isbn}
              </p>
              <p>
                <strong>Quantity:</strong> {borrow.totalQuantity}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

