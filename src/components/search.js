import { Component, createElement } from "../lib/react/index.js"
import styled from "../lib/styled-components.js"
import form from "./form.js"
import input from "./input.js"
import button from "./button.js"


class Search extends Component {
	render() {
		return form({
      children: [
        new input({
          placeholder: "Escribe tu película favorita",
					name:'title',
					type:'text'
        }),
				new button(null, 'Buscar')
      ],
    });
	}
}


export default Search

// <!-- <section class="wrapper">
//   <div class="actions">
//     
//     <button id="recommended">Películas recomendadas</button>
//     <select name="" id="filter">
//       <option value="all">Todas</option>
//       <option value="most-valued">Más valoradas</option>
//       <option value="least-valued">Menos valoradas</option>
//     </select>
//   </div>
// </section> -->
