import React, { useState, useEffect } from "react";
import {activationAPI} from "../http/userAPI";

function Activation() {
  const [isActivated, setIsActivated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Получаем uid и token из URL
    const path = window.location.pathname.split("/");
    const uid = path[4];
    const token = path[5];
    console.log(uid, token)
    // Отправляем запрос на активацию пользователя через API Django
    activationAPI(uid, token)
      .then((response) => {
        setIsActivated(true);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : isActivated ? (
        <p>Your account has been activated!</p>
      ) : (
        <p>Activating your account...</p>
      )}
    </div>
  );
}

export default Activation;
