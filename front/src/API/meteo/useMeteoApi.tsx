export function getMeteoByCity(city: string) {
    const API_KEY = '0fdd299e52a1421cb0f230843240512';
    console.log('API_KEY:', API_KEY);

    const meteoCityUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;

    return fetch(meteoCityUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de la météo.');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

