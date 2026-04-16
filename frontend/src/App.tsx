import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2 className="greeting">Welcome back!</h2>
        <p className="subtext">プロジェクトの進捗状況です。</p>

        <div className="stats-grid">
          <StatsCard title="総タスク数" value={24} subtitle="先週比 +3" color="#667eea" />
          <StatsCard title="完了" value={12} subtitle="達成率 50%" color="#10b981" />
          <StatsCard title="進行中" value={7} subtitle="担当者 4名" color="#f59e0b" />
        </div>

        <TaskList />
      </main>
    </div>
  );
}

export default App;
