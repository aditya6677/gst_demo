import React, { Component } from 'react';
import axios from 'axios';

export default class Show extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:[]
        }
    }

    async componentDidMount(){
        axios.get('/api/additems')
        .then((res)=>{
            this.setState({
                datas:res.data
            })
        })
    }

    render(){
        return(
            <div>
                {console.log(this.state.datas)}
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>GST %</th>
                        <th>Created At</th>
                        <th>Total Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.datas.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>Rs {item.amount}</td>
                            <td>{item.gst} %</td>
                            <td>{item.tstamp}</td>
                            <td>Rs {item.totalamount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}