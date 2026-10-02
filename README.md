# MindCore — Landing Page

Landing page profissional para a **MindCore**, empresa de tecnologia. Projeto fullstack com frontend React e backend Node.js.

## Estrutura

```
LANDING PAGE MIND CORE/
├── frontend/     → React + Vite + Tailwind CSS
└── backend/      → Node.js + Express (API de contato)
```

## Seções da página

- **Header** — Navegação fixa com menu responsivo
- **Hero** — Headline, CTAs e imagem de fundo
- **Sobre** — Filosofia da empresa
- **Serviços** — 5 cards de serviços
- **Como Trabalhamos** — Processo em 6 etapas
- **Diferenciais** — 5 pilares de confiança
- **Depoimentos** — Relatos de clientes
- **CTA Banner** — Chamada para ação
- **Contato** — WhatsApp, e-mail, localização + formulário
- **Footer** — Links, serviços e redes sociais

## Como rodar

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: http://localhost:5173

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API disponível em: http://localhost:3001

### 3. Testar a API

```bash
curl http://localhost:3001/api/health
```

## Personalização

Edite `frontend/src/data/content.ts` para alterar textos, depoimentos, WhatsApp, e-mail e endereço.

## Configuração de e-mail (opcional)

Para enviar e-mails reais pelo formulário de contato, configure as variáveis SMTP no arquivo `backend/.env`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
CONTACT_EMAIL=contato@mindcore.com.br
```

Sem SMTP configurado, as mensagens são exibidas no console do backend.

## Deploy

### Frontend na Vercel

1. Publique o repositório no GitHub.
2. Importe o projeto na [Vercel](https://vercel.com) e defina o **Root Directory** como `frontend`.
3. Adicione a variável de ambiente `VITE_API_URL` com a URL pública da API (Railway ou Render), por exemplo `https://mindcore-api.up.railway.app`.
4. Faça o deploy.

### Backend no Railway

1. Crie um projeto em [Railway](https://railway.app) e conecte o repositório.
2. Defina o root do serviço como `backend`.
3. Configure as variáveis:
   - `CORS_ORIGIN` — URL da Vercel (várias origens separadas por vírgula)
   - `CONTACT_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` e `SMTP_PASS` (opcional)
4. Use o health check em `/api/health`.

### Backend no Render (alternativa)

1. Use o arquivo `render.yaml` na raiz do projeto ou crie um Web Service com root `backend`.
2. Build: `npm install` · Start: `npm start`
3. Configure as mesmas variáveis de ambiente do Railway.

Depois de publicar a API, atualize `VITE_API_URL` na Vercel e faça um novo deploy do frontend.

## Próximos passos sugeridos

- [ ] Substituir WhatsApp, e-mail e endereço pelos dados oficiais
- [ ] Trocar os depoimentos de exemplo pelos relatos reais
- [ ] Configurar domínio e SMTP
- [ ] Adicionar Google Analytics
- [ ] Criar páginas de Política de Privacidade e Termos de Uso
