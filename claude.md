# React Landing Page - 開発ガイドライン

## テーマシステムの使用

このプロジェクトでは、[index.css](src/index.css)で定義されたカスタムテーマを使用しています。

### @theme の活用

`@theme` ブロック内でカスタムCSSプロパティを定義し、プロジェクト全体で一貫したカラーパレットを管理します：

```css
@theme {
  --color-bg: 249 250 251;
  --color-box: 255 255 255;
  --box-border: 229 231 235;
  --box-sd: 226 232 240 / 0.5;
  --heading-1: 23 37 84;
  --heading-2: 31 41 55;
  --heading-3: 55 65 81;
}
```

### ダークモード対応

`.dark` クラスを使用して、ダークモード用のカラー値を上書きします：

```css
.dark {
  --color-bg: 3 7 18;
  --color-box: 17 24 39;
  --box-border: 243 244 246 / 0.1;
  --box-sd: transparent;
  --heading-1: 255 255 255;
  --heading-2: 243 244 246;
  --heading-3: 209 213 219;
}
```

## CSS構造のベストプラクティス

### 1. @layer utilities の使用

カスタムユーティリティクラスは `@layer utilities` 内で定義し、Tailwind CSSの優先順位システムと統合します：

```css
@layer utilities {
  .bg-body {
    background-color: rgb(var(--color-bg));
  }
  .bg-box-bg {
    background-color: rgb(var(--color-box));
  }
  .text-heading-1 {
    color: rgb(var(--heading-1));
  }
}
```

### 2. カラー値の指定方法

CSS変数を使用する際は、`rgb(var(--variable))` パターンを使用します：

**良い例：**
```css
background-color: rgb(var(--color-bg));
color: rgb(var(--heading-1));
border-color: rgb(var(--box-border));
```

**避けるべき：**
```css
background-color: #f9fafb; /* ハードコードされた値 */
```

## コンポーネント開発のガイドライン

### 既存のユーティリティクラスを活用

新しいコンポーネントを作成する際は、まず既存のユーティリティクラスを使用してください：

```tsx
// 背景色
<div className="bg-body">...</div>
<div className="bg-box-bg">...</div>

// テキストカラー
<h1 className="text-heading-1">...</h1>
<h2 className="text-heading-2">...</h2>
<h3 className="text-heading-3">...</h3>

// ナビゲーション
<nav className="nav-glass">...</nav>
```

### 新しいユーティリティクラスの追加

新しいスタイルパターンが頻繁に使用される場合は、[index.css](src/index.css)の `@layer utilities` に追加します：

1. カスタムCSSプロパティが必要な場合は、まず `@theme` に追加
2. ライト/ダークモード両方の値を定義
3. `@layer utilities` 内でユーティリティクラスを作成

## 効率的なCSS管理のポイント

### 1. 一貫性の維持
- すべてのカラー値はCSS変数から参照
- 直接的なカラーコード（#hex, rgba等）の使用を避ける
- 命名規則を統一（例：`--color-*`, `--heading-*`）

### 2. スケーラビリティ
- 新しいカラーが必要な場合は `@theme` に追加
- コンポーネント固有のスタイルではなく、再利用可能なユーティリティクラスを優先

### 3. パフォーマンス
- `@layer` を使用してCSSの優先順位を明確化
- 不要なスタイルの重複を避ける

### 4. メンテナンス性
- テーマ変更は [index.css](src/index.css) の `@theme` セクションのみで完結
- ダークモードの値は `.dark` クラス内で一元管理

## Tailwind CSS との統合

このプロジェクトはTailwind CSS v4を使用しています。カスタムテーマとTailwindのユーティリティを組み合わせて使用できます：

```tsx
<div className="bg-body p-4 rounded-lg shadow-md">
  <h2 className="text-heading-1 text-2xl font-bold mb-4">タイトル</h2>
  <p className="text-heading-3">コンテンツ</p>
</div>
```
