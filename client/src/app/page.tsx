import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        data
      );
      alert("Login realizado com sucesso! Token: " + response.data.token);
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Instagram</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
