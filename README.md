React 02 - Création d'un composant React
La quête précédente t'a introduit la notion de composant, et son utilité : obtenir une application bien structurée, autant autant pour le développeur - en termes de modularité du code - que pour l'utilisateur final.

Tu as appris les rudiments du langage JSX, qui va te permettre d'écrire les composants de tes applications React.

Dans cette quête, tu vas écrire tes premiers composants React, et commencer à entrevoir comment les composants s'imbriquent et communiquent !

Au passage, tu apprendras à utiliser Create React App, un outil créé par Facebook, afin de faciliter la création d'un projet React en local.

La quête va te guider dans la création d'une première application, puis le challenge t'invitera à reproduire cette démarche par toi-même.

Objectifs

•
Apprendre à initialiser un projet avec Create React App

•
Savoir écrire un composant React

•
Savoir appeler un composant depuis un autre composant

•
Comprendre le passage de valeurs via les props

Challenge ️🕹️
Pour valider cette quête tu devras résoudre le challenge: Créer et afficher un composant Contact. Le principe du challenge est détaillé dans l’onglet Challenge.

Réutilisabilité du code JSX
Avant d'entrer dans le vif du sujet, un petit rappel de la quête précédente. Voici comment on crée et affiche un élément avec JSX (en supposant qu'une div avec l'id root est présente dans le HTML) :

const name = 'John Doe';
const element = <p>Hello, {name}</p>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

Tu vas très vite être limité, si tu n'utilises que des éléments comme celui-ci dans ton application. Pourquoi ? Parce qu'une fois que l'élément est créé, on peut difficilement le réutiliser.

Pour prendre un exemple : admettons qu'on veuille afficher deux paragraphes tels que celui ci-dessus, chacun saluant une personne. On pourrait le faire ainsi :

