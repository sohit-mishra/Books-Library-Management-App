import React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyBookCard({ book, onAdd }) {
  return (
    <Card className="w-full max-w-xs">
      <img
        src={book.coverImage}
        alt={book.title}
        className="h-48 w-full object-cover rounded-t"
      />
      <CardContent className="space-y-2 pt-4">
        <CardTitle>{book.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {book.author}
        </CardDescription>
        <Button onClick={() => onAdd(book)}>Want to Read</Button>
      </CardContent>
    </Card>
  );
}
