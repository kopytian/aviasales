import currencyUI from './currency';

class FavoritesUI{ 
    constructor(currency) { 
        this.container = document.getElementById('favorites');
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    }

    renderFavorites(favorites) { 
        this.clearContainer();
        if (!favorites.length) { 
            this.showEmptyMessage();
            return;
        }
        let fragment = '';
        const currency = this.getCurrencySymbol();
        favorites.forEach((favorite, index) => {
            const template = FavoritesUI.favoriteTemplate(favorite, currency, index);
            fragment += template;
        });
        this.container.insertAdjacentHTML('afterbegin',fragment);
    }

    clearContainer() { 
        this.container.innerHTML = '';
    }

    showEmptyMessage() { 
        const template = FavoritesUI.emptyMessageTemplate();
        this.container.insertAdjacentHTML('afterbegin' , template);
    }

    static emptyMessageTemplate() { 
        return '<div class="favorites-empty-res-msg">Нет избранных билетов.</div>';       
    }

    static favoriteTemplate(favorite, currencySymbol, index) { 
        return `<div class="favorite-item  d-flex align-items-start">
        <img
          src="${favorite.airline_logo}"
          class="favorite-item-airline-img"
        />
        <div class="favorite-item-info d-flex flex-column">
          <div
            class="favorite-item-destination d-flex align-items-center"
          >
            <div class="d-flex align-items-center mr-auto">
              <span class="favorite-item-city">${favorite.origin_name}</span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="favorite-item-city">${favorite.destination_name}</span>
            </div>
          </div>
          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${favorite.departure_at}</span>
            <span class="ticket-price ml-auto">${currencySymbol}${favorite.price}</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${favorite.transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${favorite.flight_number}</span>
          </div>
          <a
            class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto" data-favorite-index="${index}"
            >Delete</a
          >
        </div>
      </div>
        `;
    }
}

const favoritesUi = new FavoritesUI(currencyUI);

export default favoritesUi;