import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import api from "@/api";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("7836020160s@gmail.com");
  const [password, setPassword] = useState("7836020160s@");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      const res = await api.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      toast.success("Login successfully!");
      setUser(res.data.user)
      navigate("/");
    } catch (err) {
      console.error("Login failed", err);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[700px] px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
