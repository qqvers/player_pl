import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import tvn_logo from "../../assets/tvn.png";
import sign_photo from "../../assets/sign_photo.jpg";
import sign_photo_lg from "../../assets/sign_photo_lg.jpg";
import { Link } from "react-router-dom";

const Sign = ({ signup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repeatEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let errors = {};

    if (signup) {
      if (!formData.name.trim()) {
        errors.name = "Imię jest wymagane";
      } else {
        errors.name = "";
      }

      if (!formData.repeatEmail.trim()) {
        errors.repeatEmail = "Powtórz e-mail";
      } else if (
        JSON.stringify(formData.repeatEmail) !== JSON.stringify(formData.email)
      ) {
        errors.repeatEmail = "Adresy e-mail nie pasują do siebie";
      } else {
        errors.repeatEmail = "";
      }
    }

    if (!formData.email.trim()) {
      errors.email = "E-mail jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Podany e-mail jest nieprawidłowy";
    } else {
      errors.email = "";
    }

    if (!formData.password.trim()) {
      errors.password = "Hasło jest wymagane";
    } else {
      errors.password = "";
    }

    if (errors.length === 0) {
      console.log("Formularz jest poprawny:", formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <div className="h-full w-full bg-[#00ccff] text-black lg:py-8 lg:pl-8">
        <Link
          to="/"
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-black p-4 lg:flex"
        >
          <FaArrowLeft size={20} className="text-white" />
        </Link>

        <div className="flex">
          <div className="">
            <div className="flex h-16 w-full items-center rounded-t-md bg-black lg:ml-16 lg:w-[20rem]">
              <img src={tvn_logo} alt="tvn_logo" className="mx-2" />
              <span className="pb-2 text-3xl text-white ">KONTO</span>
            </div>

            <img src={sign_photo} alt="" className="lg:hidden" />

            <div
              className={`${!signup ? "lg:h-[30rem]" : "h-screen"} flex h-screen w-full flex-col items-center gap-4 rounded-b-md bg-white pt-4 lg:mx-4 lg:mb-8  lg:ml-16 lg:w-[20rem]`}
            >
              <span className="text-2xl font-bold">
                {signup ? "Zarejestruj się" : "Zaloguj się"}
              </span>
              <span className=" text-center">
                {signup
                  ? "Wpisz swój adres e-mail oraz hasło i zaakceptuj wymagane zgody, aby utworzyć nowe konto"
                  : "Wpisz swój e-mail oraz hasło do Konta TVN"}
              </span>
              {signup && (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Imie"
                  className="w-[19rem] rounded-md border border-slate-300 p-3"
                />
              )}
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-[19rem] rounded-md border border-slate-300 p-3"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
              {signup && (
                <input
                  type="text"
                  name="repeatEmail"
                  value={formData.repeatEmail}
                  onChange={handleChange}
                  placeholder="Powtorz e-mail"
                  className="w-[19rem] rounded-md border border-slate-300 p-3"
                />
              )}
              {errors.repeatEmail && (
                <span className="text-red-500">{errors.repeatEmail}</span>
              )}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Hasło"
                className="w-[19rem] rounded-md border border-slate-300 p-3"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
              <div
                onClick={handleSubmit}
                className="relative flex w-[19rem] cursor-pointer items-center justify-center rounded-md bg-[#008cff] p-3 text-white"
              >
                UTWÓRZ KONTO
                <FaArrowLeft
                  size={20}
                  className="absolute right-0 mr-2 rotate-180"
                />
              </div>
              <div className="flex w-[19rem] items-center justify-between">
                <span>Masz już Konto TVN?</span>
                {signup ? (
                  <Link
                    to="/login"
                    className="cursor-pointer text-lg font-semibold text-[#008cff]"
                  >
                    ZALOGUJ SIĘ
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="cursor-pointer text-lg font-semibold text-[#008cff]"
                  >
                    ZAREJESTRUJ SIĘ
                  </Link>
                )}
              </div>
            </div>
          </div>
          <img
            src={sign_photo_lg}
            alt=""
            className="mb-8 ml-64 hidden h-auto w-[60rem] lg:block"
          />
        </div>
      </div>
      <div className=" bg-gray-200 px-8 py-4 text-center text-black">
        <span className="p-3">© 2024 TVN</span>
        <span className="p-3">O nas</span>
        <span className="p-3">Reklama </span>
        <span className="p-3">Regulamin </span>
        <span className="p-3">Prywatność </span>
        <span className="p-3">Ustawienia ciasteczek</span>
        <span className="p-3">Kontakt</span>
      </div>
    </>
  );
};

export default Sign;
