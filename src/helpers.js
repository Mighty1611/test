export const calcTime = time => {
    const hours = Math.floor(time / 60);

    const mins = time % 60;
    return `${hours}h ${mins}m`;
};


export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    });

    return formatter.format(money);
};

// we can only write into session storage and local storage
// as a string, so need to convert it back to JSON
export const isPersistedState = stateName => {
    const sessionState = sessionStorage.getItem(stateName)
    return sessionState && JSON.parse(sessionState);
};