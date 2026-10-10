/* Reset and base */
* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f6fb;
  --panel: #ffffff;
  --panel-alt: #eef4ff;
  --primary: #0b132b;
  --primary-soft: #1d3557;
  --accent: #ffb703;
  --accent-soft: #ffe8a3;
  --success: #12a35c;
  --danger: #d90429;
  --text: #1c2430;
  --muted: #64748b;
  --shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  --radius: 18px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Tahoma", "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #f4f7fb 0%, #edf3ff 100%);
  color: var(--text);
  direction: rtl;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 40px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-badge {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: linear-gradient(135deg, var(--primary), var(--primary-soft));
  color: #fff;
  font-weight: 900;
  font-size: 1.4rem;
}

.brand-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.72rem;
}

.brand-wrap h1 {
  margin: 0;
  font-size: 1.35rem;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-link,
.chip {
  border: 0;
  background: #eff3ff;
  color: var(--text);
  padding: 11px 16px;
  border-radius: 999px;
  transition: 0.2s ease;
}

.nav-link.active,
.chip.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-soft));
  color: #fff;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 260px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: #f8fafd;
  border-radius: 999px;
  padding: 0 14px;
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 12px 0;
  background: transparent;
  color: var(--text);
}

.cart-button {
  position: relative;
  border: 0;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accent), #ffcf5b);
  color: #1d1a12;
  font-size: 1.2rem;
  box-shadow: var(--shadow);
}

#cartCount {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  padding: 2px 6px;
  background: var(--danger);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  padding: 28px 22px;
  background: linear-gradient(135deg, rgba(11, 19, 43, 0.96), rgba(29, 53, 87, 0.92));
  color: #fff;
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mini-tag {
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 183, 3, 0.16);
  color: #ffeab0;
  font-size: 0.82rem;
  margin-bottom: 16px;
}

.hero-copy h2 {
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.2;
  margin: 0 0 18px;
}

.hero-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.9;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.primary-btn,
.secondary-btn,
.checkout-btn {
  border: 0;
  border-radius: 14px;
  padding: 14px 20px;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.primary-btn,
.checkout-btn {
  background: linear-gradient(135deg, var(--accent), #ffc53d);
  color: #1d1a12;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.primary-btn:hover,
.secondary-btn:hover,
.checkout-btn:hover,
.nav-link:hover,
.chip:hover,
.close-btn:hover {
  transform: translateY(-1px);
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 28px;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}

.stats-row strong {
  font-size: 1.55rem;
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.device-card {
  position: relative;
  width: min(100%, 360px);
  height: 320px;
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.14);
  overflow: hidden;
}

.device-glow {
  position: absolute;
  inset: auto auto 0 50%;
  width: 220px;
  height: 220px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255, 183, 3, 0.8), transparent 65%);
  opacity: 0.75;
}

.phone-preview {
  position: absolute;
  inset: 26px 72px 40px 72px;
  background: linear-gradient(180deg, #1d2433, #111827);
  border-radius: 32px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.35);
  padding: 18px 16px;
}

.camera {
  width: 52px;
  height: 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.14);
  margin: 0 auto 12px;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30px);
  border-radius: 20px;
  background: linear-gradient(180deg, #111827, #0f172a);
  text-align: center;
}

.screen span {
  color: #f4d35e;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.screen strong {
  font-size: 1.45rem;
}

