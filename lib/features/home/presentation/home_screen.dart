import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  static const _popular = [
    ('Solo Leveling', 'Ação • Fantasia'),
    ('Demon Slayer', 'Ação • Aventura'),
    ('Jujutsu Kaisen', 'Ação • Sobrenatural'),
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      bottom: false,
      child: CustomScrollView(
        slivers: [
          SliverAppBar(
            pinned: true,
            title: RichText(
              text: const TextSpan(
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900),
                children: [
                  TextSpan(text: 'KAGE'),
                  TextSpan(
                    text: ' FLIX',
                    style: TextStyle(color: AppTheme.accent),
                  ),
                ],
              ),
            ),
            actions: [
              IconButton(
                tooltip: 'Notificações',
                onPressed: () {},
                icon: const Icon(Icons.notifications_none_rounded),
              ),
              const SizedBox(width: 8),
            ],
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'SEU PRÓXIMO ANIME FAVORITO',
                    style: TextStyle(
                      color: AppTheme.muted,
                      fontSize: 11,
                      letterSpacing: 1.8,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 14),
                  _FeaturedBanner(
                    onExplore: () {},
                  ),
                  const SizedBox(height: 28),
                  const _SectionHeading(
                    title: 'Populares agora',
                    action: 'Ver todos',
                  ),
                  const SizedBox(height: 14),
                  SizedBox(
                    height: 190,
                    child: ListView.separated(
                      scrollDirection: Axis.horizontal,
                      itemCount: _popular.length,
                      separatorBuilder: (_, __) => const SizedBox(width: 12),
                      itemBuilder: (context, index) {
                        final anime = _popular[index];
                        return _AnimeTile(title: anime.$1, subtitle: anime.$2);
                      },
                    ),
                  ),
                  const SizedBox(height: 28),
                  const _SectionHeading(title: 'Explore por categoria'),
                  const SizedBox(height: 14),
                  const Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      _CategoryChip(label: 'Ação'),
                      _CategoryChip(label: 'Aventura'),
                      _CategoryChip(label: 'Fantasia'),
                      _CategoryChip(label: 'Drama'),
                      _CategoryChip(label: 'Comédia'),
                    ],
                  ),
                  const SizedBox(height: 30),
                  const Text(
                    'Os títulos exibidos nesta versão são exemplos de interface. '
                    'O catálogo real será conectado após a definição das fontes '
                    'oficiais e dos direitos de exibição.',
                    style: TextStyle(color: AppTheme.muted, fontSize: 12, height: 1.5),
                  ),
                  const SizedBox(height: 24),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _FeaturedBanner extends StatelessWidget {
  const _FeaturedBanner({required this.onExplore});

  final VoidCallback onExplore;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 220,
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF471016), Color(0xFF1B1014), Color(0xFF111114)],
        ),
        border: Border.all(color: Colors.white.withValues(alpha: 0.07)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          const Text(
            'KAGE FLIX ORIGINAL',
            style: TextStyle(
              color: Color(0xFFFF7A82),
              fontSize: 10,
              letterSpacing: 2,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'O universo dos animes\nem um só lugar.',
            style: TextStyle(fontSize: 24, height: 1.12, fontWeight: FontWeight.w900),
          ),
          const SizedBox(height: 14),
          FilledButton(
            onPressed: onExplore,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.accent,
              foregroundColor: Colors.white,
            ),
            child: const Text('Explorar catálogo'),
          ),
        ],
      ),
    );
  }
}

class _SectionHeading extends StatelessWidget {
  const _SectionHeading({required this.title, this.action});

  final String title;
  final String? action;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Text(
            title,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800),
          ),
        ),
        if (action != null)
          Text(
            action!,
            style: const TextStyle(color: AppTheme.accent, fontSize: 12),
          ),
      ],
    );
  }
}

class _AnimeTile extends StatelessWidget {
  const _AnimeTile({required this.title, required this.subtitle});

  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 132,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(14),
                gradient: const LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFF492027), Color(0xFF19191E)],
                ),
              ),
              child: const Center(
                child: Icon(Icons.play_circle_outline_rounded, size: 38, color: Colors.white70),
              ),
            ),
          ),
          const SizedBox(height: 8),
          Text(title, maxLines: 1, overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13)),
          Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis,
              style: const TextStyle(color: AppTheme.muted, fontSize: 11)),
        ],
      ),
    );
  }
}

class _CategoryChip extends StatelessWidget {
  const _CategoryChip({required this.label});

  final String label;

  @override
  Widget build(BuildContext context) {
    return Chip(
      label: Text(label),
      backgroundColor: AppTheme.surface,
      side: BorderSide(color: Colors.white.withValues(alpha: 0.08)),
      labelStyle: const TextStyle(color: Colors.white70, fontSize: 12),
    );
  }
}
