function bitwiseAND(n1, n2) {
	let n1_Binary = binaryConverter(n1)
    let n2_Binary = binaryConverter(n2)

}

function bitwiseOR(n1, n2) {
	let n1_Binary = binaryConverter(n1)
    let n2_Binary = binaryConverter(n2)

}

function bitwiseXOR(n1, n2) {
	let n1_Binary = binaryConverter(n1)
    let n2_Binary = binaryConverter(n2)
    
}

function binaryConverter(number) {    

    while (number !== 0 || number !== 1) {
        var number_Binary

        if (number_Binary == null) {
            let restOfDivision = number % 2
            number_Binary = restOfDivision
            binaryConverter(number/2)
        }  else {
            let restOfDivision = number % 2
            number_Binary += restOfDivision.toString()
            binaryConverter(number/2)
        }        
    }

    return number_Binary
}