.catalog-section,
.admin-panel {
  margin-top: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.section-kicker {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.82rem;
}

.section-header h3 {
  margin: 0;
  font-size: 1.85rem;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.product-card {
  background: var(--panel);
  border: 1px solid rgba(148,163,184,0.16);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.08);
}

.product-image {
  display: grid;
  place-items: center;
  min-height: 180px;
  background: linear-gradient(135deg, #eff7ff, #e4ebff);
  font-size: 3rem;
}

.product-body {
  padding: 16px;
}

.product-tag {
  display: inline-block;
  margin-bottom: 10px;
  padding: 6px 9px;
  font-size: 0.72rem;
  border-radius: 999px;
  color: var(--primary-soft);
  background: #edf4ff;
}

.product-card h4 {
  margin: 0 0 8px;
  font-size: 1.18rem;
}

.product-card p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.7;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.price {
  font-size: 1.28rem;
  font-weight: 800;
}

.stock {
  color: var(--muted);
  font-size: 0.8rem;
}

.product-actions {
  display: flex;
  gap: 10px;
}

.product-actions button {
  flex: 1;
  border: 0;
  border-radius: 12px;
  padding: 11px 12px;
  font-weight: 700;
}

.add-btn {
  background: var(--primary);
  color: #fff;
}

.cart-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: min(420px, 100%);
  height: 100vh;
  background: #fff;
  box-shadow: -14px 0 30px rgba(15, 23, 42, 0.15);
  transform: translateX(110%);
  transition: transform 0.25s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.cart-drawer.open {
  transform: translateX(0);
}

.drawer-header,
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.drawer-header h3,
.panel-header h3 {
  margin: 0;
}

.close-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 0;
  background: #f3f4f6;
  font-size: 1.4rem;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 18px 20px 12px;
}

.cart-empty {
  padding: 14px 10px;
  color: var(--muted);
  text-align: center;
}

.cart-item {
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.cart-thumb {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #eff7ff, #e8f1ff);
  font-size: 2rem;
}

.cart-item h4 {
  margin: 0 0 5px;
  font-size: 1rem;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 8px;
  background: #eef3ff;
  font-weight: 700;
}

.cart-summary {
  padding: 18px 20px 20px;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.checkout-btn {
  width: 100%;
  border: 0;
  font-size: 1rem;
}

.order-panel {
  position: fixed;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  width: min(700px, calc(100% - 24px));
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.22);
  z-index: 110;
  padding-bottom: 16px;
}

.order-form,
.product-form {
  padding: 18px 20px 8px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;
  color: var(--text);
}

input,
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(148,163,184,0.32);
  border-radius: 12px;
  background: #f8fafc;
  color: var(--text);
}

textarea {
  resize: vertical;
}

.order-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 18px 0 22px;
  color: var(--muted);
}

.wide {
  width: 100%;
}

.admin-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(300px, 1.1fr);
  gap: 22px;
}

.admin-card {
  background: var(--panel);
  border: 1px solid rgba(148,163,184,0.15);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 12px 20px rgba(15, 23, 42, 0.05);
}

.admin-card h4 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.3rem;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.form-actions button {
  flex: 1;
}

.admin-products,
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.admin-item,
.order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 10px;
  background: #f8fafc;
  border-radius: 12px;
}

.admin-item strong,
.order-item strong {
  display: block;
}

.admin-item small,
.order-item small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.admin-actions {
  display: flex;
  gap: 8px;
}

.admin-actions button {
  border: 0;
  border-radius: 8px;
  padding: 8px 10px;
  font-weight: 700;
}

.edit-btn {
  background: #e6f4ff;
  color: #0f172a;
}

.delete-btn {
  background: #ffe9ef;
  color: var(--danger);
}

.orders-card {
  margin-top: 24px;
}

.order-item {
  align-items: flex-start;
}

.order-content {
  flex: 1;
}

.order-status {
  padding: 6px 10px;
  background: rgba(18, 163, 92, 0.08);
  color: var(--success);
  border-radius: 999px;
  white-space: nowrap;
  font-weight: 700;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 120;
  background: rgba(15, 23, 42, 0.95);
  color: #fff;
  padding: 12px 18px;
  border-radius: 12px;
  opacity: 0;
  transform: translateY(12px);
  transition: 0.25s ease;
  pointer-events: none;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .topbar {
    flex-wrap: wrap;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .admin-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding-inline: 14px;
  }

  .topbar {
    padding: 14px;
  }

  .main-nav {
    width: 100%;
    justify-content: center;
  }

  .search-box {
    min-width: 0;
    width: 100%;
  }

  .topbar-actions {
    width: 100%;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 22px 18px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
