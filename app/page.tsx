"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [compteur1, setCompteur1] = useState(0);
  const [compteur2, setCompteur2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCompteur1(compteur1 + 1);
      setCompteur2((prevCompteur) => prevCompteur + 1);
    }, 1000);

    // Important de bien comprendre cette méthode pour éviter les fuites de mémoire et les comportements inattendus
    // Si vous n'arrêtez pas l'intervalle lorsque le composant est démonté, il continuera à s'exécuter en arrière-plan, ce qui va faire compter le compteur plusieurs fois par seconde et provoquer des fuites de mémoire.
    // useEffect retourne une méthode qui est appelée lorsque le composant est démonté
    // Depuis React 18, le comportement de useEffect a changé. Il est maintenant appelé deux fois lors du montage du composant pour détecter les effets secondaires
    /*return () => {
      clearInterval(intervalId);
    };*/
  }, []);

  return (
    <div>
      Compteur normal: {compteur1}
      <br />
      Compteur avec lambda: {compteur2}
    </div>
  );
}
