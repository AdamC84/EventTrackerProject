package com.skilldistillery.growthTracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.growthTracker.entities.Event;
import com.skilldistillery.growthTracker.repositories.EventRepository;

public class EventSevrviceImpl implements EventService {
	
	@Autowired
	EventRepository repo;
	

	@Override
	public List<Event> allEvents() {
		List<Event> events = repo.findAll();
		return null;
	}

	@Override
	public Event EventById(int id) {
		Optional<Event> event = repo.findById(id);
		if (event.isPresent()) {
			Event e1 = event.get();
			return e1;
		}
		return null;
	}

	@Override
	public Event create(Event event) {
		Event createdEvent = repo.saveAndFlush(event);
		return createdEvent;
	}

	@Override
	public Event replace(int id, Event event) {
		event.setId(id);
		repo.saveAndFlush(event);
		return null;
	}

	@Override
	public Boolean deleteById(int id) {
		Event e1 = null;
		Optional<Event> event = repo.findById(id);
		if(event.isPresent()) {
			e1 = event.get();
			repo.deleteById(e1.getId());
		}
		if(e1 == null) {
			return true;
		}
		return false;
	}

}























