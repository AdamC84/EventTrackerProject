package com.skilldistillery.growthTracker.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import com.skilldistillery.growthTracker.entities.Event;

public class EventTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Event event;

	@BeforeAll
	public static void setUpAll() {
		emf = Persistence.createEntityManagerFactory("GrowthTrackerPU");

	}

	@AfterAll
	public static void closeAll() {
		emf.close();
	}

	@Disabled
	@Test
	void test() {
		fail("Not yet implemented");

	}

	@BeforeEach
	public void setUp() throws Exception {
		em = emf.createEntityManager();
		event = em.find(Event.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		event = null;
	}

	@Test
	void test_post_mapping() {
		assertEquals("Height", event.getCategory());
	}

}
