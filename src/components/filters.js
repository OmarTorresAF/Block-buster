import { Component, createElement } from "../lib/react/index.js";
import Select from "./select.js";

class Filters extends Component {
  render() {
    return Select({
      children: [
        createElement("option", { value: "all" }, "Todas"),
        createElement("option", { value: "mostValued" }, "Mas Valoradas"),
        createElement("option",{ value: "leastValued" },"las Menos valoradas"),
      ],
    });
  }
}

export default Filters;
