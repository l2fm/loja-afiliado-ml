"use client";

import { useMemo, useState } from "react";
import { products } from "./data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category))).sort();
    return ["todos", ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products.filter((prod) => {
      const matchesSearch = prod.title.toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === "todos" || prod.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page">
      <header>
        <div className="logo">
          <div className="logo-icon">LF</div>
          <div className="logo-text">
            <strong>Minha Loja de Afiliado</strong>
            <span>Produtos com links do Mercado Livre</span>
          </div>
        </div>
        <div className="header-badge">
          Links 100% oficiais do Mercado Livre
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Promova seus <span>produtos favoritos</span> como afiliado do
            Mercado Livre.
          </h1>
          <p className="hero-subtitle">
            Use esta página como vitrine: adicione produtos, imagens e links de
            afiliado do Mercado Livre. Compartilhe com seus clientes e aumente
            suas comissões.
          </p>
          <div className="hero-highlights">
            <div className="hero-chip">
              <div className="hero-chip-dot" />
              Edite os produtos em um único arquivo
            </div>
            <div className="hero-chip">
              <div className="hero-chip-dot" />
              Design responsivo para celular
            </div>
            <div className="hero-chip">
              <div className="hero-chip-dot" />
              Botão direto para o Mercado Livre
            </div>
          </div>
        </div>
      </section>

      {/* Filtros / busca */}
      <section className="filters">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar produto pelo nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="select-wrapper">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "todos" ? "Todas as categorias" : cat}
              </option>
            ))}
          </select>
          <span className="select-arrow">▼</span>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="products-grid">
        {filteredProducts.length === 0 ? (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "0.85rem",
            }}
          >
            Nenhum produto encontrado com esses filtros.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <span className="product-tag">{product.category}</span>

              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              </div>

              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>

              <div className="product-footer">
                <div className="product-price">
                  <span className="product-price-main">{product.price}</span>
                  {product.priceInfo && (
                    <span className="product-price-info">
                      {product.priceInfo}
                    </span>
                  )}
                </div>
                <a
                  className="btn-buy"
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🛒</span> Ver no Mercado Livre
                </a>
              </div>
            </article>
          ))
        )}
      </section>

      <footer>
        <p>
          Este site é uma vitrine independente feita para divulgar produtos como
          afiliado. As compras são realizadas diretamente no{" "}
          <a
            href="https://www.mercadolivre.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mercado Livre
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
