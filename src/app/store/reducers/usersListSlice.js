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
        columnsSortBy: [
            {
                id: "firstName",
                desc: null,
            },
            {
                id: "maidenName",
                desc: null,
            },
            {
                id: "lastName",
                desc: null,
            },
            {
                id: "age",
                desc: null,
            },
            {
                id: "gender",
                desc: null,
            },
            {
                id: "phone",
                desc: null,
            },
            {
                id: "city",
                desc: null,
            },
            {
                id: "address",
                desc: null,
            },
        ],
    },

    selectors: {
        selectUsersList: (state) => state.usersItems,
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
                    return json.users;
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
        filterUsers: create.asyncThunk(
            async ({ columnSearch, searchQuery }) => {
                const queryURL = `https://dummyjson.com/users/filter?key=${columnSearch}&value=${searchQuery}`;
                try {
                    const response = await fetch(queryURL);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }
                    const json = await response.json();
                    return json.users;
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
        sortUsersColumn: create.reducer((state, action) => {
            state.columnsSortBy.forEach((column) => {
                if (column.id === action.payload) {
                    console.log(action.payload);
                    switch (column.desc) {
                        case null:
                        default:
                    }
                    if (column.desc === false) {
                    }
                }
            });
        }),
        fetchSortedColumn: create.asyncThunk(
            async () => {
                try {
                    const response = await fetch("https://dummyjson.com/users");
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }
                    const json = await response.json();
                    return json.users;
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
    }),
});

export const { fetchUsers, filterUsers, sortUsersColumn } =
    usersListSlice.actions;

export const { selectUsersList } = usersListSlice.selectors;

export default usersListSlice.reducer;
