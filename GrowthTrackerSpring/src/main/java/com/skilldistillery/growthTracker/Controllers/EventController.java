package com.skilldistillery.growthTracker.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.growthTracker.services.EventService;

@RestController
@RequestMapping("api")
public class EventController {

	@Autowired
	private EventService svc;

	@GetMapping("events")
	public void getAllEvents() {

	}

}
