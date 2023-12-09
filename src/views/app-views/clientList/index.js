import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, Button, Spin, Alert } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import EditProfile from "./EditProfile";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import "antd/dist/antd.css"
import './table.css'


export class ClientList extends Component {
	
	state = {
		clients: [],
		userProfileVisible: false,
		selectedUser: null
	}


	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		},) ;
	}
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    	},) ;
	}	
	
	setClients = (data) => {
		data.map( (elem, index) => {
			data[index].cpy = data[index].company.name;
			data[index].city = data[index].address.city;
		})
		this.setState({
			clients : data
    	}) ;
	}
	componentDidMount(){
		console.log('userProfileVisible', this.userProfileVisible);
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(json => this.setClients(json));
	}	
	render() {
		const { userProfileVisible, selectedUser, clients } = this.state;
		const tableColumns = [
			{
				title: 'Клиент',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{	
				title: 'Место работы',
				dataIndex: 'cpy',
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
			},
			{
				title: 'Место проживания',
				dataIndex: 'city',
				
				sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
			},
			{
				title: 'Номер телефона',
				dataIndex: 'phone',
				render: status => (
					<Tag className ="text-capitalize" color={'cyan'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: 'Email',
				dataIndex: 'email',
				render: status => (
					<Tag className ="text-capitalize" color={'blue'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => this.showUserProfile(elm)} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		if(userProfileVisible) {return (
			<Card bodyStyle={{'padding': '20px'}}>
				<EditProfile client = {selectedUser}/>
				<br></br>
				<Button className="ml-2" onClick={this.closeUserProfile}>Back</Button>
				
			</Card>
		)}
		if(clients.length>0) {return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table  columns={tableColumns} dataSource={clients} rowKey='id' />
			</Card>
		)}else {return (
				<Spin tip="Загрузка данных..." size="large" >
					<Alert
						type="info"
      				/>
				</Spin>
			)}
	}
}

export default ClientList