export const playSound = (sound: string) => {
  const audio = new Audio(sound);
  audio.volume = 0.5;
  audio.play();
};
