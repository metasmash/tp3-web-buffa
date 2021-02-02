// ici je définis des objets avec des propriétés CSS
// ce sont des objets javascript.
// les propriétés CSS dans react sont comme en CSS classique, sauf qu'au lieu d'utiliser du Kebab-Case, on va utiliser du Pascal case.

// example de KebabCase: background-color
// example de PascalCase: backgroundColor

//pour plus d'informations:https://wprock.fr/blog/conventions-nommage-programmation/

export const rootTicTacToe = {
    width: 600,
    height: 600,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
}

export const resetGameButton = {
    position: 'absolute',
    right: 0,
    top: -30,
}

export const titleDescription = {
    position: 'absolute',
    top: -100,
}
