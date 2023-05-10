import React, { useState } from 'react';

function PhoneBookForm({ addEntryToPhoneBook }) {
  let [formData, setFormData] = useState({
    userFirstname: "",
    userLastname: "",
    userPhone: ""
  });

  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook(formData);
    setFormData({
      userFirstname: "",
      userLastname: "",
      userPhone: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        value={formData.userFirstname}
        type='text'
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        value={formData.userLastname}
        type='text'
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        value={formData.userPhone}
        type='text'
        onChange={handleChange}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  );
}

function InformationTable({ entries }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.userFirstname}</td>
            <td style={style.tableCell}>{entry.userLastname}</td>
            <td style={style.tableCell}>{entry.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [phoneBookEntries, setPhoneBookEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setPhoneBookEntries([...phoneBookEntries, entry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={phoneBookEntries} />
    </section>
  );
}

const style = {
  form: {
    container: {
      // Add your form container styles here
    },
    inputs: {
      // Add your input styles here
    },
    submitBtn: {
      // Add your submit button styles here
    }
  },
  table: {
    // Add your table styles here
  },
  tableCell: {
    // Add your table cell styles here
  }
};

export default Application;
