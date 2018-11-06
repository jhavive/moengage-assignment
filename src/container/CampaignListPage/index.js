import React from 'react';
import { DialogBox } from '../../components/DialogBox';
import Campaign from '../../models/Campaign';
import { CAMPAIGN_TYPE } from '../../constants/CampaignType';
import AddEditForm from './addeditform';
import { CAMPAIGN_STATE } from '../../constants/CampaignStates';
import styled from 'styled-components';


export default class CampaignListPage extends React.Component {

    state = {
        campaignList: [],
        selectedCampaign: {},
        displayingCampaigns: [],
        pageNumber: 0,
        showDialogue: false
    }

    openDialog = () => {
        this.setState({
            showDialogue: true
        })
    }

    closeDialog = () =>{
        this.setState({
            showDialogue: false
        })
    } 

    submit = (form) => {
        let tempCampaignList = this.state.campaignList;
        let newCampaign = null;

        if(form.start)
            newCampaign = new Campaign(form.name, form.type, form.start);
        else
            newCampaign = new Campaign(form.name, form.type, CAMPAIGN_STATE.RUNNING);

        tempCampaignList.push(newCampaign)
        this.setState({
            campaignList: tempCampaignList,
            displayingCampaigns: tempCampaignList,
            showDialogue: false
        },() => {
            console.log(this.state)
        })
    }

    render = () => {
        return(
            <div>
                { 
                    this.state.showDialogue && <DialogBox
                        closeDialog={this.closeDialog}
                        >
                        <p></p>
                        <AddEditForm
                            submit={this.submit}
                            />
                    </DialogBox>
                }
                <h1 style={{color:"black","&:hover":{color:"red"}}}>Campaigns<button onClick={() => this.openDialog()}>Create Campaign</button></h1>
                <ul>
                    {
                       this.state.campaignList.map(campaign => {
                            return (
                                <h3 key={campaign} >{campaign.name}</h3>
                            )
                       })
                    }
                </ul>
            </div>
            
        )
    }

}