import { useEffect, useState, useContext } from "react";
import api from "@/api";
import { AuthContext } from "@/context/AuthContext";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function MyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      api
        .get("/api/mybooks")
        .then((res) => setBooks(res.data))
        .catch((err) => toast.error("Error loading books"))
        .finally(() => setLoading(false));
    }
  }, [user]);

  console.log(books);

  const updateStatus = async (id,bookId, status) => {
    try {
      await api.patch(`/api/mybooks/${bookId}/status`, { status });
      setBooks((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status } : b))
      );
      toast.success("Status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

const updateRating = async (id,bookId,  rating) => {
  try {
    await api.patch(`/api/mybooks/${bookId}/rating`, { rating });

    setBooks((prev) =>
      prev.map((b) =>
        b._id === id ? { ...b, rating } : b
      )
    );

    toast.success("Rating updated");
  } catch (err) {
    console.error("Rating update failed:", err);
    toast.error("Failed to update rating");
  }
};


  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">📚 My Books</h1>
      <Separator className="mb-6" />

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-6 w-full" />
          ))}
        </div>
      ) : books.length === 0 ? (
        <p className="text-muted-foreground">
          You haven't saved any books yet.
        </p>
      ) : (
        <div className="overflow-auto rounded border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cover</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book._id}>
                  <TableCell>
                    <img
                      src={book.bookId.coverImage}
                      alt={book.bookId.title}
                      className="h-20 w-14 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>{book.bookId.title}</TableCell>
                  <TableCell>{book.bookId.author}</TableCell>
                  <TableCell>
                    <Select
                      value={book.status || ""}
                      onValueChange={(val) =>
                        updateStatus(book._id, book.bookId._id, val)
                      }
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Want to Read">
                          Want to Read
                        </SelectItem>
                        <SelectItem value="Currently Reading">
                          Currently Reading
                        </SelectItem>
                        <SelectItem value="Read">Read</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="0"
                      max="5"
                      step="1"
                      value={book.rating || ""}
                      onChange={(e) =>
                        updateRating(book._id , book.bookId._id, Number(e.target.value))
                      }
                      className="w-16"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
