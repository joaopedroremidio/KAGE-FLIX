import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          const SizedBox(height: 16),
          const Text('Perfil', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900)),
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              color: AppTheme.surface,
              borderRadius: BorderRadius.circular(16),
            ),
            child: const Row(
              children: [
                CircleAvatar(
                  radius: 25,
                  backgroundColor: AppTheme.accent,
                  child: Icon(Icons.person, color: Colors.white),
                ),
                SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Continue como visitante', style: TextStyle(fontWeight: FontWeight.w700)),
                      SizedBox(height: 4),
                      Text('Crie uma conta quando quiser acessar o Premium.',
                          style: TextStyle(color: AppTheme.muted, fontSize: 12)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          ListTile(
            leading: const Icon(Icons.workspace_premium_outlined, color: AppTheme.accent),
            title: const Text('Kage Flix Premium'),
            subtitle: const Text('Assista sem anúncios'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {},
          ),
          const Divider(color: Color(0xFF29292E)),
          const ListTile(
            leading: Icon(Icons.language_rounded),
            title: Text('Idioma'),
            subtitle: Text('Português (Brasil)'),
          ),
          const ListTile(
            leading: Icon(Icons.info_outline_rounded),
            title: Text('Sobre o Kage Flix'),
            subtitle: Text('Versão inicial 0.1.0'),
          ),
        ],
      ),
    );
  }
}
