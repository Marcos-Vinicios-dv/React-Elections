const CandidateList = ({ allVotes = [] }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center">
      {allVotes.map(({ id, name, username, votes, percent }, index) => {
        const classColor = index === 0 ? 'text-green-600' : 'text-yellow-600';
        return (
          <div
            key={id}
            className="border w-70 h-60 shadow-lg m-5 flex flex-col items-center justify-evenly p-4"
          >
            <span className="flex space-x-14">
              <img
                src={`img/${username}.png`}
                alt={name}
                width="60px"
                className="rounded-full"
              />
              <div className="text-center">
                <h2
                  className={`text-lg ${classColor} font-semibold`}
                >{`${percent}%`}</h2>
                <p className="text-sm font-semibold text-gray-500">
                  {votes.toLocaleString('pt-BR')} votos
                </p>
              </div>
            </span>
            <h2 className="text-2xl">{name}</h2>
            <p className={`${classColor} font-semibold`}>
              {index === 0 ? 'Eleito' : 'Não Eleito'}
            </p>
          </div>
        );
      })}
    </ul>
  );
};

export default CandidateList;
