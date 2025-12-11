# Loja de Afiliado - Mercado Livre

Uma vitrine simples em **Next.js** para divulgar produtos com links de afiliado do **Mercado Livre**.

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- React
- CSS puro (sem Tailwind)

---

## 📂 Estrutura do projeto

```bash
loja-afiliado-ml/
├── app/
│   ├── data/
│   │   └── products.js     # Lista de produtos que você edita
│   ├── globals.css         # Estilos globais
│   ├── layout.js           # Layout raiz do Next.js
│   └── page.js             # Página principal com listagem de produtos
├── public/
│   └── images/             # Suas imagens de produtos
├── package.json
└── README.md
```

---

## 🔧 Como usar localmente

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```bash
http://localhost:3000
```

---

## 🛒 Editando seus produtos

Abra o arquivo:

```bash
app/data/products.js
```

Exemplo de produto:

```js
export const products = [
  {
    id: 1,
    title: "Fone Bluetooth (exemplo)",
    description: "Substitua este texto pela descrição do seu produto.",
    price: "R$ 129,90",
    priceInfo: "em até 6x sem juros",
    image: "/images/fone-exemplo.jpg",
    link: "https://www.mercadolivre.com.br/SEU-LINK-DE-AFILIADO-1",
    category: "Eletrônicos",
  },
  // ...
];
```

Basta editar:

- `title`: nome do produto  
- `description`: texto curto de descrição  
- `price`: preço que será exibido  
- `priceInfo`: info extra (parcelamento, frete, etc) — opcional  
- `image`: caminho da imagem do produto (ex: `/images/seu-produto.jpg`)  
- `link`: **seu link de afiliado do Mercado Livre**  
- `category`: categoria (usada no filtro)

> ✳ Dica: use IDs diferentes (`id: 1`, `id: 2`, `id: 3`, ...) para cada produto.

---

## 🖼️ Imagens

Coloque suas imagens em:

```bash
public/images/
```

Exemplos:

- `public/images/fone-exemplo.jpg`
- `public/images/teclado-exemplo.jpg`
- `public/images/smartwatch-exemplo.jpg`

No `products.js`, use o caminho iniciando com `/images/...`:

```js
image: "/images/fone-exemplo.jpg"
```

---

## ☁️ Deploy na Vercel

1. Crie um repositório no GitHub (por exemplo: `loja-afiliado-ml`).
2. Faça o push deste projeto para o GitHub:

```bash
git init
git add .
git commit -m "Loja de afiliado Mercado Livre"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/loja-afiliado-ml.git
git push -u origin main
```

3. Acesse [Vercel](https://vercel.com), conecte sua conta ao GitHub.
4. Importe o repositório `loja-afiliado-ml`.
5. A Vercel vai detectar o Next.js automaticamente e fazer o deploy.

Depois do deploy, você terá um link do tipo:

```text
https://loja-afiliado-ml.vercel.app
```

É só divulgar esse link para seus clientes 😄

---

## ✨ Personalização

Você pode alterar:

- As cores e estilos em `app/globals.css`
- O texto do cabeçalho e título em `app/page.js`
- O logo (ícone `LF` e nome da loja) em `app/page.js`

Se quiser, pode clonar o projeto e criar múltiplas lojas para nichos diferentes (ex: eletrônicos, casa, beleza, etc.).
