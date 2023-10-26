# Todolist en React

Créons une todolist avec React :smiley:

![todolist](resultat.png)

## 1. Mise en place et dynamisation

Un dossier `/inte` contient un exemple de structure html et de css correspondant au résultat ci-dessus. On va reproduire la même structure mais en Javascript à l'aide de React, pour pouvoir ensuite gérer les interactions utilisateur

- Découper l'interface en décidant quels seront les futurs composants React
- Gérer la structure et les styles de chaque composant en s'inspirant de ce qui est fourni (HTML et CSS)

<details><summary>Indices</summary>

En fait, on veut copier/coller le contenu du body et le contenu du CSS, en le répartissant dans nos composants.

Pense à faire les transformations pour passer le HTML en JSX (`className` au lieu de `class` :wink:). Tu peux aussi transformer le CSS en SCSS (imbrication, éventuellement variables).
   
 :mag: Comme _for_ est un mot réservé en Javascript, si tu as besoin de l'attribut HTML _for_ sur un `<label>`, il faudra que tu remplaces par `htmlFor` (même histoire que pour _class_ et _className_).

</details>


- Dynamiser l'affichage avec les données provenant du fichier `tasks.js`

## 2. Gérer l'ajout d'une tâche

Si on veut que quelque chose "bouge" sur l'interface, par exemple qu'un élément (une nouvelle tâche) apparaisse, la seule possibilité c'est de passer par un state. Pour ajouter la nouvelle tâche on devra donc avoir la liste des tâches à afficher stockée dans un state, et au moment d'ajouter la nouvelle tâche on se contentera de l'ajouter dans les tâches du state, React reconstruira automatiquement l'affichage.

### 2.1. Mise en place d'un state pour stocker les tâches à afficher

Etapes de mise en place :

- Transformer App en _class_ (on devra peut-être désactiver une règle ESLint, parce qu'il va nous dire que c'est "dommage" de s'embêter à créer une classe pour un composant qui n'a pas de state... Patience ESLint, le state va arriver :wink: ). Puis créer un state pour App (dans le _constructor_) pour stocker les tâches à afficher. Initialement, les tâches à afficher c'est le tableau contenu dans `tasks.js` dans le `state`

<details><summary>Indice</summary>

Regarde ce qu'on a fait sur le projet converter et le fichier recap.md associé.

Note : à ce stade l'affichage ne se mettra pas à jour si on simule un changement de state, parce qu'on n'utilise pas encore les données du state pour notre affichage. Le React dev tool est quand même utile à ce stade pour vérifier si on a ce qu'il faut (un tableau de tâches) dans le state.

</details>

- Se servir de ce state pour afficher les tâches


<details><summary>Indice</summary>

En fait on voudrait juste se servir du tableau dans le state plutôt que directement du fichier de données pour fournir les tâches au composant qui doit les afficher :thinking:.

On va pouvoir vérifier le résultat avec le React dev tool, en simulant un changement de state.

</details>

- Calculer le nombre de tâches **non-effectuées** à partir des données du `state` ... et s'en servir sur l'affichage

<details><summary>Indice</summary>

Une façon possible ici est de sélectionner dans le tableau des tâches toutes celles qui ne sont pas terminées, en les récupérant dans un nouveau tableau (_on a vu une méthode sur les tableaux pour faire ça, non ?_), et ensuite de mesurer la _longueur_ (le nombre d'éléments) de ce tableau.

</details>

### 2.2. Ajout d'une nouvelle tâche

- Déja, pour pouvoir ajouter une nouvelle tâche, il va falloir qu'on puisse récupérer le nom de la future tâche (le contenu de l'input). Pour ça on va mettre en place un **champ contrôlé** pour l'input. Ainsi, à tout moment on pourra lire directement dans le state le contenu du champ.

<details><summary>Indice</summary>

Etapes pour la mise en place d'un champ contrôlé :
   - avoir **dans le state** (généralement le state de App) **un emplacement** pour
la valeur de l'input
   - **contrôle en lecture** : on transmet la valeur du state dans l'attribut value
de l'input (ajout d'une prop pour transmettre la valeur).
A ce stade, c'est normal si on ne peut pas saisir des caractères dans
l'input. Pour vérifier : modifier la valeur dans le state avec le React
Dev Tool => le contenu de l'input doit se mettre à jour
On peut avoir dans la console un warning "Warning: You provided a `value` prop
to a form field without an `onChange` handler. This will render a
read-only field." => on n'y fait pas attention, il devrait disparaitre à
l'étape suivante
   - **contrôle en écriture** : on écoute l'événement change de l'input, et on y
réagit en modifiant la valeur dans le state, ce qui provoquera ensuite
une mise à jour de l'affichage donc de la valeur de l'input.
On met en place une méthode dans App qui s'occupe de l'appel à setState
(généralement cette méthode a un paramètre pour la nouvelle valeur), on bind, on
transmet un raccourci vers cette méthode en prop du composant qui contient l'input.
Dans le composant qui contient l'input, on appelle cette prop sur l'événement change
de l'input, en transmettant la nouvelle valeur lue dans l'événement.
Pour vérifier : quand on saisit un caractère, il apparait dans l'input (et dans le
  react dev tool on voit le state changer de valeur)

</details>
  

Ensuite on va ajouter une nouvelle tâche :
- On va écouter la soumission du formulaire (`onSubmit` sur le `<form>`, attention l'événement _submit_ existe seulement sur la balise _form_, un onSubmit qui serait placé sur un input ne se déclenchera jamais :wink:), on commence par un console.log comme traitement de cet événement


<details><summary>Indice</summary>

Peut-être que le console.log ne s'affiche pas alors que le code a l'air bon ? Le traitement par défaut d'un événement _submit_ c'est de recharger la page (et donc ça vide la console). Il faudrait qu'on empêche ce traitement par défaut avant de faire le _console.log_ .

</details>

- On voudrait remplacer le console.log par un appel à setState sur la liste de tâches du state pour avoir la nouvelle tâche en plus des autres... Mais le state est dans le composant App... Comment on fait déjà dans ce cas ?

<details><summary>Indice</summary>

On va préparer une méthode (ou une fonction) dans App pour faire appel à _setState_, on transmettra cette méthode en prop au composant qui contient le formulaire, et on déclenchera la fonction contenue dans cette prop au moment du déclenchement du submit.

C'est ce qu'on a fait sur le convertisseur quand on cliquait sur une devise.

</details>

- Si les étapes sont réussies, ça y est on peut ajouter une tâche ! :tada:

## BONUS

- Gérer le cas : cocher une tâche
- Ordonner les tâches
  - En haut, les tâches non effectuées
  - Ensuite, les tâches effectuées
