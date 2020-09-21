import React from "react";
/* import { v4 } from "uuid"; */
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
/* import Moment from "moment"; */
import { useFirestore } from "react-redux-firebase";

function NewTicketForm(props) {
  // We add the useFirestore() hook to make Firestore available to our component. (Make sure it lives *inside* the NewTicketForm component.)
  const firestore = useFirestore();

  // Note that we updated the name of the function for adding a ticket to addTicketToFirestore. This is a more accurate name for what the function will do now.
  function addTicketToFirestore(event) {
    event.preventDefault();

    // We will still need our onNewTicketCreation() method to toggle between components - but it will no longer take an argument because it no longer handles creating a ticket.
    props.onNewTicketCreation();

    // Here's how we will actually add a ticket to Firestore.

    return firestore.collection("tickets").add({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      timeOpen: firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        // Don't forget to change the name of the function here as well.
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!"
      />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
