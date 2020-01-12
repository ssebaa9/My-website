import React, { Component } from 'react';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB38nH9q83z6wRYICMZntL-wRiRu2r4my0",
  authDomain: "sebastian-debicki.firebaseapp.com",
  databaseURL: "https://sebastian-debicki.firebaseio.com",
  projectId: "sebastian-debicki",
  storageBucket: "sebastian-debicki.appspot.com",
  messagingSenderId: "360262243194",
  appId: "1:360262243194:web:df6e9f198e9609d3de7cc3",
  measurementId: "G-ZHH10DRE52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messagesRef = firebase.database().ref('messages')

class Contact extends Component {
  state = {
    email: '',
    title: '',
    message: '',
    alert: '',
    alertStyles: null,
    inputStyles: null
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== '' && this.state.message !== '') {
      this.saveMessage();

      this.setState({ alert: 'Your message has been sent', alertStyles: { backgroundColor: 'green' }, inputStyles: { border: '1px solid black' } });

      setTimeout(() => {
        this.setState({ alert: '' })
      }, 3000);

      this.setState({ email: '', title: '', message: '' })
    } else {
      this.setState({ alert: 'Please, fill the required fields', alertStyles: { backgroundColor: 'red' }, inputStyles: { border: '2px solid red' } })
    }
  }

  saveMessage = () => {
    const newMessagesRef = messagesRef.push()
    newMessagesRef.set({
      email: this.state.email,
      title: this.state.title,
      message: this.state.message
    })
  }

  handleEmailInputChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handleTitleInputChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleMessageInputChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {

    return (
      <div className="contact">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__container">
          <div className="contact__container__info">
            <h2 className="contact__container-subtitle">Info</h2>
            <p className="contact__container__info-paragraph">Sebastian Dębicki</p>
            <p className="contact__container__info-paragraph">Piątkowice 55</p>
            <p className="contact__container__info-paragraph">48-315 Jasienica Dolna</p>
            <p className="contact__container__info-paragraph">sebastian.debicki5@gmail.com</p>
          </div>
          <form className="contact__container__form" onSubmit={this.handleFormSubmit}>
            <h2 className="contact__container-subtitle">Message</h2>
            {this.state.alert && <p style={this.state.alertStyles} className="contact__container__form-alert">{this.state.alert}</p>}
            <input style={this.state.inputStyles} className="contact__container__form-input" type="email" placeholder="Adress Email" onChange={this.handleEmailInputChange} value={this.state.email} />
            <input className="contact__container__form-input" type="text" placeholder="Title" onChange={this.handleTitleInputChange} value={this.state.title} />
            <textarea style={this.state.inputStyles} className="contact__container__form-textarea" placeholder="Message..." onChange={this.handleMessageInputChange} value={this.state.message}></textarea>
            <button className="contact__container__form-btn">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;