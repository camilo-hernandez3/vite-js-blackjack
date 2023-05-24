


/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0  || !deck ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}