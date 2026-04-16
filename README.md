# Cursor 3.0 勉強会デモ

Cursor 3.0 の主要新機能をハンズオン形式で体験するためのリポジトリ。

## デモ対象機能

| 機能 | 概要 |
|------|------|
| **Agent Tab** | エディタ内サイドパネルのAIエージェント。コード生成・編集・ターミナル操作を自律実行 |
| **Agents Window** | 複数エージェントを並列実行できる新画面。タブで同時にタスクを処理 |
| **Design Mode** | WebフロントエンドをビジュアルプレビューしながらAIで編集（Agents Window 内） |
| **Worktree** | `/worktree` で変更を分離、`/best-of-n` で複数モデルの結果を比較 |

## リポジトリ構成

```
cursor-study/
├── docs/
│   └── demo-guide.md    # デモ手順・プロンプト集
├── frontend/            # Design Mode デモ用 React + Vite アプリ
└── README.md
```

## セットアップ

```bash
# Design Mode デモ用フロントエンドの起動
cd frontend
npm install
npm run dev
```

## デモ手順

[docs/demo-guide.md](docs/demo-guide.md) を参照。
