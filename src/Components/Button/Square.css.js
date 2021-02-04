// ici je définis des objets avec des propriétés CSS
// ce sont des objets javascript.
// les propriétés CSS dans react sont comme en CSS classique, sauf qu'au lieu d'utiliser du Kebab-Case, on va utiliser du Pascal case.

// example de KebabCase: background-color
// example de PascalCase: backgroundColor

//pour plus d'informations:https://wprock.fr/blog/conventions-nommage-programmation/

//export permet de re utiliser cet objet dans d'autres bout de code javascript. On utilise import pour prendre l'objet.

export const buttonStyle = {
    width: 200,
    height: 200,
    backgroundColor: '#abffa2',
    border: 'solid',
}

export const bigTextSize = {
    fontSize: 100,
}
