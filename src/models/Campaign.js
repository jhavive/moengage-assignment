import { CAMPAIGN_STATE } from '../constants/CampaignStates';

export default class Campaign {
    
    constructor(name, type, state=CAMPAIGN_STATE.CREATED) {
        this.name = name;
        this.createDate = new Date();
        this.type = type;
        this.state = state;
        this.actionHistory = [{
            title: 'Created',
            date: new Date(),
        }];
    }

}