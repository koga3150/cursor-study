interface Task {
  id: number;
  title: string;
  status: "done" | "in-progress" | "todo";
  assignee: string;
}

const tasks: Task[] = [
  { id: 1, title: "ログイン画面のデザイン修正", status: "done", assignee: "田中" },
  { id: 2, title: "API エンドポイントの追加", status: "in-progress", assignee: "佐藤" },
  { id: 3, title: "ユニットテストの作成", status: "in-progress", assignee: "鈴木" },
  { id: 4, title: "デプロイパイプラインの構築", status: "todo", assignee: "高橋" },
  { id: 5, title: "パフォーマンス最適化", status: "todo", assignee: "伊藤" },
  { id: 6, title: "ドキュメント更新", status: "todo", assignee: "渡辺" },
];

const statusStyles: Record<Task["status"], { bg: string; text: string; label: string }> = {
  done: { bg: "#d1fae5", text: "#065f46", label: "完了" },
  "in-progress": { bg: "#dbeafe", text: "#1e40af", label: "進行中" },
  todo: { bg: "#f3f4f6", text: "#4b5563", label: "未着手" },
};

export default function TaskList() {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      overflow: "hidden",
    }}>
      <div style={{
        padding: "16px 20px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#111827" }}>
          タスク一覧
        </h2>
        <button style={{
          background: "#667eea",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "6px 14px",
          fontSize: 13,
          cursor: "pointer",
        }}>
          + 新規タスク
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 500, color: "#6b7280" }}>タスク</th>
            <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 500, color: "#6b7280" }}>ステータス</th>
            <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 500, color: "#6b7280" }}>担当者</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const s = statusStyles[task.status];
            return (
              <tr key={task.id} style={{ borderTop: "1px solid #f3f4f6" }}>
                <td style={{ padding: "12px 20px", color: "#111827" }}>{task.title}</td>
                <td style={{ padding: "12px 20px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "2px 10px",
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 500,
                    background: s.bg,
                    color: s.text,
                  }}>
                    {s.label}
                  </span>
                </td>
                <td style={{ padding: "12px 20px", color: "#6b7280" }}>{task.assignee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
