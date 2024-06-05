import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { proffesions } from "../../data";
import "./LoginPage.css";
import AvatarSwiper from "../../components/AvatarSwiper/AvatarSwiper";

export default function LoginPage({ submitNewProfile }) {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [age, setAge] = useState(1);
  const [selectValue, setSelectValue] = useState("profession..");
  const [selectAvatar, setSelectAvatar] = useState(0);
  const navigate = useNavigate();

  function submitLogin() {
    const newProfile = {
      name: name,
      secondName: secondName,
      age: age,
      proffesion: selectValue,
      avatar: selectAvatar,
      tags: []
    };
    submitNewProfile(newProfile);
  }

  return (
    <div className="login-page">
      <div className="container login-page__container">
        <div className="login-page__info">
          <h3 className="login-page__title">Let's fill out the form !</h3>
          <p className="login-page__text">
            After the identity selection is completed, it will be used to apply
            for a passport
          </p>
          <NavLink className="btn" to={"/"}>
            home
          </NavLink>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitLogin();
            navigate(`/profile`);
          }}
          className="login-page__form"
        >
          <label htmlFor="">
            <span>Enter your name</span>
            <input
              value={name}
              onChange={(value) => setName(value.target.value)}
              required
              className="login-page__input login-page__input--name"
              placeholder="Name.."
              type="text"
            />
          </label>
          <label htmlFor="">
            <span>Enter your secondname</span>
            <input
              value={secondName}
              onChange={(value) => setSecondName(value.target.value)}
              required
              className="login-page__input login-page__input--secondname"
              placeholder="Secondname.."
              type="text"
            />
          </label>
          <label htmlFor="">
            <span>How old are you?</span>
            <input
              value={age}
              onChange={(value) => setAge(value.target.value)}
              required
              className="login-page__input login-page__input--age"
              placeholder="Age.."
              type="number"
              max={99}
              min={1}
            />
          </label>
          <label htmlFor="">
            <span>What is your profession?</span>
            <CustomSelect
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              items={proffesions}
            />
          </label>
          {/* <NavLink to={"/profile"}>
            <button className="login-page__submit btn btn-reset" type="submit">
              Submit
            </button>
          </NavLink> */}
          <label htmlFor="">
            <span>Choose an avatar</span>
            <AvatarSwiper
              selectAvatar={selectAvatar}
              setSelectAvatar={setSelectAvatar}
            />
          </label>
          <button className="login-page__submit btn btn-reset" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
