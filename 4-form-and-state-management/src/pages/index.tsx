import React, {useState} from "react";

import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { TextField } from "@/components/TextField";

import crypto from "crypto";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const hashPassword = (password: string) => {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const saltRounds = 10;

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({name: "", email: "", password: ""});

  const handleNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hashedPassword = hashPassword(password);
    setSubmittedData({
      name: name,
      email: email,
      password: hashedPassword,
    });

    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>4 - Form and State Management</title>
        <meta name="description" content="PT Mulya Kencana Metalindo Technical Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <h1 style={{textAlign:'center'}}>
          Form & State Management
        </h1>
        <main className={styles.main}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
            <TextField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button className={styles.button} type="submit">Submit</button>
          </form>

          {submitted && (
            <div className={styles.box}>
              <h2>Submitted Data</h2>
              <p>Name : {submittedData?.name}</p>
              <p>Email : {submittedData?.email}</p>
              <p>Password (hashed) : {submittedData?.password}</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
