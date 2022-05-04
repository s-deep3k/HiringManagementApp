package com.ey.project.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.ey.project.model.Candidate;
import com.ey.project.model.Interviewer;
import com.ey.project.dao.*;


@Repository
public class InterviewerDao {
	@Autowired
	SessionFactory sessionFactory;
	
	public  Interviewer addInterviewer(Interviewer i) {
		Session ss=sessionFactory.getCurrentSession();
		ss.persist(i);
		return i;
	}
	
	public List<Interviewer> get1(){
		Session ss=sessionFactory.getCurrentSession();
		String s = "from Interviewer";
		Query<Interviewer> q=ss.createQuery(s);
		List<Interviewer> ls=q.list();
		return ls;
	}
	
	public   Interviewer getById1(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		Interviewer  i=ss.get(Interviewer.class, id);
		return   i;
	}
	
	public Interviewer update(int id,Interviewer i) {
		Session ss=sessionFactory.getCurrentSession();
		Interviewer ii=ss.get(Interviewer.class, id);
		ii.setid(i.getid());
		ii.setName(i.getName());
		ii.setrole(i.getrole());
		ii.setAvfrom(i.getAvfrom());
		ii.setAvto(i.getAvto());
		ii.setYoe(i.getYoe());
		ii.setSkills(i.getSkills());
		ii.setsts(i.getsts());
		return ii;
	}
	
	public Interviewer deleteById1(int id)
	{
		Session ss=sessionFactory.getCurrentSession();
		Interviewer  i=ss.get(Interviewer.class, id);
		ss.delete(i);
		return i;
	}
	
	
	//Assigning Interviewer for Candidate
	public String assignInterviewer(int cid, int iid)
	{
		Session ss=sessionFactory.getCurrentSession();
		Candidate  c=ss.get(Candidate.class, cid);
		Interviewer i= ss.get(Interviewer.class, iid);
		c.setInterviewer(i);
		i.setsts("Y");
		return "Success";
	}
	
	
}
