# MindCore — Landing Page

Landing page moderna e de alta performance para a **MindCore**, empresa de soluções inteligentes em tecnologia.
Projeto 100% estático (JAMstack), construído com **React**, **Vite** e **Tailwind CSS**.

---

## 🚀 Estrutura

```
LANDING PAGE MIND CORE/
└── frontend/     → React + Vite + Tailwind CSS + Lucide Icons
```

---

## 📄 Seções da Página

- **Header** — Navegação fixa com menu responsivo
- **Hero** — Headline de alto impacto, CTAs e background moderno
- **Sobre** — Posicionamento e filosofia da empresa
- **Serviços** — Cards detalhando as especialidades da MindCore
- **Como Trabalhamos** — Metodologia e etapas de atendimento
- **Diferenciais** — Pilares de confiança e autoridade
- **Depoimentos** — Depoimentos de clientes
- **CTA Banner** — Chamada direta para ação
- **Contato** — Links diretos (WhatsApp, e-mail, localização) + formulário com proteção anti-spam
- **Footer** — Navegação e canais de contato

---

## 🛠️ Como Executar Localmente

### 1. Instalar dependências

```bash
cd frontend
npm install
```

### 2. Configurar o formulário de contato

Copie o arquivo de exemplo de variáveis de ambiente:

```bash
cp .env.example .env
```

Abra o arquivo `.env` e configure a sua chave gratuita do [Web3Forms](https://web3forms.com):

```env
VITE_WEB3FORMS_ACCESS_KEY=sua-chave-aqui
```

> 💡 **Como obter a chave:**
> 1. Acesse [web3forms.com](https://web3forms.com);
> 2. Digite o e-mail onde deseja receber as mensagens dos clientes;
> 3. Copie o Access Key enviado ao seu e-mail e cole no `.env`.

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse no navegador: `http://localhost:5173`

---

## ✏️ Personalização de Conteúdo

Para alterar textos institucionais, serviços, depoimentos, número do WhatsApp, e-mail ou endereço, edite diretamente o arquivo:
`frontend/src/data/content.ts`

---

## 🌐 Deploy na Vercel (100% Gratuito)

Como a landing page não necessita de backend, o deploy é instantâneo e sem custos de servidor:

1. Suba o repositório no seu GitHub.
2. Acesse a [Vercel](https://vercel.com) e clique em **Add New Project**.
3. Importe este repositório.
4. Na tela de configuração:
   - Defina o **Root Directory** como `frontend`.
   - Em **Environment Variables**, adicione:
     - `VITE_WEB3FORMS_ACCESS_KEY` com o seu Access Key do Web3Forms.
5. Clique em **Deploy**.

Pronto! Seu site estará no ar com HTTPS automático e CDN global.
