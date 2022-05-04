/**
 * Fonction de trie en fonction du paramètre et des données
 * @param {SELECT} sortBy 
 * @param {API} datas 
 */
function getSortBy(sortBy, datas) {
    if (sortBy == "date") {
        // Date.parse écrit notre date sous format "yyyy-mm-dd" par exemple en un nombre
        // 1 : -1  ordre décroissant
        const sortByDate = datas.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
        return sortByDate
    }
    if (sortBy == "titre") {
        // -1 : 1 ordre croissant
        const sortByTitle = datas.sort((a, b) => a.title < b.title ? -1 : 1)
        return sortByTitle
    }
    if (sortBy == "popularite") {
        // 1 : -1 ordre décroissant
        const sortByLikes = datas.sort((a, b) => a.likes < b.likes ? 1 : -1)
        return sortByLikes
    }
}