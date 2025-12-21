import React from "react";
import { NavLink } from "react-router";

const Motivation = () => {
  const quotes = [
    "Success doesn't come to you, you go to it. – Marva Collins",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Code, compete, conquer! Every line counts.",
  ];
  const cards = [
    {
      title: "Push Your Limits",
      content:
        "Every contest is a new opportunity to grow. Challenge yourself and never stop learning.",
      color: "bg-purple-500",
    },
    {
      title: "Code & Conquer",
      content:
        "Write code, solve problems, and conquer new challenges. Your effort today shapes your mastery tomorrow.",
      color: "bg-pink-500",
    },
    {
      title: "Believe & Achieve",
      content:
        "Believe in your potential and never fear failure. Every mistake is a step closer to success.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-8 rounded-xl shadow-lg text-white text-center max-w-3xl mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to Contest Hub!</h1>
        <p className="mb-6 text-lg">
          Push your limits, challenge yourself, and grow every day. Remember,
          every contest is a step closer to mastery.
        </p>
        <ul className="space-y-3 text-left">
          {quotes.map((quote, index) => (
            <li
              key={index}
              className="bg-white text-gray-800 p-4 rounded-lg shadow-md"
            >
              "{quote}"
            </li>
          ))}
        </ul>
        <NavLink to={"/all-contest"}>
          <button className="mt-6 bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition">
            Join a Contest Now
          </button>
        </NavLink>
      </div>
      <div className="max-w-6xl mx-auto my-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Motivation for Contest Hub
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} text-white p-6 rounded-xl shadow-lg flex-1 transform transition hover:scale-105`}
            >
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motivation;
