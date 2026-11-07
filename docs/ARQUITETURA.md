# Arquitetura inicial

## Diretriz

A Kage Flix será planejada como aplicativo Android, com backend e painel administrativo separados da experiência do usuário. A escolha definitiva de tecnologias será registrada antes da implementação do aplicativo.

## Componentes

- Aplicativo Android: navegação, catálogo, busca, detalhes, player autorizado e experiência Premium.
- Backend/API: catálogo, disponibilidade por território, usuários, assinaturas e configurações.
- Banco de dados: títulos, temporadas, episódios, provedores oficiais, licenças e assinaturas.
- Painel administrativo: cadastro e atualização de títulos, gestão de links e controle de direitos.
- Módulo de monetização: anúncios para usuários gratuitos e validação de Premium.
- Serviço de vídeo: somente para conteúdo com direitos de streaming confirmados.

## Entidades principais

- Anime/Título
- Temporada
- Episódio
- Filme/OVA
- Gênero
- Provedor oficial
- Link de exibição
- Licença
- Território
- Idioma
- Usuário
- Assinatura
- Evento de publicidade

## Regras de direitos

Cada título ou episódio deverá registrar, no mínimo:

- Titular ou distribuidor responsável.
- Tipo de autorização: catálogo/link ou streaming.
- Territórios permitidos.
- Período de validade.
- Idiomas e modalidades autorizadas.
- Permissão para monetização com anúncios e/ou assinatura.

A ausência de autorização de streaming deve impedir a reprodução dentro da Kage Flix.

## Idiomas

- Idioma inicial da interface: português do Brasil (pt-BR).
- Preparar arquivos de tradução para idiomas futuros.
- Não misturar textos de interface diretamente com regras de negócio.
- Metadados de títulos devem permitir versões localizadas quando disponíveis.

## Segurança e privacidade

- Não armazenar dados de pagamento sensíveis diretamente.
- Validar assinaturas no servidor.
- Proteger credenciais e chaves em variáveis de ambiente.
- Coletar somente os dados necessários.
- Definir política de privacidade e termos antes da publicação.

## Decisões pendentes

- Tecnologia do aplicativo Android.
- Tecnologia do backend e banco de dados.
- Provedor de hospedagem e distribuição de vídeo.
- Provedor de anúncios.
- Fluxo de assinatura e validação de compras.
- Fonte de metadados e imagens licenciadas.
