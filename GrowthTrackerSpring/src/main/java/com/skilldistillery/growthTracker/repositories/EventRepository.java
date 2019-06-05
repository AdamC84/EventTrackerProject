package com.skilldistillery.growthTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.growthTracker.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
