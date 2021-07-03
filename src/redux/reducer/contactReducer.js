const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
  ];

export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {

      case "ADD_CONTACT":
        state = [...state, payload];
        return state;

      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === payload ? null : contact
        );
        state = contactFilter;
        return state;
        
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === payload.id
            ? Object.assign(contact, payload)
            : contact
        );
        state = contactUpdate;
        return state;

      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
