// card_number
// expiration_month
// expiration_year
// ccv
// email

import { Card } from "../../services/models/Card";

export function isValidator(card: Card) {

    if (!luhnValidator(card.card_number)) {
        return "Tarjeta inválida, luhn algoritmo";
    }

    if (!card.expiration_month.toString().match(/^([1-9]{0,1}|1[0-2])$/)) {
        return "Mes de expiración inválido";
    }

    const currentYear = new Date().getFullYear();
    
    if (!card.expiration_year.toString().match(/^([0-9]{4})$/) || parseInt(card.expiration_year.toString()) > currentYear + 5 || parseInt(card.expiration_year.toString()) < currentYear) {
        return "Año de expiración inválido, máximo 5 años";
    }

    if (!card.ccv?.toString().match(/^([0-9]{3,4})$/)) {
        return "CCV inválido";
    }

    if (!card.email.toString().match(/^[a-zA-Z0-9._-]+@(gmail|hotmail|yahoo)\.(com|es)$/)) {
        return "Email inválido";
    }

    return "";
}




export const luhnValidator = (cardNumber: Number) => {
    var nCheck = 0;
    var nDigit = 0;
    var bEven = false;

    let sCardNumber = cardNumber.toString();

    for (var n = sCardNumber.length - 1; n >= 0; n--) {
        var cDigit = sCardNumber.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}