// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollartoYen = function (valueInDollar){
    let euro = valueInDollar / oneEuroIs.USD
    let yen = euro * oneEuroIs.JPY
    return yen
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
    }

const fromYentoPound = function(valueInYen){
    let pound = valueInYen * oneEuroIs.JPY / oneEuroIs.GBP
    return pound
}


module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound};

