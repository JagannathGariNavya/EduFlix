import React from "react";
import { useParams } from "react-router-dom";
import CallbackForm from "../CallbackForm";

const Enroll = () => {
  const { courseTitle } = useParams();

  return (
    <div>
      <h2>Enroll in Web Development Shool</h2>
      <CallbackForm />
    </div>
  );
};

export default Enroll;
