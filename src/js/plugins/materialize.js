import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

/* Init selects */
const selects = document.querySelectorAll('select');
M.FormSelect.init(selects);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}

/* Init autocompletes */
const autocompletes = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocompletes, {
    data : {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
});

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

/* Init datepickers */
const datepickers = document.querySelectorAll('.datepicker');
const now = new Date;
M.Datepicker.init(datepickers, {
    format: 'dd.mm.yyyy',
    firstDay: 1,
    minDate: now,
    showClearBtn: true,
    i18n: {
        months: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        monthsShort: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек'
        ],
        weekdays: [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ],
        weekdaysShort: [
            'Вск',
            'Пон',
            'Вт',
            'Ср',
            'Чет',
            'Пят',
            'Суб'
        ],
        weekdaysAbbrev: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    }
});

export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}

/*Init dropdown favorites*/
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
     const instances = M.Dropdown.init(dropdowns, {
         constrainWidth: false,
         coverTrigger : false, 
        hover: true,       
    });
  });