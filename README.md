# Kage Flix

Plataforma web de descoberta de animes, com catálogo demonstrativo, busca por título e filtros por gênero. O projeto usa Next.js e está preparado para evoluir para uma plataforma com links oficiais e, futuramente, reprodução apenas de conteúdo devidamente licenciado.

**Idioma inicial:** português do Brasil (pt-BR).  
**Identidade visual:** preto e vermelho.  
**Hospedagem planejada:** Vercel.

## Executar localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Scripts

- `npm run dev`: ambiente local.
- `npm run build`: build de produção.
- `npm run start`: inicia o build local.
- `npm run typecheck`: valida os tipos TypeScript.

## Estado atual

A interface web inicial contém navegação, apresentação, catálogo demonstrativo, busca e filtros. Os títulos e avaliações são dados de demonstração; não existe integração com catálogo externo, reprodução de vídeo, contas, anúncios ou pagamentos ativos.

## Próximas etapas

1. Validar build e publicação na Vercel.
2. Integrar fonte de dados de catálogo com atribuição e uso permitido.
3. Criar páginas de detalhes e lista pessoal.
4. Implementar autenticação apenas quando necessária para recursos de conta.
5. Integrar anúncios e Premium após definir fornecedores, regras e requisitos legais.

## Licenciamento

O Kage Flix não hospeda nem transmite conteúdo sem autorização. Disponibilidade de streaming dependerá de acordos e licenças com titulares de direitos.