import { useEffect, useState } from 'react';
import { apiGetAllVotes, apiGetCandidates } from '../services/apiServices';
import CandidateList from './CandidateList';
import HeaderElections from './HeaderElections';

const ShowElections = ({
  id = 0,
  name = 'Cidade',
  votingPopulation = 0,
  absence = 0,
  presence = 0,
}) => {
  const [allVotes, setAllVotes] = useState([]);

  useEffect(() => {
    async function getAllVotes() {
      const votes = await apiGetAllVotes(id);
      const candidates = await apiGetCandidates();
      const totalVotes = votes.reduce((total, v) => {
        return total + v.votes;
      }, 0);

      const allVotes = votes.map(candidate => {
        const currentCandidate = candidates.filter(({ id }) =>
          id.includes(candidate.candidateId)
        );
        return {
          ...candidate,
          name: currentCandidate[0].name,
          username: currentCandidate[0].username,
          percent: ((candidate.votes / totalVotes) * 100).toFixed(2),
        };
      });
      setAllVotes(allVotes);
    }
    getAllVotes();
  }, [id]);

  return (
    <div className="border flex flex-col justify-center items-center">
      <HeaderElections>
        <h1 className=" text-1xl font-bold">Eleições em {name}</h1>
        <div className="flex flex-row w-full justify-evenly m-4">
          <span>
            <b>Total de eleitores:</b>{' '}
            {votingPopulation.toLocaleString('pt-BR')}{' '}
          </span>
          <span>
            <b>Abstenção:</b> {absence.toLocaleString('pt-BR')}
          </span>
          <span>
            <b>Total de eleitores:</b> {presence.toLocaleString('pt-BR')}
          </span>
        </div>
        <span>{allVotes.length} Candidatos</span>
      </HeaderElections>
      <CandidateList allVotes={allVotes}></CandidateList>
    </div>
  );
};

export default ShowElections;
