import React, { Component } from 'react';
import './app-table.css';
interface IProps {
    projects: any[]
}

interface IState {
    projects: any[]
}

export default class AppTable  extends React.Component {
	constructor(props: IProps) {
		super(props);
		console.log(props);
	}
	render() {
		return <div>render</div>;
	}
}