const name1 = 'John Doe';
const name2 = 'Jane Doe';
const element = (
  <div>
    <p>Hello, {name1}</p>
    <p>Hello, {name2}</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

C'est encore raisonnable, dans ce cas simple, ou notre paragraphe tient sur une ligne, et où on ne le répète que deux fois.

Maintenant, imagine que tu veuilles afficher une liste de plusieurs dizaines de contacts, et que chaque contact est représenté par un bloc JSX de plusieurs lignes... Tu vas vite arriver à du code très "verbeux", comme avec ce bon vieux HTML !

Le composant React va permettre de résoudre cette problématique cruciale de la réutilisabilité du code.

Un premier composant
React propose plusieurs façons d'écrire des composants. Pour l'instant, on va s'en tenir à la plus simple : un composant, c'est une fonction qui renvoie un élément JSX. Voici une version "composant" du Hello World en React :

function HelloWorld() {
  return (
    <h1>Hello World!</h1>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);

Tu peux le voir en action sur ce Pen.

Plusieurs choses sont à remarquer.

Premièrement, le code JSX de l'exemple original est désormais renvoyé par la fonction HelloWorld.

Deuxièmement, tu peux constater que le argument passé à ReactDOM.render() introduit une nouvelle syntaxe : <HelloWorld />. Elle permet d'appeler un composant qu'on a déclaré au préalable.

Après les accolades {} qui permettent d'insérer des variables dans les balises, c'est un second aspect qui distingue le JSX du HTML : l'utilisation de balises qu'on a nous-mêmes définies. C'est un héritage du XML (JSX signifiant JavaScript XML), langage qui permet de définir ses propres balises.

Un point à souligner : les noms des composants React doivent commencer par une majuscule, et la convention habituelle est de démarquer chaque mot par une majuscule. Cette convention nommée PascalCase est une variante de la camelCase utilisée habituellement pour les fonctions et variables en JavaScript.

Au-delà de la simple convention, qui permet de distinguer un composant d'une fonction habituelle, oublier la majuscule en début de nom t'expose à des erreurs telles que celle-ci - obtenue en tentant de nommer le composant helloWorld :




À ces détails près, <HelloWorld /> n'est pas si différent de <input /> en HTML ! La possibilité de définir ses propres composants, et de les afficher via une syntaxe proche du HTML, est l'un des avantages offerts par React.

Maintenant, prépare-toi, tu vas attaquer les choses sérieuses, et initialiser une application React sur ton ordinateur !

Génération d'un projet React pour les citations des Simpsons
Que va-t-on construire ?

D'abord, un petit aperçu de l'application que tu vas écrire :




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

•
Dans App.js, le composant App est exporté en fin de fichier, afin de le rendre disponible pour d'autres fichiers - en d'autres termes, importable par un autre module.

•
Dans index.js, on importe App via la ligne import App from './App';. Le './App' est le nom du fichier App, précédé du chemin ./ - sous-entendu, "importer à partir de ce répertoire". Il n'est pas nécessaire d'y adjoindre l'extension .js, les fichiers .js ou .jsx étant automatiquement reconnus.

•
Depuis ces deux fichiers, on importe React : ce sont les fichiers JavaScript composant React qui sont importés.

Images et CSS

Une dernière chose : il peut te paraître étrange d'importer, comme au début de App.js, des CSS ou des images. CRA génère un environnement de développement "clés en main", qui fait beaucoup de choses :

•
La page http://localhost:3000, qui s'ouvre quand tu démarres l'application avec npm start, affiche un fichier index.html - que tu peux retrouver sous public/index.html, et où se trouve la div #root où ReactDOM.render effectue le rendu de l'application.

•
Tous les fichiers JavaScript composant l'application sont rassemblés en un seul, chargé par ce HTML, sans que tu aies besoin de t'en occuper !

•
De même, les CSS sont rassemblés en un fichier et chargés.

•
Quand des images sont importées, ce sont en fait leurs chemins qui sont insérés dans les balises src.

Mais assez parlé, tu vas pouvoir te défouler un peu (enfin, façon geek) et tailler le composant App à la hache !

Faire le ménage

Tu pourras réitéter ces opérations pour l'application que tu auras à créer pour le challenge.

Dans le fichier App.js, supprime :

•
les imports de logo.svg et App.css,

•
tout le contenu JSX à l'intérieur de la <div>, mais pas la <div> elle-même !

Sauvegarde, et retourne à ton navigateur : l'application se met à jour automatiquement, à chaque sauvegarde. Magique ! Tu te retrouves avec une page blanche, mais on va y remédier dès la prochaine étape.

Va dans ton terminal, assure-toi d'être bien placé dans le répertoire de ton application, et lance git status. Oh wait... Tu n'as ni créé de dépôt, ni clôné un dépôt existant, mais pourtant les fichiers modifiés s'affichent. C'est normal : CRA a initialisé un dépôt Git avec la nouvelle application, et a crée un premier commit avec tous les fichiers du répertoire. Tu peux git add les fichiers modifiés et committer !

Une dernière chose avant de finir : installe l'extension React DevTools pour Chrome ou Firefox, elle va te servir très rapidement !

ESSENTIEL - React DevTools pour Firefox

https://addons.mozilla.org/fr/firefox/addon/react-devtools/
ESSENTIEL - React DevTools pour Chrome
Outil d'inspection des composants d'une application React


https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
ESSENTIEL - Create React App
Utilise cette documentation pour créer une application nommée `simpsons-quotes` et démarrer l'application.


https://create-react-app.dev/
Créer un composant "barre de navigation"
Pour ton premier composant, tu vas créer une barre de navigation. Elle va être plutôt décorative, car cette première application n'a qu'une seule page.

Créer le composant

Crée un dossier components sous le dossier src, qui est le seul endroit où CRA permet de stocker son code.

Sous ce dossier, crée le fichier Navbar.js où tu peux :

1.
importer React, de la même façon que dans App.js,

2.
écrire une fonction Navbar, qui renvoie un bloc de JSX composé de la paire <nav></nav>,

3.
insérer, dans ces balises : un lien (par exemple vers la page Wikipedia des Simpsons) ou un titre,

4.
exporter ton composant, de la même façon que dans App.js.

J'attire ton attention sur l'importance de la majuscule au début du nom du composant, et sur la convention de nommage des fichiers : le fichier a le même nom que le composant, l'extension .js en plus.

Tu vas constater que, comme pour tes premiers pas en JS, c'est une chose de voir un exemple qui fonctionne, et c'en est une autre de partir d'une page blanche. Mais cela vient vite en s'entraînant, c'est pourquoi je t'invite à le faire dès maintenant ! Dès que tu le peux, au lieu de faire un copier-coller, essaie de lire la syntaxe (par exemple, comment faire un import ou export), et de la reproduire "de tête" dans le fichier d'à côté.

Une solution t'est proposée en fin d'étape, si tu "sèches".

Utiliser le composant

Maintenant, comment utiliser le composant ?

Eh bien premièrement, il faut l'importer, depuis le fichier App.js ! Inspire-toi pour cela de ce qui est fait dans index.js pour importer App, à ceci près qu'il faut préciser que le fichier se trouve sous components (indice : import MyComponent from './where/is/MyComponent';).

Ensuite, il faut l'afficher. Le composant Navbar doit être inséré dans la div desespérément vide du composant App. Indice : c'est la même syntaxe que pour afficher le composant App dans le fichier index.js, ou dans l'exemple "Hello World" de la première étape.

Appliquer des styles

Maintenant que ton composant s'affiche, tu vas pouvoir l'embellir un peu. Le but n'étant pas de passer du temps à faire du design, tu peux récupérer ce fichier CSS prêt à l'emploi : Navbar.css. Sauvegarde-le au même endroit que ton fichier Navbar.js.

Puis importe-le depuis Navbar.js, toujours en t'inspirant de ce qui se fait dans index.js. Il va maintenant te falloir appliquer la classe fournie dans le CSS à ton composant. La FAQ sur les styles et CSS devrait t'aiguiller. Quant à savoir sur quel élément appliquer la classe, inspire-toi du peu qui reste du composant App !

N'oublie pas de git add et commit quand tu as terminé, toujours dans l'idée de "j'ai fini quelque chose, ça marche, je sauvegarde (au cas où je casse tout après !)".

En cas de coup dur

Une proposition de solution pour ce premier composant, dans ce CodeSandbox (sorte de CodePen gonflé aux hormones, qui permet de gérer plusieurs fichiers !).

Si tu es obligé(e) de recourir à la solution, n'hésite pas à la comparer à ta tentative, pour bien voir ce qui lui manquait. Tu peux le faire facilement avec un outil du type "online diff" comme Mergely.

Créer un composant pour afficher une citation
Maintenant, nous allons travailler à l'affichage d'une citation de la célèbre série des Simpsons.

Pour cela, tu vas créer un composant QuoteCard, qui va permettre d'afficher un bloc composé d'une image, du nom d'un personnage, et d'un texte. Les composants de type "Card" sont un classique du web, toutes les bibliothèques CSS en proposent.

Voici le code HTML que nous voulons ajouter à notre application, c'est-à-dire obtenir à partir du JSX :

  <figure class="QuoteCard">
    <img
      src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      alt="Nelson Muntz">
    <figcaption>
      <blockquote>
        Shoplifting is a victimless crime, like punching someone in the dark.
      </blockquote>
      <cite>Nelson Muntz</cite>
    </figcaption>
  </figure>

HTML
Pour accomplir cela, crée le fichier QuoteCard.js dans le dossier src/components de ton projet.

Applique la même démarche que pour le composant Navbar : import de React, écriture du squelette de la fonction QuoteCard, renvoi du JSX depuis cette fonction, export du composant... et enfin appel de QuoteCard depuis App.

Pour te prévenir, copier-coller le bloc de HTML ci-dessus tel quel dans ton composant comporte deux pièges :

•
l'un que tu as déjà vu, mais que tu es susceptible d'oublier facilement :D. Tu risques simplement une protestation de React dans la console - que je te conseille de garder ouverte tout le temps, pour ne pas laisser échapper les avertissements que React te remonte par ce biais.

•
l'autre est plutôt du genre "fatal", enfin pour React - pas pour toi j'espère ! Il s'agit d'une subtilité en JSX, concernant les balises n'ayant pas de contenu texte, et pour laquelle tu peux trouver une explication ici.

Si tu as passé ces épreuves initiatiques, tu peux embellir ta QuoteCard en allant chercher ce CSS, et en le plaçant où il faut, sans rien oublier...

Sinon, tu peux recourir à ce CodeSandbox pour une solution.

Et bien sûr, les bonnes habitudes : add, commit.

Pour conclure cette étape

Si tu reprends la capture d'écran du résultat final, montrée à l'étape 3, tu peux voir qu'on affiche plusieurs composants QuoteCard, chacun avec un contenu différent.

Appelle une deuxième fois ton composant QuoteCard dans App.js, en dupliquant la ligne <QuoteCard /> (tips VSCode : Alt + Shift + flèche du bas).

Dans ton application, c'est le même contenu qui s'affiche deux fois, car le contenu de QuoteCard est figé. Qu'à cela ne tienne ! Tu vas apprendre à l'étape suivante comment rendre ton composant QuoteCard paramétrable, grâce aux props.

Rendre l'affichage des valeurs dynamique grâce aux props
Retour à la doc de React

Dans la page "Components and Props", lis juste les premières lignes de Function and Class Components, en t'arrêtant au point où les classes ES6 sont évoquées - on verra ce point dans une quête ultérieure !

Passe alors directement à Rendering a Component, lis toute cette section, en n'oubliant pas d'essayer l'exemple sur CodePen.

L'exemple est décortiqué en 4 points, mais un complément d'explications ne saurait nuire. La nouveauté, par rapport aux exemples précédents, réside dans ce qu'on ajoute derrière le nom du composant lors de son appel: name="Sara".

<Welcome name="Sara" />

Cela ressemble étrangement aux attributs des balises HTML, comme les src et alt qu'on indique sur une balise <img>. La doc mentionne d'ailleurs le terme d'attributs.

Les props, abréviation de properties, sont l'équivalent pour les composants React des attributs des balises HTML.

L'objet props

Dans cet exemple, on ne passe qu'une propriété, sous forme de paire clé-valeur, au composant Welcome. Mais comme pour les attributs HTML, on peut en passer plusieurs. Les props sont rassemblées au sein d'un même objet pour être passées au composant. Pour rendre cela un peu plus visuel :




La doc indique comment ces props sont récupérées par le composant : via le paramètre props, dans les parenthèses du composant-fonction. Petite note concernant le vocabulaire : on le désigne indifféremment comme "les props" au pluriel ou comme "l'objet props" au singulier (sous-entendu contenant les paires clé-valeur).

Ainsi que le montre le visuel, il y a une correspondance exacte entre les paires clé-valeur indiquées en appelant le composant, et les paires clé-valeur présentes dans l'objet props.

On ne passait pas de props dans nos premiers exemples, mais l'objet props est toujours passé. Si aucune paire clé-valeur n'est indiquée à l'appel du composant, c'est un objet vide : {}. On peut alors très bien l'ignorer dans le composant, ce qu'on a fait jusqu'ici.

Grâce aux props, les composants sont paramétrables, et produisent un affichage différent, en fonction des valeurs passées à droite du signe = lors de l'appel. Poursuis la lecture de la doc, uniquement sur la section Composing Components, pour voir comment cela fonctionne.

Types de props

La différence majeure entre les props et les attributs en HTML, c'est que les valeurs des props ne sont pas forcément des chaînes de caractères : elles  peuvent être des chaînes, des nombres, des booléens, etc. - tous les types supportés par JavaScript.

Voici un exemple montrant à la fois le passage de plusieurs props, et la possibilité d'utiliser différents types.

Pour les props dont les valeurs sont des chaînes uniquement, on peut utiliser les guillemets pour entourer la valeur. Pour les autres, on utilise les accolades.

En ce qui concerne le booléen, remarque qu'on ne met pas de signe égal ni de valeur : c'est brièvement explicité dans la section Boolean props dont tu peux juste lire les deux premiers exemples.

Rendre QuoteCard paramétrable grâce aux props

Essaie maintenant d'appliquer ce qu'on vient de voir au composant QuoteCard. Quelques directives et pistes :

•
Comme clés pour tes props, utilise quote, character et image.

•
La prop character est censée servir deux fois dans QuoteCard.

•
Toujours dans QuoteCard, souviens-toi que les accolades en JSX sont utilisables pour donner des valeurs aux attributs des balises HTML.

Modifie le composant App de façon à passer des props à tes deux composants QuoteCard. Tu peux récupérer des valeurs à leur passer ici (ouvrir sous Firefox pour un formatage lisible, recharger la page pour obtenir une nouvelle citation).

Pour t'aider, tu peux utiliser les React DevTools, accessibles via les outils développeurs. Depuis la toute récente version 4, ils ajoutent deux onglets : "Components" et "Profiler". C'est le premier que tu dois utiliser. Dans cet onglet, deux "panneaux" apparaissent, empilés ou côte-à-côte. Le premier montre la hiérarchie des composants, du haut (App) vers le bas. En cliquant sur un des composants, tu obtiens ses détails dans le deuxième panneau, et notamment ses props, ainsi que l'identité de son composant parent (rendered by = rendu, affiché par). Il faut prendre l'habitude de l'utiliser (= le laisser ouvert tout le temps, en alternant avec la console).

Heeeeeelp!

Si tu es bloqué, voici une solution. Observe ce qui se passe quand on "oublie" certaines props, comme dans le dernier appel de QuoteCard.

ESSENTIEL - Components and Props
Certainement l'une des pages les plus importantes de la documentation officielle !


https://reactjs.org/docs/components-and-props.html
