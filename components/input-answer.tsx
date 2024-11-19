"use client";

import { firsttimekanaup } from "@/actions/first-time-up";
import { playSound } from "@/actions/functions/play-sound";
import { gainxp } from "@/actions/gain-xp";
import { kanaup } from "@/actions/kana-up";
import { useComboStore } from "@/store/useComboStore";
import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useWrongStore } from "@/store/useWrongAnswer";
import { useEffect } from "react";

interface Props {
  currentIndex: number;
  correctAnswers: any;
  input: string;
  profiles: any;
  setInput: (e: string) => void;
  setCorrectAnswers: (e: any) => void;
  setCurrentIndex: (e: number) => void;
  setWin: (e: boolean) => void;
  data: any;
}

export const InputAnswer = ({
  data,
  currentIndex,
  input,
  setInput,
  setCurrentIndex,
  correctAnswers,
  setCorrectAnswers,
  setWin,
  profiles,
}: Props) => {
  const defaultIndex = Array.from({ length: data.length }, (_, index) => index);
  const { hp, setHp } = usePlayerHpStore();
  const { wrong, setWrong } = useWrongStore();
  const { combo, setCombo } = useComboStore();

  const handleCurrentIndex = () => {
    const result = defaultIndex.filter(
      (num) => ![...correctAnswers, currentIndex].includes(num)
    );
    if (result.length > 0) {
      const newRandomNumber = result[Math.floor(Math.random() * result.length)];
      setCurrentIndex(newRandomNumber);
    }

    setInput("");
  };

  useEffect(() => {
    const result = defaultIndex.filter((num) => !correctAnswers.includes(num));

    if (profiles.first_time_kana !== profiles.kana) {
      if (result.length > 0) {
      } else {
        setTimeout(() => {
          playSound({ src: "/audio/win.wav" });
        }, 500);
        setWin(true);
        setCurrentIndex(0);

        kanaup({
          id: profiles.id,
          kana: profiles.kana,
        });

        gainxp({
          id: profiles.id,
          currentExp: profiles.exp,
          exp: 150,
        });
      }
    } else {
      if (result.length > 0) {
      } else {
        firsttimekanaup({
          id: profiles.id,
          first_time_kana: profiles.first_time_kana,
        });

        setCurrentIndex(0);
        setCorrectAnswers([]);
        setHp(100);
      }
    }
  }, [correctAnswers]);

  return (
    <>
      {wrong ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCurrentIndex();
            playSound({ src: "/audio/sweep.wav", volume: 0.1 });
            setWrong(false);
          }}
          className="absolute bottom-28 shadow-xl"
        >
          <input
            value={"Wrong answer (Enter)"}
            className="bg-red-600 backdrop-blur-lg font-bold border border-red-400 placeholder:text-white/30 text-center text-2xl py-3 px-3.5 outline-none rounded-lg w-96"
            type="text"
          />
          <input className="hidden" type="submit" />
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (correctAnswers.length <= data.length) {
              if (data[currentIndex].romaji === input) {
                playSound({ src: "/audio/shoot.wav" });
                playSound({ src: "/audio/sweep.wav", volume: 0.1 });

                setCombo([...combo, 1]);
                playSound({ src: "/audio/combo.wav", volume: 0.1 });
                setCorrectAnswers((prev: any) => [...prev, currentIndex]);
                handleCurrentIndex();
              } else {
                playSound({ src: "/audio/fail.wav" });
                setCombo([]);
                if (hp >= 20) {
                  setHp(hp - 20);
                }

                if (hp === 20) {
                  playSound({ src: "/audio/died.wav" });
                }
                setInput("");
                setWrong(true);
              }
            }
          }}
          className="absolute bottom-28 shadow-xl"
        >
          <input
            onChange={(e) => {
              playSound({ src: "/audio/hit.wav", volume: 0.1 });
              setInput(e.target.value);
            }}
            value={input}
            placeholder="Answer here"
            className="bg-white/20 backdrop-blur-lg border border-neutral-500 placeholder:text-white/30 text-center text-2xl py-3 px-3.5 outline-none rounded-lg w-96"
            type="text"
          />
          <input className="hidden" type="submit" />
        </form>
      )}
    </>
  );
};
