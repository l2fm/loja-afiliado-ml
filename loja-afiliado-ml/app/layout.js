export const metadata = {
  title: "Minha Loja de Afiliado - Mercado Livre",
  description: "Vitrine de produtos para vender como afiliado no Mercado Livre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
