import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adherents: null,
    jemengage_users: null,
    jemengage_downloads: null,
    jemengage_downloads_ratio: null,
    jemengage_survey: null,
    emailCampaign: null,
    emailCampaignReports: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        updateAdherents(state, action) {
            state.adherents = action.payload;
        },
        updateUsers(state, action) {
            state.jemengage_users = action.payload;
        },
        updateDownloads(state, action) {
            state.jemengage_downloads = action.payload;
        },
        updateDownloadsRatio(state, action) {
            state.jemengage_downloads_ratio = action.payload;
        },
        updateSurvey(state, action) {
            state.jemengage_survey = action.payload;
        },
        updateEmailCampaign(state, action) {
            state.emailCampaign = action.payload;
        },
        updateEmailCampaignReports(state, action) {
            state.emailCampaignReports = action.payload;
        },
    },
});

export const {
    updateAdherents,
    updateUsers,
    updateDownloads,
    updateDownloadsRatio,
    updateSurvey,
    updateEmailCampaign,
    updateEmailCampaignReports,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
