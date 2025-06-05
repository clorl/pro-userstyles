# UserStyles Pro

[English](README.md) | Français

Une collection de styles utilisateur (userstyles) pour améliorer l'expérience utilisateur des sites web que j'utilise fréquemment au travail.

# Installation

1. Installez l'extension de navigateur Stylus :
    * [Firefox](https://addons.mozilla.org/firefox/downloads/file/4451438/styl_us-2.3.14.xpi)
    * [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?pli=1)
    * [Opera](https://addons.opera.com/en/extensions/privacy_policy/27c0f4146c879f67a91b70f93f4eee4a01846fdd/)
    * [Safari](https://tinyurl.com/ewtwzkfp)

2. Installez les styles
[![Cliquez pour installer](https://img.shields.io/badge/Installer%20-%20Avec%20Stylus%20-%20%231868db?style=for-the-badge)](https://raw.githubusercontent.com/clorl/pro-userstyles/main/dist/main.user.css)

# Configuration

Lorsque vous êtes sur un site web, si vous cliquez sur l'icône Stylus dans vos extensions, les paramètres de style s'afficheront.
Vous pouvez activer ou désactiver des fonctionnalités spécifiques. Chaque site dispose d'un paramètre pour désactiver le style pour ce site en particulier.

# Sites Web

WIP

# Développement

Ces userstyles utilisent le préprocesseur CSS Stylus. Stylus est automatiquement compilé par l'extension user CSS, il n'y a donc aucune étape de compilation ici.
Cela permet d'utiliser les variables de userstyles définies dans les métadonnées pour inclure ou non des styles de manière conditionnelle, ce qui serait impossible en CSS pur.
J'ai créé un script de build simple pour rendre le développement plus gérable :

1. Il fusionne tous les fichiers .styl du répertoire `src` en un seul grand fichier (permet des userstyles multi-fichiers, ce qui n'est pas pris en charge nativement).
1. Il génère les métadonnées à partir d'un objet JS.

Partout dans le code, vous pouvez définir des variables de userstyle en utilisant la syntaxe suivante :
```js
// @var <type> <nom>    <libellé>        <valeur par défaut>
// Exemple
// @var text    myBorder "Style de bordure" 3px dotted blue
```

Le script de build collectera toutes ces variables et les ajoutera au bloc de métadonnées au début du fichier userstyle.
La syntaxe est exactement la même que celle définie par la spécification userstyle, c'est juste une aide pratique pour avoir un site par fichier, ou des composants séparés, ou autre.

Important : L'ordre d'inclusion des fichiers est alphabétique. Vous pouvez donc les réorganiser en les préfixant par un nombre comme 10_monFichier.styl. Les fichiers non numérotés sont triés à la fin.
Je ne numérote pas les fichiers qui incluent des styles pour un site spécifique, et je numérote ceux qui doivent être chargés avant (variables, fonctions, etc.).

## Prérequis

- Node JS

## Setup
```bash
npm install
```
## Compiler
```bash
npm run build
```
