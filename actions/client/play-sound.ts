export const playSound = (sound: string) => {
  const audio = new Audio(sound);
  audio.volume = 0.2;
  audio.play();
};
