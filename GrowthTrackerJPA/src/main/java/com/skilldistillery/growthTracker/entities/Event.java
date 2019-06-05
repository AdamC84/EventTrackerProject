package com.skilldistillery.growthTracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String category;
	@Column(name = "first_name")
	private String fName;
	@Column(name = "last_name")
	private String lName;
	private String description;
	private String date;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", category=" + category + ", fName=" + fName + ", lName=" + lName + ", description="
				+ description + ", date=" + date + "]";
	}
	public Event(int id, String category, String fName, String lName, String description, String date) {
		super();
		this.id = id;
		this.category = category;
		this.fName = fName;
		this.lName = lName;
		this.description = description;
		this.date = date;
	}
	public Event() {
		super();
	}
	

}
