import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class LibraryScreen extends StatelessWidget {
  const LibraryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.bookmark_border_rounded, size: 56, color: AppTheme.accent),
              SizedBox(height: 16),
              Text('Minha lista', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w800)),
              SizedBox(height: 8),
              Text('Salve seus animes favoritos para encontrar tudo em um só lugar.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: AppTheme.muted, height: 1.5)),
            ],
          ),
        ),
      ),
    );
  }
}
