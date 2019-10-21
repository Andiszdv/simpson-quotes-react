Génération d'un projet React pour les citations des Simpsons
Que va-t-on construire ?

D'abord, un petit aperçu de l'application que tu vas écrire :

Simpsons Quotes App Preview.

Dans ton terminal, assure-toi de te placer au bon endroit dans ton espace de travail habituel, là où tu veux créer ton application (Ex : ~/Quests/React/).

Créer le projet

Facebook fournit un générateur de projet React, nommé Create React App (CRA pour les intimes). Utilise-le pour générer ton application React : toutes les informations dont tu as besoin sont données sur la page Getting Started. Par contre, n'hésite pas à donner à ton application un nom plus explicite que my-app. Pourquoi pas simpsons-quotes-react ?

Après avoir généré l'application, ouvre son répertoire (Open Folder) dans ton éditeur. Visual Studio Code est conseillé, car la communauté a développé nombre d'extensions bien pratiques pour développer des applications React !

Le contenu de ton répertoire doit refléter ce qui est indiqué dans la section "Output" du Getting Started.

Tour du propriétaire

Commence par ouvrir src/App.js. Voici ce qu'il est censé contenir :

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
Si tu fais abstractions des lignes import et export en début et fin de fichier, reconnais-tu cette structure ? Une fonction... Qui renvoie du JSX... Oui, un composant !

L'application générée par CRA contient un composant unique App. C'est le point de départ, et par habitude, ce composant est souvent le composant situé tout en haut de la hiérarchie : si tu te souviens de la quête précédente, et des boîtes de couleur imbriquées façon poupées russes, c'est celle-ci qui contient toutes les autres.

import et export

Maintenant, que sont ces import et export, et surtout, où est passé le ReactDOM.render qui effectuait le rendu de l'application dans les CodePen ? Il est toujours là et a simplement déménagé, dans le fichier src/index.js.

La raison est simple : afin de rendre l'application plus maintenable, il est préférable de répartir son code en plusieurs petits fichiers appelés "modules", plutôt que de tout écrire dans un fichier gigantesque. De ce fait, pour pouvoir afficher le composant App, le ReactDOM.render a besoin d'un mécanisme lui permettant d'aller le chercher, dans le fichier où il se trouve.

Ce mécanisme est celui des imports et exports de modules, dont un autre exemple est donné précisément dans cet extrait d'un livre complet en ligne sur ES6 (lis juste le premier exemple) :

Dans App.js, le composant App est exporté en fin de fichier, afin de le rendre disponible pour d'autres fichiers - en d'autres termes, importable par un autre module.
Dans index.js, on importe App via la ligne import App from './App';. Le './App' est le nom du fichier App, précédé du chemin ./ - sous-entendu, "importer à partir de ce répertoire". Il n'est pas nécessaire d'y adjoindre l'extension .js, les fichiers .js ou .jsx étant automatiquement reconnus.
Depuis ces deux fichiers, on importe React : ce sont les fichiers JavaScript composant React qui sont importés.
Images et CSS

Une dernière chose : il peut te paraître étrange d'importer, comme au début de App.js, des CSS ou des images. CRA génère un environnement de développement "clés en main", qui fait beaucoup de choses :

La page http://localhost:3000, qui s'ouvre quand tu démarres l'application avec npm start, affiche un fichier index.html - que tu peux retrouver sous public/index.html, et où se trouve la div #root où ReactDOM.render effectue le rendu de l'application.
Tous les fichiers JavaScript composant l'application sont rassemblés en un seul, chargé par ce HTML, sans que tu aies besoin de t'en occuper !
De même, les CSS sont rassemblés en un fichier et chargés.
Quand des images sont importées, ce sont en fait leurs chemins qui sont insérés dans les balises src.
Mais assez parlé, tu vas pouvoir te défouler un peu (enfin, façon geek) et tailler le composant App à la hache !

Faire le ménage

Tu pourras réitéter ces opérations pour l'application que tu auras à créer pour le challenge.

Dans le fichier App.js, supprime :

les imports de logo.svg et App.css,
tout le contenu JSX à l'intérieur de la <div>, mais pas la <div> elle-même !
Sauvegarde, et retourne à ton navigateur : l'application se met à jour automatiquement, à chaque sauvegarde. Magique ! Tu te retrouves avec une page blanche, mais on va y remédier dès la prochaine étape.

Va dans ton terminal, assure-toi d'être bien placé dans le répertoire de ton application, et lance git status. Oh wait... Tu n'as ni créé de dépôt, ni clôné un dépôt existant, mais pourtant les fichiers modifiés s'affichent. C'est normal : CRA a initialisé un dépôt Git avec la nouvelle application, et a crée un premier commit avec tous les fichiers du répertoire. Tu peux git add les fichiers modifiés et committer !

Une dernière chose avant de finir : installe l'extension React DevTools pour Chrome ou Firefox, elle va te servir très rapidement !

 ESSENTIEL - Create React App
Utilise cette documentation pour créer une application nommée simpsons-quotes et démarrer l'application.

 ESSENTIEL - React DevTools pour Chrome
Outil d'inspection des composants d'une application React

 ESSENTIEL - React DevTools pour Firefox
