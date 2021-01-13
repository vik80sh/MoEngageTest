import { React } from 'react';
import './table.css'
const DisplayData = ({ tableData }) => {
    return (<div className="table-wrapper">
        <div className="table-header">
            <h3>Name</h3>
            <h3>Type</h3>
            <h3>Company</h3>
        </div>
        <div className="table-body">
            {tableData.length>0 ? tableData.map((item, key) => {
                return <div className="item-row" key={key}>
                    <div>{item.name}</div>
                    <div>{item.type}</div>
                    <div>{item.company}</div>
                </div>
            }
            ):<div>No Record Found</div>}
        </div>
    </div>)
}

export default DisplayData;
