# Estrutura Flutter inicial

## Requisitos

- Flutter SDK estável
- Dart incluído no Flutter
- Android Studio ou Android SDK para compilar Android

## Preparar plataformas nativas

Este repositório contém a estrutura de código Dart. Na primeira máquina com Flutter instalado, execute na raiz:

```bash
flutter create . --platforms=android
flutter pub get
flutter analyze
flutter run
```

O comando `flutter create` gera os arquivos nativos Android que dependem da versão local do SDK.

## Organização

- `lib/main.dart`: entrada do aplicativo
- `lib/app/`: configuração e composição do app
- `lib/core/theme/`: identidade visual e tema
- `lib/features/navigation/`: navegação principal
- `lib/features/home/`: tela inicial
- `lib/features/search/`: busca (interface inicial)
- `lib/features/library/`: lista pessoal (interface inicial)
- `lib/features/profile/`: perfil e acesso ao Premium (interface inicial)

## Estado da implementação

A tela inicial e a navegação usam conteúdo demonstrativo. Não há catálogo conectado, login, anúncios, pagamentos, reprodução de vídeo ou verificação de licenças nesta etapa.
