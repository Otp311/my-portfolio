"use client";

import React from "react";
import styles from "../page.module.css";

export default function Downloadbutton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myresume.pdf";
    link.download = "myresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button className={styles.resume} onClick={handleDownload}>
      Download Resume
    </button>
  );
}
