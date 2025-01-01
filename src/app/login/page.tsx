"use client";

import React from "react";
import { signInWithGoogle } from "@/lib/supabase/auth-google";
import LoginTemplate from "@/components/templates/login/Login.template";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  return <LoginTemplate signInWithGoogle={handleGoogleLogin} />;
}
