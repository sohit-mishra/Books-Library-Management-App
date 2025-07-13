import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-[600px] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate("/")} className="px-6 py-2 text-base">
        Go Back Home
      </Button>
    </div>
  );
}
