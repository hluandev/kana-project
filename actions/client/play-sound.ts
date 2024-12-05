export const playSound = (sound: string) => {
  const isMuted = localStorage.getItem("isMuted") === "true";
  if (isMuted) return;

  const audio = new Audio(sound);
  audio.volume = 0.2;
  audio.play();
};
