import { useEffect, useState, useContext } from "react";
import api from "@/api";
import { AuthContext } from "@/context/AuthContext";
import BookCard from "@/components/BookCard";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      api
        .get("/mybooks")
        .then((res) => setMyBooks(res.data))
        .catch((err) => console.error("Failed to load books:", err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2">My Books</h1>
      <Separator className="mb-6" />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-48 w-full rounded" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-8 w-full" />
            </div>
          ))}
        </div>
      ) : myBooks.length === 0 ? (
        <p className="text-muted-foreground">You have no saved books.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myBooks.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              isLoggedIn={true}
              onAdd={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
