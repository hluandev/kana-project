import { useState } from "react";

export const randomNumber = (pro: any) => {
  const [lastRandomIndex, setLastRandomIndex] = useState<any>(null);

  let randomIndex = null;
  do {
    randomIndex = Math.floor(Math.random() * pro.reviews.length);
  } while (randomIndex === lastRandomIndex);

  setLastRandomIndex(randomIndex);

  return randomIndex;
};
