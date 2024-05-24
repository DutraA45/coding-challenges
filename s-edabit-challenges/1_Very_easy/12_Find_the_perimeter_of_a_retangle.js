// Create a function that takes length and width and finds the perimeter of a rectangle.

//// Notes
// Don't forget to return the result.
// If you're stuck, find help in the Resources tab.
// If you're really stuck, find solutions in the Solutions tab.

function findPerimeter(length, width) {
	return 2 * (length + width)
}

// Utilizando o deslocamento de bits para esquerda
// x << y significa x * 2^y

// const findPerimeter = (h,w) => h + w << 1
