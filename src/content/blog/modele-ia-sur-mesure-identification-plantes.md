---
title: "Étude de cas : un modèle d'IA sur mesure qui roule sur le téléphone"
description: "Comment j'ai conçu les modèles d'identification de plantes d'AI Plant Doctor : distillation, rejet des photos hors sujet, confiance calibrée, exportation sur appareil et relève par Gemini."
publishDate: "2026-11-04"
lang: fr
tags:
  - ai
  - case-study
  - technology
---

[AI Plant Doctor](https://theaiplantdoctor.com) est une application qui identifie une plante et diagnostique ses problèmes à partir d'une photo. Au départ, chaque photo était envoyée à un grand modèle d'IA généraliste. Ça fonctionnait bien, mais à mesure que l'application grandissait, trois limites sont apparues. Cet article explique comment je les ai réglées avec des modèles sur mesure, et ce qu'une PME peut en retenir.

## Le problème : quand un grand modèle ne suffit plus

- **Le coût par requête.** Chaque photo envoyée à un grand modèle coûte quelque chose. Multiplié par des milliers d'utilisateurs, ce coût croît plus vite que la valeur de chaque prédiction, surtout pour la première identification d'un utilisateur qui n'a encore rien payé.
- **La latence et la connexion.** Un aller-retour vers le nuage prend du temps, et un jardin n'a pas toujours un bon signal.
- **La constance.** Un modèle généraliste est excellent en moyenne, mais il peut répondre différemment à deux photos presque identiques, et il ne sait pas toujours dire « je ne sais pas ».

La réponse n'était pas de remplacer le grand modèle, mais de le **combiner** à un modèle compact, entraîné pour ce problème précis, qui roule directement sur le téléphone.

## L'approche

### Un professeur et un élève

J'ai utilisé une technique appelée **distillation** : un grand modèle performant (le « professeur ») et des données publiques fiables servent à entraîner un modèle beaucoup plus petit (l'« élève »). L'élève apprend à reproduire les bonnes réponses du professeur sur un domaine restreint, avec une fraction de sa taille.

Les corrections apportées par les utilisateurs servent aussi à l'entraînement, mais **seulement après vérification indépendante et approbation explicite**. Une correction non vérifiée peut empoisonner un modèle aussi sûrement qu'une bonne correction l'améliore.

### Savoir dire « ce n'est pas une plante »

Un modèle d'identification de plantes à qui l'on montre une photo de chat va quand même proposer une plante, à moins d'avoir été conçu pour reconnaître ce qui sort de son domaine. Le modèle comprend donc une étape de **rejet hors distribution** : il détecte les photos qui ne sont pas des plantes, ou qui ne ressemblent à rien de ce qu'il connaît, et les écarte plutôt que d'inventer une réponse.

### Une confiance qui veut dire quelque chose

Quand un modèle annonce 90 % de confiance, il devrait avoir raison environ neuf fois sur dix. C'est ce qu'on appelle une **confiance calibrée**, et ce n'est pas automatique : les réseaux de neurones ont tendance à être trop sûrs d'eux. La calibration permet de prendre de bonnes décisions en aval, comme celle de demander l'avis du grand modèle.

L'application peut aussi combiner **plusieurs photos** de la même plante (feuille, tige, vue d'ensemble) pour une prédiction plus fiable.

### Exporter sur le téléphone, sans perdre en qualité

Un modèle qui roule sur un téléphone doit être compact et rapide. Mais la conversion vers un format mobile peut introduire de petites différences numériques qui changent les résultats. Chaque exportation est donc validée pour la **parité numérique** avec le modèle d'origine, et testée sur de vrais appareils pour mesurer la vitesse réelle, pas seulement celle annoncée en laboratoire.

### Le grand modèle comme filet de sécurité

Le modèle local répond d'abord. Quand sa confiance est trop faible, ou que la plante sort de ce qu'il connaît bien, l'application fait appel à **Gemini** en relève. On obtient le meilleur des deux mondes : la rapidité et le faible coût du modèle local pour la majorité des cas, et la puissance d'un grand modèle pour les cas difficiles.

### Promouvoir prudemment

Un nouveau modèle ne remplace jamais l'ancien d'un coup. Il roule d'abord **en parallèle, sans effet visible** (on parle d'audit en mode « ombre »), et ses réponses sont comparées à celles du système en production. Le déploiement se fait ensuite **classe par classe** : une espèce de plante n'est confiée au modèle local que lorsque les données montrent qu'il est fiable pour elle. Chaque déploiement passe d'abord par un essai à blanc, et peut être annulé.

## Et la confidentialité?

Le dépôt d'entraînement est volontairement séparé de l'application. Il contient le code, la configuration et des métriques agrégées, mais **jamais** d'exportations brutes de la base de données, d'identifiants d'utilisateurs, de photos non restreintes ni de secrets. Les données sensibles restent dans un stockage à accès contrôlé. C'est le genre de séparation qui simplifie énormément une évaluation des facteurs relatifs à la vie privée sous la [Loi 25](/fr/blogue/loi-25-ia-generative-pme/).

## Ce qu'une PME peut en retenir

Vous ne bâtissez probablement pas une application d'identification de plantes. Mais les mêmes principes s'appliquent à bien des problèmes d'entreprise : inspection visuelle de pièces, tri de documents, classification de demandes, reconnaissance de produits sur une tablette.

Un modèle sur mesure vaut la peine quand :

1. **un modèle généraliste s'en approche, mais se trompe souvent sur vos cas particuliers;**
2. **le coût par requête augmente plus vite que la valeur de chaque prédiction;**
3. **les données ne peuvent pas quitter l'appareil, l'usine ou le pays.**

Et dans tous les cas, les mêmes garde-fous s'imposent : un jeu d'évaluation bâti à partir de vrais cas, une confiance calibrée, une relève quand le modèle doute, et un déploiement progressif.

Si vous vous demandez si un modèle sur mesure aurait du sens pour votre entreprise, voyez la page [Développement de modèles d'IA](/fr/services/developpement-modeles-ia/) ou [écrivez-moi](mailto:hello@xavierjodoin.com) : on peut en discuter en 30 minutes.
