document.addEventListener('DOMContentLoaded', () => {


    const searchHistory = [];
    const functionApi = async (city) => {
        const apiToken = 'e2df8a06f353aab10c3482383948698e';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiToken}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            // Check if data is defined before accessing its properties
            if (data) {
                document.querySelector('.searchedName').innerHTML = data.name;
                document.querySelector('#city').innerHTML = data.name;
                document.querySelector('.temp').innerHTML = `Temperature: ${data.main.temp} °C`;
                document.querySelector('.wind').innerHTML = `Wind: ${data.wind.deg}°`;
                document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}`;
                document.querySelector('.Season').innerHTML = ` ${data.weather[0].description}`







            }
        } else {
            console.error('API request failed');
        }
    };


    // Initial call with a default city (e.g., 'India')
    functionApi('Nepal');

    const searchbtn = document.querySelector('.searchbtn');
    const input = document.querySelector('.searchBar');
    const addElement = document.querySelector('.searched')
    const history = document.querySelector('.searchedName')


    searchbtn.addEventListener('click', (event) => {
        event.preventDefault()
        functionApi(input.value)

    })

})







