import React from 'react'
import { Card, Tabs, Tag, Tooltip, Button, Spin, Alert } from 'antd';
import "antd/dist/antd.css"
import "./planer.css"
import chair from "./chair.svg"
import sofa from "./sofa.svg"
import table from "./table.svg"
import horizontalwall from "./horizontalwall.svg"
import verticalwall from "./verticalwall.svg"

const Planing = () => {
	const elems = [chair, sofa, table, verticalwall, horizontalwall];
	const [positionXY, setPosition] = React.useState({X:0,Y:0});
	const [pickedElem, setPickedElem] = React.useState({'name':'',X:0,Y:0});
	const [toPanel, setToPanel] = React.useState([]);
	const onXChange = (event) =>{
		setPosition({...positionXY, X:event.target.value})
		setPickedElem({...pickedElem,X:event.target.value*10});
	}
	const onYChange = (event) =>{
		setPosition({...positionXY,Y:event.target.value})
		setPickedElem({...pickedElem,Y:event.target.value*10});
	}
	const handlePick = (el) =>{
		setPickedElem({...pickedElem,'name':el});
	}
	const addToPanel = () =>{
		setToPanel([...toPanel, {pickedElem, id:pickedElem['Y'].toString()+pickedElem['X'].toString()}]);
	}
	const deleteFromPanel = () =>{
		setToPanel(toPanel.filter(x => x['id'] !== pickedElem.name['id']));
	}
	console.log(toPanel);
	return (
		<div>
			<Card style = {{'padding': '20px', 'width':'70vw', 'margin-left':'10%', }} type="inner" title="Планировщик помещения">
			<div className='wrapper'>
				<div className='furnitureContainer'>
					{elems.map( el => <div key={el} onClick={()=>handlePick(el)} className={ el === pickedElem.name ? 'elem picked' : 'elem'}>
						<img src={el}></img>
					</div>
					)}
				</div>
				<form>
					<label>	X:
						<input type='number'className='forStyle' value={positionXY['X']} onChange={onXChange} />
					</label>
				</form>
				<form>
					<label>	Y:
						<input type='number'className='forStyle' value={positionXY['Y']} onChange={onYChange} />
					</label>
				</form>
				<Button className='btn add' onClick={addToPanel}>Добавить</Button>
				<Button className='btn delete' onClick={deleteFromPanel}>Удалить</Button>
			</div>
				<div className='customizeContainer'>
					{toPanel.map( el => <div key={el} onClick={()=>handlePick(el)} style={{'position': 'absolute', 'top':`${el?.pickedElem['Y']}px`, 'left':`${el?.pickedElem['X']}px`, }} className='elem'>
						<img src={el?.pickedElem?.name}></img>
					</div>
					)}
				</div>
    		</Card>
		</div>
	)
}

export default Planing