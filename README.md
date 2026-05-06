# EGI Studio Site

Production-ready static website for EGI Studio, built with Next.js App Router,
TypeScript, Tailwind CSS, and `next-intl`.

EGI Studio の公式サイトです。Next.js App Router、TypeScript、Tailwind CSS、
`next-intl` を使い、GitHub Pages に静的 export できる構成にしています。

## Local Development / ローカル開発

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

ブラウザで `http://localhost:3000` を開きます。

## Static Build / 静的ビルド

```bash
npm run build
```

The deployable output is generated in `out/`.

デプロイ可能な静的ファイルは `out/` に生成されます。

## Internationalization / 多言語対応

The site uses `next-intl` with explicit locale routes for static hosting:

- Default Japanese home: `/`
- English: `/en/`
- Japanese: `/ja/`

静的ホスティングとの相性を優先し、middleware による自動判定ではなく、
明示的な locale ルートを使います。トップページ `/` は日本語をデフォルトで
表示します。

- デフォルト日本語ホーム: `/`
- 英語: `/en/`
- 日本語: `/ja/`

Message files:

- `messages/en.json`
- `messages/ja.json`

文言を変更する場合は、各ページに直接ベタ書きせず、上記 JSON を編集します。

## GitHub Pages Deployment / GitHub Pages へのデプロイ

For a custom domain or root GitHub Pages site:

```bash
npm ci
npm run build
```

Publish the `out/` directory. The repository includes `public/.nojekyll` so
GitHub Pages serves `_next/` assets correctly.

カスタムドメイン、または root の GitHub Pages に公開する場合は、`out/`
ディレクトリを公開します。`public/.nojekyll` を含めているため、GitHub Pages
でも `_next/` 配下のアセットが正しく配信されます。

For a project site such as `https://USER.github.io/egi-studio-site/`, build
with a base path:

```bash
NEXT_PUBLIC_SITE_URL=https://USER.github.io NEXT_PUBLIC_BASE_PATH=/egi-studio-site npm run build
```

`https://USER.github.io/egi-studio-site/` のようなプロジェクトサイトに公開する
場合は、上記のように `NEXT_PUBLIC_BASE_PATH` を指定してビルドします。
`NEXT_PUBLIC_SITE_URL` は GitHub Pages の origin、`NEXT_PUBLIC_BASE_PATH` は
リポジトリ名のパスです。

For this repository, the likely GitHub Pages project URL is:

```bash
NEXT_PUBLIC_SITE_URL=https://y-as-u-16.github.io NEXT_PUBLIC_BASE_PATH=/egi-studio-site npm run build
```

When using a future custom domain, set `NEXT_PUBLIC_SITE_URL` to that domain and
leave `NEXT_PUBLIC_BASE_PATH` unset.

将来カスタムドメインを使う場合は、`NEXT_PUBLIC_SITE_URL` にそのドメインを指定し、
`NEXT_PUBLIC_BASE_PATH` は指定しません。

## Site Structure / 構成

- `src/app/` - App Router pages, metadata, sitemap, robots
- `src/app/[locale]/` - localized pages for `/en/` and `/ja/`
- `src/components/` - shared layout and UI components
- `src/i18n/` - `next-intl` routing, navigation, request config
- `src/lib/site.ts` - site constants, projects, stack data
- `messages/` - English and Japanese translation messages
- `public/` - static assets copied to `out/`

## Update Before Launch / 公開前に更新する項目

- Set `NEXT_PUBLIC_SITE_URL` to the public URL used for deployment.
- Set `NEXT_PUBLIC_BASE_PATH` only when publishing as a GitHub Pages project site.
- Confirm the public email address and X account in `src/lib/site.ts`.
- Review public profile copy in `messages/` before publishing.

- デプロイ先の公開 URL を `NEXT_PUBLIC_SITE_URL` に指定します。
- GitHub Pages のプロジェクトサイトとして公開する場合だけ `NEXT_PUBLIC_BASE_PATH` を指定します。
- `src/lib/site.ts` の公開メールアドレスと X アカウントを確認します。
- 公開前に `messages/` 配下のプロフィール文言を確認します。
