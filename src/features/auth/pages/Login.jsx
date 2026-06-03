import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
   const { login} = useAuth();

   const {
     register,
     handleSubmit,
   } = useForm();

   const onSubmit = (data) => {
     login(data);

     console.log("Logged In", data)
   };


   return (
     <div className="max-w-md mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
        />

        <button
          className="
          bg-orange-500
          text-white
          px-4
          py-3
          rounded
          w-full
        "
        >
          Login
        </button>
      </form>
    </div>
   );
   
}

export default Login;