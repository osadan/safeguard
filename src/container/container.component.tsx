import React, { Component } from 'react';
import './container.css';
import AppTable from '../app-table/app-table.component';
export default class ContainerComponent extends Component {
    public projects: any = [];
    public statuses = [
        'New',
        'Approved',
        'Rejected',
        'Completed' 

    ]
    constructor(props: any) {
        super(props);
        this.state = { projects: []}
    }
    
    componentDidMount(){
        this.setState({projects: []});
        this.projects = [];
        const x: any = document.querySelector('.container button');
        x['click']();
        
    }

    
    fetchProjects(){
        fetch('https://frontdoormobileqa.clipcall.it/api/v1/web/test')
        .then((response) => {
            return response.json();
          })
          .then((data: any) => {
            this.setState( {projects: data});
            this.projects = data;
            console.log(data);
          });
    } 
	render() {
		return (
			<div className='container'>
				<header>
					<h1>AllProjects</h1>
					<div className="load-projects">
						<button  onClick={this.fetchProjects.bind(this)}>get Projects</button>
					</div>
				</header>
                <section>
                    <div className="table">
                        <table>
                            <thead>
                            <tr className='tableHeader'>
                                <th>Date</th>
                                <th>Property <br/> Address</th>
                                <th>Properties <br/> Owner Name</th>
                                <th>Tenants <br/> Name</th>
                                <th>Project <br /> Category</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                        <tbody>
                            { this.projects.map((item: any, i: any) => 
                               <tr key={i}> 
                                <td>{item.date}</td> 
                                <td>{item.propertyAddress}</td>
                                <td>{item.ownerName}</td>
                                <td>{item.tenantName}</td>
                                <td>{item.projectCategory}</td>
                                <td className='status'>
                                    <div className={this.statuses[item.status]}>{this.statuses[item.status]}</div>
                                </td>
                                </tr>   
                            )}
                        </tbody>
                        </table>
                    </div>
                </section>
			</div>
		);
	}
}
