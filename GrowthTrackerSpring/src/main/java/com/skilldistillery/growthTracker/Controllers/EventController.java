package com.skilldistillery.growthTracker.Controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.growthTracker.entities.Event;
import com.skilldistillery.growthTracker.services.EventService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4205" })
public class EventController {

	@Autowired
	private EventService svc;

	@GetMapping("events")
	public List<Event> getAllEvents() {
		List<Event> events = svc.allEvents();
		return events;
	}

	@GetMapping("events/{id}")
	public Event show(@PathVariable Integer id) {
		return svc.EventById(id);

	}

	@PostMapping("")
	public Event create(@RequestBody Event event) {

		Event created = svc.create(event);

		return created;
	}

	@PutMapping("event/{id}")
	public Event replaceEvent(@RequestBody Event event, @PathVariable Integer id, HttpServletRequest req,
			HttpServletResponse resp) {
		Event rEvent = svc.replace(id, event);
		if (rEvent == null) {
			resp.setStatus(404);
		}
		return rEvent;

	}

	@DeleteMapping("event/{id}")
	public Boolean deleteEvent(@PathVariable Integer id, HttpServletResponse resp) {
		Boolean result = svc.deleteById(id);
		if (result) {
			return true;
		} else {
			return false;
		}
	}
}
