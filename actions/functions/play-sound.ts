interface Props {
  src: string;
  volume?: any;
}

export const playSound = ({ src, volume }: Props) => {
  const audio = new Audio(src);
  audio.volume = volume ? volume : 0.2;
  audio.play();
};
