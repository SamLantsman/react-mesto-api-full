import "../index.css";
import React from "react";
import Main from "./Main";
import api from "../utils/api";
import * as auth from "../utils/auth";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoToolTip from "./InfoToolTip";
import successSign from "../images/info-tool-tip__success.png";
import failSign from "../images/info-tool-tip__fail.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Switch, Route, useHistory, Link, Redirect } from "react-router-dom";

const token = localStorage.getItem("token");

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    api
      .getUserInfo(token)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  React.useEffect(() => {
    api
      .getCardsInfo()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/main");
    }
  }, [isLoggedIn, history]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) =>
          c._id === card._id ? newCard.data : c
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsUpdateAvaterPopupOpen] = React.useState(
    false
  );

  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(
    false
  );

  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: "",
    name: "",
  });

  const [cards, setCards] = React.useState([]);

  const [cardToDelete, setCardToDelete] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(cardToDelete)
      .then(() => {
        const newCards = cards.filter((element) => {
          return element._id !== cardToDelete;
        });

        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsUpdateAvaterPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setCardToDelete(card._id);
    setIsDeleteCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name,
    });
  }

  function handleAddCardSubmit(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard)
      .then((newCard) => {
        setCards([newCard.data, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsUpdateAvaterPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({ isOpen: false, link: "", name: "" });
    setIsLoading(false);
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .updateUserInfo(data)
      .then((newUser) => {
        setCurrentUser(newUser.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(link) {
    setIsLoading(true);
    api
      .updateAvatar(link)
      .then((userWithNewAvatar) => {
        setCurrentUser(userWithNewAvatar.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  const [email, setEmail] = React.useState("");

  function handleLogin(data) {
    auth
      .authorize(data.password, data.email)
      .then((data) => {
        if (data.token) {
          tockenCheck();
        }
      })
      .catch((err) => console.log(err));
  }

  const tockenCheck = React.useCallback(() => {
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            history.push("/main");
            setEmail(res.email);
          }
        })
        .catch((e) => console.log(e));
    }
  }, []);

  React.useEffect(() => {
    tockenCheck();
  }, [tockenCheck]);

  function signOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setEmail("");
    console.log(isLoggedIn);
    console.log(email);
    console.log("??????");
  }

  const [isRegistered, setIsRegistered] = React.useState(false);

  const [isInfoToolTipPopupOpen, setIsInfoToolTopPopupOpen] = React.useState(
    false
  );

  function closeRegistrationPopup() {
    setIsInfoToolTopPopupOpen(false);
    if (isRegistered) {
      history.push("/signin");
    }
  }

  function handleRegistration(data) {
    auth
      .register(data.password, data.email)
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          setIsInfoToolTopPopupOpen(true);
        } else {
          setIsInfoToolTopPopupOpen(true);
          return {
            message: "??????-???? ?????????? ???? ??????!",
          };
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/main" /> : <Redirect to="/signup" />}
            </Route>
            <Route path="/signin">
              <Login
                title="????????"
                button="??????????"
                handleSubmit={handleLogin}
                email={email}
                isInfoToolTipPopupOpen={isInfoToolTipPopupOpen}
                isRegistered={isRegistered}
                closeRegistrationPopup={closeRegistrationPopup}
              />
            </Route>
            <Route path="/signup">
              <Register
                title="??????????????????????"
                button="????????????????????????????????????"
                onClick={<Link to="/signin" />}
                handleSubmit={handleRegistration}
              />
              <InfoToolTip
                isOpen={isInfoToolTipPopupOpen}
                title={
                  isRegistered
                    ? "???? ?????????????? ????????????????????????????????????!"
                    : "??????-???? ?????????? ???? ??????! ???????????????????? ?????? ??????."
                }
                src={isRegistered ? successSign : failSign}
                name="success"
                onClose={closeRegistrationPopup}
              />
            </Route>
            <ProtectedRoute
              path="/main"
              component={Main}
              loggedIn={isLoggedIn}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCardClick}
              isOpen={selectedCard.isOpen}
              src={selectedCard.link}
              name={selectedCard.name}
              onClose={closeAllPopups}
              isOpenProfilePopup={isEditProfilePopupOpen}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
              isOpenAddPlace={isAddPlacePopupOpen}
              onAddCard={handleAddCardSubmit}
              isOpenAvatar={isEditAvatarPopupOpen}
              onUpdateAvatar={handleUpdateAvatar}
              isOpenDeleteCard={isDeleteCardPopupOpen}
              onConfirmDeleteCard={handleCardDelete}
              onClick={signOut}
              email={email}
              faded={isLoggedIn ? "faded" : ""}
            ></ProtectedRoute>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
