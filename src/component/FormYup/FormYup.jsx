import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormYup() {
  const schema = yup.object().shape({
    email: yup.string().email("Вы должны ввести почту").required(),
    password: yup
      .string()
      .min(8, "Минимум 8")
      .max(16, "Максимум 16")
      .required("Пароль обезателен"),
    cpassword: yup
      .string()

      .min(8, "Минимум 8")
      .max(16, "Максимум 16")
      .required("Пароль обезателен")
      .oneOf([yup.ref("password")], "Пароль не совподает"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col bg-amber-700 rounded-md justify-center items-center container mx-auto w-[900px]"
    >
      <input
        type="email"
        {...register("email", "dd")}
        className="bg-blue-300 w-[800px] m-3 py-3 rounded-md"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        {...register("password")}
        required
        type="password"
        className="bg-blue-300 w-[800px] m-3 py-3 rounded-md"
      />
      {errors.password && <div>{errors.password.message}</div>}
      <input
        {...register("cpassword")}
        type="password"
        required
        className="bg-blue-300 w-[800px] m-3 py-3 rounded-md"
      />
      {errors.cpassword && <div>{errors.cpassword.message}</div>}
      <button
        className=" border-teal-800 text-white bg-teal-400 m-3 p-[10px] rounded-md hover:bg-teal-700 font-bold"
        type="submit"
        disabled={errors.email || errors.password || errors.password_confirm}
      >
        Отправить
      </button>
    </form>
  );
}
