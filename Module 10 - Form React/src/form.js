import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export let Form = () => {
  let schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name...."
        {...register("fullName")}
      ></input>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email...." {...register("email")}></input>

      <input type="number" placeholder="Age...." {...register("age")}></input>
      <input
        type="password"
        placeholder="Password...."
        {...register("password")}
      ></input>
      <input
        type="password"
        placeholder="Confirm Password...."
        {...register("confirmPassword")}
      ></input>
      <input type="submit"></input>
    </form>
  );
};
