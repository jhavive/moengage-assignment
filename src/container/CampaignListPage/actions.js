import { Campaign } from '../../models/Campaign';
import { CampaignActions } from '../../constants/CampaignActions';

export const addCampaign = (form) => {
    let newCampaign = new Campaign();

}

export const editCampaign = (campaign, action) =>{
    switch(action){
        case CampaignActions.COMMENT:
            break;
        case CampaignActions.PAUSE:
            // campaign. 
    }
}

export const renameCampaign = () => {

}

export const deleteCampaign = () => {

}