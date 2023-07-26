"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    // window.CRISP_WEBSITE_ID="8a21672d-286c-4cf0-825c-272cca73cf4a";
    Crisp.configure("8a21672d-286c-4cf0-825c-272cca73cf4a");
  });

  return null;
}

export default CrispChat;