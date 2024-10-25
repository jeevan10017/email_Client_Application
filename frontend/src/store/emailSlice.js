import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://email-client-application.vercel.app/api/emails';

// Fetch all emails
export const getEmails = createAsyncThunk('emails/getEmails', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Fetch email by ID
export const getEmailById = createAsyncThunk('emails/getEmailById', async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});

// Mark email as read
export const setEmailAsRead = createAsyncThunk('emails/setEmailAsRead', async (id) => {
  const response = await axios.put(`${API_URL}/${id}/read`);
  return response.data;
});

// Toggle bookmark status
export const toggleEmailBookmark = createAsyncThunk('emails/toggleEmailBookmark', async (id) => {
  const response = await axios.put(`${API_URL}/${id}/bookmark`);
  return response.data;
});

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: [],
    emailDetail: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateEmailDetail: (state, action) => {
      state.emailDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmails.fulfilled, (state, action) => {
        state.emails = action.payload;
      })
      .addCase(getEmailById.fulfilled, (state, action) => {
        state.emailDetail = action.payload;
      })
      .addCase(setEmailAsRead.fulfilled, (state, action) => {
        const updatedEmail = action.payload;
        state.emails = state.emails.map((email) =>
          email.id === updatedEmail.id ? updatedEmail : email
        );
      })
      .addCase(toggleEmailBookmark.fulfilled, (state, action) => {
        const updatedEmail = action.payload;
        state.emails = state.emails.map((email) =>
          email.id === updatedEmail.id ? updatedEmail : email
        );
      });
  },
});

export default emailSlice.reducer;
