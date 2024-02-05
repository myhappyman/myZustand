import { BearState, useBearStore } from './zustand/firstStore.ts';
import { create } from 'zustand';

function App() {
  const bears = useBearStore((state: BearState) => state && state.bears);
  const increasePopulation = useBearStore((state: BearState) => state.increasePopulation);
  const initBear = useBearStore((state: BearState) => state.removeAllBears);

  const { count } = useGlobalTest();
  return (
    <div>
      <div>
        <p>현재 곰 숫자: {bears}</p>
      </div>
      <div>
        <button onClick={increasePopulation}>늘어나라</button>
        <button onClick={initBear}>초기화</button>
      </div>

      <button onClick={() => useGlobalTest.setState({ count: count + 1 })}>+증가</button>
      <Test />
    </div>
  );
}

export default App;

interface useGlobalTestProps {
  count: number;
}
const useGlobalTest = create<useGlobalTestProps>(() => ({
  count: 0,
}));

function Test() {
  const { count } = useGlobalTest();
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
