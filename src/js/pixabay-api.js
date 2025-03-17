export const fetchData = (query) => {
    return fetch(`https://pixabay.com/api/?key=49388165-2207654a79f52bc7a4c348d65&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then(response => {
        if (!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    });
};