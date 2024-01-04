"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return <h1>form for registering the user</h1>;
}
