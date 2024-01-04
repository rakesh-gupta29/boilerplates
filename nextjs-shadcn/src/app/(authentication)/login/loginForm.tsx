"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const getRedirect = () => {
    const redirect = getCookie("redirect");
    if (redirect) {
      deleteCookie("redirect");
      return redirect.toString();
    }

    return "/";
  };

  const login = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSubmitting(true);

    try {
      const res = await axios.post("endpoints for the login");
      if (res.status === 200) {
        router.push(getRedirect());
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return <h1>this is the login page</h1>;
}
