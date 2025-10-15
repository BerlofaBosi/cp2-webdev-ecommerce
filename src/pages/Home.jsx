import { use, useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {

  const [eletros, setEletros] = useState([]);
  const [joias, setJoias] = useState([]);
  const [roupasMasc, setRoupasMasc] = useState([]);

  const API = import.meta.env.VITE_API;

  useEffect(() => {
    fetch(`${API}/electronics`)
    .then(res => res.json())            
    .then(data => setEletros(data))
  }, []);

  useEffect(() => {
    fetch(`${API}/jewelery`)
    .then(res => res.json())
    .then(data => setJoias(data))
  }, []);

  useEffect(() => {
    fetch(`${API}/men's%20clothing`)
    .then(res => res.json())
    .then(data => setRoupasMasc(data))
  }, []);
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 justify-self-center">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Eletrônicos">
          {eletros.map(pegaItem => (
          <Card {...pegaItem} />
        ))}
        </Section>
        <Section titulo="Joias">
          {joias.map(pegaItem => (
          <Card {...pegaItem} />
        ))}
        </Section>
        <Section titulo="Roupas Masculinas">
          {roupasMasc.map(pegaItem => (
          <Card {...pegaItem} />
        ))}
        </Section>
    </div>
  );
}
