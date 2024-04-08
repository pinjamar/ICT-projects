/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import { QuestionsState, Difficulty, Category } from './API';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [questionCount, setQuestionCount] = useState(TOTAL_QUESTIONS);
  const [diff, setDiff] = useState(Difficulty.EASY);
  const [category, setCategory] = useState(Category.GeneralKnowledge);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      questionCount,
      diff,
      category
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === questionCount) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  const playAgain = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Category.GeneralKnowledge
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {loading ? <p>Loading...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={questionCount}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== questionCount - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Iduce pitanje
          </button>
        ) : null}

        {gameOver ? (
          <>
            <label htmlFor="diff" className="difficulty">
              Tezina:
            </label>
            <select
              name="diff"
              value={diff}
              onChange={(e) => setDiff(e.target.value)}
            >
              <option value={Difficulty.EASY}>Easy</option>
              <option value={Difficulty.MEDIUM}>Meeeeedium</option>
              <option value={Difficulty.HARD}>Whoop-Ass!</option>
            </select>
            <label htmlFor="cat" className="category">
              Kategorija:
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={Category.GeneralKnowledge}>
                General Knowledge
              </option>
              <option value={Category.ScienceNature}>Science & Nature</option>
              <option value={Category.Mythology}>Mythology</option>
              <option value={Category.Sports}>Sports</option>
              <option value={Category.Geography}>Geography</option>
              <option value={Category.History}>History</option>
            </select>
            <label htmlFor="questionCount" className="number">
              Broj pitanja
            </label>
            <input
              name="questionCount"
              type="number"
              value={questionCount}
              onChange={(evt) => setQuestionCount(parseInt(evt.target.value))}
            ></input>
            <button className="start" onClick={startTrivia}>
              START
            </button>
          </>
        ) : null}
        {!gameOver ? <p className="score">Rezultat: {score}</p> : null}
        {userAnswers.length === questionCount ? (
          <button className="start" onClick={playAgain}>
            Zelim igrati ponovno!
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
