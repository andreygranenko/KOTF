
const rootProducts = document.querySelector('');
class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, category}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src='${img}'/>
                    <button>Start</button>
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;


    }
}

const productPage = new Products();
productPage.render();