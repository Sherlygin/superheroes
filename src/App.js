import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHero, removeHero } from './actions/myHeros.actions';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			universe: 'dc',
			search: '',
		};
	}

	setUniverce = (universe) => {
		this.setState({ universe: universe, search: '' });
	};

	changeSearch = (e) => {
		console.log(e.target.value);
		this.setState({
			search: e.target.value.toLowerCase(),
		});
	};

	render() {
		const { heros, myHeros, addHero, removeHero } = this.props;
		return (
				<div className="App">
					<div className={'list-my-heros'}>
						{Array.from(myHeros.values()).map(el => {
							return (
									<div className={'card-wrap'} key={el.name}>
									
										<img className={'card'} alt={el.name} src={el.image}/>
										<span> {el.name} </span>
										{ el.cnt > 1 ?	<span > {el.cnt}</span>: undefined}

										<input type='button' class='delete' onClick={()=>{
											removeHero(el)
										}}/>	

									</div>

							);

						})}
					</div>

					<div className={'search'}>
					<form>
						<input type="text" onChange={this.changeSearch} value={this.state.search} placeholder={'Имя героя'}/>
						{/* <button type="submit"></button> */}
					</form>
					</div>

					<div className={'list-heros'}>
					
						{heros[this.state.universe].filter(el => el.name.toLowerCase().includes(this.state.search)).map(el => {
							return (
									<div className={'card-wrap'} key={el.name} onClick={() => {
										addHero(el);
									}}>
										<img className={'card'} alt={el.name} src={el.image}/>
										<span> {el.name}</span>
									</div>
							);
						})}
					</div>

					<div className={'universe'}>
		
						<input type='button' class='dc' onClick={() => {
							this.setUniverce('dc');
						}}/> 
						
						<input type='button' class='marvel' onClick={() => {
							this.setUniverce('marvel');
						}}/> 
						
					</div>

				</div>
		);
	}
}

export default connect(
		(state) => {
			return {
				'heros': state.heros,
				'myHeros': state.myHeros,
			};
		},
		(dispatch) => {
			return {
				addHero: (hero) => {
					dispatch(addHero(hero));
				},
				removeHero: (hero) => {
					dispatch(removeHero(hero));
				},
			};
		},
)(App);
