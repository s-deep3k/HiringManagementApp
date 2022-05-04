package com.ey.project.model;

import java.util.*;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Candidate")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "c_id", length=4)
	private int id;
	
	@Column(name="c_name", length=45)
	private String name;
	
	@Column(name="c_dob", length = 30)
	@Temporal(TemporalType.DATE)
	private Date dob;
	 
	@Column(name="c_gender")
	private String gender;
	
	@Column(name="c_email", length=30)
	private String email;
	
	@Column(name="c_mobileno")
	private long mobile;
	
	@Column(name="c_yoe", length = 3)
	private double yoe;
	
	@Column(name="c_skills", length = 100)
	private String cskills;
	
	@Column(name="c_role", length = 100)
	private String role;
	
	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}

	@Column(name="notice_period")
	private String nperiod;
	
	@Column(name="exp_ctc")
	private String expctc;
	
	@Column(name="btech_cgpa")
	private String btech;
	
	@Column(name="relocate")
	private String relocate;
	
	@Column(name="status")
	private String status;
	
	@Column(name="feedback", length = 455)
	private String feedback;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Interviewer interviewer;
	
//	@Column(name="Interviewer_id")
//	private String Interviewer;
	
	
	
	public Candidate() {
		super();
	}


	public Candidate(String name, Date dob, String gender, String email, long mobile, double yoe, String cskills,
			String nperiod, String expctc, String btech, String relocate, String status, String feedback, Interviewer interviewer) {
		super();
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.mobile = mobile;
		this.yoe = yoe;
		this.cskills = cskills;
		this.nperiod = nperiod;
		this.expctc = expctc;
		this.btech = btech;
		this.relocate = relocate;
		this.status = status;
		this.feedback = feedback;
		this.interviewer=interviewer;
		
	}






	
	  public Interviewer getInterviewer() { return interviewer; }
	  
	  
	  public void setInterviewer(Interviewer interviewer) { this.interviewer =
	  interviewer; }
	 


	public String getRelocate() {
		return relocate;
	}

	public void setRelocate(String relocate) {
		this.relocate = relocate;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public double getYoe() {
		return yoe;
	}

	public void setYoe(double yoe) {
		this.yoe = yoe;
	}

	public String getCskills() {
		return cskills;
	}

	public void setCskills(String cskills) {
		this.cskills = cskills;
	}

	public String getNperiod() {
		return nperiod;
	}

	public void setNperiod(String nperiod) {
		this.nperiod = nperiod;
	}

	public String getExpctc() {
		return expctc;
	}

	public void setExpctc(String expctc) {
		this.expctc = expctc;
	}

	public String getBtech() {
		return btech;
	}

	public void setBtech(String btech) {
		this.btech = btech;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

}