import { useDispatch } from "react-redux";
import { setUsername } from "@/store/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [username, setLocalUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEnter = () => {
    if (username.trim()) {
      dispatch(setUsername(username));
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
        <h1 className="text-xl font-bold mb-4">Welcome to CodeLeap network!</h1>
        <p className="mb-2 text-sm text-gray-700">Please enter your username</p>
        <Input
          placeholder="John doe"
          value={username}
          onChange={(e) => setLocalUsername(e.target.value)}
          className="mb-4"
        />
        <Button
          className="bg-primary text-white w-full"
          onClick={handleEnter}
        >
          ENTER
        </Button>
      </div>
    </div>
  );
}
