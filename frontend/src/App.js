import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutBook } from "./components/AboutBook";
import { Chapters } from "./components/Chapters";
import { AboutAuthor } from "./components/AboutAuthor";
import { WhyIWrote } from "./components/WhyIWrote";
import { Quote } from "./components/Quote";
import { BookExcerpts } from "./components/BookExcerpts";
import { Gallery } from "./components/Gallery";
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
        <Chapters />
        <AboutAuthor />
        <WhyIWrote />
        <Quote />
        <BookExcerpts />
        <Gallery />
        <Purchase />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
