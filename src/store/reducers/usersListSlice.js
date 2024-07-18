import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const usersListSlice = createSliceWithThunks({
    name: "usersList",
    initialState: {
        status: null,
        error: null,
        usersItems: [],
    },
    selectors: {
        selectUsersList: (state) => state,
    },

    reducers: (create) => ({
        fetchUsers: create.asyncThunk(
            async () => {
                try {
                    const response = await fetch("https://dummyjson.com/users");
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }
                    const json = await response.json();
                    console.log(json);
                } catch (error) {
                    console.error(error.message);
                }
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.usersItems = action.payload;
                },
                rejected: (state) => {
                    state.status = "error";
                    state.error = "error";
                },
            }
        ),
        seasonFilter: create.reducer((state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        }),
    }),
});

export const { fetchUsers } = usersListSlice.actions;

export const { selectUsersList } = usersListSlice.selectors;

export default usersListSlice.reducer;
