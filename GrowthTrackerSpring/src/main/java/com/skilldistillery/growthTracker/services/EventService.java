package com.skilldistillery.growthTracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.growthTracker.entities.Event;


public interface EventService {
		List<Event> allEvents();
		Event EventById(int id);
		Event create(Event event);
		Event replace(int id, Event cat);
		Boolean deleteById(int id);
	}

