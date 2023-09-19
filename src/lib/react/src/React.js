class Component {
	constructor(props = {}, state= {}){
		this.props = props
		this.state = state
	}
	update(){}
	#updateder(){
		this.update(this.render())
		this.componentDidUpdate()
	}
//se llama antes que se renderice el componente
	componentWillMount(){
	
	}
	componentDidMount(){
	
	}
	componentDidUpdate(){
	
	}
	setState(newState){
		this.state ={
			...this.state,
			...newState
		}
		this.#updateder()
	}
	build(){
		this.componentWillMount()
		return this.render()
	}
}


export {
	Component
}