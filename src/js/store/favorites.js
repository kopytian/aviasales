import { formatDate } from '../helpers/date';

class Favorites {

    constructor() {
        this.favorites = this.getFavorites() || [];
    }

    addToFavorites(ticket) {
        if (!this.favorites.length) { 
            this.favorites.push(ticket);
        }
        this.favorites = this.favorites.filter(favorite => {
            return JSON.stringify(favorite) !== JSON.stringify(ticket); /*проверка, чтобы не было повторяющихся билетов в избранном*/ 
          });
        this.favorites.push(ticket);
        localStorage.setItem('aviasales_tickets', JSON.stringify(this.favorites));
    }

    removeFromFavorites(ticket) {
        this.favorites = this.favorites.filter(favorite => {
            return JSON.stringify(favorite) !== JSON.stringify(ticket);
        });
        localStorage.setItem('aviasales_tickets', JSON.stringify(this.favorites));
    }

    getFavorites() { 
        return JSON.parse(localStorage.getItem('aviasales_tickets'));
    }
}

const favorites = new Favorites();

export default favorites;