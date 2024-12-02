// "use client";

// import { useScoreStore } from "@/stores/useScoreStore";
// import { Lose } from "./lose";
// import { Win } from "./win";
// import { useKanaStore } from "@/stores/useKanaStore";
// import { useEffect } from "react";
// import { WinTheGame } from "./win-the-game";

// export const Results = () => {
//   const {
//     turns,
//     missionID,
//     progress,
//     setYen,
//     yen,
//     isEndlessMode,
//     endlessTarget,
//     incrementEndlessTarget,
//   } = useScoreStore();
//   const { kanaMissions } = useKanaStore();

//   const target = isEndlessMode
//     ? endlessTarget
//     : kanaMissions.find((mission) => mission.id === missionID)?.target || 0;

//   useEffect(() => {
//     const hasWon = progress >= target && turns > 0;
//     const isGameOver = turns === 0;

//     if (hasWon && !isGameOver) {
//       setYen(yen + 500);
//       if (isEndlessMode) {
//         incrementEndlessTarget();
//       }
//     }
//   }, [progress >= target]);

//   const hasWonGame = missionID === 8 && progress >= target && !isEndlessMode;

//   return (
//     <>
//       {hasWonGame ? (
//         <WinTheGame />
//       ) : (
//         <>
//           {turns > 0 && progress >= target && <Win />}
//           {turns === 0 && (progress >= target ? <Win /> : <Lose />)}
//         </>
//       )}
//     </>
//   );
// };
