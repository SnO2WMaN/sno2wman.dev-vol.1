module.exports = {
	types: [
		{
			value: 'feat',
			name: 'feat:        　　　　　機能追加',
			title: '✨ Features'
		},
		{
			value: 'fix',
			name: 'fix:         　　　　　バグ修正',
			title: '🐛 Bug Fixes'
		},
		{
			value: 'design',
			name: 'design:      　　　　　デザイン周辺',
			title: '🎨 Design'
		},
		{
			value: 'docs',
			name: 'docs:        　　　　　ドキュメント周り',
			title: '📖 Document'
		},
		{
			value: 'env',
			name: 'env:      　　　　　   環境周辺の設定',
			title: '🔧 Env'
		},
		{
			value: 'build',
			name: 'build:        　　　　 ビルド周り',
			title: '🏗️ Build'
		},
		{
			value: 'perf',
			name: 'perf:        　　　　　パフォーマンス改善',
			title: '⏰ Perfomance'
		},
		{
			value: 'style',
			name: 'style:       　　　　　コードスタイルの変更'
		},
		{
			value: 'refactor',
			// prettier-ignore
			name: 'refactor:    　　　　　リファクタリング（機能追加やバグ修正を含まない）'
		},
		{
			value: 'test',
			name: 'test:        　　　　　テスト追加/更新/修正'
		},
		{
			value: 'ci',
			name: 'ci         　　　　　  CI周辺の設定'
		},

		{
			value: 'chore',
			name: 'chore:       　　　　　その他'
		},
		{
			value: 'revert',
			name: 'revert:      　　　　　戻す'
		}
	],
	scopes: [{ name: 'wip' }],
	scopeOverrides: {
		fix: [{ name: 'hotfix' }],
		chore: [{ name: 'deps' }],
		test: [{ name: 'e2e' }]
	},
	messages: {
		type: 'コミットする変更タイプを選択:\n',
		scope: '変更内容のスコープ（例:コンポーネントやファイル名）（任意）:\n',
		customScope:
			'変更内容のスコープ（例:コンポーネントやファイル名）（任意）:\n',
		subject: '変更内容の要約文:\n',
		body: '変更内容の詳細（"|"で改行）（任意）:\n',
		breaking: '破壊的変更についての記述（任意）:\n',
		footer: '関連issueを追記（例:"fix #123", "re #123"）（任意）:\n',
		confirmCommit: 'このコミット内容でよろしいですか?'
	},
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],
	upperCaseSubject: true,
	subjectLimit: 100
}
