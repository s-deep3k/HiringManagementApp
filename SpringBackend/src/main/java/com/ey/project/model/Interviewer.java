package com.ey.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Interviewer")
public class Interviewer {
	@Id
	@Column(name="i_id",length=4)
	public int id;
	
	
	@Column(name="i_name", length=45)
	public String name;
	
	@Column(name="i_role", length=30)
	public String role;
	
	@Column(name="available_from", length=45)
	
	public String avfrom;
	
	@Column(name="available_to", length=45)
	
	public String avto;

	@Column(name="yoe", length=3)
	public int yoe;
	
	@Column(name="status")
	public String sts;
	
	/*
	 * @Column(name="i_skills", length = 30)
	 * 
	 * @ElementCollection(targetClass = String.class)
	 * 
	 * @CollectionTable(name="inter_Skills", joinColumns = @JoinColumn(name="i_id"))
	 * List<String> skills=new ArrayList<String>();
	 */
	@Column(name="skills",length=255)
	public String skills;

	public Interviewer() {
		super();
	}

	

//	public InterviewSchedule getInterviewSchedule() {
//		return interviewSchedule;
//	}
//
//
//
//	public void setInterviewSchedule(InterviewSchedule interviewSchedule) {
//		this.interviewSchedule = interviewSchedule;
//	}
	public Interviewer(int id, String name, String role, String avfrom, String avto, int yoe, String skills, String sts) {
		super();
		this.id = id;
		this.name = name;
		this.role = role;
		this.avfrom = avfrom;
		this.avto = avto;
		this.yoe = yoe;
		this.skills = skills;
		this.sts=sts;
	}
	
	public int getid() {
		return id;
	}

	public void setid(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getrole() {
		return role;
	}

	public void setrole(String role) {
		this.role = role;
	}

	public String getAvfrom() {
		return avfrom;
	}

	public void setAvfrom(String avfrom) {
		this.avfrom = avfrom;
	}

	public String getAvto() {
		return avto;
	}

	public void setAvto(String avto) {
		this.avto = avto;
	}

	public int getYoe() {
		return yoe;
	}

	public void setYoe(int yoe) {
		this.yoe = yoe;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getsts() {
		return sts;
	}

	public void setsts( String sts) {
		this.sts = sts;
	}
	






	
	
}