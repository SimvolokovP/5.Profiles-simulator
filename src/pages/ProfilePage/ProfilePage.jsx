import { useEffect, useState } from "react";
import "./ProfilePage.css";
import ava1 from "../../assets/ava1.png";
import ava2 from "../../assets/ava2.png";
import ava3 from "../../assets/ava3.png";
import { NavLink } from "react-router-dom";
import TagsModal from "../../components/TagsModal/TagsModal";

export default function ProfilePage({ profile }) {
  const [editMode, setEditMode] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [statusStage, setStatusStage] = useState(0);
  const [modal, setModal] = useState(false);
  const [tags, setTags] = useState(profile[0].tags);
  const [randomSec, setRandomSec] = useState(
    Math.floor(Math.random() * 36) + 1
  );
  const [randomFollowers, setRandomFollowers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const changeCount = Math.random() < 0.5 ? -1 : 1; 
      setRandomFollowers((prev) => Math.max(prev + changeCount * Math.floor(Math.random() * 5) + 1, 0));
    }, 6000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    targetProfile.tags = tags;
    localStorage.setItem("profile", JSON.stringify([targetProfile]));
  }, [tags]);

  const targetProfile = profile[0];
  const avatars = [ava1, ava2, ava3];
  const status = [
    { text: "online", color: "green" },
    { text: "offline", color: "gray" },
    { text: "hidden", color: "yellow" },
    { text: "At work", color: "red" },
  ];

  function addTag(tag) {
    setTags([...tags, tag]);
  }

  function removeTag(index) {
    setTags([...tags].filter((tag) => tag.index !== index));
  }

  return (
    <div className="profile-page">
      <div className="container profile-page__container">
        <NavLink className="btn" to={"/"}>
          home
        </NavLink>
        <div className="profile-page__card card">
          <div className="card__chapter">
            <div className="card__chapter--1">
              <span>Portfolio</span>
              <div
                onClick={() => {
                  setStatusStage((prev) =>
                    prev === status.length - 1 ? 0 : prev + 1
                  );
                }}
                className="card__status"
              >
                <div
                  style={{ backgroundColor: status[statusStage].color }}
                ></div>{" "}
                {status[statusStage].text}
              </div>
            </div>
            <div className="card__chapter--1">
              <span>Followers Online: </span>

              <span>{randomFollowers}</span>
            </div>
          </div>
          <div className="card__body">
            <div className="card__name">
              {targetProfile.name} {targetProfile.secondName}{" "}
              <span>{targetProfile.proffesion}</span>
            </div>
            <div className="card__actions">
              <button
                onClick={() => setEditMode((prev) => !prev)}
                className="btn btn-reset"
              >
                {editMode ? "save" : "edit"}
              </button>
              <img src={avatars[targetProfile.avatar]} alt="" />
            </div>
          </div>
          <div className="card__profile"></div>
        </div>
        <div className="profile-page__actions">
          <ul className="list-reset profile-page__tags">
            {tags.map((tag) => (
              <li
                onClick={() => removeTag(tag.index)}
                className="profile-page__tag"
                key={tag.index}
              >
                {tag.text}
              </li>
            ))}
          </ul>
          <button
            style={{ marginTop: "10px" }}
            onClick={() => setModal(true)}
            className="btn btn-reset"
          >
            + Tag
          </button>
        </div>
      </div>
      <TagsModal
        tagsList={tags}
        addTag={addTag}
        isOpen={modal}
        modalControl={setModal}
      />
    </div>
  );
}
