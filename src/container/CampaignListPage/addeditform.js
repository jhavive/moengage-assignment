import React from 'react';
import { CAMPAIGN_TYPE } from '../../constants/CampaignType';

export default class AddEditForm extends React.Component{

    state = {
        name: "",
        type: "",
        start: false
    }

    formChange = (event) => {
        console.log(event.target.name+" "+event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render = () => (
        <form>
            <h3>Campaign Name</h3>
            <input name="name" value={this.state.name} placeholder="Name" onChange={(event) => this.formChange(event)}/><br/>
            <h3>Campaign Type</h3>
            <select name="type" onChange={(event) => this.formChange(event)}>
                {
                    Object.keys(CAMPAIGN_TYPE).map((index) => {
                        return <option key={index} value={CAMPAIGN_TYPE[index]}>{index}</option>
                    })
                }
            </select><br/>
            <input type="radio" name="start" value="true" onChange={(event) => this.formChange(event)}/> Male<br/>
            <input type="radio" name="start" value="false" onChange={(event) => this.formChange(event)}/> Female<br/>
            <button onClick={() => this.props.submit(this.state)}>Submit</button>
        </form>
    )

}