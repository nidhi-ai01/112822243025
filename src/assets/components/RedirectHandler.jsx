import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUrl } from "../utils/storage";

export default function RedirectHandler() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const record = getUrl(id);
    if (record) {
      window.location.href = record.longUrl;
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  return <p>Redirecting...</p>;
}
