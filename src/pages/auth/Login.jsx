import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="mx-auto px-4 py-10 md:py-20 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] shadow-lg mx-auto p-8 rounded-2xl max-w-md"
      >
        <p className="mb-6 text-[var(--color-text)] text-center">
          Only authorized users can login
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-[var(--color-text)] text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4 py-2 border border-[var(--color-border)] focus:border-transparent rounded-lg focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text)]"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-[var(--color-text)] text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4 py-2 border border-[var(--color-border)] focus:border-transparent rounded-lg focus:ring-[var(--color-accent)] focus:ring-2 w-full text-[var(--color-text)]"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] hover:opacity-90 px-6 py-3 rounded-lg w-full font-semibold text-white transition-opacity"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <div className="mt-4 text-[var(--color-text)] text-sm text-center">
          Need an account?{" "}
          <Link
            to="/register"
            className="text-[var(--color-accent)] hover:underline"
          >
            Register here
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
