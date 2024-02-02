import { BearState, useBearStore } from './zustand/firstStore.ts';

function App() {
  const bears = useBearStore((state: BearState) => state && state.bears);
  const increasePopulation = useBearStore((state: BearState) => state.increasePopulation);
  const initBear = useBearStore((state: BearState) => state.removeAllBears);
  return (
    <div>
      <div>
        <p>현재 곰 숫자: {bears}</p>
      </div>
      <div>
        <button onClick={increasePopulation}>늘어나라</button>
        <button onClick={initBear}>초기화</button>
      </div>
    </div>
  );
}

export default App;
