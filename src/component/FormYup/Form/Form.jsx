import React, { useState } from "react";

export default function Form() {
  const [err, setErr] = useState({ status: true, message: "" });
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };
  const emailChange = (d) => {
    setData({ ...data, email: d.target.value });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2}$/.test(d.target.value)) {
      setData({ ...data, email: d.target.value });
      setErr({
        ...err,
        status: true,
        message: "Поле email не правильно заполнено",
      });
      return;
    }

    if (data.confirm_password === data.password) {
      setErr({
        ...err,
        status: false,
        message: "",
      });
    }
  };
  const passwordChange = (d) => {
    setData({ ...data, password: d.target.value });
    if (d.target.value.lenght == 0) {
      setErr({ ...err, status: true, message: "Поле не должно быть пустым" });
      return;
    }
    if (d.target.value.length <= 3) {
      setErr({
        ...err,
        status: true,
        message: "Поле должно быть больше 3 символов",
      });

      return;
    }
    if (data.confirm_password != "") {
      if (data.confirm_password !== data.password) {
        setErr({
          ...err,
          status: true,
          message: "Пароль должен совподать",
        });
      }
      return;
    }
    setErr({
      ...err,
      status: true,
      message: "",
    });
  };

  const confirmPasswordChange = (d) => {
    setData({ ...data, confirm_password: d.target.value });
    if (d.target.value.length === 0 || d.target.value === "") {
      setErr({ ...err, status: true, message: "Поле не должно быть пустым" });

      return;
    }

    if (d.target.value.length <= 3) {
      setErr({
        ...err,
        status: true,
        message: "Поле должно быть больше 3 символов",
      });

      return;
    }

    if (data.password != "" && d.target.value != "") {
      if (data.password === d.target.value) {
        setErr({ ...err, status: false, message: "" });
        return;
      } else {
        setErr({ ...err, status: true, message: "Поля должны совподать" });
        return;
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-[900px] flex flex-col p-4 bg-amber-200 border-amber-600 border-solid border-2 mx-auto justify-center items-center rounded-md "
    >
      {err.status && (
        <div className="text-red-400 font-bold uppercase ">{err.message}</div>
      )}
      <input
        className="m-0.5 p-3 rounded-md uppercase bg-blue-300 w-[800px]"
        type="email"
        name="email"
        onChange={emailChange}
        value={data.email}
      />
      <input
        className="m-0.5 p-3 rounded-md uppercase bg-blue-300 w-[800px]"
        type="password"
        name="password"
        onChange={passwordChange}
        value={data.password}
      />
      <input
        className="m-0.5 p-3 rounded-md uppercase bg-blue-300 w-[800px]"
        type="password"
        name="confirm_password"
        onChange={confirmPasswordChange}
        value={data.confirm_password}
      />
      <button
        type="submit"
        disabled={err.status}
        className="bg-green-400  cursor-pointer rounded-md p-2 w-[100px] text-white font-bold hover:bg-amber-500 tracking-wide"
      >
        Отправить
      </button>
    </form>
  );
}
