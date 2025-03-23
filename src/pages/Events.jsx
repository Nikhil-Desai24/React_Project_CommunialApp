







import React, { useState } from "react";

const EventListing = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-30", location: "Community Center", category: "Charity" },
    { title: "Religious Gathering", date: "2025-04-02", location: "St. Mary's Church", category: "Religious" },
    { id: 3, title: "Youth Gathering", date: "2025-06-20", location: "Community Center", description: "An interactive session for young minds to connect.", category: "Social" },

  ]);
  const [filter, setFilter] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", category: "" });
  };

  const filteredEvents = filter
    ? events.filter(event => event.category === filter)
    : events;

  return (
    <div className="container mt-5">
      <h2>Events</h2>
      <div className="mb-3">
        <label>Filter by Category:</label>
        <select className="form-select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
      <ul className="list-group mb-3">
        {filteredEvents.map((event, index) => (
          <li key={index} className="list-group-item">
            <h5>{event.title}</h5>
            <p>{event.date} - {event.location}</p>
            <p>Category: {event.category}</p>
          </li>
        ))}
      </ul>
      <h3>Add New Event</h3>
      <form onSubmit={e => { e.preventDefault(); addEvent(); }}>
        <input
          type="text"
          placeholder="Title"
          className="form-control mb-2"
          value={newEvent.title}
          onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={newEvent.date}
          onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="form-control mb-2"
          value={newEvent.location}
          onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <select
          className="form-select mb-2"
          value={newEvent.category}
          onChange={e => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button type="submit" className="btn btn-success">Add Event</button>
      </form>
    </div>
  );
};

export default EventListing;
