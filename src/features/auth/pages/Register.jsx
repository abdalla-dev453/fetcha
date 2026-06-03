import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Register
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;