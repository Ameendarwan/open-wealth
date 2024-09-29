import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  name: string
  role: 'user' | 'admin'
  initials?: string
}

const initialState: UserState = {
  name: 'Ameen Darwan',
  role: 'admin',
  initials: 'AD',
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default UserSlice.reducer
