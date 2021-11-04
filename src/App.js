import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuid } from 'uuid';
import s from './App.module.scss';
export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    addContact = (name, number) => {
        if (
            this.state.contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts`);
            return;
        }
        const contact = {
            id: uuid(),
            name: name,
            number: number,
        };
        this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] };
        });
    };

    removeContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== id,
                ),
            };
        });
    };

    changeFilter = filter => {
        this.setState({ filter });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        return (
            <div className={s.container}>
                <h1 className={s.mainTitle}>Phonebook</h1>

                <ContactForm onSubmit={this.addContact} />

                <h2 className={s.mainTitle}>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onFilter={this.changeFilter}
                />
                <ContactList
                    onRemoveContact={this.removeContact}
                    contacts={this.getFilteredContacts()}
                />
            </div>
        );
    }
}
