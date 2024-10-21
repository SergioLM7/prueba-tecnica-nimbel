const urlRandomImage = 'https://picsum.photos/200';

export const getRandomImage = () => {
    return fetch(urlRandomImage)
        .then(response => {
            if (!response.ok) throw new Error('Error fetching data from random image API.')
            //console.log(response.url)
            return response.url;
        })
        .catch((err) => {
            //console.log(err.message)
            return err.message;
        })
};