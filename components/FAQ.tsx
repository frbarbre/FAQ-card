"use client";

import { QuestionProps } from "@/app/interfaces";
import { questions } from "@/app/constants";
import { Question } from ".";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function FAQ() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className="p-6 md:py-12 md:pr-20 w-full self-start">
      <h1 className="text-center md:text-left font-bold text-dark-grey text-[32px] md:py-10 pb-6">
        FAQ
      </h1>
      <div className="flex flex-col gap-6 pb-12 md:pb-0">
        {questions.map((question: QuestionProps) => {
          function handleClick() {
            if (question.question === isActive) {
              setIsActive("");
            } else {
              setIsActive(question.question);
            }
          }
          return (
            <Question
              key={nanoid()}
              question={question.question}
              answer={question.answer}
              isActive={isActive}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
