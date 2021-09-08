import '../css/style.css';
import locations from './store/locations';
import favorites from './store/favorites';
import './plugins';
import formUI from './views/form';
import currencyUI from './views/currency';
import { initializeJqueryWrapper } from 'materialize-css';
import favoritesUI from './views/favorites';
import ticketsUi from './views/tickets';
import favoritesUi from './views/favorites';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    const form = formUI.form;

    /*Events*/
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    ticketsUi.container.addEventListener('click', (e) => {
        if (e.target.classList.contains("add-favorite") ) {
            e.preventDefault();
            onClickAddToFavorites(e.target.dataset.ticketIndex);
        }    
    });

    favoritesUi.container.addEventListener('click', (e) => {
        if (e.target.classList.contains("delete-favorite") ) {
            e.preventDefault();
            onClickRemoveFromFavorites(e.target.dataset.favoriteIndex);
        }    
    });

    //console.log('favorites: ', favorites.getFavorites());

    /*Handlers*/
    async function initApp(){ 
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
        favoritesUi.renderFavorites(favorites.getFavorites());
    }

    async function onFormSubmit() {
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue ? (formUI.departDateValue.slice(6, 10) + '-' + formUI.departDateValue.slice(3, 5)) : '';
        const return_date = formUI.returnDateValue ? (formUI.returnDateValue.slice(6, 10) + '-' + formUI.returnDateValue.slice(3, 5)) : '';
        const currency = currencyUI.currencyValue;
        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        });
        ticketsUi.renderTickets(locations.lastSearch);
    }

    function onClickAddToFavorites(index) { 
        favorites.addToFavorites(locations.lastSearch[index]);
        favoritesUi.renderFavorites(favorites.getFavorites());
    }

    function onClickRemoveFromFavorites(index) { 
        favorites.removeFromFavorites(JSON.parse(localStorage.getItem('aviasales_tickets'))[index]);
        favoritesUi.renderFavorites(favorites.getFavorites());
    }
    
});