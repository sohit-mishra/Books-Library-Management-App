import { useEffect, useState, useContext } from "react";
import api from "@/api";
import BookCard from "@/components/BookCard";
import { AuthContext } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { toast } from 'sonner';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (book) => {
    try {
      await api.post(`/api/mybooks/${book._id}`,);
      toast.success(`${book.title} added to your library.`);
    } catch {
      toast.error("Please log in first.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2">All Books</h1>
      <Separator className="mb-6" />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-48 w-full rounded" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-8 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              isLoggedIn={!!user}
              onAdd={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
}
