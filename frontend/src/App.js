import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutBook } from "./components/AboutBook";
import { AboutAuthor } from "./components/AboutAuthor";
import { WhyIWrote } from "./components/WhyIWrote";
import { Quote } from "./components/Quote";
import { BookExcerpts } from "./components/BookExcerpts";
import { Purchase } from "./components/Purchase";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutBook />
        <AboutAuthor />
        <WhyIWrote />
        <Quote />
        <BookExcerpts />
        <Purchase />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
