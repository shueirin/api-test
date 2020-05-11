// spoonacular
let output = document.getElementById('output');

const findrecipeBtn = document.getElementById('findrecipe');
const inputrecipe = document.getElementById('inputrecipe');

findrecipeBtn.addEventListener('click', getRecipe);

function getRecipe(e) {

    e.preventDefault();

    let query = inputrecipe.value;
    const key = [SPOONACULAR_API_KEY];
    const apiUrl = [SPOONACULAR_API_URL];
    
    output.innerHTML = '';

     fetch(apiUrl)
     .then((res) => res.json())
     .then((data) => {
        
         let dom;

         if (data.results.length !== 0) {

            data.results.forEach(function( recipe ){
                dom = `
                    <div class="card">
                        <h2>${recipe.title}</h2>
                        <ul>
                            <li>Preparation time: ${recipe.readyInMinutes} minutes</li>
                            <li>Servings: ${recipe.servings} persons</li>
                        </ul>
                        <a class="btn btn-primary" href="${recipe.sourceUrl}" target="_blank" title="Go to ${recipe.sourceUrl}">Go to recipe source</a>
                    </div<
                `;
                output.innerHTML += dom;
            }); 

        } else {

            output.innerHTML = "";
            dom = `<h3>Sorry, there's no result for '${query}'.</h3>`;
            output.innerHTML += dom;
        }
     });
}
